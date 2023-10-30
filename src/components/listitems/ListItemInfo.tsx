import React, { ComponentProps, useCallback, useMemo } from "react";
import { View } from "react-native";
import {
  IOListItemStyles,
  IOListItemVisualParams,
  IOStyles,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { IOIcons, Icon } from "../icons";
import { H6, LabelSmall } from "../typography";
import { ButtonLink, IconButton } from "../buttons";

type ButtonLinkActionProps = {
  type: "buttonLink";
  componentProps: ComponentProps<typeof ButtonLink>;
};

type IconButtonActionProps = {
  type: "iconButton";
  componentProps: ComponentProps<typeof IconButton>;
};

type ActionProps = ButtonLinkActionProps | IconButtonActionProps;

export type ListItemInfo = WithTestID<{
  label: string;
  value: string | React.ReactNode;
  numberOfLines?: number;
  icon?: IOIcons;
  action?: ActionProps;
  // Accessibility
  accessibilityLabel?: string;
}>;

export const ListItemInfo = ({
  label,
  value,
  numberOfLines = 2,
  icon,
  action,
  accessibilityLabel,
  testID
}: ListItemInfo) => {
  const theme = useIOTheme();
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

  const itemInfoTextComponent = useMemo(
    () => (
      <View
        accessible={action === undefined ? true : false}
        importantForAccessibility={
          action === undefined ? "yes" : "no-hide-descendants"
        }
        accessibilityElementsHidden={action !== undefined}
      >
        <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
          {label}
        </LabelSmall>
        {typeof value === "string" ? (
          <H6 color={theme["textBody-default"]} numberOfLines={numberOfLines}>
            {value}
          </H6>
        ) : (
          value
        )}
      </View>
    ),
    [label, value, numberOfLines, theme, action]
  );

  const listItemInfoAction = useCallback(() => {
    if (action) {
      const { type, componentProps } = action;

      const accessibilityLabel = `${listItemAccessibilityLabel}; ${componentProps.accessibilityLabel}`;
      switch (type) {
        case "buttonLink":
          return (
            <ButtonLink
              {...componentProps}
              accessibilityLabel={accessibilityLabel}
            />
          );
        case "iconButton":
          return (
            <IconButton
              {...componentProps}
              accessibilityLabel={accessibilityLabel}
            />
          );
        default:
          return <></>;
      }
    }
    return <></>;
  }, [action, listItemAccessibilityLabel]);

  return (
    <View
      style={IOListItemStyles.listItem}
      testID={testID}
      accessible={action === undefined ? true : false}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={IOListItemStyles.listItemInner}>
        {icon && (
          <View style={{ marginRight: IOListItemVisualParams.actionMargin }}>
            <Icon
              name={icon}
              color="grey-450"
              size={IOListItemVisualParams.iconSize}
            />
          </View>
        )}
        <View style={IOStyles.flex}>{itemInfoTextComponent}</View>
        {action && (
          <View style={{ marginLeft: IOListItemVisualParams.actionMargin }}>
            {listItemInfoAction()}
          </View>
        )}
      </View>
    </View>
  );
};

export default ListItemInfo;
