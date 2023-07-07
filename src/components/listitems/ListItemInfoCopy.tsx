import React, { useCallback } from "react";
import {
    GestureResponderEvent,
    Pressable,
    View
} from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import {
    IOColors,
    IOListItemStyles,
    IOListItemVisualParams,
    IOScaleValues,
    IOSpringValues,
    IOStyles,
    hexToRgba, useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { IOIcons, Icon } from "../icons";
import { VSpacer } from "../spacer/Spacer";
import { H6, LabelSmall } from "../typography";

export type ListItemInfoCopy = WithTestID<{
    label: string;
    value: string | React.ReactNode;
    numberOfLines?: number;
    onPress: (event: GestureResponderEvent) => void;
    icon?: IOIcons;
    // Accessibility
    accessibilityLabel: string;
}>;

export const ListItemInfoCopy = ({
    label,
    value,
    numberOfLines = 2,
    onPress,
    icon,
    accessibilityLabel,
    testID
}: ListItemInfoCopy) => {
    const isPressed = useSharedValue(0);

    const theme = useIOTheme();

    const mapBackgroundStates: Record<string, string> = {
        default: hexToRgba(IOColors[theme["listItem-pressed"]], 0),
        pressed: IOColors[theme["listItem-pressed"]]
    };

    // Scaling transformation applied when the button is pressed
    const animationScaleValue = IOScaleValues?.basicButton?.pressedState;

    const progressPressed = useDerivedValue(() =>
        withSpring(isPressed.value, IOSpringValues.button)
    );

    // Interpolate animation values from `isPressed` values
    const animatedScaleStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            progressPressed.value,
            [0, 1],
            [1, animationScaleValue],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ scale }]
        };
    });

    const animatedBackgroundStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            progressPressed.value,
            [0, 1],
            [mapBackgroundStates.default, mapBackgroundStates.pressed]
        );

        return {
            backgroundColor
        };
    });

    const handlePressIn = useCallback(() => {
        // eslint-disable-next-line functional/immutable-data
        isPressed.value = 1;
    }, [isPressed]);
    const handlePressOut = useCallback(() => {
        // eslint-disable-next-line functional/immutable-data
        isPressed.value = 0;
    }, [isPressed]);

    return (
        <Pressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            accessible={true}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="button"
            testID={testID}
        >
            <Animated.View
                style={[IOListItemStyles.listItem, animatedBackgroundStyle]}
            >
                <Animated.View
                    style={[IOListItemStyles.listItemInner, animatedScaleStyle]}
                >
                    {icon && (
                        <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
                            <Icon
                                name={icon}
                                color="grey-450"
                                size={IOListItemVisualParams.iconSize}
                            />
                        </View>
                    )}
                    <View style={IOStyles.flex}>
                        <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
                            {label}
                        </LabelSmall>
                        <VSpacer size={4} />
                        {/* Let developer using a custom component (e.g: skeleton) */}
                        {typeof value === "string" ? (
                            <H6
                                color={theme["interactiveElem-default"]}
                                numberOfLines={numberOfLines}
                            >
                                {value}
                            </H6>
                        ) : (
                            { value }
                        )}
                    </View>
                    <View style={{ marginLeft: IOListItemVisualParams.iconMargin }}>
                        <Icon
                            name="copy"
                            color={theme["interactiveElem-default"]}
                            size={IOListItemVisualParams.chevronSize}
                        />
                    </View>
                </Animated.View>
            </Animated.View>
        </Pressable>
    );
};

export default ListItemInfoCopy;
