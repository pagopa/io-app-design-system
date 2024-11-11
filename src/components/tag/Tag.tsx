import * as O from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
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
    backgroundColor: IOColors.white,
    borderWidth: 1,
    borderColor: IOColors["grey-100"],
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
  iconAccessibilityLabel
}: Tag) => {
  const theme = useIOTheme();
  const { isExperimental } = useIOExperimentalDesign();

  const variantProps = getVariantProps(variant, customIconProps);

  return (
    <View testID={testID} style={styles.tag}>
      {pipe(
        variantProps,
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
      {variantProps && text && <View style={styles.spacer} />}
      {text && (
        <IOText
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
