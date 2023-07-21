import React, { useCallback } from "react";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    interpolateColor,
    useAnimatedProps,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import {
    IOButtonStyles,
    IOColors,
    IOScaleValues,
    IOSpringValues
} from "../../core";
import { makeFontStyleObject } from "../../utils/fonts";
import { WithTestID } from "../../utils/types";
import { AnimatedIcon, IOIcons, IconClassComponent } from "../icons/Icon";
import { HSpacer } from "../spacer/Spacer";

type ColorButtonLink = "primary" | "error" | "warning" | "success" | "info";
export type ButtonLink = WithTestID<{
  color?: ColorButtonLink;
  label: string;
  disabled?: boolean;
  // Icons
  icon?: IOIcons;
  iconPosition?: "start" | "end";
  // Accessibility
  accessibilityLabel?: string;
  accessibilityHint?: string;
  // Events
  onPress: (event: GestureResponderEvent) => void;
}>;

type ColorStates = {
  label: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

const mapColorStates: Record<NonNullable<ButtonLink["color"]>, ColorStates> = {
  // Primary button
  primary: {
    label: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: IOColors["grey-700"]
    }
  },
  error: {
    label: {
      default: IOColors["error-850"],
      pressed: IOColors["error-850"],
      disabled: IOColors["grey-700"]
    }
  },
  warning: {
    label: {
      default: IOColors["warning-850"],
      pressed: IOColors["warning-850"],
      disabled: IOColors["grey-700"]
    }
  },
  success: {
    label: {
      default: IOColors["success-850"],
      pressed: IOColors["success-850"],
      disabled: IOColors["grey-700"]
    }
  },
  info: {
    label: {
      default: IOColors["info-850"],
      pressed: IOColors["info-850"],
      disabled: IOColors["grey-700"]
    }
  }
};

const DISABLED_OPACITY = 0.5;
const IOButtonStylesLocal = StyleSheet.create({
  label: {
    fontSize: 16,
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  }
});

export const ButtonLink = React.memo(
  ({
    color = "primary",
    label,
    disabled = false,
    icon,
    iconPosition = "start",
    onPress,
    accessibilityLabel,
    accessibilityHint,
    testID
  }: ButtonLink) => {
    const isPressed = useSharedValue(0);

    // Scaling transformation applied when the button is pressed
    const animationScaleValue = IOScaleValues?.basicButton?.pressedState;

    // Using a spring-based animation for our interpolations
    const progressPressed = useDerivedValue(() =>
      withSpring(isPressed.value, IOSpringValues.button)
    );

    // Interpolate animation values from `isPressed` values
    const pressedAnimationStyle = useAnimatedStyle(() => {
      // Link color states to the pressed states

      // Scale down button slightly when pressed
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

    const pressedColorLabelAnimationStyle = useAnimatedStyle(() => {
      // Link color states to the pressed states
      const labelColor = interpolateColor(
        progressPressed.value,
        [0, 1],
        [
          mapColorStates[color].label.default,
          mapColorStates[color].label.pressed
        ]
      );

      return {
        color: labelColor
      };
    });

    // Animate the <Icon> color prop
    const pressedColorIconAnimationStyle = useAnimatedProps(() => {
      const iconColor = interpolateColor(
        progressPressed.value,
        [0, 1],
        [
          mapColorStates[color].label.default,
          mapColorStates[color].label.pressed
        ]
      );

      return { color: iconColor };
    });

    const AnimatedIconClassComponent =
      Animated.createAnimatedComponent(IconClassComponent);

    const onPressIn = useCallback(() => {
      // eslint-disable-next-line functional/immutable-data
      isPressed.value = 1;
    }, [isPressed]);
    const onPressOut = useCallback(() => {
      // eslint-disable-next-line functional/immutable-data
      isPressed.value = 0;
    }, [isPressed]);

    // Icon size
    const iconSize = 24;

    return (
      <Pressable
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityRole={"button"}
        testID={testID}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        accessible={true}
        disabled={disabled}
        hitSlop={{ top: 14, right: 24, bottom: 14, left: 24 }}
        style={IOButtonStyles.dimensionsDefault}
      >
        <Animated.View
          style={[
            IOButtonStyles.buttonLink,
            iconPosition === "end" && { flexDirection: "row-reverse" },
            disabled ? { opacity: DISABLED_OPACITY } : {},
            /* Prevent Reanimated from overriding background colors
                    if button is disabled */
            !disabled && pressedAnimationStyle
          ]}
        >
          {icon && (
            <>
              {!disabled ? (
                <AnimatedIconClassComponent
                  name={icon}
                  animatedProps={pressedColorIconAnimationStyle}
                  color={mapColorStates[color]?.label?.default}
                  size={iconSize}
                />
              ) : (
                <AnimatedIcon
                  name={icon}
                  color={mapColorStates[color]?.label?.disabled}
                  size={iconSize}
                />
              )}
              <HSpacer size={8} />
            </>
          )}
          <Animated.Text
            style={[
              IOButtonStylesLocal.label,
              disabled
                ? { color: mapColorStates[color]?.label?.disabled }
                : { color: mapColorStates[color]?.label?.default },
              !disabled && pressedColorLabelAnimationStyle
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
            /* A11y-related props:
                DON'T UNCOMMENT THEM */
            /* allowFontScaling
                maxFontSizeMultiplier={1.3} */
          >
            {label}
          </Animated.Text>
        </Animated.View>
      </Pressable>
    );
  }
);

export default ButtonLink;
