import { useEffect, useMemo, useRef } from "react";
import {
  Animated,
  ColorValue,
  DimensionValue,
  Easing,
  ViewStyle
} from "react-native";
import { useReducedMotion } from "react-native-reanimated";
import { useIOTheme } from "../../context";
import { IOColors } from "../../core";
import { WithTestID } from "../../utils/types";

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

export type IOSkeleton = WithTestID<
  (IOSkeletonSquare | IOSkeletonRectangle) & {
    color?: ColorValue;
  }
>;

export const IOSkeleton = ({
  shape,
  size,
  width,
  height,
  radius: borderRadius,
  color,
  testID
}: IOSkeleton) => {
  const reduceMotion = useReducedMotion();
  const theme = useIOTheme();

  const opacity = useRef(new Animated.Value(OPACITY_MAX)).current;

  const backgroundColor = color ?? IOColors[theme["skeleton-background"]];

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
      opacity.setValue(OPACITY_REDUCED_MOTION);
      return;
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: OPACITY_MIN,
          duration: ANIMATION_DURATION / 2,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true
        }),
        Animated.timing(opacity, {
          toValue: OPACITY_MAX,
          duration: ANIMATION_DURATION / 2,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true
        })
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [opacity, reduceMotion]);

  return <Animated.View testID={testID} style={[baseStyle, { opacity }]} />;
};
