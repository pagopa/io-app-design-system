import { IOTheme, useIOExperimentalDesign } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Regular" | "Bold">;

type H1Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const h1FontSize = 28;
export const h1LineHeight = 42;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFont: FontFamily = "TitilliumWeb";
const legacyDefaultWeight: AllowedWeight = "Bold";

/**
 * `H1` typographic style
 */
export const H1 = (props: H1Props) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: isExperimental ? defaultWeight : legacyDefaultWeight,
    defaultColor,
    font: isExperimental ? font : legacyFont,
    fontStyle: { fontSize: h1FontSize, lineHeight: h1LineHeight }
  });
};
