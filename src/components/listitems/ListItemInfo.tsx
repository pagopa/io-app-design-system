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
import { Badge } from "../badge";

type ButtonLinkActionProps = {
  type: "buttonLink";
  componentProps: ComponentProps<typeof ButtonLink>;
};

type IconButtonActionProps = {
  type: "iconButton";
  componentProps: ComponentProps<typeof IconButton>;
};

type BadgeProps = {
  type: "badge";
  componentProps: ComponentProps<typeof Badge>;
};

type RightElementProps =
  | ButtonLinkActionProps
  | IconButtonActionProps
  | BadgeProps;

export type ListItemInfo = WithTestID<{
  label: string;
  value: string | React.ReactNode;
  numberOfLines?: number;
  icon?: IOIcons;
  rightElement?: RightElementProps;
  // Accessibility
  accessibilityLabel?: string;
}>;

export const ListItemInfo = ({
  label,
  value,
  numberOfLines = 2,
  icon,
  rightElement,
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
        accessible={rightElement === undefined ? true : false}
        importantForAccessibility={
          rightElement === undefined || rightElement.type === "badge"
            ? "yes"
            : "no-hide-descendants"
        }
        accessibilityElementsHidden={
          rightElement !== undefined && rightElement.type !== "badge"
        }
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
    [label, value, numberOfLines, theme, rightElement]
  );

  const listItemInfoAction = useCallback(() => {
    if (rightElement) {
      const { type, componentProps } = rightElement;

      switch (type) {
        case "buttonLink":
          const buttonLinkAccessibilityLabel = `${listItemAccessibilityLabel}; ${componentProps.accessibilityLabel}`;

          return (
            <ButtonLink
              {...componentProps}
              accessibilityLabel={buttonLinkAccessibilityLabel}
            />
          );
        case "iconButton":
          const iconButtonAccessibilityLabel = `${listItemAccessibilityLabel}; ${componentProps.accessibilityLabel}`;
          return (
            <IconButton
              {...componentProps}
              accessibilityLabel={iconButtonAccessibilityLabel}
            />
          );
        case "badge":
          return <Badge {...componentProps} />;
        default:
          return <></>;
      }
    }
    return <></>;
  }, [rightElement, listItemAccessibilityLabel]);

  return (
    <View
      style={IOListItemStyles.listItem}
      testID={testID}
      accessible={rightElement === undefined ? true : false}
      accessibilityLabel={listItemAccessibilityLabel}
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
        {rightElement && (
          <View style={{ marginLeft: IOListItemVisualParams.actionMargin }}>
            {listItemInfoAction()}
          </View>
        )}
      </View>
    </View>
  );
};

export default ListItemInfo;
