import * as React from "react";
import { GestureResponderEvent, Pressable } from "react-native";
import Animated from "react-native-reanimated";
import { IOModuleIDPSavedVSpacing, IOModuleStyles } from "../../core";
import { WithTestID } from "../../utils/types";
import { useModuleSpringAnimation } from "./hooks/useModuleSpringAnimation";

export type PressableModuleBaseProps = WithTestID<{
  accessibilityLabel?: string;
  onPress?: (event: GestureResponderEvent) => void;
  important?: boolean;
}>;

export const PressableModuleBase = ({
  onPress,
  testID,
  accessibilityLabel,
  important = false,
  children
}: React.PropsWithChildren<PressableModuleBaseProps>) => {
  const { handlePressIn, handlePressOut, animatedStyle } =
    useModuleSpringAnimation();
  return (
    <Pressable
      onPress={onPress}
      testID={testID}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onTouchEnd={handlePressOut}
      accessibilityRole="button"
    >
      <Animated.View
        style={[
          IOModuleStyles.button,
          important && { paddingVertical: IOModuleIDPSavedVSpacing },
          animatedStyle
        ]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
};
