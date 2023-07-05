import React from "react";
import { View } from "react-native";
import {
    IOListItemStyles,
    IOListItemVisualParams,
    IOStyles,
    useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { Icon, IOIcons } from "../icons";
import { VSpacer } from "../spacer/Spacer";
import { H6, LabelSmall } from "../typography";

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
    return (
        <View
            style={IOListItemStyles.listItem}
            testID={testID}
            accessible={true}
            accessibilityLabel={accessibilityLabel}
        >
            <View style={IOListItemStyles.listItemInner}>
                {icon && (
                    <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
                        <Icon
                            name={icon}
                            color="grey-450"
                            size={IOListItemVisualParams.iconSize}
                        />
                    </View>
                )}
                <View style={IOStyles.flex}>
                    <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
                        {label}
                    </LabelSmall>
                    <VSpacer size={4} />
                    <H6
                        color={theme["textBody-default"]}
                        numberOfLines={numberOfLines}
                    >
                        {value}
                    </H6>
                </View>
                {action && (
                    <View style={{ marginLeft: IOListItemVisualParams.iconMargin }}>
                        {action}
                    </View>
                )}
            </View>
        </View>
    );
};

export default ListItemInfo;
