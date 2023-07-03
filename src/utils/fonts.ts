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

type FontFamily = keyof typeof fonts;
export type FontWeight = keyof typeof fontWeights;
export enum FontStyle {
  "normal" = "normal",
  "italic" = "italic"
}

export type FontStyleObject = {
  fontFamily: string;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
};

/**
 * Get the correct fontFamily name on both Android and iOS
 */
export const makeFontFamilyName = (
  osSelect: PlatformSelectType,
  font: FontFamily,
  weight?: FontWeight,
  isItalic: boolean = false
): string =>
  osSelect({
    default: "undefined",
    android: `${fonts[font]}-${fontWeights[weight || "400"]}${
      isItalic ? "Italic" : ""
    }`,
    ios: fonts[font]
  });
