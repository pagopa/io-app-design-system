import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";
import { WithTestID } from "../../utils/types";
import { IOColors } from "../../core";

export type LoadingSpinner = WithTestID<{
  color?: IOColors;
  size?: IOLoadingSpinnerSizeScale;
  durationMs?: number;
}>;

/**
 * Size scale, 76 is kept for backward compatibility with the old design system but 48 is enough for the new one.
 * It will be removed in the future.
 */
export type IOLoadingSpinnerSizeScale = 24 | 48 | 76;

const strokeMap: Record<NonNullable<LoadingSpinner["size"]>, number> = {
  24: 3,
  48: 6,
  76: 9
};

const startRotationAnimation = (
  durationMs: number,
  rotationDegree: Animated.Value
): void => {
  Animated.loop(
    Animated.timing(rotationDegree, {
      toValue: 360,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: true
    })
  ).start();
};

export const LoadingSpinner = ({
  color = "blueIO-500",
  size = 24,
  durationMs = 750
}: LoadingSpinner): React.ReactElement => {
  const rotationDegree = useRef(new Animated.Value(0)).current;
  const stroke: number = strokeMap[size];

  useEffect(() => {
    startRotationAnimation(durationMs, rotationDegree);
  }, [durationMs, rotationDegree]);

  return (
    <>
      <View
        style={{ width: size, height: size }}
        accessibilityRole="progressbar"
        testID={"LoadingSpinnerTestID"}
      >
        <Animated.View
          testID={"LoadingSpinnerAnimatedTestID"}
          style={{
            transform: [
              {
                rotateZ: rotationDegree.interpolate({
                  inputRange: [0, 360],
                  outputRange: ["0deg", "360deg"]
                })
              }
            ]
          }}
        >
          {/* Thanks to Ben Ilegbodu for the article on how to
          create a a SVG gradient loading spinner. Below is
          a parameterized version of his  version of his code.
          Source: https://www.benmvp.com/blog/how-to-create-circle-svg-gradient-loading-spinner/ */}
          <Svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
          >
            <Defs>
              <LinearGradient id="spinner-secondHalf">
                <Stop offset="0%" stopOpacity="0" stopColor={IOColors[color]} />
                <Stop
                  offset="100%"
                  stopOpacity="1"
                  stopColor={IOColors[color]}
                />
              </LinearGradient>
              <LinearGradient id="spinner-firstHalf">
                <Stop offset="0%" stopOpacity="1" stopColor={IOColors[color]} />
                <Stop
                  offset="100%"
                  stopOpacity="1"
                  stopColor={IOColors[color]}
                />
              </LinearGradient>
            </Defs>

            <G strokeWidth={stroke}>
              <Path
                stroke="url(#spinner-secondHalf)"
                d={`M ${stroke / 2} ${size / 2} A ${size / 2 - stroke / 2} ${
                  size / 2 - stroke / 2
                } 0 0 1 ${size - stroke / 2} ${size / 2}`}
              />
              <Path
                stroke="url(#spinner-firstHalf)"
                d={`M ${size - stroke / 2} ${size / 2} A ${
                  size / 2 - stroke / 2
                } ${size / 2 - stroke / 2} 0 0 1 ${stroke / 2} ${size / 2}`}
              />
              <Path
                stroke={IOColors[color]}
                strokeLinecap="round"
                d={`M ${stroke / 2} ${size / 2} A ${size / 2 - stroke / 2} ${
                  size / 2 - stroke / 2
                } 0 0 1 ${stroke / 2} ${size / 2 - stroke / 4}`}
              />
            </G>
          </Svg>
        </Animated.View>
      </View>
    </>
  );
};
