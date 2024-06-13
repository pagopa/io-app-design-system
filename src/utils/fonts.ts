/**
 * Utility functions to manage font properties to style mapping for both iOS and Android
 * Fonts are managed differently on Android and iOS. Read the Font section of the
 * README file included in this repository.
 */

import { Platform } from "react-native";

/**
 * Choose the font name based on the platform
 */
const fonts = {
  TitilliumSansPro: Platform.select({
    android: "TitilliumSansPro",
    web: "TitilliumSansPro",
    ios: "Titillium Sans Pro"
  }),
  ReadexPro: Platform.select({
    android: "ReadexPro",
    web: "ReadexPro",
    ios: "Readex Pro"
  }),
  DMMono: Platform.select({
    android: "DMMono",
    web: "DMMono",
    ios: "DM Mono"
  })
};

export type IOFontFamily = keyof typeof fonts;

const weights = ["Light", "Regular", "Medium", "SemiBold", "Bold"] as const;
export type IOFontWeight = (typeof weights)[number];

const weightValues = ["300", "400", "500", "600", "700"] as const;
export type FontWeightValue = (typeof weightValues)[number];

/**
 * Mapping between the nominal description of the weight (also the postfix used on Android) and the numeric value
 * used on iOS
 */
export const fontWeights: Record<IOFontWeight, FontWeightValue> = {
  Light: "300",
  Regular: "400",
  Medium: "500",
  SemiBold: "600",
  Bold: "700"
};

export type FontFamily = keyof typeof fonts;
export type FontWeight = keyof typeof fontWeights;

/**
 * Mapping between the nominal description of the weight (also the postfix used on Android) and the numeric value
 * used on iOS
 */
export const fontWeightsMap: Record<IOFontWeight, FontWeightValue> = {
  Light: "300",
  Regular: "400",
  Medium: "500",
  SemiBold: "600",
  Bold: "700"
};

export enum FontStyle {
  "normal" = "normal",
  "italic" = "italic"
}

type FontStyleObject = {
  fontFamily: string;
  fontWeight?: FontWeightValue;
  fontStyle?: FontStyle;
};

/**
 * Get the correct `fontFamily` name on both Android and iOS.
 * @param font
 * @param weight
 * @param isItalic
 */
export const makeFontFamilyName = (
  font: FontFamily,
  weight?: IOFontWeight,
  isItalic: boolean = false
): string =>
  Platform.select({
    web: fonts[font],
    android: `${fonts[font]}-${weight || "Regular"}${isItalic ? "Italic" : ""}`,
    ios: fonts[font],
    default: "undefined"
  });

/**
 * Return a {@link FontStyleObject} with the fields filled based on the platform (iOS or Android).
 * @param weight
 * @param isItalic
 * @param font
 */
export const makeFontStyleObject = (
  weight: IOFontWeight | undefined = undefined,
  isItalic: boolean | undefined = false,
  font: FontFamily | undefined = "TitilliumSansPro"
): FontStyleObject =>
  Platform.select({
    web: {
      fontFamily: makeFontFamilyName(font, weight, isItalic),
      fontWeight: weight !== undefined ? fontWeightsMap[weight] : weight,
      fontStyle: isItalic ? FontStyle.italic : FontStyle.normal
    },
    android: {
      includeFontPadding: false,
      fontFamily: makeFontFamilyName(font, weight, isItalic)
    },
    ios: {
      fontFamily: makeFontFamilyName(font, weight, isItalic),
      fontWeight: weight !== undefined ? fontWeightsMap[weight] : weight,
      fontStyle: isItalic ? FontStyle.italic : FontStyle.normal
    },
    default: { fontFamily: "undefined" }
  });
