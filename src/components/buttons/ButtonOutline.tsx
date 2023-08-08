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
  IOSpringValues,
  hexToRgba
} from "../../core/";
import { makeFontStyleObject } from "../../utils/fonts";
import { WithTestID } from "../../utils/types";
import { AnimatedIcon, IOIcons, IconClassComponent } from "../icons";
import { HSpacer } from "../spacer/Spacer";

type ColorButtonOutline = "primary" | "neutral" | "contrast" | "danger";
export type ButtonOutline = WithTestID<{
  color?: ColorButtonOutline;
  label: string;
  small?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  // Icons
  icon?: IOIcons;
  iconPosition?: "start" | "end";
  // Accessibility
  accessibilityLabel: string;
  accessibilityHint?: string;
  onPress: (event: GestureResponderEvent) => void;
}>;

type ColorStates = {
  border: {
    default: string;
    pressed: string;
    disabled: string;
  };
  background: {
    default: string;
    pressed: string;
    disabled: string;
  };
  label: {
    default: string;
    pressed: string;
    disabled: string;
  };
};

const mapColorStates: Record<
  NonNullable<ButtonOutline["color"]>,
  ColorStates
> = {
  // Primary button
  primary: {
    border: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: IOColors["grey-200"]
    },
    background: {
      default: hexToRgba(IOColors["blueIO-50"], 0),
      pressed: hexToRgba(IOColors["blueIO-50"], 1),
      disabled: "transparent"
    },
    label: {
      default: IOColors["blueIO-500"],
      pressed: IOColors["blueIO-600"],
      disabled: IOColors["grey-700"]
    }
  },
  // Neutral button
  neutral: {
    border: {
      default: IOColors.grey,
      pressed: IOColors.bluegrey,
      disabled: IOColors.bluegreyLight
    },
    background: {
      default: IOColors.white,
      pressed: IOColors.greyUltraLight,
      disabled: "transparent"
    },
    label: {
      default: IOColors.bluegrey,
      pressed: IOColors.bluegreyDark,
      disabled: IOColors.grey
    }
  },
  // Contrast button
  contrast: {
    border: {
      default: IOColors.white,
      pressed: IOColors.white,
      disabled: IOColors["blueIO-200"]
    },
    background: {
      default: hexToRgba(IOColors["blueIO-600"], 0),
      pressed: IOColors["blueIO-600"],
      disabled: "transparent"
    },
    label: {
      default: IOColors.white,
      pressed: IOColors.white,
      disabled: IOColors["blueIO-200"]
    }
  },
  // Danger button
  danger: {
    border: {
      default: IOColors.red,
      pressed: IOColors.red,
      disabled: IOColors.bluegreyLight
    },
    background: {
      default: hexToRgba(IOColors.red, 0),
      pressed: hexToRgba(IOColors.red, 0.15),
      disabled: "transparent"
    },
    label: {
      default: IOColors.red,
      pressed: IOColors.red,
      disabled: IOColors.grey
    }
  }
};

const DISABLED_OPACITY = 0.5;

const IOButtonStylesLocal = StyleSheet.create({
  label: {
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  },
  buttonWithBorder: {
    borderWidth: 2
  }
});

export const ButtonOutline = ({
  color = "primary",
  label,
  small = false,
  fullWidth = false,
  disabled = false,
  icon,
  iconPosition = "start",
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID
}: ButtonOutline) => {
  const isPressed: Animated.SharedValue<number> = useSharedValue(0);

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleValues?.basicButton?.pressedState;

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
      [
        mapColorStates[color].background.default,
        mapColorStates[color].background.pressed
      ]
    );

    const borderColor = interpolateColor(
      progressPressed.value,
      [0, 1],
      [
        mapColorStates[color].border.default,
        mapColorStates[color].border.pressed
      ]
    );

    // Scale down button slightly when pressed
    const scale = interpolate(
      progressPressed.value,
      [0, 1],
      [1, animationScaleValue],
      Extrapolate.CLAMP
    );

    return {
      borderColor,
      backgroundColor,
      transform: [{ scale }]
    };
  });

  const pressedColorLabelAnimationStyle = useAnimatedStyle(() => {
    // Link color states to the pressed states

    const labelColor = interpolateColor(
      progressPressed.value,
      [0, 1],
      [
        mapColorStates[color].border.default,
        mapColorStates[color].border.pressed
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
      [mapColorStates[color].label.default, mapColorStates[color].label.pressed]
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

  const Button = () => (
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
      style={!fullWidth ? IOButtonStyles.dimensionsDefault : {}}
    >
      <Animated.View
        style={[
          IOButtonStyles.button,
          IOButtonStylesLocal.buttonWithBorder,
          iconPosition === "end" && { flexDirection: "row-reverse" },
          small
            ? IOButtonStyles.buttonSizeSmall
            : IOButtonStyles.buttonSizeDefault,
          disabled
            ? {
                backgroundColor: mapColorStates[color]?.background?.disabled,
                borderColor: mapColorStates[color]?.border?.disabled,
                opacity: DISABLED_OPACITY
              }
            : {
                backgroundColor: mapColorStates[color]?.background?.default,
                borderColor: mapColorStates[color]?.border.default
              },
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
              />
            ) : (
              <AnimatedIcon
                name={icon}
                color={mapColorStates[color]?.label?.disabled}
              />
            )}
            <HSpacer size={8} />
          </>
        )}
        <Animated.Text
          style={[
            IOButtonStylesLocal.label,
            IOButtonStyles.label,
            small
              ? IOButtonStyles.labelSizeSmall
              : IOButtonStyles.labelSizeDefault,
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

  return <Button />;
};

export default ButtonOutline;
