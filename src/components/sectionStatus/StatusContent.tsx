import React, { ComponentProps } from "react";
import { AccessibilityRole, StyleSheet, View } from "react-native";
import { IOColors } from "../../core/IOColors";
import { WithTestID } from "../../utils/types";
import { IOIcons, Icon } from "../icons";
import { Label } from "../typography";

const iconSize = 24;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 8,
        paddingTop: 8,
        alignItems: "flex-start",
        alignContent: "center"
    },
    alignCenter: { alignSelf: "center" },
    text: { marginLeft: 16, flex: 1 }
});

type Props = WithTestID<{
    accessible?: boolean;
    accessibilityHint?: string;
    accessibilityLabel?: string;
    accessibilityRole?: AccessibilityRole;
    backgroundColor: IOColors;
    iconName: IOIcons;
    viewRef: React.RefObject<View>;
    foregroundColor: ComponentProps<typeof Label>["color"];
    labelPaddingVertical?: number;
}>;

export const StatusContent: React.FC<Props> = ({
    accessible,
    accessibilityHint,
    accessibilityLabel,
    accessibilityRole,
    backgroundColor,
    children,
    iconName,
    viewRef,
    foregroundColor,
    labelPaddingVertical
}) => (
    <View
        accessibilityHint={accessibilityHint}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole={accessibilityRole}
        accessible={accessible ?? true}
        ref={viewRef}
        style={[styles.container, { backgroundColor: IOColors[backgroundColor] }]}
        testID={"SectionStatusContent"}
    >
        <View style={styles.alignCenter}>
            <Icon color={foregroundColor} name={iconName} size={iconSize} />
        </View>
        <Label
            color={foregroundColor}
            style={[
                styles.text,
                labelPaddingVertical ? { paddingVertical: labelPaddingVertical } : {}
            ]}
            weight={"Regular"}
        >
            {children}
        </Label>
    </View>
);

export enum LevelEnum {
    "critical" = "critical",

    "warning" = "warning",

    "normal" = "normal"
}

export const statusColorMap: Record<LevelEnum, IOColors> = {
    [LevelEnum.normal]: "aqua",
    [LevelEnum.critical]: "red",
    [LevelEnum.warning]: "orange"
};

export const statusIconMap: Record<LevelEnum, IOIcons> = {
    [LevelEnum.normal]: "ok",
    [LevelEnum.critical]: "notice",
    [LevelEnum.warning]: "info"
};

export const getStatusTextColor = (
    level: LevelEnum
): "bluegreyDark" | "white" =>
    level === LevelEnum.normal ? "bluegreyDark" : "white";