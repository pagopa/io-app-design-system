import React from "react";
import { Switch, View } from "react-native";
import {
    IOSelectionListItemStyles,
    IOSelectionListItemVisualParams,
    IOStyles,
    useIOTheme
} from "../../core";
import { IOIcons, Icon } from "../icons";
import { HSpacer, VSpacer } from "../spacer";
import { H6, LabelSmall } from "../typography";
import { NativeSwitch } from "./NativeSwitch";

type Props = {
    label: string;
    onSwitchValueChange?: (newValue: boolean) => void;
    description?: string;
    icon?: IOIcons;
};

const DISABLED_OPACITY = 0.5;

type OwnProps = Props &
    Pick<React.ComponentProps<typeof Switch>, "value" | "disabled">;

export const SwitchListItem = React.memo(({
    label,
    description,
    icon,
    value,
    disabled,
    onSwitchValueChange
}: OwnProps) => {
    const theme = useIOTheme();

    return (
        <View
            testID="SwitchListItem"
            style={[
                IOSelectionListItemStyles.listItem,
                {
                    opacity: disabled ? DISABLED_OPACITY : 1
                }
            ]}
            pointerEvents={disabled ? "none" : "auto"}
            needsOffscreenAlphaCompositing={true}
        >
            <View
                style={[
                    IOSelectionListItemStyles.listItemInner,
                    { alignItems: "center" }
                ]}
            >
                <View style={{ flexShrink: 1 }}>
                    <View style={[IOStyles.row, { flexShrink: 1 }]}>
                        {icon && (
                            <View
                                style={{
                                    marginRight: IOSelectionListItemVisualParams.iconMargin
                                }}
                            >
                                <Icon
                                    name={icon}
                                    color="grey-300"
                                    size={IOSelectionListItemVisualParams.iconSize}
                                />
                            </View>
                        )}
                        <H6 color={"black"} style={{ flexShrink: 1 }}>
                            {label}
                        </H6>
                    </View>
                    {description && (
                        <>
                            <VSpacer
                                size={IOSelectionListItemVisualParams.descriptionMargin}
                            />
                            <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
                                {description}
                            </LabelSmall>
                        </>
                    )}
                </View>

                <HSpacer size={8} />
                <View style={{ flexShrink: 0, alignSelf: "flex-start" }}>
                    <NativeSwitch value={value} onValueChange={onSwitchValueChange} />
                </View>
            </View>
        </View>
    );
});
