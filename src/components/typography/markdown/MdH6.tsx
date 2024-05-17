import { IOColors, IOTheme } from "../../../core";
import { FontFamily, IOFontWeight } from "../../../utils/fonts";
import { ExternalTypographyProps, TypographyProps } from "../common";
import { useTypographyFactory } from "../Factory";

type AllowedColors = Extract<IOTheme, "textHeading-default"> | IOColors;
type AllowedWeight = Extract<IOFontWeight, "Regular">;

type MdH6Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const fontSize = 10;
const lineHeight = 14;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "grey-700";
const defaultWeight: AllowedWeight = "Regular";

/**
 * `MdH5` typographic style
 */
export const MdH6 = (props: MdH6Props) =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight,
    defaultColor,
    font,
    fontStyle: {
      fontSize,
      lineHeight,
      letterSpacing: 0.5
    }
  });
