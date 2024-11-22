import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import {
  IOColors,
  IOTagRadius,
  IOTheme,
  IOThemeLight,
  useIONewTypeface,
  useIOTheme
} from "../../core";
import {
  IOSpacingScale,
  IOTagHSpacing,
  IOTagVSpacing
} from "../../core/IOSpacing";
import { WithTestID } from "../../utils/types";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { IOText } from "../typography";

const IconColorsMap: Record<string, keyof IOTheme> = {
  primary: "interactiveElem-default",
  warning: "warningIcon",
  error: "errorIcon",
  success: "successIcon",
  info: "infoIcon",
  grey: "icon-default",
  lightGrey: "icon-decorative"
};

type IconColorVariant = keyof typeof IconColorsMap;

type VariantProps = {
  color: IconColorVariant;
  name: IOIcons;
};

type TextProps =
  | {
      text: string;
      iconAccessibilityLabel?: string;
    }
  | {
      text?: never;
      iconAccessibilityLabel: string;
    };

export type Tag = TextProps & { forceLightMode?: boolean } & WithTestID<
    | {
        variant:
          | "qrCode"
          | "legalMessage"
          | "info"
          | "warning"
          | "error"
          | "success"
          | "attachment"
          | "noIcon";
        iconName?: never;
        icon?: never;
      }
    | {
        variant: "custom";
        icon: VariantProps;
      }
  >;

const IOTagIconMargin: IOSpacingScale = 6;
const IOTagIconSize: IOIconSizeScale = 16;

const styles = StyleSheet.create({
  tag: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      android: {
        textAlignVertical: "center"
      }
    }),
    borderWidth: 1,
    borderRadius: IOTagRadius,
    borderCurve: "continuous",
    paddingHorizontal: IOTagHSpacing,
    paddingVertical: IOTagVSpacing
  },
  iconWrapper: {
    flexShrink: 1
  },
  spacer: {
    width: IOTagIconMargin
  }
});

const getVariantProps = (
  variant: NonNullable<Tag["variant"]>,
  customIcon?: VariantProps
): VariantProps | undefined => {
  if (variant === "custom" && customIcon) {
    return customIcon;
  }
  switch (variant) {
    case "qrCode":
      return {
        color: "primary",
        name: "qrCode"
      };
    case "attachment":
      return {
        color: "grey",
        name: "attachment"
      };
    case "legalMessage":
      return {
        color: "primary",
        name: "legalValue"
      };
    case "info":
      return {
        color: "info",
        name: "infoFilled"
      };
    case "warning":
      return {
        color: "warning",
        name: "warningFilled"
      };
    case "error":
      return {
        color: "error",
        name: "errorFilled"
      };
    case "success":
      return {
        color: "success",
        name: "success"
      };
    case "noIcon":
      return undefined;
    default:
      return undefined;
  }
};

/**
 * Tag component, used mainly for message list and details
 */
export const Tag = ({
  text,
  variant,
  testID,
  icon,
  iconAccessibilityLabel,
  forceLightMode = false
}: Tag) => {
  const theme = useIOTheme();
  const { newTypefaceEnabled } = useIONewTypeface();

  const variantProps = getVariantProps(variant, icon);

  const borderColor = forceLightMode
    ? IOColors[IOThemeLight["cardBorder-default"]]
    : IOColors[theme["cardBorder-default"]];

  const backgroundColor = forceLightMode
    ? IOColors[IOThemeLight["appBackground-primary"]]
    : IOColors[theme["appBackground-primary"]];

  return (
    <View
      testID={testID}
      style={[styles.tag, { borderColor, backgroundColor }]}
    >
      {variantProps && (
        <View style={styles.iconWrapper}>
          <Icon
            name={variantProps.name}
            color={
              forceLightMode
                ? IOThemeLight[IconColorsMap[variantProps.color]]
                : theme[IconColorsMap[variantProps.color]]
            }
            size={IOTagIconSize}
            accessible={!!iconAccessibilityLabel}
            accessibilityLabel={iconAccessibilityLabel}
          />
        </View>
      )}
      {variantProps && text && <View style={styles.spacer} />}
      {text && (
        <IOText
          font={newTypefaceEnabled ? "Titillio" : "TitilliumSansPro"}
          weight={"Semibold"}
          size={12}
          lineHeight={16}
          color={
            forceLightMode
              ? IOThemeLight["textBody-tertiary"]
              : theme["textBody-tertiary"]
          }
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            alignSelf: "center",
            textTransform: "uppercase",
            letterSpacing: 0.5,
            flexShrink: 1
          }}
        >
          {text}
        </IOText>
      )}
    </View>
  );
};
