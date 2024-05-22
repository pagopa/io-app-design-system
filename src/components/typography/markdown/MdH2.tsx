import { IOColors, IOTheme } from "../../../core";
import { FontFamily, IOFontWeight } from "../../../utils/fonts";
import { ExternalTypographyProps, TypographyProps } from "../common";
import { useTypographyFactory } from "../Factory";

type AllowedColors = Extract<IOTheme, "textHeading-default"> | IOColors;
type AllowedWeight = Extract<IOFontWeight, "SemiBold">;

type MdH2Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const fontSize = 16;
const lineHeight = 24;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "SemiBold";

/**
 * `MdH2` typographic style
 */
export const MdH2 = (props: MdH2Props) =>
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
