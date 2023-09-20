import { IOColors } from "../../core/IOColors";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import { useIOExperimentalDesign } from "../../core";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

export type ButtonTextAllowedColors = Extract<
  IOColors,
  "white" | "blueIO-500" | "grey-700"
>;
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Regular" | "Bold">;

type ButtonTextProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, ButtonTextAllowedColors>
>;

export const buttonTextFontSize = 16;
/* Needed to render `ButtonOutline` and`ButtonLink` because they use
`AnimatedText` for color transition through Reanimated */
const buttonTextDefaultColor: ButtonTextAllowedColors = "white";
const buttonTextFontName: IOFontFamily = "ReadexPro";
const buttonTextDefaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyTextFontName: IOFontFamily = "TitilliumWeb";
const legacyTextDefaultWeight: AllowedWeight = "Bold";

/**
 * `ButtonText` typographic style
 */
export const ButtonText = (props: ButtonTextProps) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, ButtonTextAllowedColors>({
    ...props,
    defaultWeight: isExperimental
      ? buttonTextDefaultWeight
      : legacyTextDefaultWeight,
    defaultColor: buttonTextDefaultColor,
    font: isExperimental ? buttonTextFontName : legacyTextFontName,
    fontStyle: {
      fontSize: buttonTextFontSize
    }
  });
};
