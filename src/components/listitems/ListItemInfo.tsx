import { ComponentProps, ReactNode } from "react";
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

type GraphicProps =
  | { paymentLogoIcon?: IOLogoPaymentType; icon?: never }
  | { paymentLogoIcon?: never; icon?: IOIcons };

type InteractiveProps = Pick<
  ComponentProps<typeof Pressable>,
  "onLongPress" | "accessibilityActions" | "onAccessibilityAction"
>;

export type ListItemInfo = WithTestID<{
  value: string | ReactNode;
  label?: string;
  numberOfLines?: number;
  endElement?: EndElementProps;
  topElement?: BadgeProps;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  reversed?: boolean;
}> &
  GraphicProps &
  InteractiveProps;

const PAYMENT_LOGO_SIZE: IOIconSizeScale = 24;

const EndElementComponent = ({ type, componentProps }: EndElementProps) => {
  switch (type) {
    case "buttonLink":
      return (
        <IOButton
          variant="link"
          {...componentProps}
          accessibilityLabel={
            componentProps.accessibilityLabel ?? componentProps.label
          }
        />
      );
    case "iconButton":
      return (
        <IconButton
          {...componentProps}
          accessibilityLabel={componentProps.accessibilityLabel}
        />
      );
    case "badge":
      return <Badge {...componentProps} />;
    default:
      return null;
  }
};

const ListItemInfoContent = ({
  icon,
  paymentLogoIcon,
  label,
  value,
  numberOfLines,
  reversed,
  topElement,
  endElement,
  hasInteractiveElements,
  listItemAccessibilityLabel
}: Pick<
  ListItemInfo,
  | "icon"
  | "paymentLogoIcon"
  | "label"
  | "value"
  | "numberOfLines"
  | "reversed"
  | "topElement"
  | "endElement"
> & {
  hasInteractiveElements: boolean;
  listItemAccessibilityLabel?: string;
}) => {
  const theme = useIOTheme();
  const { hugeFontEnabled } = useIOFontDynamicScale();

  return (
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

      <View style={{ flex: 1 }}>
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
      </View>

      {endElement && (
        <View
          accessible={false}
          importantForAccessibility={
            hasInteractiveElements ? "auto" : "no-hide-descendants"
          }
        >
          <EndElementComponent {...endElement} />
        </View>
      )}
    </>
  );
};

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
  const { dynamicFontScale, spacingScaleMultiplier } = useIOFontDynamicScale();

  const { onPressIn, onPressOut, scaleAnimatedStyle, backgroundAnimatedStyle } =
    useListItemAnimation();

  const hasInteractiveElements =
    endElement?.type === "buttonLink" || endElement?.type === "iconButton";

  const componentValueToAccessibility = typeof value === "string" ? value : "";

  const topBadgeText =
    topElement?.type === "badge" ? topElement.componentProps.text ?? "" : "";

  const endBadgeText =
    endElement?.type === "badge" ? endElement.componentProps.text ?? "" : "";

  /**
   * Build text in VISUAL ORDER
   */
  const mainTextParts = reversed
    ? [componentValueToAccessibility, label]
    : [label, componentValueToAccessibility];

  const textParts = [topBadgeText, ...mainTextParts, endBadgeText];

  const listItemAccessibilityLabel =
    accessibilityLabel ?? textParts.filter(Boolean).join("; ");

  const contentProps = {
    icon,
    paymentLogoIcon,
    label,
    value,
    numberOfLines,
    reversed,
    topElement,
    endElement,
    hasInteractiveElements,
    listItemAccessibilityLabel
  } as const;

  if (onLongPress) {
    return (
      <Pressable
        onLongPress={onLongPress}
        testID={testID}
        accessible
        accessibilityRole="button"
        accessibilityLabel={listItemAccessibilityLabel}
        accessibilityActions={accessibilityActions}
        onAccessibilityAction={onAccessibilityAction}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onTouchEnd={onPressOut}
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
            <ListItemInfoContent {...contentProps} />
          </Animated.View>
        </Animated.View>
      </Pressable>
    );
  }

  return (
    <View
      style={IOListItemStyles.listItem}
      testID={testID}
      accessible={!hasInteractiveElements}
      accessibilityLabel={
        hasInteractiveElements ? undefined : listItemAccessibilityLabel
      }
      accessibilityRole={hasInteractiveElements ? undefined : accessibilityRole}
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
        <ListItemInfoContent {...contentProps} />
      </View>
    </View>
  );
};
