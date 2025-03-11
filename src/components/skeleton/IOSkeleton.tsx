import React, { memo, useEffect, useMemo } from "react";
import { DimensionValue, ViewStyle } from "react-native";
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
  width: DimensionValue;
  height: number;
  radius?: number;
  size?: never;
};

export type IOSkeleton = IOSkeletonSquare | IOSkeletonRectangle;

export const IOSkeleton = memo(
  ({ shape, size, width, height, radius: borderRadius }: IOSkeleton) => {
    const reduceMotion = useReducedMotion();
    const theme = useIOTheme();

    const opacity = useSharedValue(OPACITY_MAX);

    const backgroundColor = IOColors[theme["skeleton-background"]];

    const baseStyle: ViewStyle = useMemo(
      () => ({
        backgroundColor,
        width: shape === "square" ? size : width,
        height: shape === "square" ? size : height,
        borderRadius,
        borderCurve: "continuous"
      }),
      [backgroundColor, shape, size, width, height, borderRadius]
    );

    useEffect(() => {
      if (reduceMotion) {
        return;
      }

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

      return () => {
        cancelAnimation(opacity);
      };
    }, [opacity, reduceMotion]);

    const animatedStyle = useAnimatedStyle(() => ({
      opacity: reduceMotion ? OPACITY_REDUCED_MOTION : opacity.value
    }));

    return <Animated.View style={[baseStyle, animatedStyle]} />;
  }
);
