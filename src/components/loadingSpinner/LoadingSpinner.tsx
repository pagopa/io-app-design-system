import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";
import { WithTestID } from "../../utils/types";
import { IOColors, useIOTheme } from "../../core";

export type LoadingSpinner = WithTestID<{
  color?: IOColors;
  size?: IOLoadingSpinnerSizeScale;
  durationMs?: number;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}>;

/**
 * Size scale, 76 is kept for backward compatibility with the old design system but 48 is enough for the new one.
 * It will be removed in the future.
 */
export type IOLoadingSpinnerSizeScale = 24 | 48 | 76;

const strokeMap: Record<NonNullable<LoadingSpinner["size"]>, number> = {
  24: 3,
  48: 5,
  76: 7
};

export const LoadingSpinner = ({
  color: customColor,
  size = 24,
  durationMs = 850,
  accessibilityHint,
  accessibilityLabel,
  testID = "LoadingSpinnerTestID"
}: LoadingSpinner): React.ReactElement => {
  const theme = useIOTheme();
  const rotationDegree = useRef(new Animated.Value(0)).current;
  const stroke: number = strokeMap[size];

  const color = customColor ?? theme["interactiveElem-default"];

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(rotationDegree, {
        toValue: 360,
        duration: durationMs,
        easing: Easing.linear,
        useNativeDriver: true
      })
    );

    animation.start();

    return () => animation.stop();
  }, [durationMs, rotationDegree, theme]);

  return (
    <View
      style={{ width: size, height: size }}
      accessible={true}
      accessibilityRole="progressbar"
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      importantForAccessibility={"no-hide-descendants"}
      testID={testID}
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
          a parameterized version of his code.
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
              <Stop offset="100%" stopOpacity="1" stopColor={IOColors[color]} />
            </LinearGradient>
            <LinearGradient id="spinner-firstHalf">
              <Stop offset="0%" stopOpacity="1" stopColor={IOColors[color]} />
              <Stop offset="100%" stopOpacity="1" stopColor={IOColors[color]} />
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
  );
};
