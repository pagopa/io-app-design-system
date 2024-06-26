import React from "react";
import { View } from "react-native";
import { IOTheme, useIOExperimentalDesign } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Semibold" | "Regular">;

type H3Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

/* Common typographic styles */
export const h3FontSize = 22;
export const h3LineHeight = 33;
const fontName: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontName: FontFamily = "TitilliumSansPro";
const legacyDefaultColor: AllowedColors = "bluegreyDark";
const legacyDefaultWeight: AllowedWeight = "Semibold";
const legacyH3FontSize = 24;
const legacyH3LineHeight = 34;
/**
 * `H3` typographic style
 */
export const H3 = React.forwardRef<View, H3Props>((props, ref) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>(
    {
      ...props,
      defaultWeight: isExperimental ? defaultWeight : legacyDefaultWeight,
      defaultColor: isExperimental ? defaultColor : legacyDefaultColor,
      font: isExperimental ? fontName : legacyFontName,
      fontStyle: {
        fontSize: isExperimental ? h3FontSize : legacyH3FontSize,
        lineHeight: isExperimental ? h3LineHeight : legacyH3LineHeight
      }
    },
    ref
  );
});
