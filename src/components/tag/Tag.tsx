import React from "react";
import * as O from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";
import { View, Text, StyleSheet, Platform } from "react-native";
import { WithTestID } from "../../utils/types";
import { makeFontStyleObject } from "../../utils/fonts";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { IOColors, IOTagRadius, useIOExperimentalDesign } from "../../core";
import {
  IOSpacingScale,
  IOTagHSpacing,
  IOTagVSpacing
} from "../../core/IOSpacing";

export type Tag = WithTestID<{
  text?: string;
  variant:
    | "qrCode"
    | "legalMessage"
    | "info"
    | "warning"
    | "error"
    | "success"
    | "attachment"
    | "noIcon";
  iconAccessibilityLabel?: string;
}>;

type VariantProps = {
  iconColor: IOColors;
  iconName: IOIcons;
};

const mapVariants: Record<
  NonNullable<Tag["variant"]>,
  VariantProps | undefined
> = {
  qrCode: {
    iconColor: "blueIO-500",
    iconName: "qrCode"
  },
  attachment: {
    iconColor: "grey-700",
    iconName: "attachment"
  },
  legalMessage: {
    iconColor: "blueIO-500",
    iconName: "legalValue"
  },
  info: {
    iconColor: "info-700",
    iconName: "info"
  },
  warning: {
    iconColor: "warning-700",
    iconName: "warningFilled"
  },
  error: {
    iconColor: "error-600",
    iconName: "errorFilled"
  },
  success: {
    iconColor: "success-700",
    iconName: "success"
  },
  noIcon: undefined
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
    borderWidth: 1,
    backgroundColor: IOColors.white,
    borderColor: IOColors["grey-100"],
    borderRadius: IOTagRadius,
    paddingHorizontal: IOTagHSpacing,
    paddingVertical: IOTagVSpacing
  },
  iconWrapper: {
    flexShrink: 1
  },
  spacer: {
    width: IOTagIconMargin
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
    alignSelf: "center",
    textTransform: "uppercase",
    color: IOColors["grey-700"],
    flexShrink: 1
  },
  labelFont: {
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  },
  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  legacyLabelFont: {
    ...makeFontStyleObject("SemiBold", false, "TitilliumWeb")
  }
});

/**
 * Tag component, used mainly for message list and details
 */
export const Tag = ({ text, variant, testID, iconAccessibilityLabel }: Tag) => {
  const { isExperimental } = useIOExperimentalDesign();
  return (
    <View testID={testID} style={styles.tag}>
      {pipe(
        mapVariants[variant],
        O.fromNullable,
        O.fold(
          () => null,
          ({ iconColor, iconName }) => (
            <View style={styles.iconWrapper}>
              <Icon
                name={iconName}
                color={iconColor}
                size={IOTagIconSize}
                accessible={!!iconAccessibilityLabel}
                accessibilityLabel={iconAccessibilityLabel}
              />
            </View>
          )
        )
      )}
      {mapVariants[variant] && text && <View style={styles.spacer} />}
      {text && (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[
            styles.label,
            isExperimental ? styles.labelFont : styles.legacyLabelFont
          ]}
        >
          {text}
        </Text>
      )}
    </View>
  );
};
