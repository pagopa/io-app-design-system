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
  useIOTheme
} from "../../core";
import { IOIcons, Icon } from "../icons";
import { HSpacer, VSpacer } from "../spacer";
import { H6, LabelSmall, LabelLink } from "../typography";
import { NativeSwitch } from "../switch/NativeSwitch";
import { Badge } from "../badge";
import { IOLogoPaymentType, LogoPayment } from "../logos";

type PartialProps = {
  label: string;
  onSwitchValueChange?: (newValue: boolean) => void;
  description?: string;
  action?: SwitchAction;
  isLoading?: boolean;
  badge?: Badge;
};

export type SwitchAction = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
};

type ListItemSwitchGraphicProps =
  | { icon?: never; paymentLogo: IOLogoPaymentType }
  | { icon: IOIcons; paymentLogo?: never }
  | { icon?: never; paymentLogo?: never };

const DISABLED_OPACITY = 0.5;

/* Estimated height of the native switch component,
both on iOS & Android */
const ESTIMATED_SWITCH_HEIGHT: number = 32;

type ListItemSwitch = PartialProps &
  ListItemSwitchGraphicProps &
  Pick<React.ComponentProps<typeof Switch>, "value" | "disabled">;

export const ListItemSwitch = React.memo(
  ({
    label,
    description,
    icon,
    paymentLogo,
    value,
    disabled,
    action,
    isLoading,
    badge,
    onSwitchValueChange
  }: ListItemSwitch) => {
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
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            {icon && (
              <View
                style={{
                  marginRight: IOSelectionListItemVisualParams.iconMargin,
                  alignSelf: "flex-start"
                }}
              >
                <Icon
                  name={icon}
                  color="grey-300"
                  size={IOSelectionListItemVisualParams.iconSize}
                />
              </View>
            )}
            {paymentLogo && (
              <View
                style={{
                  marginRight: IOSelectionListItemVisualParams.iconMargin,
                  alignSelf: "center"
                }}
              >
                <LogoPayment
                  name={paymentLogo}
                  size={IOSelectionListItemVisualParams.iconSize}
                />
              </View>
            )}

            <H6 color={"black"} style={{ flex: 1 }}>
              {label}
            </H6>
          </View>
          <HSpacer size={8} />
          <View
            style={{
              justifyContent: "center",
              alignSelf: "flex-start",
              minHeight: ESTIMATED_SWITCH_HEIGHT
            }}
          >
            {badge && (
              <Badge
                text={badge.text}
                variant={badge.variant}
                testID={badge.testID}
              />
            )}
            {isLoading && <ActivityIndicator color={"black"} />}
            {!isLoading && !badge && (
              <NativeSwitch value={value} onValueChange={onSwitchValueChange} />
            )}
          </View>
        </View>
        {description && (
          <>
            <VSpacer size={IOSelectionListItemVisualParams.descriptionMargin} />
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
    );
  }
);
