import React from "react";
import { ColorValue, Platform, StyleSheet, View } from "react-native";
import {
  hexToRgba,
  IOBadgeHSpacing,
  IOBadgeRadius,
  IOBadgeVSpacing,
  IOColors,
  useIOExperimentalDesign,
  useIOTheme,
  useIOThemeContext
} from "../../core";
import { WithTestID } from "../../utils/types";
import { IOText } from "../typography";

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
  background: ColorValue;
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
  }
});

/**
 * Official badge component
 */
export const Badge = ({ text, outline = false, variant, testID }: Badge) => {
  const { isExperimental } = useIOExperimentalDesign();
  const theme = useIOTheme();
  const { themeType } = useIOThemeContext();

  const bgOpacityDarkMode = 0.2;

  const mapVariantsLightMode: Record<
    NonNullable<Badge["variant"]>,
    SolidVariantProps
  > = {
    default: {
      foreground: "grey-700",
      background: IOColors["grey-50"]
    },
    info: {
      foreground: "info-850",
      background: IOColors["info-100"]
    },
    warning: {
      foreground: "warning-850",
      background: IOColors["warning-100"]
    },
    success: {
      foreground: "success-850",
      background: IOColors["success-100"]
    },
    error: {
      foreground: "error-850",
      background: IOColors["error-100"]
    },
    purple: {
      foreground: "hanPurple-500",
      background: IOColors["hanPurple-100"]
    },
    lightBlue: {
      foreground: "blueIO-850",
      background: IOColors["blueIO-50"]
    },
    blue: {
      foreground: "white",
      background: IOColors[theme["interactiveElem-default"]]
    },
    turquoise: {
      foreground: "turquoise-850",
      background: IOColors["turquoise-50"]
    },
    contrast: {
      foreground: "grey-700",
      background: IOColors.white
    }
  };

  const mapVariantsDarkMode: Record<
    NonNullable<Badge["variant"]>,
    SolidVariantProps
  > = {
    default: {
      foreground: "grey-50",
      background: hexToRgba(IOColors["grey-50"], bgOpacityDarkMode)
    },
    info: {
      foreground: "info-400",
      background: hexToRgba(IOColors["info-400"], bgOpacityDarkMode)
    },
    warning: {
      foreground: "warning-400",
      background: hexToRgba(IOColors["warning-400"], bgOpacityDarkMode)
    },
    success: {
      foreground: "success-400",
      background: hexToRgba(IOColors["success-400"], bgOpacityDarkMode)
    },
    error: {
      foreground: "error-400",
      background: hexToRgba(IOColors["error-400"], bgOpacityDarkMode)
    },
    purple: {
      foreground: "hanPurple-250",
      background: hexToRgba(IOColors["hanPurple-250"], bgOpacityDarkMode)
    },
    lightBlue: {
      foreground: "blueIO-200",
      background: hexToRgba(IOColors["blueIO-600"], bgOpacityDarkMode)
    },
    blue: {
      foreground: "white",
      background: IOColors[theme["interactiveElem-default"]]
    },
    turquoise: {
      foreground: "turquoise-300",
      background: hexToRgba(IOColors["turquoise-300"], bgOpacityDarkMode)
    },
    contrast: {
      foreground: "grey-700",
      background: IOColors.white
    }
  };

  const mapOutlineVariantsLightMode: Record<
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
      foreground: "hanPurple-500"
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

  const mapOutlineVariantsDarkMode: Record<
    NonNullable<Badge["variant"]>,
    OutlinedVariantProps
  > = {
    default: {
      foreground: "grey-100"
    },
    info: {
      foreground: "info-400"
    },
    warning: {
      foreground: "warning-400"
    },
    success: {
      foreground: "success-400"
    },
    error: {
      foreground: "error-400"
    },
    purple: {
      foreground: "hanPurple-250"
    },
    lightBlue: {
      foreground: "blueIO-150"
    },
    blue: {
      foreground: theme["interactiveElem-default"]
    },
    turquoise: {
      foreground: "turquoise-300"
    },
    contrast: {
      foreground: "grey-100"
    }
  };

  // prettier-ignore
  const variantMap = themeType === "light"
    ? (outline ? mapOutlineVariantsLightMode : mapVariantsLightMode)
    : (outline ? mapOutlineVariantsDarkMode : mapVariantsDarkMode);

  const { background, foreground } = variantMap[variant];

  return (
    <View
      accessible={true}
      testID={testID}
      style={[
        styles.badge,
        outline
          ? {
              borderWidth: 1,
              borderColor: IOColors[foreground]
            }
          : {
              backgroundColor: background ?? undefined
            }
      ]}
    >
      <IOText
        font={isExperimental ? "ReadexPro" : "TitilliumSansPro"}
        weight={isExperimental ? "Regular" : "Semibold"}
        size={12}
        lineHeight={16}
        color={foreground}
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
    </View>
  );
};
