/**
 * Utility functions to manage font properties to style mapping for both iOS and Android
 * Fonts are managed differently on Android and iOS. Read the Font section of the
 * README file included in this repository.
 */

import { Platform, TextStyle } from "react-native";

/**
 * Choose the font name based on the platform
 */
const fonts: Record<string, string> = {
  TitilliumSansPro: Platform.select({
    android: "TitilliumSansPro",
    web: "TitilliumSansPro",
    ios: "Titillium Sans Pro",
    default: "TitilliumSansPro"
  }),
  ReadexPro: Platform.select({
    android: "ReadexPro",
    web: "ReadexPro",
    ios: "Readex Pro",
    default: "ReadexPro"
  }),
  DMMono: Platform.select({
    android: "DMMono",
    web: "DMMono",
    ios: "DM Mono",
    default: "DMMono"
  })
};

export type IOFontFamily = keyof typeof fonts;

/*
 * Font Sizes
 */
export const fontSizes: Array<number> = [
  12, 14, 16, 18, 20, 24, 28, 32, 36, 40
];
export type IOFontSize = (typeof fontSizes)[number];

/*
 * Font Weights
 */

const weights = ["Light", "Regular", "Medium", "Semibold", "Bold"] as const;
export type IOFontWeight = (typeof weights)[number];

const weightValues = ["300", "400", "500", "600", "700"] as const;
export type IOFontWeightNumeric = (typeof weightValues)[number];

/**
 * Mapping between the nominal description of the weight (also the postfix used on Android) and the numeric value
 * used on iOS
 */
export const fontWeights: Record<IOFontWeight, IOFontWeightNumeric> = {
  Light: "300",
  Regular: "400",
  Medium: "500",
  Semibold: "600",
  Bold: "700"
};

type FontStyleObject = {
  fontSize: IOFontSize;
  fontFamily: IOFontFamily;
  fontWeight?: IOFontWeightNumeric;
  fontStyle?: TextStyle["fontStyle"];
};

/**
 * Get the correct `fontFamily` name on both Android and iOS.
 * @param font
 * @param weight
 * @param isItalic
 */
export const makeFontFamilyName = (
  font: IOFontFamily,
  weight?: IOFontWeight,
  fontStyle: TextStyle["fontStyle"] = "normal"
): IOFontFamily =>
  Platform.select({
    web: fonts[font],
    android: `${fonts[font]}-${weight || "Regular"}${
      fontStyle === "italic" ? "Italic" : ""
    }`,
    ios: fonts[font],
    default: fonts[font]
  });

/**
 * Default `IOText` typography style
 */
const defaultFont: IOFontFamily = "TitilliumSansPro";
const defaultWeight: IOFontWeight = "Regular";
const defaultFontSize: IOFontSize = 16;

/**
 * Return a {@link FontStyleObject} with the fields filled based on the platform (iOS or Android).
 * @param size
 * @param font
 * @param weight
 * @param fontStyle
 */

export const makeFontStyleObject = (
  size: IOFontSize = defaultFontSize,
  font: IOFontFamily = defaultFont,
  weight: IOFontWeight = defaultWeight,
  fontStyle: TextStyle["fontStyle"] = "normal"
): FontStyleObject =>
  Platform.select({
    web: {
      fontSize: size,
      fontFamily: makeFontFamilyName(font, weight, fontStyle),
      fontWeight: fontWeights[weight],
      fontStyle
    },
    // On Android other type attributes, like `fontWeight` or `fontStyle`
    // are directly managed through the `fontFamily` name, so we dont' need to
    // include them in the object.
    android: {
      fontSize: size,
      fontFamily: makeFontFamilyName(font, weight, fontStyle),
      includeFontPadding: false
    },
    ios: {
      fontSize: size,
      fontFamily: makeFontFamilyName(font, weight, fontStyle),
      fontWeight: fontWeights[weight],
      fontStyle
    },
    default: {
      fontSize: size,
      fontFamily: makeFontFamilyName(font, weight, fontStyle)
    }
  });
