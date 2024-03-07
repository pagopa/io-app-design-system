import React, { useEffect } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
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
import { IOSpacingScale } from "../../core/IOSpacing";
import {
  IOSelectionTickLegacyVisualParams,
  IOSelectionTickVisualParams,
  IOVisualCostants
} from "../../core/IOStyles";
import { AnimatedTick } from "../common/AnimatedTick";

type Props = {
  checked?: boolean;
};

type AnimatedMessageCheckbox = Props & Pick<PressableProps, "onPress">;

const internalSpacing: IOSpacingScale = 4;

const styles = StyleSheet.create({
  checkBoxWrapper: {
    width: IOVisualCostants.avatarSizeSmall,
    height: IOVisualCostants.avatarSizeSmall,
    padding: internalSpacing
  },
  checkBoxCircle: {
    position: "absolute",
    left: 0,
    top: 0,
    width: IOVisualCostants.avatarSizeSmall,
    height: IOVisualCostants.avatarSizeSmall,
    borderRadius: IOVisualCostants.avatarRadius,
    borderCurve: "continuous"
  }
});

/**
 * Animated message checkbox used for the specific message
 * list item (Select mode that enables related actions)
 */
export const AnimatedMessageCheckbox = ({
  checked,
  onPress
}: AnimatedMessageCheckbox) => {
  const isChecked = checked ?? true;
  const { isExperimental } = useIOExperimentalDesign();

  const circleAnimationProgress = useSharedValue(checked ? 1 : 0);
  const tickAnimationProgress = useSharedValue(checked ? 1 : 0);
  const backgroundColorOnState =
    IOColors[IOSelectionTickVisualParams.bgColorOnState];
  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const legacyBackgroundColorOnState =
    IOColors[IOSelectionTickLegacyVisualParams.bgColorOnState];
  const backgroundColorProp = isExperimental
    ? backgroundColorOnState
    : legacyBackgroundColorOnState;

  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    circleAnimationProgress.value = withSpring(
      checked ? 1 : 0,
      IOSpringValues.selection
    );
    // eslint-disable-next-line functional/immutable-data
    tickAnimationProgress.value = withTiming(checked ? 1 : 0, {
      duration: 250,
      easing: Easing.out(Easing.cubic)
    });
  }, [checked, circleAnimationProgress, tickAnimationProgress]);

  const animatedCheckboxCircle = useAnimatedStyle(() => {
    const scale = interpolate(circleAnimationProgress.value, [0, 1], [0.8, 1]);
    const opacity = circleAnimationProgress.value;

    return {
      opacity,
      transform: [{ scale }]
    };
  });

  return (
    <Pressable
      testID="AnimatedMessageCheckboxInput"
      onPress={onPress}
      style={styles.checkBoxWrapper}
    >
      <Animated.View
        style={[
          styles.checkBoxCircle,
          {
            backgroundColor: backgroundColorProp
          },
          animatedCheckboxCircle
        ]}
      />
      {isChecked && (
        <AnimatedTick
          progress={tickAnimationProgress}
          strokeWidth={1.5}
          stroke={IOColors[IOSelectionTickVisualParams.tickColor]}
        />
      )}
    </Pressable>
  );
};
