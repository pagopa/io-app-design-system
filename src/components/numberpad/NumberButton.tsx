import React, { memo, useCallback } from "react";
import { Pressable } from "react-native";
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
  IOColors,
  IONumberPadButtonStyles,
  IOScaleValues,
  IOSpringValues,
  hexToRgba
} from "../../core";
import { H3 } from "../typography";

type NumberButtonVariantType = "light" | "dark";

type NumberButtonProps = {
  /**
   * Used to choose the component color variant between `dark` and `light`.
   */
  variant: NumberButtonVariantType;
  /**
   * The button value.
   */
  number: number;
  /**
   * The action to be executed when the button is pressed.
   * @param number
   * @returns void
   */
  onPress: (number: number) => void;
};

type ColorMapVariant = {
  background: string;
  pressed: string;
  foreground: IOColors;
};

const colorMap: Record<NumberButtonVariantType, ColorMapVariant> = {
  light: {
    background: IOColors["grey-50"],
    pressed: IOColors["grey-200"],
    foreground: "blueIO-500"
  },
  dark: {
    background: IOColors["blueIO-400"],
    pressed: IOColors["blueIO-200"],
    foreground: "white"
  }
};

const legacyColorMap: Record<NumberButtonVariantType, ColorMapVariant> = {
  light: {
    background: IOColors["grey-100"],
    pressed: IOColors["grey-200"],
    foreground: "blue"
  },
  dark: {
    background: hexToRgba(IOColors.black, 0.1),
    pressed: hexToRgba(IOColors.white, 0.5),
    foreground: "white"
  }
};
/**
 * Based on a `Pressable` element, it displays a number button with animations on press In and Out.
 *
 * @returns {JSX.Element} The rendered `NumberButton`
 */
export const NumberButton = memo(
  ({ number, variant, onPress }: NumberButtonProps) => {
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
      const bgColor = interpolateColor(
        progressPressed.value,
        [0, 1],
        [colorMap[variant].background, colorMap[variant].pressed]
      );

      // Scale down button slightly when pressed
      const scale = interpolate(
        progressPressed.value,
        [0, 1],
        [1, animationScaleValue],
        Extrapolation.CLAMP
      );

      return {
        backgroundColor: bgColor,
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

    const handleOnPress = useCallback(() => {
      onPress(number);
    }, [number, onPress]);

    return (
      <Pressable
        accessible
        accessibilityRole="button"
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={handleOnPress}
      >
        <Animated.View
          style={[
            IONumberPadButtonStyles.button,
            IONumberPadButtonStyles.circularShape,
            IONumberPadButtonStyles.buttonSize,
            pressedAnimationStyle
          ]}
        >
          <H3 color={colorMap[variant].foreground}>{number}</H3>
        </Animated.View>
      </Pressable>
    );
  }
);
