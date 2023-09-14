import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import { IOTheme, IOThemeLight } from "../../core";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors =
  | IOTheme["textBody-default"]
  | "grey-650"
  | "grey-850"
  | "white"
  | "black";
type AllowedWeight = Extract<IOFontWeight, "Regular">;

type LabelHeaderProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const labelHeaderFontSize = 14;
export const labelHeaderLineHeight = 18;
export const labelHeaderDefaultColor: AllowedColors =
  IOThemeLight["textBody-default"];
const labelHeaderFontName: IOFontFamily = "ReadexPro";
const labelHeaderDefaultWeight: AllowedWeight = "Regular";

/**
 * `LabelHeader` typographic style
 */
export const LabelHeader = (props: LabelHeaderProps) =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: labelHeaderDefaultWeight,
    defaultColor: labelHeaderDefaultColor,
    font: labelHeaderFontName,
    fontStyle: {
      fontSize: labelHeaderFontSize,
      lineHeight: labelHeaderLineHeight
    }
  });
