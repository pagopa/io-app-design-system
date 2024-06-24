import * as React from "react";
import { PropsWithChildren } from "react";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";
import {
  IOColors,
  IOModuleIDPSavedVSpacing,
  IOModuleStyles,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { useModuleSpringAnimation } from "./hooks/useModuleSpringAnimation";

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
  const { handlePressIn, handlePressOut, animatedStyle } =
    useModuleSpringAnimation();

  return (
    <Pressable
      onPress={onPress}
      testID={testID}
      accessible={true}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onTouchEnd={handlePressOut}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
    >
      <Animated.View
        style={[
          IOModuleStyles.button,
          { borderColor: IOColors[theme["cardBorder-default"]] },
          withLooseSpacing && { paddingVertical: IOModuleIDPSavedVSpacing },
          animatedStyle
        ]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
};
