import { IOColors, IOTheme } from "../../../core";
import { FontFamily, IOFontWeight } from "../../../utils/fonts";
import { ExternalTypographyProps, TypographyProps } from "../common";
import { useTypographyFactory } from "../Factory";

type AllowedColors = Extract<IOTheme, "textHeading-default"> | IOColors;
type AllowedWeight = Extract<IOFontWeight, "Regular">;

type MdH2Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

/* We set 18 instead of 16 to diffrentiate from the H3 typographic style.
It should be 16 with `SemiBold` font weight. */
const fontSize = 18;
const lineHeight = 24;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

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
