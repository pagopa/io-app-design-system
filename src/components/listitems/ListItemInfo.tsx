import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  IOColors,
  IOListItemStyles,
  IOListItemVisualParams,
  IOStyles,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { makeFontStyleObject } from "../../utils/fonts";
import { WithTestID } from "../../utils/types";
import { IOIcons, Icon } from "../icons";
import { Body, H6, LabelSmall } from "../typography";

export type ListItemInfo = WithTestID<{
  label: string;
  value: string | React.ReactNode;
  numberOfLines?: number;
  icon?: IOIcons;
  // Accepted components: ButtonLink, IconButton
  // Don't use any components other than these
  action?: React.ReactNode;
  // Accessibility
  accessibilityLabel: string;
}>;

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyStyles = StyleSheet.create({
  textValue: {
    fontSize: 18,
    lineHeight: 24,
    ...makeFontStyleObject("SemiBold", undefined, "TitilliumWeb")
  }
});

export const ListItemInfo = ({
  label,
  value,
  numberOfLines = 2,
  icon,
  action,
  accessibilityLabel,
  testID
}: ListItemInfo) => {
  const { isExperimental } = useIOExperimentalDesign();
  const theme = useIOTheme();

  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const legacyItemInfoText = (
    <>
      {/* Let developer using a custom component (e.g: skeleton) */}
      {typeof label === "string" ? (
        <Body weight="Regular">{label}</Body>
      ) : (
        label
      )}
      {typeof value === "string" ? (
        <Text
          style={[legacyStyles.textValue, { color: IOColors.bluegreyDark }]}
          numberOfLines={numberOfLines}
        >
          {value}
        </Text>
      ) : (
        value
      )}
    </>
  );

  const itemInfoText = (
    <>
      <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
        {label}
      </LabelSmall>
      <H6 color={theme["textBody-default"]} numberOfLines={numberOfLines}>
        {value}
      </H6>
    </>
  );

  const itemInfoTextComponent = isExperimental
    ? itemInfoText
    : legacyItemInfoText;

  return (
    <View
      style={IOListItemStyles.listItem}
      testID={testID}
      accessible={true}
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
            {action}
          </View>
        )}
      </View>
    </View>
  );
};

export default ListItemInfo;
