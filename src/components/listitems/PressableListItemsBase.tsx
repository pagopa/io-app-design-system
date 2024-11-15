import * as React from "react";
import { PropsWithChildren } from "react";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";
import { IOListItemStyles, IOListItemVisualParams } from "../../core";
import { WithTestID } from "../../utils/types";
import { useListItemSpringAnimation } from "./hooks/useListItemSpringAnimation";

export type PressableBaseProps = WithTestID<
  Pick<
    React.ComponentProps<typeof Pressable>,
    | "onPress"
    | "accessibilityLabel"
    | "accessibilityHint"
    | "accessibilityState"
    | "accessibilityRole"
  >
>;

export const PressableListItemBase = ({
  onPress,
  testID,
  children,
  accessibilityRole,
  ...props
}: PropsWithChildren<PressableBaseProps>) => {
  const { onPressIn, onPressOut, animatedScaleStyle, animatedBackgroundStyle } =
    useListItemSpringAnimation();
  return (
    <Pressable
      onPress={onPress}
      testID={testID}
      accessible={true}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onTouchEnd={onPressOut}
      accessibilityRole={accessibilityRole || "button"}
      {...props}
    >
      <Animated.View
        style={[IOListItemStyles.listItem, animatedBackgroundStyle]}
      >
        <Animated.View
          style={[
            IOListItemStyles.listItemInner,
            { columnGap: IOListItemVisualParams.iconMargin },
            animatedScaleStyle
          ]}
        >
          {children}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};
