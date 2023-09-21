import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Switch,
  View
} from "react-native";
import {
  IOSelectionListItemStyles,
  IOSelectionListItemVisualParams,
  IOStyles,
  useIOTheme
} from "../../core";
import { IOIcons, Icon } from "../icons";
import { HSpacer, VSpacer } from "../spacer";
import { H6, LabelSmall, LabelLink } from "../typography";
import { NativeSwitch } from "../switch/NativeSwitch";
import { Badge } from "../badge";

type Props = {
  label: string;
  onSwitchValueChange?: (newValue: boolean) => void;
  description?: string;
  icon?: IOIcons;
  action?: SwitchAction;
  isLoading?: boolean;
} & (
  | {
      badgeText: string;
      badgeVariant: Pick<Badge, "variant">["variant"];
    }
  | {
      badgeText?: undefined;
      badgeVariant?: undefined;
    }
);

export type SwitchAction = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
};

const DISABLED_OPACITY = 0.5;

type OwnProps = Props &
  Pick<React.ComponentProps<typeof Switch>, "value" | "disabled">;

export const ListItemSwitch = React.memo(
  ({
    label,
    description,
    icon,
    value,
    disabled,
    action,
    isLoading,
    badgeText,
    badgeVariant,
    onSwitchValueChange
  }: OwnProps) => {
    const theme = useIOTheme();

    return (
      <View
        testID="ListItemSwitch"
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
          <View style={{ flex: 1 }}>
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
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignContent: "space-between"
                }}
              >
                <H6 color={"black"} style={{ flex: 1 }}>
                  {label}
                </H6>
                <HSpacer size={8} />
                <View>
                  {badgeText && (
                    <Badge
                      text={badgeText}
                      variant={badgeVariant}
                      testID="ListItemSwitchBadge"
                    />
                  )}
                  {isLoading && <ActivityIndicator color={"black"} />}
                  {!isLoading && !badgeText && (
                    <NativeSwitch
                      value={value}
                      onValueChange={onSwitchValueChange}
                    />
                  )}
                </View>
              </View>
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
            {action && (
              <>
                <VSpacer size={IOSelectionListItemVisualParams.actionMargin} />
                <LabelLink fontSize="small" onPress={action.onPress}>
                  {action.label}
                </LabelLink>
              </>
            )}
          </View>
        </View>
      </View>
    );
  }
);
