import React, { memo, useCallback, useMemo } from "react";
import { Pressable } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useReducedMotion
} from "react-native-reanimated";
import {
  IOColors,
  IONumberPadButtonStyles,
  hexToRgba,
  useIOExperimentalDesign
} from "../../core";
import { useScaleAnimation } from "../../hooks";
import { IOText } from "../typography";

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
    foreground: "blue-500"
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
    const { progress, onPressIn, onPressOut, scaleAnimatedStyle } =
      useScaleAnimation("slight");
    const reducedMotion = useReducedMotion();
    const { isExperimental } = useIOExperimentalDesign();

    const colors = useMemo(
      () => (isExperimental ? colorMap[variant] : legacyColorMap[variant]),
      [variant, isExperimental]
    );

    // Interpolate animation values from `isPressed` values
    const pressedAnimationStyle = useAnimatedStyle(() => ({
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [colors.background, colors.pressed]
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
          <IOText
            size={22}
            font={isExperimental ? "Titillio" : "TitilliumSansPro"}
            weight="Semibold"
            color={colors.foreground}
            style={{
              // Additional prop for Android
              textAlignVertical: "center"
            }}
          >
            {number}
          </IOText>
        </Animated.View>
      </Pressable>
    );
  }
);
