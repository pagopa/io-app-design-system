import { IOColors, IOTheme } from "../../../core";
import { FontFamily, IOFontWeight } from "../../../utils/fonts";
import { ExternalTypographyProps, TypographyProps } from "../common";
import { useTypographyFactory } from "../Factory";

type AllowedColors = Extract<IOTheme, "textHeading-default"> | IOColors;
type AllowedWeight = Extract<IOFontWeight, "Regular">;

type MdH3Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const fontSize = 16;
const lineHeight = 24;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

/**
 * `MdH3` typographic style
 */
export const MdH3 = (props: MdH3Props) =>
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
