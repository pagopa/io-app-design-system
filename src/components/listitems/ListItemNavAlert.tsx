import React, { ComponentProps } from "react";
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
import { Icon } from "../icons";
import { H6, LabelSmall } from "../typography";

export type ListItemNavAlert = WithTestID<{
  value: string | React.ReactNode;
  description?: string | React.ReactNode;
  withoutIcon?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}> &
  Pick<
    ComponentProps<typeof Pressable>,
    "accessibilityLabel" | "accessibilityHint"
  >;

export const ListItemNavAlert = ({
  value,
  description,
  withoutIcon = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  testID
}: ListItemNavAlert) => {
  const theme = useIOTheme();
  const { onPressIn, onPressOut, scaleAnimatedStyle, backgroundAnimatedStyle } =
    useListItemAnimation();

  const componentValueToAccessibility = typeof value === "string" ? value : "";
  const componentDescriptionToAccessibility =
    typeof description === "string" ? description : "";

  const listItemAccessibilityLabel =
    accessibilityLabel ??
    `${componentValueToAccessibility}; ${componentDescriptionToAccessibility}`;

  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const listItemNavAlertContent = (
    <>
      {/* Let developer using a custom component (e.g: skeleton) */}
      {typeof value === "string" ? (
        <H6 color={theme["textBody-default"]}>{value}</H6>
      ) : (
        value
      )}
      {description && (
        <>
          {typeof description === "string" ? (
            <LabelSmall weight="Semibold" color={theme.errorText}>
              {description}
            </LabelSmall>
          ) : (
            description
          )}
        </>
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
        style={[IOListItemStyles.listItem, backgroundAnimatedStyle]}
        importantForAccessibility="no-hide-descendants"
        accessibilityElementsHidden
      >
        <Animated.View
          style={[IOListItemStyles.listItemInner, scaleAnimatedStyle]}
        >
          {!withoutIcon && (
            <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
              <Icon
                name="errorFilled"
                color={theme.errorIcon}
                size={IOListItemVisualParams.iconSize}
              />
            </View>
          )}
          <View style={IOStyles.flex}>{listItemNavAlertContent}</View>
          <View style={{ marginLeft: IOListItemVisualParams.iconMargin }}>
            <Icon
              name="chevronRightListItem"
              color={theme["interactiveElem-default"]}
              size={IOListItemVisualParams.chevronSize}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default ListItemNavAlert;
