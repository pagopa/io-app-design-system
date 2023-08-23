import { IOTheme } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Regular">;

type CaptionProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const captionFontSize = 12;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

/**
 * `Caption` typographic style
 */
export const Caption = (props: CaptionProps) =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight,
    defaultColor,
    font,
    fontStyle: {
      fontSize: captionFontSize,
      textTransform: "uppercase"
    }
  });
