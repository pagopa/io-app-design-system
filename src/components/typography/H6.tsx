import React from "react";
import { View } from "react-native";
import { IOTheme, IOThemeLight, useIOExperimentalDesign } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

// when the weight is bold, only these color are allowed
type AllowedColors = IOTheme["textBody-default"] | "blueIO-850";
type AllowedWeight = Extract<IOFontWeight, "Regular" | "SemiBold">;

type H6Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const h6FontSize = 16;
export const h6LineHeight = 24;
const h6DefaultColor: AllowedColors = IOThemeLight["textBody-default"];
const h6DefaultWeight: AllowedWeight = "Regular";
const fontName: FontFamily = "ReadexPro";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontSize = 18;
const legacyLineHeight = 25;
const legacyFontName: FontFamily = "TitilliumSansPro";
const legacyDefaultWeight: AllowedWeight = "SemiBold";

/**
 * `H6` typographic style
 */
export const H6 = React.forwardRef<View, H6Props>((props, ref) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>(
    {
      ...props,
      defaultWeight: isExperimental ? h6DefaultWeight : legacyDefaultWeight,
      defaultColor: h6DefaultColor,
      font: isExperimental ? fontName : legacyFontName,
      fontStyle: {
        fontSize: isExperimental ? h6FontSize : legacyFontSize,
        lineHeight: isExperimental ? h6LineHeight : legacyLineHeight
      }
    },
    ref
  );
});
