import React from "react";
import { View } from "react-native";
import { IOTheme, useIOExperimentalDesign } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Regular" | "Semibold">;

type H4Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const h4FontSize = 20;
export const h4LineHeight = 24;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontName: FontFamily = "TitilliumSansPro";
const legacyDefaultColor: AllowedColors = "bluegreyDark";
const legacyDefaultWeight: AllowedWeight = "Semibold";
const legacyH4FontSize = 22;

/**
 * `H4` typographic style
 */
export const H4 = React.forwardRef<View, H4Props>((props, ref) => {
  const { isExperimental } = useIOExperimentalDesign();
  return useTypographyFactory<AllowedWeight, AllowedColors>(
    {
      ...props,
      defaultWeight: isExperimental ? defaultWeight : legacyDefaultWeight,
      defaultColor: isExperimental ? defaultColor : legacyDefaultColor,
      font: isExperimental ? font : legacyFontName,
      fontStyle: {
        fontSize: isExperimental ? h4FontSize : legacyH4FontSize,
        lineHeight: h4LineHeight
      }
    },
    ref
  );
});
