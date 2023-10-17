import { IOTheme, useIOExperimentalDesign } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Regular" | "Bold">;

type H2Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const h2FontSize = 26;
export const h2LineHeight = 39;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFont: FontFamily = "TitilliumWeb";
const legacyDefaultWeight: AllowedWeight = "Bold";

/**
 * `H2` typographic style
 */
export const H2 = (props: H2Props) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: isExperimental ? defaultWeight : legacyDefaultWeight,
    defaultColor,
    font: isExperimental ? font : legacyFont,
    fontStyle: { fontSize: h2FontSize, lineHeight: h2LineHeight }
  });
};
