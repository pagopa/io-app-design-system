import React, { useEffect } from "react";
import { StyleSheet, View, Pressable, PressableProps } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withSpring,
  withTiming,
  Easing
} from "react-native-reanimated";
import { IOSelectionTickVisualParams } from "../../core/IOStyles";
import { IOSpringValues } from "../../core/IOAnimations";
import { IOColors } from "../../core/IOColors";
import { AnimatedTick } from "../common/AnimatedTick";

type Props = {
  checked?: boolean;
};

type OwnProps = Props & Pick<PressableProps, "disabled" | "onPress">;

const checkBoxRadius: number = 5;

const styles = StyleSheet.create({
  checkBoxWrapper: {
    width: IOSelectionTickVisualParams.size,
    height: IOSelectionTickVisualParams.size
  },
  checkboxBorder: {
    position: "absolute",
    left: 0,
    top: 0,
    width: IOSelectionTickVisualParams.size,
    height: IOSelectionTickVisualParams.size,
    borderWidth: IOSelectionTickVisualParams.borderWidth,
    borderRadius: checkBoxRadius
  },
  checkBoxSquare: {
    position: "absolute",
    left: 0,
    top: 0,
    width: IOSelectionTickVisualParams.size,
    height: IOSelectionTickVisualParams.size,
    borderRadius: checkBoxRadius
  }
});

/**
 * An animated checkbox. This can be used to implement a
 * standard {@link CheckBox} or other composite components.
 */
export const AnimatedCheckbox = ({ checked, onPress, disabled }: OwnProps) => {
  const isChecked = checked ?? false;

  const squareAnimationProgress = useSharedValue(checked ? 1 : 0);
  const tickAnimationProgress = useSharedValue(checked ? 1 : 0);

  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    squareAnimationProgress.value = withSpring(
      checked ? 1 : 0,
      IOSpringValues.selection
    );
    // eslint-disable-next-line functional/immutable-data
    tickAnimationProgress.value = withTiming(checked ? 1 : 0, {
      duration: 400,
      easing: Easing.elastic(1)
    });
  }, [checked, squareAnimationProgress, tickAnimationProgress]);

  const animatedCheckboxSquare = useAnimatedStyle(() => {
    const scale = interpolate(squareAnimationProgress.value, [0, 1], [0.5, 1]);
    const opacity = squareAnimationProgress.value;

    return {
      opacity,
      transform: [{ scale }]
    };
  });

  return (
    <Pressable
      disabled={disabled}
      testID="AnimatedCheckboxInput"
      onPress={onPress}
      style={styles.checkBoxWrapper}
    >
      <View
        style={[
          styles.checkboxBorder,
          {
            borderColor:
              IOColors[IOSelectionTickVisualParams.borderColorOffState]
          }
        ]}
      />
      <Animated.View
        style={[
          styles.checkBoxSquare,
          {
            backgroundColor:
              IOColors[IOSelectionTickVisualParams.bgColorOnState]
          },
          animatedCheckboxSquare
        ]}
      />
      {isChecked && (
        <AnimatedTick
          progress={tickAnimationProgress}
          stroke={IOColors[IOSelectionTickVisualParams.tickColor]}
        />
      )}
    </Pressable>
  );
};
