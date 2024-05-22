import { IOColors, IOTheme } from "../../../core";
import { FontFamily, IOFontWeight } from "../../../utils/fonts";
import { ExternalTypographyProps, TypographyProps } from "../common";
import { useTypographyFactory } from "../Factory";

type AllowedColors = Extract<IOTheme, "textHeading-default"> | IOColors;
type AllowedWeight = Extract<IOFontWeight, "Regular">;

type MdH1Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const fontSize = 20;
const lineHeight = 24;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

/**
 * `MdH1` typographic style
 */
export const MdH1 = (props: MdH1Props) =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight,
    defaultColor,
    font,
    fontStyle: {
      fontSize,
      lineHeight
    }
  });
