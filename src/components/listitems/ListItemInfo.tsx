import React, { ComponentProps, ReactNode, useCallback, useMemo } from "react";
import { AccessibilityRole, Pressable, View } from "react-native";
import Animated from "react-native-reanimated";
import { useIOTheme } from "../../context";
import { IOListItemStyles, IOListItemVisualParams } from "../../core";
import { useListItemAnimation } from "../../hooks";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { IOButton, IOButtonLinkSpecificProps, IconButton } from "../buttons";
import { LogoPaymentWithFallback } from "../common/LogoPaymentWithFallback";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { VSpacer } from "../layout";
import { IOLogoPaymentType } from "../logos";
import { BodySmall, H6 } from "../typography";

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

  // Determine if there are interactive elements
  const hasInteractiveElements =
    endElement?.type === "buttonLink" || endElement?.type === "iconButton";

  const componentValueToAccessibility = useMemo(
    () => (typeof value === "string" ? value : ""),
    [value]
  );

  const badgeText =
    topElement?.type === "badge" ? topElement.componentProps.text ?? "" : "";

  const listItemAccessibilityLabel =
    accessibilityLabel ??
    [badgeText, label, componentValueToAccessibility]
      .filter(Boolean)
      .join("; ");

  const itemInfoTextComponent = useMemo(
    () => (
      <View
        accessible={hasInteractiveElements}
        accessibilityLabel={
          hasInteractiveElements ? listItemAccessibilityLabel : undefined
        }
        importantForAccessibility={
          hasInteractiveElements ? "yes" : "no-hide-descendants"
        }
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
      {endElement && (
        <View
          accessible={false}
          importantForAccessibility={
            hasInteractiveElements ? "auto" : "no-hide-descendants"
          }
        >
          {listItemInfoAction()}
        </View>
      )}
    </>
  );

  if (onLongPress) {
    return (
      <Pressable
        onLongPress={onLongPress}
        testID={testID}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onTouchEnd={onPressOut}
        accessible={true}
        accessibilityRole={"button"}
        accessibilityLabel={accessibilityLabel}
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
        accessible={!hasInteractiveElements}
        accessibilityLabel={
          hasInteractiveElements ? undefined : listItemAccessibilityLabel
        }
        accessibilityRole={
          hasInteractiveElements ? undefined : accessibilityRole
        }
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
