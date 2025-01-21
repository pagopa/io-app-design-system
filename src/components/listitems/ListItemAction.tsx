import React, { ComponentProps, useMemo } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import Animated from "react-native-reanimated";
import {
  IOColors,
  IOListItemStyles,
  IOListItemVisualParams,
  useIOTheme
} from "../../core";
import { useListItemAnimation } from "../../hooks";
import { WithTestID } from "../../utils/types";
import { AnimatedIcon, IOIcons } from "../icons";
import { ButtonText } from "../typography/ButtonText";

export type ListItemAction = WithTestID<{
  label: string;
  variant: "primary" | "danger";
  onPress: (event: GestureResponderEvent) => void;
  underlined?: boolean;
  icon?: IOIcons;
}> &
  Pick<
    ComponentProps<typeof Pressable>,
    "accessibilityLabel" | "accessibilityHint"
  >;

export const ListItemAction = ({
  variant,
  label,
  onPress,
  icon,
  underlined,
  accessibilityLabel,
  accessibilityHint,
  testID
}: ListItemAction) => {
  const { onPressIn, onPressOut, scaleAnimatedStyle, backgroundAnimatedStyle } =
    useListItemAnimation();

  const theme = useIOTheme();

  const listItemAccessibilityLabel = useMemo(
    () => (accessibilityLabel ? accessibilityLabel : `${label}`),
    [label, accessibilityLabel]
  );

  const mapForegroundColor: Record<
    NonNullable<ListItemAction["variant"]>,
    IOColors
  > = {
    primary: theme["interactiveElem-default"],
    danger: theme.errorText
  };

  const textDecorationLine = underlined ? "underline" : "none";

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
        style={[IOListItemStyles.listItem, backgroundAnimatedStyle]}
        importantForAccessibility="no-hide-descendants"
        accessibilityElementsHidden
      >
        <Animated.View
          style={[IOListItemStyles.listItemInner, scaleAnimatedStyle]}
        >
          {icon && (
            <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
              <AnimatedIcon
                name={icon}
                color={IOColors[mapForegroundColor[variant]]}
                size={IOListItemVisualParams.iconSize}
              />
            </View>
          )}
          <View style={{ flexGrow: 1, flexShrink: 1 }}>
            <ButtonText
              textStyle={{ textDecorationLine }}
              color={mapForegroundColor[variant]}
            >
              {label}
            </ButtonText>
          </View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItemAction;
