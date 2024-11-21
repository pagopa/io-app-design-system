import * as React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import Placeholder from "rn-placeholder";
import { IOListItemVisualParams, IOSpacer, useIOTheme } from "../../core";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { Icon } from "../icons";
import { HStack, VStack } from "../stack";
import { Body, H6, BodySmall } from "../typography";
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
        paymentNotice: {
          status: Extract<PaymentNoticeStatus, "default">;
          amount: string;
          amountAccessibilityLabel: string;
        };
        badgeText?: never;
      }
    | {
        paymentNotice: {
          status: Exclude<PaymentNoticeStatus, "default">;
          amount?: string;
          amountAccessibilityLabel?: string;
        };
        badgeText: string;
      }
  )
>;

const styles = StyleSheet.create({
  endBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});

const ModulePaymentNoticeContent = ({
  title,
  subtitle,
  paymentNotice: { status, amount, amountAccessibilityLabel },
  badgeText = ""
}: Omit<ModulePaymentNoticeProps, "isLoading" | "onPress" | "testID">) => {
  const theme = useIOTheme();

  const AmountOrBadgeComponent = () => {
    switch (status) {
      case "default":
        return (
          <H6
            accessibilityLabel={amountAccessibilityLabel}
            color={theme["interactiveElem-default"]}
            numberOfLines={1}
          >
            {amount}
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
    <HStack space={IOListItemVisualParams.iconMargin as IOSpacer}>
      <View style={{ flexGrow: 1, flexShrink: 1 }}>
        {title && (
          <BodySmall
            numberOfLines={1}
            weight="Regular"
            color={theme["textBody-tertiary"]}
          >
            {title}
          </BodySmall>
        )}
        {subtitle && (
          <Body
            color={theme["interactiveElem-default"]}
            numberOfLines={2}
            weight="Semibold"
          >
            {subtitle}
          </Body>
        )}
      </View>
      <View style={styles.endBlock}>
        <AmountOrBadgeComponent />
        <Icon
          name="chevronRightListItem"
          color={theme["interactiveElem-default"]}
          size={IOListItemVisualParams.chevronSize}
        />
      </View>
    </HStack>
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
      <VStack space={4}>
        <Placeholder.Box animate="fade" radius={8} width={120} height={12} />
        <Placeholder.Box animate="fade" radius={8} width={180} height={16} />
      </VStack>
    }
    endBlock={
      <Placeholder.Box animate="fade" radius={16} width={64} height={24} />
    }
  />
);
