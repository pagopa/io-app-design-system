import * as T from "fp-ts/lib/Task";
import * as TE from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/function";
import * as React from "react";
import { useEffect, useState } from "react";
import { AccessibilityInfo, Button, Platform } from "react-native";
import {
    State,
    TapGestureHandler,
    TapGestureHandlerStateChangeEvent
} from "react-native-gesture-handler";

const defaultActiveOpacity = 1.0;
// const btnSmallHeight = 39;
// const btnXSmallHeight = 32;
// const btnHeight = 40;
const minTouchableAreaSize = 48;

type CustomProps = {
    hasFullHitSlop?: boolean;
    onPressWithGestureHandler?: true;
    small?: string;
    xsmall?: string;
    accessible?: boolean;
    activeOpacity?: true;
    onPress?: () => void;
    disabled?: boolean;
    testID?: string;
    children?: React.ReactNode;
    style?: {
        alignContent: "center";
        flex: number;
    };
};
type Props = Button & React.ClassAttributes<Button> & CustomProps;

export const isIos = Platform.OS === "ios";

/**
 * Calculate the slop in order to have the minimum touchable area necessary for accessibility requirements
 * @param height
 */
export const calculateSlop = (height: number): number => {
    const additionalArea = minTouchableAreaSize - height;
    if (additionalArea <= 0) {
        return 0;
    }
    return Math.ceil(additionalArea / 2);
};

// const slopsBySize: Record<"small" | "xsmall" | "default", number> = {
//     small: calculateSlop(btnSmallHeight),
//     xsmall: calculateSlop(btnXSmallHeight),
//     default: calculateSlop(btnHeight)
// };

/**
 * This is a temporary solution to extend the touchable area using the existing theme system.
 * @param props
 */
// const getSlopForCurrentButton = (props: Props): Insets => {
//     const slop =
//         slopsBySize[props.small ? "small" : props.xsmall ? "xsmall" : "default"];

//     // We've applied a vertical-only hitSlop so far, we don't want to break any existing button
//     const result = {
//         top: slop,
//         bottom: slop
//     };

//     // The hasFullHitSlop prop should eventually be deprecated, after testing each button
//     return props.hasFullHitSlop
//         ? {
//             ...result,
//             right: slop,
//             left: slop
//         }
//         : result;
// };

// return the state of the screen reader when the caller component is mounted
export const useScreenReaderEnabled = () => {
    const [screenReaderEnabled, setIscreenReaderEnabled] = useState(false);

    useEffect(() => {
        isScreenReaderEnabled()
            .then(setIscreenReaderEnabled)
            .catch(_ => setIscreenReaderEnabled(false));
    }, []);
    return screenReaderEnabled;
};

/**
* return a Promise where true means there is a screen reader active (VoiceOver / TalkBack)
*/
export const isScreenReaderEnabled = async (): Promise<boolean> =>
    await pipe(
        TE.tryCatch(
            () => AccessibilityInfo.isScreenReaderEnabled(),
            errorMsg => new Error(String(errorMsg))
        ),
        TE.getOrElse(() => T.of(false))
    )();

/**
 * return Button component where the activeOpacity is 1.0 by default
 * instead of 0.2 https://github.com/facebook/react-native/blob/3042407f43b69994abc00350681f1f0a79683bfd/Libraries/Components/Touchable/TouchableOpacity.js#L149
 *
 * In certain cases on Android devices, the native-base button doesn't dispatch the onPress event
 * Because of this, on Android, we wrap the button in a TapGestureHandler and the onPress is handled manually
 * (this surely happen when a button is used inside a BottomSheet)
 */
const ButtonDefaultOpacity = (props: Props) => {
    // const hitSlop = getSlopForCurrentButton(props);
    const isScreenReaderEnabled = useScreenReaderEnabled();

    // use the alternative handling only if is request by props AND is android
    // if the screenReader is active render common button or the button would not be pressable
    const tapGestureRequired =
        props.onPressWithGestureHandler && !isIos && !isScreenReaderEnabled;
    // const buttonIsAccessible = props.accessible;

    const button = (
        <Button
            {...{
                ...props,
                activeOpacity: props.activeOpacity || defaultActiveOpacity
            }}
            title=""
            onPress={tapGestureRequired ? undefined : props.onPress}
            // accessible={buttonIsAccessible === undefined ? true : buttonIsAccessible} // allows with TalkBack the feedback request to touch for button activation
            // accessibilityRole={"button"}
            accessibilityState={{ disabled: props.disabled }}
            // hitSlop={hitSlop}
            testID={props.testID}

        >
            {props.children}
        </Button>
    );

    return tapGestureRequired ? (
        <TapGestureHandler
            onHandlerStateChange={(event: TapGestureHandlerStateChangeEvent) => {
                // call on press when touch ends
                if (props.onPress && event.nativeEvent.state === State.END) {
                    props.onPress();
                }
            }}
        >
            {button}
        </TapGestureHandler>
    ) : (
        button
    );
};

export default ButtonDefaultOpacity;
