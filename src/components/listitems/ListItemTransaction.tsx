import * as O from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";
import React from "react";
import { ImageURISource, StyleSheet, View } from "react-native";
import Placeholder from "rn-placeholder";
import {
  IOColors,
  IOListItemStyles,
  IOListItemVisualParams,
  IOStyles,
  IOVisualCostants,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { Avatar } from "../avatar/Avatar";
import { Badge } from "../badge/Badge";
import { Icon } from "../icons";
import { IOLogoPaymentType, LogoPayment } from "../logos";
import { VSpacer } from "../spacer";
import { H5, H6, LabelSmall } from "../typography";
import {
  PressableBaseProps,
  PressableListItemBase
} from "./PressableListItemsBase";

type LogoNameOrUri = IOLogoPaymentType | ImageURISource;
export type ListItemTransaction = WithTestID<
  PressableBaseProps & {
    hasChevronRight?: boolean;
    isLoading?: boolean;
    paymentLogoOrUrl?: LogoNameOrUri;
    subtitle: string;
    title: string;
  } & (
      | {
          transactionStatus: "success";
          transactionAmount: string;
        }
      | {
          transactionStatus: "failure" | "pending";
          transactionAmount?: string;
        }
    )
>;

type LeftComponentProps = {
  logoNameOrUrl: LogoNameOrUri;
};

const isImageUrI = (
  value: IOLogoPaymentType | ImageURISource
): value is ImageURISource =>
  typeof value === "object" && value.uri !== undefined;

const LeftComponent = ({ logoNameOrUrl }: LeftComponentProps) => {
  if (isImageUrI(logoNameOrUrl)) {
    return <Avatar shape="circle" size="small" logoUri={[logoNameOrUrl]} />;
  } else {
    return (
      <View
        style={{
          width: IOVisualCostants.avatarSizeSmall,
          height: IOVisualCostants.avatarSizeSmall,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <LogoPayment name={logoNameOrUrl} />
      </View>
    );
  }
};

export const ListItemTransaction = ({
  accessibilityLabel,
  hasChevronRight = false,
  isLoading = false,
  paymentLogoOrUrl,
  onPress,
  subtitle,
  testID,
  title,
  transactionAmount,
  transactionStatus = "success"
}: ListItemTransaction) => {
  const theme = useIOTheme();

  if (isLoading) {
    return <SkeletonComponent />;
  }

  const designSystemBlue: IOColors = "blue";
  const ListItemTransactionContent = () => {
    const TransactionAmountOrBadgeComponent = () => {
      switch (transactionStatus) {
        case "success":
          return (
            <H6 color={hasChevronRight ? designSystemBlue : "black"}>
              {transactionAmount || "-"}
            </H6>
          );

        case "failure":
          return <Badge variant="error" text={"Failed"} />;
        case "pending":
          return <Badge variant="info" text={"Cancelled"} />;
      }
    };

    return (
      <>
        {paymentLogoOrUrl && (
          <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
            <LeftComponent logoNameOrUrl={paymentLogoOrUrl} />
          </View>
        )}
        <View style={IOStyles.flex}>
          <H5 numberOfLines={2}>{title}</H5>
          <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
            {subtitle}
          </LabelSmall>
          <VSpacer size={4} />
        </View>
        <View style={Styles.rightSection}>
          <TransactionAmountOrBadgeComponent />
          {hasChevronRight && (
            <Icon
              name="chevronRightListItem"
              color={designSystemBlue}
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
          accessible={true}
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
          radius={100}
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
