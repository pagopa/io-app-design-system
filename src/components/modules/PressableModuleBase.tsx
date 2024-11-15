import * as React from "react";
import { PropsWithChildren } from "react";
import { Pressable } from "react-native";
import Animated, { useReducedMotion } from "react-native-reanimated";
import { useScaleAnimation } from "../../utils/hooks";
import {
  IOColors,
  IOModuleIDPSavedVSpacing,
  IOModuleStyles,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";

export type PressableModuleBaseProps = WithTestID<
  {
    withLooseSpacing?: boolean;
  } & Pick<
    React.ComponentProps<typeof Pressable>,
    "onPress" | "accessibilityLabel" | "accessibilityHint"
  >
>;

export const PressableModuleBase = ({
  onPress,
  withLooseSpacing = false,
  accessibilityLabel,
  accessibilityHint,
  testID,
  children
}: PropsWithChildren<PressableModuleBaseProps>) => {
  const theme = useIOTheme();
  const reducedMotion = useReducedMotion();
  const { onPressIn, onPressOut, scaleAnimationStyle } = useScaleAnimation(
    reducedMotion ? "slight" : "medium"
  );
  /* We use a slight scaleEffect if `reducedMotion` is enabled.
  We don't disable it completely because that's the only
  difference between the two states "default" and "pressed".
  If we remove it, they they won't be able to understand
  if there's an ongoing interaction. */

  return (
    <Pressable
      onPress={onPress}
      testID={testID}
      accessible={true}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onTouchEnd={onPressOut}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
    >
      <Animated.View
        style={[
          IOModuleStyles.button,
          { borderColor: IOColors[theme["cardBorder-default"]] },
          withLooseSpacing && { paddingVertical: IOModuleIDPSavedVSpacing },
          scaleAnimationStyle
        ]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
};
