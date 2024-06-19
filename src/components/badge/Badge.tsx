import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  IOBadgeHSpacing,
  IOBadgeRadius,
  IOBadgeVSpacing,
  IOColors,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { makeFontStyleObject } from "../../utils/fonts";
import { WithTestID } from "../../utils/types";

export type Badge = WithTestID<{
  outline?: boolean;
  text: string;
  variant:
    | "default"
    | "info"
    | "warning"
    | "error"
    | "success"
    | "purple"
    | "lightBlue"
    | "blue"
    | "turquoise"
    | "contrast";
}>;

type SolidVariantProps = {
  background: IOColors;
  foreground: IOColors;
};

type OutlinedVariantProps = {
  foreground: IOColors;
  background?: never;
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      android: {
        textAlignVertical: "center"
      }
    }),
    borderCurve: "continuous",
    borderRadius: IOBadgeRadius,
    paddingHorizontal: IOBadgeHSpacing,
    paddingVertical: IOBadgeVSpacing
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
    alignSelf: "center",
    textTransform: "uppercase",
    flexShrink: 1
  },
  labelFont: {
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  },
  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  legacyLabelFont: {
    ...makeFontStyleObject("Semibold", false, "TitilliumSansPro")
  }
});

/**
 * Official badge component
 */
export const Badge = ({ text, outline = false, variant, testID }: Badge) => {
  const { isExperimental } = useIOExperimentalDesign();
  const theme = useIOTheme();

  const mapVariants: Record<
    NonNullable<Badge["variant"]>,
    SolidVariantProps
  > = {
    default: {
      foreground: "grey-700",
      background: "grey-50"
    },
    info: {
      foreground: "info-850",
      background: "info-100"
    },
    warning: {
      foreground: "warning-850",
      background: "warning-100"
    },
    success: {
      foreground: "success-850",
      background: "success-100"
    },
    error: {
      foreground: "error-850",
      background: "error-100"
    },
    purple: {
      foreground: "hanPurple-850",
      background: "hanPurple-100"
    },
    lightBlue: {
      foreground: "blueIO-850",
      background: "blueIO-50"
    },
    blue: {
      foreground: "white",
      background: theme["interactiveElem-default"]
    },
    turquoise: {
      foreground: "turquoise-850",
      background: "turquoise-50"
    },
    contrast: {
      foreground: "grey-700",
      background: "white"
    }
  };

  const mapOutlineVariants: Record<
    NonNullable<Badge["variant"]>,
    OutlinedVariantProps
  > = {
    default: {
      foreground: "grey-700"
    },
    info: {
      foreground: "info-850"
    },
    warning: {
      foreground: "warning-850"
    },
    success: {
      foreground: "success-850"
    },
    error: {
      foreground: "error-850"
    },
    purple: {
      foreground: "hanPurple-850"
    },
    lightBlue: {
      foreground: "blueIO-850"
    },
    blue: {
      foreground: theme["interactiveElem-default"]
    },
    turquoise: {
      foreground: "turquoise-850"
    },
    contrast: {
      foreground: "grey-850"
    }
  };

  const { background, foreground } = (
    outline ? mapOutlineVariants : mapVariants
  )[variant];

  return (
    <View
      testID={testID}
      style={[
        styles.badge,
        outline
          ? {
              borderWidth: 1,
              borderColor: IOColors[foreground]
            }
          : {
              backgroundColor: background ? IOColors[background] : undefined
            }
      ]}
    >
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[
          styles.label,
          isExperimental ? styles.labelFont : styles.legacyLabelFont,
          {
            color: IOColors[foreground]
          }
        ]}
      >
        {text}
      </Text>
    </View>
  );
};
