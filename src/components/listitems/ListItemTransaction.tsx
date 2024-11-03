import React from "react";
import { ImageURISource, StyleSheet, View } from "react-native";
import Placeholder from "rn-placeholder";

import {
  IOColors,
  IOListItemLogoMargin,
  IOListItemStyles,
  IOListItemVisualParams,
  IOStyles,
  IOVisualCostants,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { isImageUri } from "../../utils/url";
import { Avatar } from "../avatar/Avatar";
import { Badge } from "../badge/Badge";
import { LogoPaymentWithFallback } from "../common/LogoPaymentWithFallback";
import { IOIconSizeScale, Icon } from "../icons";
import { IOLogoPaymentType } from "../logos";
import { VSpacer } from "../spacer";
import { H6, LabelSmall, LabelSmallAlt } from "../typography";
import {
  PressableBaseProps,
  PressableListItemBase
} from "./PressableListItemsBase";

export type ListItemTransactionStatus =
  | "success"
  | "failure"
  | "pending"
  | "cancelled"
  | "refunded"
  | "reversal";

export type ListItemTransactionStatusWithoutBadge = Extract<
  ListItemTransactionStatus,
  "success" | "refunded"
>;

export type ListItemTransactionStatusWithBadge = Exclude<
  ListItemTransactionStatus,
  "success" | "refunded"
>;

export type ListItemTransactionLogo =
  | IOLogoPaymentType
  | ImageURISource
  | React.ReactNode;

export type ListItemTransaction = WithTestID<
  PressableBaseProps & {
    hasChevronRight?: boolean;
    isLoading?: boolean;
    /**
     * A logo that will be displayed on the left of the list item.
     *
     * Must be a {@link IOLogoPaymentType} or an {@link ImageURISource} or an {@link Icon}.
     */
    paymentLogoIcon?: ListItemTransactionLogo;
    subtitle: string;
    title: string;
    /**
     * The maximum number of lines to display for the title.
     * @default 2
     */
    numberOfLines?: number;
    accessible?: boolean;
  } & (
      | {
          transactionStatus: ListItemTransactionStatusWithoutBadge;
          badgeText?: string;
          transactionAmount: string;
          transactionAmountAccessibilityLabel: string;
        }
      | {
          transactionStatus: ListItemTransactionStatusWithBadge;
          badgeText: string;
          transactionAmount?: string;
          transactionAmountAccessibilityLabel?: string;
        }
    )
>;

type LeftComponentProps = {
  logoIcon: ListItemTransactionLogo;
};

const CARD_LOGO_SIZE: IOIconSizeScale = 24;
const MUNICIPALITY_LOGO_SIZE = 44;
// this is the <Avatar/>'s "small" size,
// since it is bigger than the card logos, we use
// it as a base size for homogeneous sizing via container size.

const LeftComponent = ({ logoIcon }: LeftComponentProps) => {
  if (isImageUri(logoIcon)) {
    return <Avatar logoUri={logoIcon} size="small" />;
  }
  if (React.isValidElement(logoIcon)) {
    return <>{logoIcon}</>;
  }
  return (
    <LogoPaymentWithFallback
      brand={logoIcon as IOLogoPaymentType}
      size={CARD_LOGO_SIZE}
    />
  );
};

export const ListItemTransaction = ({
  accessibilityLabel,
  hasChevronRight = false,
  isLoading = false,
  paymentLogoIcon,
  onPress,
  subtitle,
  testID,
  title,
  transactionAmount,
  transactionAmountAccessibilityLabel,
  badgeText,
  transactionStatus = "success",
  numberOfLines = 2,
  accessible
}: ListItemTransaction) => {
  const { isExperimental } = useIOExperimentalDesign();
  const theme = useIOTheme();

  const maybeBadgeText = badgeText ?? "-";

  if (isLoading) {
    return <SkeletonComponent />;
  }

  const interactiveColor: IOColors = isExperimental
    ? theme["interactiveElem-default"]
    : "blue";

  const amountColor: IOColors = theme["textBody-default"];
  const successColor: IOColors = theme.successText;

  const ListItemTransactionContent = () => {
    const TransactionAmountOrBadgeComponent = () => {
      switch (transactionStatus) {
        case "success":
          return (
            <H6
              accessibilityLabel={transactionAmountAccessibilityLabel}
              color={hasChevronRight ? interactiveColor : amountColor}
              numberOfLines={numberOfLines}
            >
              {transactionAmount || ""}
            </H6>
          );
        case "refunded":
          return (
            <H6
              accessibilityLabel={transactionAmountAccessibilityLabel}
              color={hasChevronRight ? interactiveColor : successColor}
              numberOfLines={numberOfLines}
            >
              {transactionAmount || ""}
            </H6>
          );
        case "failure":
        case "cancelled":
          return <Badge variant="error" text={maybeBadgeText} />;
        case "reversal":
          return <Badge variant="lightBlue" text={maybeBadgeText} />;
        case "pending":
          return <Badge variant="info" text={maybeBadgeText} />;
      }
    };

    return (
      <>
        {paymentLogoIcon && (
          <View
            style={{
              marginRight: IOListItemLogoMargin,
              width: MUNICIPALITY_LOGO_SIZE,
              alignItems: "center"
            }}
          >
            <LeftComponent logoIcon={paymentLogoIcon} />
          </View>
        )}
        <View style={IOStyles.flex}>
          <LabelSmallAlt
            numberOfLines={numberOfLines}
            color={theme["textBody-default"]}
          >
            {title}
          </LabelSmallAlt>
          <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
            {subtitle}
          </LabelSmall>
        </View>
        <View style={Styles.rightSection}>
          <TransactionAmountOrBadgeComponent />
          {hasChevronRight && (
            <Icon
              name="chevronRightListItem"
              color={interactiveColor}
              size={IOListItemVisualParams.chevronSize}
            />
          )}
        </View>
      </>
    );
  };

  if (onPress) {
    return (
      <PressableListItemBase
        onPress={onPress}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
      >
        <ListItemTransactionContent />
      </PressableListItemBase>
    );
  } else {
    return (
      <View
        style={IOListItemStyles.listItem}
        testID={testID}
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}
      >
        <View style={IOListItemStyles.listItemInner}>
          <ListItemTransactionContent />
        </View>
      </View>
    );
  }
};

const SkeletonComponent = () => (
  <View style={IOListItemStyles.listItem} accessible={false}>
    <View style={IOListItemStyles.listItemInner}>
      <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
        <Placeholder.Box
          animate="fade"
          height={IOVisualCostants.avatarSizeSmall}
          width={IOVisualCostants.avatarSizeSmall}
          radius={IOVisualCostants.avatarRadiusSizeSmall}
        />
      </View>
      <View style={IOStyles.flex}>
        <Placeholder.Box animate="fade" radius={8} width={62} height={16} />
        <VSpacer size={4} />
        <Placeholder.Box animate="fade" radius={8} width={107} height={16} />
      </View>
      <View style={{ marginLeft: IOListItemVisualParams.iconMargin }}>
        <Placeholder.Box animate="fade" radius={8} width={70} height={24} />
      </View>
    </View>
  </View>
);

const Styles = StyleSheet.create({
  rightSection: {
    marginLeft: IOListItemVisualParams.iconMargin,
    flexDirection: "row",
    alignItems: "center",
    height: "100%"
  }
});
