import React, { useEffect } from "react";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from "react-native-reanimated";
import { useIOExperimentalDesign } from "../../core";
import { IOSpringValues } from "../../core/IOAnimations";
import { IOColors } from "../../core/IOColors";
import {
  IOSelectionTickLegacyVisualParams,
  IOSelectionTickVisualParams
} from "../../core/IOStyles";
import { AnimatedTick } from "../common/AnimatedTick";

type Props = {
  checked?: boolean;
};

type OwnProps = Props & Pick<PressableProps, "disabled" | "onPress">;

const styles = StyleSheet.create({
  radioWrapper: {
    width: IOSelectionTickVisualParams.size,
    height: IOSelectionTickVisualParams.size
  },
  radioBorder: {
    position: "absolute",
    left: 0,
    top: 0,
    width: IOSelectionTickVisualParams.size,
    height: IOSelectionTickVisualParams.size,
    borderWidth: IOSelectionTickVisualParams.borderWidth,
    borderRadius: IOSelectionTickVisualParams.size / 2
  },
  radioCircle: {
    position: "absolute",
    left: 0,
    top: 0,
    width: IOSelectionTickVisualParams.size,
    height: IOSelectionTickVisualParams.size,
    borderRadius: IOSelectionTickVisualParams.size / 2
  }
});

/**
 * An animated checkbox. This can be used to implement a
 * standard {@link CheckBox} or other composite components.
 */
export const AnimatedRadio = ({ checked, onPress, disabled }: OwnProps) => {
  const isChecked = checked ?? false;

  const { isExperimental } = useIOExperimentalDesign();
  const borderColorOffState =
    IOColors[IOSelectionTickVisualParams.borderColorOffState];
  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const legacyBorderColorOffState =
    IOColors[IOSelectionTickLegacyVisualParams.borderColorOffState];
  const borderColorProp = isExperimental
    ? borderColorOffState
    : legacyBorderColorOffState;

  const backgroundColorOnState =
    IOColors[IOSelectionTickVisualParams.bgColorOnState];
  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const legacyBackgroundColorOnState =
    IOColors[IOSelectionTickLegacyVisualParams.bgColorOnState];
  const backgroundColorProp = isExperimental
    ? backgroundColorOnState
    : legacyBackgroundColorOnState;

  const circleAnimationProgress = useSharedValue(checked ? 1 : 0);
  const tickAnimationProgress = useSharedValue(checked ? 1 : 0);

  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    circleAnimationProgress.value = withSpring(
      checked ? 1 : 0,
      IOSpringValues.selection
    );
    // eslint-disable-next-line functional/immutable-data
    tickAnimationProgress.value = withTiming(checked ? 1 : 0, {
      duration: 400,
      easing: Easing.elastic(1)
    });
  }, [checked, circleAnimationProgress, tickAnimationProgress]);

  const animatedCheckboxSquare = useAnimatedStyle(() => {
    const scale = interpolate(circleAnimationProgress.value, [0, 1], [0.5, 1]);
    const opacity = circleAnimationProgress.value;

    return {
      opacity,
      transform: [{ scale }]
    };
  });

  return (
    <Pressable
      accessible={false}
      disabled={disabled}
      testID="AnimatedRadioInput"
      onPress={onPress}
      style={styles.radioWrapper}
    >
      <View
        style={[
          styles.radioBorder,
          {
            borderColor: borderColorProp
          }
        ]}
      />
      <Animated.View
        style={[
          styles.radioCircle,
          {
            backgroundColor: backgroundColorProp
          },
          animatedCheckboxSquare
        ]}
      />
      {isChecked && (
        <View>
          <AnimatedTick
            progress={tickAnimationProgress}
            stroke={IOColors[IOSelectionTickVisualParams.tickColor]}
          />
        </View>
      )}
    </Pressable>
  );
};
