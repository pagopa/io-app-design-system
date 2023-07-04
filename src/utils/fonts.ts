/**
 * Utility functions to manage font properties to style mapping for both iOS and Android
 * Fonts are managed differently on Android and iOS. Read the Font section of the
 * README file included in this repository.
 */

import { Platform, PlatformStatic } from "react-native";

type PlatformSelectType = PlatformStatic["select"];

const fonts = {
  TitilliumWeb: Platform.select({
    android: "TitilliumWeb",
    ios: "Titillium Web"
  }),
  ReadexPro: Platform.select({
    android: "ReadexPro",
    ios: "Readex Pro"
  }),
  RobotoMono: Platform.select({
    android: "RobotoMono",
    ios: "Roboto Mono"
  })
};

export const fontWeights = {
  "300": "Light",
  "400": "Regular",
  "600": "SemiBold",
  "700": "Bold"
};

export type FontFamily = keyof typeof fonts;
export type FontWeight = keyof typeof fontWeights;

const weights = ["Light", "Regular", "SemiBold", "Bold"] as const;
export type IOFontWeight = typeof weights[number];

const weightValues = ["300", "400", "600", "700"] as const;
export type FontWeightValue = typeof weightValues[number];

/**
 * Mapping between the nominal description of the weight (also the postfix used on Android) and the numeric value
 * used on iOS
 */
export const fontWeightsMap: Record<IOFontWeight, FontWeightValue> = {
  Light: "300",
  Regular: "400",
  SemiBold: "600",
  Bold: "700"
};

export enum FontStyle {
  "normal" = "normal",
  "italic" = "italic"
}

export type FontStyleObject = {
  fontFamily: string;
  fontWeight?: FontWeightValue;
  fontStyle?: FontStyle;
};

/**
 * Get the correct fontFamily name on both Android and iOS
 */
export const makeFontFamilyName = (
  osSelect: PlatformSelectType,
  font: FontFamily,
  weight?: IOFontWeight,
  isItalic: boolean = false
): string =>
  osSelect({
    default: "undefined",
    android: `${fonts[font]}-${weight || "Regular"}${isItalic ? "Italic" : ""
      }`,
    ios: fonts[font]
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
  font: FontFamily | undefined = "TitilliumWeb"
): FontStyleObject =>
  Platform.select({
    default: {
      fontFamily: "undefined"
    },
    android: {
      fontFamily: makeFontFamilyName(Platform.select, font, weight, isItalic)
    },
    ios: {
      fontFamily: makeFontFamilyName(Platform.select, font, weight, isItalic),
      fontWeight: weight !== undefined ? fontWeightsMap[weight] : weight,
      fontStyle: isItalic ? FontStyle.italic : FontStyle.normal
    }
  });