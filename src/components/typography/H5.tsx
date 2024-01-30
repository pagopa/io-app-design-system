import { IOTheme, useIOExperimentalDesign } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "SemiBold">;

type H5Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const h5FontSize = 14;
export const h5LineHeight = 16;
const font: FontFamily = "TitilliumSansPro";
const legacyFont: FontFamily = "TitilliumWeb";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "SemiBold";

/**
 * `H5` typographic style
 */
export const H5 = (props: H5Props) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight,
    defaultColor,
    font: isExperimental ? font : legacyFont,
    fontStyle: {
      fontSize: h5FontSize,
      lineHeight: h5LineHeight,
      textTransform: "uppercase",
      letterSpacing: 0.5
    }
  });
};
