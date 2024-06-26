import * as React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import Placeholder from "rn-placeholder";
import {
  IOListItemVisualParams,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { getAccessibleAmountText } from "../../utils/accessibility";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { Icon } from "../icons";
import { VSpacer } from "../spacer";
import { H6, LabelSmall, LabelSmallAlt } from "../typography";
import { ModuleStatic } from "./ModuleStatic";
import { PressableModuleBase } from "./PressableModuleBase";

export type PaymentNoticeStatus =
  | "default"
  | "paid"
  | "error"
  | "expired"
  | "revoked"
  | "canceled"
  | "in-progress";

export type ModulePaymentNoticeProps = WithTestID<
  {
    isLoading?: boolean;
    accessibilityLabel?: string;
    title?: string;
    subtitle: string;
    onPress: (event: GestureResponderEvent) => void;
  } & (
    | {
        paymentNoticeStatus: Extract<PaymentNoticeStatus, "default">;
        paymentNoticeAmount: string;
        badgeText?: never;
      }
    | {
        paymentNoticeStatus: Exclude<PaymentNoticeStatus, "default">;
        paymentNoticeAmount?: never;
        badgeText: string;
      }
  )
>;

const styles = StyleSheet.create({
  rightSection: {
    marginLeft: IOListItemVisualParams.iconMargin,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});

const ModulePaymentNoticeContent = ({
  title,
  subtitle,
  paymentNoticeStatus,
  paymentNoticeAmount,
  badgeText = ""
}: Omit<ModulePaymentNoticeProps, "isLoading" | "onPress" | "testID">) => {
  const theme = useIOTheme();
  const { isExperimental } = useIOExperimentalDesign();

  const AmountOrBadgeComponent = () => {
    switch (paymentNoticeStatus) {
      case "default":
        return (
          <H6
            accessibilityLabel={getAccessibleAmountText(paymentNoticeAmount)}
            color={isExperimental ? "blueIO-500" : "blue"}
            numberOfLines={1}
          >
            {paymentNoticeAmount}
          </H6>
        );
      case "paid":
        return <Badge variant="success" text={badgeText} />;
      case "error":
        return <Badge variant="error" text={badgeText} />;
      case "expired":
        return <Badge variant="default" text={badgeText} />;
      case "revoked":
        return <Badge variant="default" text={badgeText} />;
      case "canceled":
        return <Badge variant="default" text={badgeText} />;
      case "in-progress":
        return <Badge variant="info" text={badgeText} />;
    }
  };

  return (
    <>
      <View style={{ flexGrow: 1, flexShrink: 1, paddingEnd: 8 }}>
        {title && (
          <LabelSmall
            numberOfLines={1}
            weight="Regular"
            color={theme["textBody-tertiary"]}
          >
            {title}
          </LabelSmall>
        )}
        {subtitle && (
          <LabelSmallAlt
            color={theme["interactiveElem-default"]}
            numberOfLines={2}
          >
            {subtitle}
          </LabelSmallAlt>
        )}
      </View>
      <View style={styles.rightSection}>
        <AmountOrBadgeComponent />
        <Icon
          name="chevronRightListItem"
          color={isExperimental ? "blueIO-500" : "blue"}
          size={IOListItemVisualParams.chevronSize}
        />
      </View>
    </>
  );
};

/**
 * The `ModulePaymentNotice` component is a custom button component with an extended outline style.
 * It provides an animated scaling effect when pressed.
 *
 * @param {boolean} isLoading - If true, displays a skeleton loading component.
 * @param {function} onPress - The function to be executed when the item is pressed.
 * @param {string} title - The title text to display.
 * @param {string} subtitle - The subtitle text to display.
 * @param {string} testID - The test ID for testing purposes.
 * @param {string} paymentNoticeAmount - The payment notice amount to display.
 * @param {string} paymentNoticeStatus - The status of the payment notice.
 */
export const ModulePaymentNotice = ({
  isLoading = false,
  testID,
  accessibilityLabel,
  onPress,
  ...rest
}: ModulePaymentNoticeProps) => {
  if (isLoading) {
    return <ModulePaymentNoticeSkeleton />;
  }

  return (
    <PressableModuleBase
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
    >
      <ModulePaymentNoticeContent {...rest} />
    </PressableModuleBase>
  );
};

const ModulePaymentNoticeSkeleton = () => (
  <ModuleStatic
    startBlock={
      <React.Fragment>
        {/* Rewrite it using HStack and VStack */}
        <View>
          <Placeholder.Box animate="fade" radius={8} width={121} height={13} />
          <VSpacer size={8} />
          <Placeholder.Box animate="fade" radius={8} width={179} height={16} />
        </View>
      </React.Fragment>
    }
    endBlock={
      <Placeholder.Box animate="fade" radius={16} width={62} height={24} />
    }
  />
);
