import * as O from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";
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

import { getAccessibleAmountText } from "../../utils/accessibility";
import { WithTestID } from "../../utils/types";
import { isImageUri } from "../../utils/url";
import { Avatar } from "../avatar/Avatar";
import { Badge } from "../badge/Badge";
import { LogoPaymentWithFallback } from "../common/LogoPaymentWithFallback";
import { IOIconSizeScale, Icon } from "../icons";
import { IOLogoPaymentType } from "../logos";
import { VSpacer } from "../spacer";
import { H6, LabelSmall } from "../typography";
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
        }
      | {
          transactionStatus: ListItemTransactionStatusWithBadge;
          badgeText: string;
          transactionAmount?: string;
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
  badgeText,
  transactionStatus = "success",
  numberOfLines = 2,
  accessible
}: ListItemTransaction) => {
  const { isExperimental } = useIOExperimentalDesign();
  const theme = useIOTheme();

  const maybeBadgeText = pipe(
    badgeText,
    O.fromNullable,
    O.getOrElse(() => "-")
  );

  if (isLoading) {
    return <SkeletonComponent />;
  }

  const interactiveColor: IOColors = isExperimental
    ? theme["interactiveElem-default"]
    : "blue";

  const ListItemTransactionContent = () => {
    const TransactionAmountOrBadgeComponent = () => {
      switch (transactionStatus) {
        case "success":
          return (
            <H6
              accessibilityLabel={getAccessibleAmountText(transactionAmount)}
              color={hasChevronRight ? interactiveColor : "black"}
              numberOfLines={numberOfLines}
            >
              {transactionAmount || ""}
            </H6>
          );
        case "refunded":
          return (
            <H6
              accessibilityLabel={getAccessibleAmountText(transactionAmount)}
              color={hasChevronRight ? interactiveColor : "success-700"}
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
          <LabelSmall
            weight="Semibold"
            numberOfLines={numberOfLines}
            color={theme["textBody-default"]}
          >
            {title}
          </LabelSmall>
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

  return pipe(
    onPress,
    O.fromNullable,
    O.fold(
      () => (
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
      ),
      onPress => (
        <PressableListItemBase
          onPress={onPress}
          testID={testID}
          accessibilityLabel={accessibilityLabel}
        >
          <ListItemTransactionContent />
        </PressableListItemBase>
      )
    )
  );
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
