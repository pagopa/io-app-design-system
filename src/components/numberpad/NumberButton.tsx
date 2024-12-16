import React, { memo, useCallback } from "react";
import { Pressable } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useReducedMotion
} from "react-native-reanimated";
import { IOColors, IONumberPadButtonStyles } from "../../core";
import { useScaleAnimation } from "../../hooks";
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

/**
 * Based on a `Pressable` element, it displays a number button with animations on press In and Out.
 *
 * @returns {JSX.Element} The rendered `NumberButton`
 */
export const NumberButton = memo(
  ({ number, variant, onPress }: NumberButtonProps) => {
    const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
      useScaleAnimation("slight");
    const reducedMotion = useReducedMotion();

    // Interpolate animation values from `isPressed` values
    const pressedAnimationStyle = useAnimatedStyle(() => ({
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [colorMap[variant].background, colorMap[variant].pressed]
      )
    }));

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
            pressedAnimationStyle,
            !reducedMotion && scaleAnimatedStyle
          ]}
        >
          <H3 color={colorMap[variant].foreground}>{number}</H3>
        </Animated.View>
      </Pressable>
    );
  }
);
