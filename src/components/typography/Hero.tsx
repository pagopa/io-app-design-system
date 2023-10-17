import { useIOExperimentalDesign, IOTheme } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Regular">;

type HeroProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const heroFontSize = 32;
export const heroLineHeight = 48;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFont: FontFamily = "TitilliumWeb";
/**
 * `Hero` typographic style
 */
export const Hero = (props: HeroProps) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight,
    defaultColor,
    font: isExperimental ? font : legacyFont,
    fontStyle: { fontSize: heroFontSize, lineHeight: heroLineHeight }
  });
};
