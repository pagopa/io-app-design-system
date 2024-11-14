import { useCallback } from "react";
import { GestureResponderEvent, ViewStyle } from "react-native";
import {
  AnimatedStyle,
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { IOScaleEffect, IOSpringValues } from "../../core";

export const useAnimatedButton = (
  magnitude: IOScaleEffect = "slight"
): {
  progressPressed: SharedValue<number>;
  onPressIn: (event: GestureResponderEvent) => void;
  onPressOut: (event: GestureResponderEvent) => void;
  scaleAnimationStyle: AnimatedStyle<ViewStyle>;
} => {
  const isPressed = useSharedValue(0);

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleEffect[magnitude];

  // Using a spring-based animation for our interpolations
  const progressPressed = useDerivedValue(() =>
    withSpring(isPressed.value, IOSpringValues.button)
  );

  const onPressIn = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 1;
  }, [isPressed]);

  const onPressOut = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 0;
  }, [isPressed]);

  const scaleAnimationStyle = useAnimatedStyle(() => {
    // Scale down button slightly when pressed
    const scale = interpolate(
      progressPressed.value,
      [0, 1],
      [1, animationScaleValue],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }]
    };
  });

  return { progressPressed, onPressIn, onPressOut, scaleAnimationStyle };
};
