import React, { ComponentProps, useMemo } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import Animated from "react-native-reanimated";
import {
  IOListItemStyles,
  IOListItemVisualParams,
  IOStyles,
  useIOTheme
} from "../../core";
import { useListItemAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import { IOIcons, Icon } from "../icons";
import { BodySmall, H6 } from "../typography";

export type ListItemInfoCopy = WithTestID<{
  label: string;
  value: string | React.ReactNode;
  numberOfLines?: number;
  onPress: (event: GestureResponderEvent) => void;
  icon?: IOIcons;
}> &
  Pick<
    ComponentProps<typeof Pressable>,
    "accessibilityLabel" | "accessibilityHint"
  >;

export const ListItemInfoCopy = ({
  label,
  value,
  numberOfLines = 2,
  onPress,
  icon,
  accessibilityLabel,
  accessibilityHint,
  testID
}: ListItemInfoCopy) => {
  const theme = useIOTheme();
  const { onPressIn, onPressOut, scaleAnimatedStyle, backgroundAnimatedStyle } =
    useListItemAnimation();

  const componentValueToAccessibility = useMemo(
    () => (typeof value === "string" ? value : ""),
    [value]
  );

  const listItemAccessibilityLabel = useMemo(
    () =>
      accessibilityLabel
        ? accessibilityLabel
        : `${label}; ${componentValueToAccessibility}`,
    [label, componentValueToAccessibility, accessibilityLabel]
  );

  const foregroundColor = theme["interactiveElem-default"];

  const listItemInfoCopyContent = (
    <>
      <BodySmall weight="Regular" color={theme["textBody-tertiary"]}>
        {label}
      </BodySmall>
      {/* Let developer using a custom component (e.g: skeleton) */}
      {typeof value === "string" ? (
        <H6 color={foregroundColor} numberOfLines={numberOfLines}>
          {value}
        </H6>
      ) : (
        { value }
      )}
    </>
  );

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onTouchEnd={onPressOut}
      accessible={true}
      accessibilityLabel={listItemAccessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
      testID={testID}
    >
      <Animated.View
        importantForAccessibility="no-hide-descendants"
        accessibilityElementsHidden
        style={[IOListItemStyles.listItem, backgroundAnimatedStyle]}
      >
        <Animated.View
          style={[IOListItemStyles.listItemInner, scaleAnimatedStyle]}
        >
          {icon && (
            <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
              <Icon
                name={icon}
                color="grey-450"
                size={IOListItemVisualParams.iconSize}
              />
            </View>
          )}
          <View style={IOStyles.flex}>{listItemInfoCopyContent}</View>
          <View style={{ marginLeft: IOListItemVisualParams.iconMargin }}>
            <Icon
              name="copy"
              color={foregroundColor}
              size={IOListItemVisualParams.chevronSize}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItemInfoCopy;
