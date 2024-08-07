import React from "react";
import { View } from "react-native";
import { IOTheme, IOVisualCostants, useIOExperimentalDesign } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Regular" | "Semibold">;

type H1Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const h1FontSize = 28;
export const h1LineHeight = 42;
const fontName: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFont: FontFamily = "TitilliumSansPro";
const legacyDefaultWeight: AllowedWeight = "Semibold";
const legacyH1FontSize = 31;
const legacyH1LineHeight = 43;

/**
 * `H1` typographic style
 */
export const H1 = React.forwardRef<View, H1Props>((props, ref) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>(
    {
      ...props,
      allowFontScaling: isExperimental,
      maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier,
      dynamicTypeRamp: "largeTitle" /* iOS only */,
      defaultWeight: isExperimental ? defaultWeight : legacyDefaultWeight,
      defaultColor,
      font: isExperimental ? fontName : legacyFont,
      fontStyle: {
        fontSize: isExperimental ? h1FontSize : legacyH1FontSize,
        lineHeight: isExperimental ? h1LineHeight : legacyH1LineHeight
      }
    },
    ref
  );
});
