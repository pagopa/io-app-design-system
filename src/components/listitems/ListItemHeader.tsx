import React, { ComponentProps, useCallback, useMemo } from "react";
import { View } from "react-native";
import {
  IOListItemStyles,
  IOListItemVisualParams,
  IOSpacingScale,
  IOStyles,
  useIOTheme
} from "../../core";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { ButtonLink, IconButton } from "../buttons";
import { IOIcons, Icon } from "../icons";
import { H6 } from "../typography";

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

type IconProps =
  | {
      iconName: IOIcons;
      iconColor?: ComponentProps<typeof Icon>["color"];
    }
  | { iconName?: never; iconColor?: never };

type EndElementProps =
  | ButtonLinkActionProps
  | IconButtonActionProps
  | BadgeProps;

export type ListItemHeader = WithTestID<{
  label: string;
  numberOfLines?: number;
  endElement?: EndElementProps;
  // Accessibility
  accessibilityLabel?: string;
}> &
  IconProps;

const iconMargin: IOSpacingScale = 8;

export const ListItemHeader = ({
  label,
  iconName,
  iconColor,
  endElement,
  accessibilityLabel,
  testID
}: ListItemHeader) => {
  const theme = useIOTheme();

  const { dynamicFontScale, spacingScaleMultiplier, hugeFontEnabled } =
    useIOFontDynamicScale();

  const listItemAccessibilityLabel = useMemo(
    () => (accessibilityLabel ? accessibilityLabel : `${label}`),
    [label, accessibilityLabel]
  );

  const itemInfoTextComponent = useMemo(
    () => (
      <View
        accessible={endElement === undefined ? true : false}
        importantForAccessibility={
          endElement !== undefined && endElement.type !== "badge"
            ? "no-hide-descendants"
            : "yes"
        }
        accessibilityElementsHidden={
          endElement !== undefined && endElement.type !== "badge"
        }
      >
        <H6 role="heading" color={theme["textBody-tertiary"]}>
          {label}
        </H6>
      </View>
    ),
    [label, theme, endElement]
  );

  const listItemAction = useCallback(() => {
    if (endElement) {
      const { type, componentProps } = endElement;

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
  }, [endElement, listItemAccessibilityLabel]);

  return (
    <View
      style={IOListItemStyles.listItem}
      testID={testID}
      accessible={endElement === undefined ? true : false}
      accessibilityLabel={listItemAccessibilityLabel}
    >
      <View
        style={IOListItemStyles.listItemInner}
        importantForAccessibility={endElement ? "auto" : "no-hide-descendants"}
      >
        {iconName && !hugeFontEnabled && (
          <View
            style={{
              marginRight:
                iconMargin * dynamicFontScale * spacingScaleMultiplier
            }}
          >
            <Icon
              allowFontScaling
              name={iconName}
              color={iconColor ?? theme["icon-decorative"]}
              size={IOListItemVisualParams.iconSize}
            />
          </View>
        )}
        <View style={IOStyles.flex}>{itemInfoTextComponent}</View>
        {endElement && (
          <View style={{ marginLeft: IOListItemVisualParams.actionMargin }}>
            {listItemAction()}
          </View>
        )}
      </View>
    </View>
  );
};

export default ListItemHeader;
