import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import { WithTestID } from "../../utils/types";
import { IOColors } from "../../core";

type Props = WithTestID<{
  foregroundColor?: IOColors;
  backgroundColor?: IOColors;
  durationMs?: number;
  size?: IOLoadingSpinnerSizeScale;
}>;

/**
 * Size scale, 76 is kept for backward compatibility with the old design system but 48 is enough for the new one.
 * It will be removed in the future.
 */
export type IOLoadingSpinnerSizeScale = 24 | 48 | 76;

const styles = StyleSheet.create({
  progress: {
    width: "100%",
    height: "100%",
    position: "absolute"
  }
});

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
  foregroundColor = "blueIO-500",
  /* The background color should be optional,
  but given the current implementation is unavoidable.
  A refactoring of the component should take
  the `foregroundColor' (or just `color') as
  a unique main prop. */
  backgroundColor = "white",
  size = 24,
  durationMs = 750
}: Props): React.ReactElement => {
  const rotationDegree = useRef(new Animated.Value(0)).current;

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
          style={[
            styles.progress,
            {
              borderWidth: 3,
              borderRadius: size / 2,
              borderTopColor: IOColors[foregroundColor],
              borderRightColor: IOColors[foregroundColor],
              borderLeftColor: IOColors[foregroundColor],
              borderBottomColor: IOColors[backgroundColor]
            },
            {
              transform: [
                {
                  rotateZ: rotationDegree.interpolate({
                    inputRange: [0, 360],
                    outputRange: ["0deg", "360deg"]
                  })
                }
              ]
            }
          ]}
        />
      </View>
    </>
  );
};
