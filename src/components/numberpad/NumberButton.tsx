import React, { useCallback, useMemo } from "react";
import { Pressable } from "react-native";
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
  IONumberPadButtonStyles,
  IOScaleValues,
  IOSpringValues,
  useIOExperimentalDesign
} from "../../core";
import { H3 } from "../typography";

type NumberButtonVariantType = "light" | "dark";

type NumberButtonProps = {
  variant: NumberButtonVariantType;
  number: number;
  onPress: (number: number) => void;
};

type ColorMapVariant = {
  background: IOColors;
  pressed: IOColors;
  foreground: IOColors;
};

const colorMap: Record<NumberButtonVariantType, ColorMapVariant> = {
  light: {
    background: "grey-50",
    pressed: "grey-200",
    foreground: "blueIO-500"
  },
  dark: {
    background: "blueIO-400",
    pressed: "blueIO-200",
    foreground: "white"
  }
};

const legacyColorMap: Record<NumberButtonVariantType, ColorMapVariant> = {
  light: {
    background: "grey-50",
    pressed: "grey-200",
    foreground: "blue"
  },
  dark: {
    background: "blue",
    pressed: "blue-600",
    foreground: "white"
  }
};

export const NumberButton = ({
  number,
  variant,
  onPress
}: NumberButtonProps) => {
  const { isExperimental } = useIOExperimentalDesign();

  const colors = useMemo(
    () => (isExperimental ? colorMap[variant] : legacyColorMap[variant]),
    [variant, isExperimental]
  );
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
      [IOColors[colors.background], IOColors[colors.pressed]]
    );

    // Scale down button slightly when pressed
    const scale = interpolate(
      progressPressed.value,
      [0, 1],
      [1, animationScaleValue],
      Extrapolate.CLAMP
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

  return (
    <Pressable
      accessible={true}
      accessibilityRole={"button"}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={() => onPress(number)}
    >
      <Animated.View
        style={[
          IONumberPadButtonStyles.button,
          IONumberPadButtonStyles.circularShape,
          IONumberPadButtonStyles.buttonSize,
          pressedAnimationStyle
        ]}
      >
        <H3 color={colors.foreground}>{number}</H3>
      </Animated.View>
    </Pressable>
  );
};
