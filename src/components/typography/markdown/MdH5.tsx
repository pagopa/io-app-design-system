import { IOColors, IOTheme } from "../../../core";
import { FontFamily, IOFontWeight } from "../../../utils/fonts";
import { ExternalTypographyProps, TypographyProps } from "../common";
import { useTypographyFactory } from "../Factory";

type AllowedColors = Extract<IOTheme, "textHeading-default"> | IOColors;
type AllowedWeight = Extract<IOFontWeight, "Regular">;

type MdH5Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const fontSize = 12;
const lineHeight = 16;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "grey-850";
const defaultWeight: AllowedWeight = "Regular";

/**
 * `MdH5` typographic style
 */
export const MdH5 = (props: MdH5Props) =>
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
