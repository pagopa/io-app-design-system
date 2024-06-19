import React, { ComponentProps, useMemo } from "react";
import { View } from "react-native";
import {
  IOListItemStyles,
  IOListItemVisualParams,
  IOSpacingScale,
  IOStyles,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { IOIcons, Icon } from "../icons";
import { H3, H6 } from "../typography";

type ValueProps = ComponentProps<typeof H3>;

type IconProps =
  | {
      iconName: IOIcons;
      iconColor?: ComponentProps<typeof Icon>["color"];
    }
  | { iconName?: never; iconColor?: never };

export type ListItemAmount = WithTestID<{
  label: string;
  valueElementProps?: ValueProps;
  valueString: string;
  // Accessibility
  accessibilityLabel?: string;
}> &
  IconProps;

const iconMargin: IOSpacingScale = 8;

export const ListItemAmount = ({
  label,
  iconName,
  iconColor,
  valueElementProps,
  valueString,
  accessibilityLabel,
  testID
}: ListItemAmount) => {
  const theme = useIOTheme();

  const listItemAccessibilityLabel = useMemo(
    () => (accessibilityLabel ? accessibilityLabel : `${label}`),
    [label, accessibilityLabel]
  );

  const itemInfoTextComponent = (
    <View
      accessible={false}
      importantForAccessibility={"no-hide-descendants"}
      accessibilityElementsHidden={false}
    >
      <H6 weight="Regular" color={theme["textBody-tertiary"]}>
        {label}
      </H6>
    </View>
  );

  return (
    <View
      style={IOListItemStyles.listItem}
      testID={testID}
      accessible
      accessibilityLabel={listItemAccessibilityLabel}
    >
      <View style={IOListItemStyles.listItemInner}>
        {iconName && (
          <View style={{ marginRight: iconMargin }}>
            <Icon
              name={iconName}
              color={iconColor ?? theme["icon-decorative"]}
              size={IOListItemVisualParams.iconSize}
            />
          </View>
        )}
        <View style={IOStyles.flex}>{itemInfoTextComponent}</View>
        <H3
          weight={"Semibold"}
          color={"black"}
          {...valueElementProps}
          accessibilityLabel={`${listItemAccessibilityLabel}; ${
            valueElementProps?.accessibilityLabel ?? ""
          }`}
        >
          {valueString}
        </H3>
      </View>
    </View>
  );
};

export default ListItemAmount;
