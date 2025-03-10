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

const ANIMATION_DURATION = 1000;
const [MIN_OPACITY, MAX_OPACITY] = [0.35, 0.75];
const [MIN_OPACITY_REDUCED_MOTION, MAX_OPACITY_REDUCED_MOTION] = [0.5, 0.7];

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

export const IOSkeleton = ({
  shape,
  size,
  width,
  height,
  radius: borderRadius
}: IOSkeleton) => {
  const reduceMotion = useReducedMotion();

  const minOpacity = reduceMotion ? MIN_OPACITY_REDUCED_MOTION : MIN_OPACITY;
  const maxOpacity = reduceMotion ? MAX_OPACITY_REDUCED_MOTION : MAX_OPACITY;

  const opacity = useSharedValue(maxOpacity);
  const theme = useIOTheme();

  const backgroundColor = IOColors[theme["skeleton-background"]];

  const startSkeletonAnimation = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    opacity.value = withRepeat(
      withSequence(
        withTiming(maxOpacity, {
          duration: ANIMATION_DURATION / 2,
          easing: Easing.linear
        }),
        withTiming(minOpacity, {
          duration: ANIMATION_DURATION / 2,
          easing: Easing.linear
        })
      ),
      -1,
      true
    );
  }, [opacity, minOpacity, maxOpacity]);

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
    opacity: opacity.value
  }));

  return shape === "square" ? (
    <Animated.View
      style={[
        {
          backgroundColor,
          width: size,
          height: size,
          borderRadius,
          borderCurve: "continuous"
        },
        animatedStyle
      ]}
    />
  ) : (
    <Animated.View
      style={[{ backgroundColor, width, height, borderRadius }, animatedStyle]}
    />
  );
};
