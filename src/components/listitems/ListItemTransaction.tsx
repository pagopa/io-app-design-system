import React, { ReactNode } from "react";
import { ImageURISource, View } from "react-native";
import Placeholder from "rn-placeholder";

import {
  IOColors,
  IOListItemLogoMargin,
  IOListItemStyles,
  IOListItemVisualParams,
  IOStyles,
  IOVisualCostants,
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
import { HStack } from "../stack";
import { H6, BodySmall } from "../typography";
import {
  PressableBaseProps,
  PressableListItemBase
} from "./PressableListItemsBase";

export type ListItemTransactionBadge = {
  text: string;
  variant: Badge["variant"];
};

export type ListItemTransactionLogo =
  | IOLogoPaymentType
  | ImageURISource
  | ReactNode;

export type ListItemTransaction = WithTestID<
  PressableBaseProps & {
    showChevron?: boolean;
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
          transaction: {
            amount: string;
            amountAccessibilityLabel: string;
            badge?: never;
            refund?: boolean;
          };
        }
      | {
          transaction: {
            amount?: string;
            amountAccessibilityLabel?: string;
            badge: ListItemTransactionBadge;
            refund?: never;
          };
        }
    )
>;

const CARD_LOGO_SIZE: IOIconSizeScale = 24;
const MUNICIPALITY_LOGO_SIZE = 44;
// this is the <Avatar/>'s "small" size,
// since it is bigger than the card logos, we use
// it as a base size for homogeneous sizing via container size.

const StartComponent = ({
  logoIcon
}: {
  logoIcon: ListItemTransactionLogo;
}) => {
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
  showChevron = false,
  isLoading = false,
  paymentLogoIcon,
  onPress,
  subtitle,
  testID,
  title,
  transaction: { amount, amountAccessibilityLabel, badge, refund },
  numberOfLines = 2,
  accessible
}: ListItemTransaction) => {
  const theme = useIOTheme();

  if (isLoading) {
    return <SkeletonComponent />;
  }

  const interactiveColor: IOColors = theme["interactiveElem-default"];

  const amountColorDefault: IOColors = theme["textBody-default"];
  const amountColorRefund: IOColors = theme.successText;

  const amountColor = refund ? amountColorRefund : amountColorDefault;

  const ListItemTransactionContent = () => (
    <>
      <HStack
        space={IOListItemLogoMargin}
        style={{ alignItems: "center", flexShrink: 1 }}
      >
        {paymentLogoIcon && (
          <View
            style={{
              width: MUNICIPALITY_LOGO_SIZE,
              alignItems: "center"
            }}
          >
            <StartComponent logoIcon={paymentLogoIcon} />
          </View>
        )}
        <View style={{ flexShrink: 1 }}>
          <BodySmall
            numberOfLines={numberOfLines}
            color={theme["textBody-default"]}
            weight="Semibold"
          >
            {title}
          </BodySmall>
          <BodySmall weight="Regular" color={theme["textBody-tertiary"]}>
            {subtitle}
          </BodySmall>
        </View>
      </HStack>
      <HStack style={{ alignItems: "center" }}>
        {badge ? (
          <Badge variant={badge?.variant} text={badge?.text} />
        ) : (
          <H6
            accessibilityLabel={amountAccessibilityLabel}
            color={showChevron ? interactiveColor : amountColor}
            numberOfLines={numberOfLines}
          >
            {amount}
          </H6>
        )}
        {showChevron && (
          <Icon
            name="chevronRightListItem"
            color={interactiveColor}
            size={IOListItemVisualParams.chevronSize}
          />
        )}
      </HStack>
    </>
  );

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
        <View
          style={[
            IOListItemStyles.listItemInner,
            { columnGap: IOListItemVisualParams.iconMargin }
          ]}
        >
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
