import React from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";
import {
  IOColors,
  IOTagRadius,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import {
  IOSpacingScale,
  IOTagHSpacing,
  IOTagVSpacing
} from "../../core/IOSpacing";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { WithTestID } from "../../utils/types";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { IOText } from "../typography";

type VariantProps = {
  iconColor: IOColors;
  iconName: IOIcons;
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

export type Tag = TextProps &
  WithTestID<
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
        customIconProps?: never;
      }
    | {
        variant: "customIcon";
        customIconProps: VariantProps;
      }
  > & {
    allowFontScaling?: boolean;
  };

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
    backgroundColor: IOColors.white,
    borderWidth: 1,
    borderColor: IOColors["grey-100"],
    borderCurve: "continuous"
  },
  tagStatic: {
    paddingHorizontal: IOTagHSpacing,
    paddingVertical: IOTagVSpacing,
    columnGap: IOTagIconMargin,
    borderRadius: IOTagRadius
  },
  iconWrapper: {
    flexShrink: 1
  }
});

const getVariantProps = (
  variant: NonNullable<Tag["variant"]>,
  customIconProps?: VariantProps
): VariantProps | undefined => {
  switch (variant) {
    case "customIcon":
      return customIconProps;
    case "qrCode":
      return {
        iconColor: "blueIO-500",
        iconName: "qrCode"
      };
    case "attachment":
      return {
        iconColor: "grey-700",
        iconName: "attachment"
      };
    case "legalMessage":
      return {
        iconColor: "blueIO-500",
        iconName: "legalValue"
      };
    case "info":
      return {
        iconColor: "info-700",
        iconName: "info"
      };
    case "warning":
      return {
        iconColor: "warning-700",
        iconName: "warningFilled"
      };
    case "error":
      return {
        iconColor: "error-600",
        iconName: "errorFilled"
      };
    case "success":
      return {
        iconColor: "success-700",
        iconName: "success"
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
  customIconProps,
  iconAccessibilityLabel,
  allowFontScaling = true
}: Tag) => {
  const theme = useIOTheme();
  const { dynamicFontScale, spacingScaleMultiplier } = useIOFontDynamicScale();
  const { isExperimental } = useIOExperimentalDesign();

  const variantProps = getVariantProps(variant, customIconProps);

  const tagDynamic: ViewStyle = {
    paddingHorizontal: IOTagHSpacing * dynamicFontScale,
    paddingVertical: IOTagVSpacing * dynamicFontScale,
    columnGap: IOTagIconMargin * dynamicFontScale * spacingScaleMultiplier,
    borderRadius: IOTagRadius * dynamicFontScale
  };

  return (
    <View
      testID={testID}
      style={[styles.tag, allowFontScaling ? tagDynamic : styles.tagStatic]}
    >
      {variantProps && (
        <View style={styles.iconWrapper}>
          <Icon
            allowFontScaling={allowFontScaling}
            name={variantProps.iconName}
            color={variantProps.iconColor}
            size={IOTagIconSize}
            accessible={!!iconAccessibilityLabel}
            accessibilityLabel={iconAccessibilityLabel}
          />
        </View>
      )}
      {text && (
        <IOText
          allowFontScaling={allowFontScaling}
          font={isExperimental ? "Titillio" : "TitilliumSansPro"}
          weight={"Semibold"}
          size={12}
          lineHeight={16}
          color={theme["textBody-tertiary"]}
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
