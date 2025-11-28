import React, { ComponentProps, ReactNode, useCallback, useMemo } from "react";
import { AccessibilityRole, Platform, Pressable, View } from "react-native";
import Animated from "react-native-reanimated";
import { IOListItemStyles, IOListItemVisualParams } from "../../core";
import { useIOTheme } from "../../context";
import { useListItemAnimation } from "../../hooks";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { IOButton, IOButtonLinkSpecificProps, IconButton } from "../buttons";
import { LogoPaymentWithFallback } from "../common/LogoPaymentWithFallback";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { IOLogoPaymentType } from "../logos";
import { BodySmall, H6 } from "../typography";
import { VSpacer } from "../layout";

type ButtonLinkActionProps = {
  type: "buttonLink";
  componentProps: Omit<IOButtonLinkSpecificProps, "variant">;
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

type TopElementProps = BadgeProps;

type GraphicProps =
  | {
      paymentLogoIcon?: IOLogoPaymentType;
      icon?: never;
    }
  | {
      paymentLogoIcon?: never;
      icon?: IOIcons;
    };

type InteractiveProps = Pick<
  ComponentProps<typeof Pressable>,
  "onLongPress" | "accessibilityActions" | "onAccessibilityAction"
>;

export type ListItemInfo = WithTestID<{
  value: string | ReactNode;
  label?: string;
  numberOfLines?: number;
  endElement?: EndElementProps;
  topElement?: TopElementProps;
  // Accessibility
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  reversed?: boolean;
}> &
  GraphicProps &
  InteractiveProps;

const PAYMENT_LOGO_SIZE: IOIconSizeScale = 24;

export const ListItemInfo = ({
  value,
  label,
  numberOfLines = 2,
  reversed = false,
  icon,
  paymentLogoIcon,
  endElement,
  topElement,
  accessibilityLabel,
  accessibilityRole,
  accessibilityActions,
  onAccessibilityAction,
  onLongPress,
  testID
}: ListItemInfo) => {
  const theme = useIOTheme();
  const { dynamicFontScale, spacingScaleMultiplier, hugeFontEnabled } =
    useIOFontDynamicScale();

  const { onPressIn, onPressOut, scaleAnimatedStyle, backgroundAnimatedStyle } =
    useListItemAnimation();

  const componentValueToAccessibility = useMemo(
    () => (typeof value === "string" ? value : ""),
    [value]
  );

  const listItemAccessibilityLabel = useMemo(
    () =>
      accessibilityLabel ??
      (label
        ? `${label}; ${componentValueToAccessibility}`
        : componentValueToAccessibility),
    [label, componentValueToAccessibility, accessibilityLabel]
  );

  const itemInfoTextComponent = useMemo(
    () => (
      <View
        accessible={Platform.OS === "ios"}
        style={{ flexDirection: reversed ? "column-reverse" : "column" }}
      >
        {topElement?.type === "badge" && (
          <View style={{ alignSelf: "flex-start" }}>
            <Badge {...topElement.componentProps} />
            <VSpacer size={4} />
          </View>
        )}
        {label && (
          <BodySmall weight="Regular" color={theme["textBody-tertiary"]}>
            {label}
          </BodySmall>
        )}
        {typeof value === "string" ? (
          <H6 color={theme["textBody-default"]} numberOfLines={numberOfLines}>
            {value}
          </H6>
        ) : (
          value
        )}
      </View>
    ),
    [label, value, numberOfLines, theme, reversed, topElement]
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
            <IOButton
              variant="link"
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

  const ListItemInfoContent = () => (
    <>
      {icon && !hugeFontEnabled && (
        <Icon
          allowFontScaling
          name={icon}
          color={theme["icon-decorative"]}
          size={IOListItemVisualParams.iconSize}
        />
      )}
      {paymentLogoIcon && (
        <LogoPaymentWithFallback
          brand={paymentLogoIcon}
          size={PAYMENT_LOGO_SIZE}
        />
      )}
      <View style={{ flex: 1 }}>{itemInfoTextComponent}</View>
      {endElement && <View>{listItemInfoAction()}</View>}
    </>
  );

  if (onLongPress) {
    return (
      <Pressable
        onLongPress={onLongPress}
        testID={testID}
        accessible={!endElement}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onTouchEnd={onPressOut}
        accessibilityRole={"button"}
        accessibilityLabel={listItemAccessibilityLabel}
        accessibilityActions={accessibilityActions}
        onAccessibilityAction={onAccessibilityAction}
      >
        <Animated.View
          style={[IOListItemStyles.listItem, backgroundAnimatedStyle]}
        >
          <Animated.View
            style={[
              IOListItemStyles.listItemInner,
              {
                columnGap:
                  IOListItemVisualParams.iconMargin *
                  dynamicFontScale *
                  spacingScaleMultiplier
              },
              scaleAnimatedStyle
            ]}
          >
            <ListItemInfoContent />
          </Animated.View>
        </Animated.View>
      </Pressable>
    );
  } else {
    return (
      <View
        style={IOListItemStyles.listItem}
        testID={testID}
        accessible={!endElement}
        accessibilityLabel={listItemAccessibilityLabel}
        accessibilityRole={accessibilityRole}
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
          <ListItemInfoContent />
        </View>
      </View>
    );
  }
};

export default ListItemInfo;
