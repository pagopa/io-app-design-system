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

  const itemInfoTextComponent = useMemo(
    () => (
      <View
        accessible
        accessibilityRole="header"
        accessibilityLabel={accessibilityLabel ?? label}
      >
        <H6 role="heading" color={theme["textBody-tertiary"]}>
          {label}
        </H6>
      </View>
    ),
    [label, accessibilityLabel, theme]
  );

  const listItemAction = useCallback(() => {
    if (endElement) {
      const { type, componentProps } = endElement;

      switch (type) {
        case "buttonLink":
          return <ButtonLink {...componentProps} />;
        case "iconButton":
          return <IconButton {...componentProps} />;
        case "badge":
          return <Badge {...componentProps} />;
        default:
          return <></>;
      }
    }
    return <></>;
  }, [endElement]);

  return (
    <View style={IOListItemStyles.listItem} testID={testID}>
      <View style={IOListItemStyles.listItemInner}>
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
