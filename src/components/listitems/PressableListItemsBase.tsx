import * as React from "react";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";
import { IOListItemStyles } from "../../core";
import { WithTestID } from "../../utils/types";
import { useListItemSpringAnimation } from "./hooks/useListItemSpringAnimation";

export type PressableBaseProps = WithTestID<{
  accessibilityLabel?: string;
  onPress?: () => void;
}>;
export const PressableListItemBase = ({
  onPress,
  testID,
  accessibilityLabel,
  children
}: React.PropsWithChildren<PressableBaseProps>) => {
  const { onPressIn, onPressOut, animatedScaleStyle, animatedBackgroundStyle } =
    useListItemSpringAnimation();
  return (
    <Pressable
      onPress={onPress}
      testID={testID}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onTouchEnd={onPressOut}
      accessibilityRole="button"
    >
      <Animated.View
        style={[IOListItemStyles.listItem, animatedBackgroundStyle]}
      >
        <Animated.View
          style={[IOListItemStyles.listItemInner, animatedScaleStyle]}
        >
          {children}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};
