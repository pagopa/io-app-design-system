import React, { useCallback, useEffect } from "react";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from "react-native-reanimated";
import { IOColors, useIOTheme } from "../../core";

const ANIMATION_DURATION = 1250;
const [OPACITY_MIN, OPACITY_MAX] = [0.35, 0.75];
const OPACITY_REDUCED_MOTION = (OPACITY_MAX + OPACITY_MIN) / 2;

type IOSkeletonSquare = {
  shape: "square";
  size: number;
  radius?: number;
  width?: never;
  height?: never;
};

type IOSkeletonRectangle = {
  shape: "rectangle";
  width: number;
  height: number;
  radius?: number;
  size?: never;
};

export type IOSkeleton = IOSkeletonSquare | IOSkeletonRectangle;

export const IOSkeleton = React.memo(
  ({ shape, size, width, height, radius: borderRadius }: IOSkeleton) => {
    const reduceMotion = useReducedMotion();

    const opacity = useSharedValue(OPACITY_MAX);
    const theme = useIOTheme();

    const backgroundColor = IOColors[theme["skeleton-background"]];

    const startSkeletonAnimation = useCallback(() => {
      // eslint-disable-next-line functional/immutable-data
      opacity.value = withRepeat(
        withSequence(
          withTiming(OPACITY_MAX, {
            duration: ANIMATION_DURATION / 2,
            easing: Easing.inOut(Easing.sin)
          }),
          withTiming(OPACITY_MIN, {
            duration: ANIMATION_DURATION / 2,
            easing: Easing.inOut(Easing.sin)
          })
        ),
        -1,
        true
      );
    }, [opacity]);

    const cancelAnimations = useCallback(() => {
      "worklet";
      cancelAnimation(opacity);
    }, [opacity]);

    useEffect(() => {
      startSkeletonAnimation();

      return () => {
        cancelAnimations();
      };
    }, [startSkeletonAnimation, cancelAnimations]);

    const animatedStyle = useAnimatedStyle(() => ({
      opacity: reduceMotion ? OPACITY_REDUCED_MOTION : opacity.value
    }));

    return (
      <Animated.View
        style={[
          {
            backgroundColor,
            width: shape === "square" ? size : width,
            height: shape === "square" ? size : height,
            borderRadius,
            borderCurve: "continuous"
          },
          animatedStyle
        ]}
      />
    );
  }
);
