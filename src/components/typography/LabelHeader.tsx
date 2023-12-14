import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import { IOTheme, IOThemeLight, useIOExperimentalDesign } from "../../core";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors =
  | IOTheme["textBody-default"]
  | "grey-650"
  | "grey-850"
  | "white"
  | "black";
type AllowedWeight = Extract<IOFontWeight, "Regular" | "SemiBold">;

type LabelHeaderProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const labelHeaderFontSize = 14;
export const labelHeaderLineHeight = 18;
export const labelHeaderDefaultColor: AllowedColors =
  IOThemeLight["textBody-default"];
const labelHeaderFontName: IOFontFamily = "ReadexPro";
const labelHeaderDefaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyLabelHeaderFontName: IOFontFamily = "TitilliumWeb";
const legacyLabelHeaderWeight: AllowedWeight = "SemiBold";
const legacyLabelHeaderLineHeight = 20;
/**
 * `LabelHeader` typographic style
 */
export const LabelHeader = (props: LabelHeaderProps) => {
  const { isExperimental } = useIOExperimentalDesign();
  // console.log("isExperimental", isExperimental);
  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: isExperimental
      ? labelHeaderDefaultWeight
      : legacyLabelHeaderWeight,
    defaultColor: labelHeaderDefaultColor,
    font: isExperimental ? labelHeaderFontName : legacyLabelHeaderFontName,
    fontStyle: {
      fontSize: labelHeaderFontSize,
      lineHeight: isExperimental
        ? labelHeaderLineHeight
        : legacyLabelHeaderLineHeight
    }
  });
};
