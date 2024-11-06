import React, { ComponentProps, useCallback, useMemo } from "react";
import { Platform, View } from "react-native";
import {
  IOListItemStyles,
  IOListItemVisualParams,
  IOStyles,
  useIOTheme
} from "../../core";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { ButtonLink, IconButton } from "../buttons";
import { LogoPaymentWithFallback } from "../common/LogoPaymentWithFallback";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { IOLogoPaymentType } from "../logos";
import { H6, LabelSmall } from "../typography";

type ButtonLinkActionProps = {
  type: "buttonLink";
  componentProps: ComponentProps<typeof ButtonLink>;
};

type IconButtonActionProps = {
  type: "iconButton";
  componentProps: ComponentProps<typeof IconButton>;
};

type BadgeProps = {
  type: "badge";
  componentProps: ComponentProps<typeof Badge>;
};

type EndElementProps =
  | ButtonLinkActionProps
  | IconButtonActionProps
  | BadgeProps;

export type ListItemInfo = WithTestID<{
  label: string;
  value: string | React.ReactNode;
  numberOfLines?: number;
  endElement?: EndElementProps;
  // Accessibility
  accessibilityLabel?: string;
}> &
  (
    | {
        paymentLogoIcon?: IOLogoPaymentType;
        icon?: never;
      }
    | {
        icon?: IOIcons;
        paymentLogoIcon?: never;
      }
  );

const PAYMENT_LOGO_SIZE: IOIconSizeScale = 24;

export const ListItemInfo = ({
  label,
  value,
  numberOfLines = 2,
  icon,
  paymentLogoIcon,
  endElement,
  accessibilityLabel,
  testID
}: ListItemInfo) => {
  const theme = useIOTheme();
  const { dynamicFontScale, spacingScaleMultiplier } = useIOFontDynamicScale();

  const componentValueToAccessibility = useMemo(
    () => (typeof value === "string" ? value : ""),
    [value]
  );

  const listItemAccessibilityLabel = useMemo(
    () =>
      accessibilityLabel
        ? accessibilityLabel
        : `${label}; ${componentValueToAccessibility}`,
    [label, componentValueToAccessibility, accessibilityLabel]
  );

  const itemInfoTextComponent = useMemo(
    () => (
      <View accessible={Platform.OS === "ios"}>
        <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
          {label}
        </LabelSmall>
        {typeof value === "string" ? (
          <H6 color={theme["textBody-default"]} numberOfLines={numberOfLines}>
            {value}
          </H6>
        ) : (
          value
        )}
      </View>
    ),
    [label, value, numberOfLines, theme]
  );

  const listItemInfoAction = useCallback(() => {
    if (endElement) {
      const { type, componentProps } = endElement;

      switch (type) {
        case "buttonLink":
          const buttonLinkAccessibilityLabel = `${
            componentProps.accessibilityLabel ?? componentProps.label
          }`;

          return (
            <ButtonLink
              {...componentProps}
              accessibilityLabel={buttonLinkAccessibilityLabel}
            />
          );
        case "iconButton":
          const iconButtonAccessibilityLabel = `${componentProps.accessibilityLabel}`;
          return (
            <IconButton
              {...componentProps}
              accessibilityLabel={iconButtonAccessibilityLabel}
            />
          );
        case "badge":
          return <Badge {...componentProps} />;
        default:
          return <></>;
      }
    }
    return <></>;
  }, [endElement]);

  return (
    <View
      style={IOListItemStyles.listItem}
      testID={testID}
      accessible={endElement === undefined ? true : false}
      accessibilityLabel={listItemAccessibilityLabel}
    >
      <View
        style={[
          IOListItemStyles.listItemInner,
          {
            columnGap:
              IOListItemVisualParams.iconMargin *
              dynamicFontScale *
              spacingScaleMultiplier
          }
        ]}
      >
        {icon && (
          <Icon
            allowFontScaling
            name={icon}
            color="grey-450"
            size={IOListItemVisualParams.iconSize}
          />
        )}
        {paymentLogoIcon && (
          <LogoPaymentWithFallback
            brand={paymentLogoIcon}
            size={PAYMENT_LOGO_SIZE}
          />
        )}
        <View style={IOStyles.flex}>{itemInfoTextComponent}</View>
        {endElement && <View>{listItemInfoAction()}</View>}
      </View>
    </View>
  );
};

export default ListItemInfo;
