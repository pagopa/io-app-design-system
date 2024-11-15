import { GestureResponderEvent, ViewStyle } from "react-native";
import {
  AnimatedStyle,
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle
} from "react-native-reanimated";
import { IOScaleEffect } from "../core";
import { useSpringPressProgressValue } from "../utils/hooks";

export const useScaleAnimation = (
  magnitude: IOScaleEffect = "slight"
): {
  progress: SharedValue<number>;
  onPressIn: (event: GestureResponderEvent) => void;
  onPressOut: (event: GestureResponderEvent) => void;
  scaleAnimationStyle: AnimatedStyle<ViewStyle>;
} => {
  const { progress, onPressIn, onPressOut } =
    useSpringPressProgressValue("button");

  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleEffect[magnitude];

  const scaleAnimationStyle = useAnimatedStyle(() => {
    // Scale down button slightly when pressed
    const scale = interpolate(
      progress.value,
      [0, 1],
      [1, animationScaleValue],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }]
    };
  });

  return { progress, onPressIn, onPressOut, scaleAnimationStyle };
};
