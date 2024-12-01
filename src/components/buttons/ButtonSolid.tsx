import React, { ComponentProps, useCallback, useEffect, useRef } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View
} from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import {
  IOButtonStyles,
  IOColors,
  IOScaleValues,
  IOSpringValues,
  enterTransitionInnerContent,
  enterTransitionInnerContentSmall,
  exitTransitionInnerContent
} from "../../core";
import { WithTestID } from "../../utils/types";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { LoadingSpinner } from "../loadingSpinner";
import { HSpacer } from "../spacer/Spacer";
import { ButtonText } from "../typography/ButtonText";

export type ButtonSolidColor = "primary" | "danger" | "contrast";

type ColorStates = {
  default: string;
  pressed: string;
  label: {
    default: IOColors;
    disabled: IOColors;
  };
};

const colorPrimaryButtonDisabled: IOColors = "grey-200";
const DISABLED_OPACITY = 0.5;

// Icon size
const iconSize: IOIconSizeScale = 20;

const styles = StyleSheet.create({
  backgroundDisabled: {
    backgroundColor: IOColors[colorPrimaryButtonDisabled],
    opacity: DISABLED_OPACITY
  }
});

export type ButtonSolidProps = WithTestID<
  {
    /**
     * @default primary
     */
    color?: ButtonSolidColor;
    label: string;
    /**
     * @default false
     */
    fullWidth?: boolean;
    /**
     * @default false
     */
    loading?: boolean;
    icon?: IOIcons;
    /**
     * @default start
     */
    iconPosition?: "start" | "end";
    onPress: (event: GestureResponderEvent) => void;
  } & Pick<
    ComponentProps<typeof Pressable>,
    "disabled" | "accessibilityLabel" | "accessibilityHint"
  >
>;

const mapColorStates: Record<
  NonNullable<ButtonSolidProps["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    default: IOColors["blueIO-500"],
    pressed: IOColors["blueIO-600"],
    label: {
      default: "white",
      disabled: "grey-700"
    }
  },
  // Danger button
  danger: {
    default: IOColors["error-600"],
    pressed: IOColors["error-500"],
    label: {
      default: "white",
      disabled: "grey-700"
    }
  },
  // Contrast button
  contrast: {
    default: IOColors.white,
    pressed: IOColors["blueIO-50"],
    label: {
      default: "blueIO-500",
      disabled: "grey-700"
    }
  }
};

export const ButtonSolid = React.forwardRef<View, ButtonSolidProps>(
  (
    {
      color = "primary",
      label,
      fullWidth = false,
      disabled = false,
      loading = false,
      icon,
      iconPosition = "start",
      onPress,
      accessibilityLabel,
      accessibilityHint,
      testID
    },
    ref
  ) => {
    const isPressed = useSharedValue(0);
    // Scaling transformation applied when the button is pressed
    const animationScaleValue = IOScaleValues?.basicButton?.pressedState;

    /* Prevent the component from triggering the `isEntering' transition
       on the on the first render. Solution from this discussion:
       https://github.com/software-mansion/react-native-reanimated/discussions/2513
    */
    const isMounted = useRef(false);

    useEffect(() => {
      // eslint-disable-next-line functional/immutable-data
      isMounted.current = true;
    }, []);

    // Using a spring-based animation for our interpolations
    const progressPressed = useDerivedValue(() =>
      withSpring(isPressed.value, IOSpringValues.button)
    );

    // Interpolate animation values from `isPressed` values
    const pressedAnimationStyle = useAnimatedStyle(() => {
      // Link color states to the pressed states
      const backgroundColor = interpolateColor(
        progressPressed.value,
        [0, 1],
        [mapColorStates[color].default, mapColorStates[color].pressed]
      );

      // Scale down button slightly when pressed
      const scale = interpolate(
        progressPressed.value,
        [0, 1],
        [1, animationScaleValue],
        Extrapolation.CLAMP
      );

      return {
        backgroundColor,
        transform: [{ scale }]
      };
    });

    const onPressIn = useCallback(() => {
      // eslint-disable-next-line functional/immutable-data
      isPressed.value = 1;
    }, [isPressed]);
    const onPressOut = useCallback(() => {
      // eslint-disable-next-line functional/immutable-data
      isPressed.value = 0;
    }, [isPressed]);

    const handleOnPress = useCallback(
      (event: GestureResponderEvent) => {
        /* Don't call `onPress` if the button is
        in loading state */
        if (loading) {
          return;
        }
        ReactNativeHapticFeedback.trigger("impactLight");
        onPress(event);
      },
      [loading, onPress]
    );

    // Label & Icons colors
    const foregroundColor: IOColors = disabled
      ? mapColorStates[color]?.label?.disabled
      : mapColorStates[color]?.label?.default;

    return (
      <Pressable
        testID={testID}
        ref={ref}
        accessible={true}
        // Using || operator because empty string is not an accepted value
        accessibilityLabel={accessibilityLabel || label}
        accessibilityHint={accessibilityHint}
        accessibilityState={{
          busy: loading,
          disabled: disabled || false
        }}
        accessibilityRole={"button"}
        onPress={handleOnPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
        style={!fullWidth ? IOButtonStyles.dimensionsDefault : {}}
      >
        <Animated.View
          style={[
            IOButtonStyles.button,
            IOButtonStyles.buttonSizeDefault,
            { overflow: "hidden" },
            fullWidth && { paddingHorizontal: 16 },
            disabled
              ? styles.backgroundDisabled
              : { backgroundColor: mapColorStates[color]?.default },
            /* Prevent Reanimated from overriding background colors
              if button is disabled */
            !disabled && pressedAnimationStyle
          ]}
        >
          {loading && (
            <Animated.View
              style={IOButtonStyles.buttonInner}
              entering={
                isMounted.current ? enterTransitionInnerContentSmall : undefined
              }
              exiting={exitTransitionInnerContent}
            >
              <LoadingSpinner color={foregroundColor} />
            </Animated.View>
          )}

          {!loading && (
            <Animated.View
              style={[
                IOButtonStyles.buttonInner,
                iconPosition === "end" && { flexDirection: "row-reverse" }
              ]}
              entering={
                isMounted.current ? enterTransitionInnerContent : undefined
              }
              /* Temporarily disable the exiting transition because it caused
              a weird glitch on page exit */
              // exiting={exitTransitionInnerContent}
            >
              {icon && (
                <>
                  {/* If 'iconPosition' is set to 'end', we use 
            reverse flex property to invert the position */}
                  <Icon name={icon} size={iconSize} color={foregroundColor} />
                  {/* Once we have support for 'gap' property,
            we can get rid of that spacer */}
                  <HSpacer size={8} />
                </>
              )}
              <ButtonText
                color={foregroundColor}
                style={IOButtonStyles.label}
                numberOfLines={1}
                ellipsizeMode="tail"
                accessible={false}
                accessibilityElementsHidden
                importantForAccessibility="no-hide-descendants"
              >
                {label}
              </ButtonText>
            </Animated.View>
          )}
        </Animated.View>
      </Pressable>
    );
  }
);

export default ButtonSolid;
