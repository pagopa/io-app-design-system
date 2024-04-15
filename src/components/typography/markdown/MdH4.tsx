import { IOColors, IOTheme } from "../../../core";
import { FontFamily, IOFontWeight } from "../../../utils/fonts";
import { ExternalTypographyProps, TypographyProps } from "../common";
import { useTypographyFactory } from "../Factory";

type AllowedColors = Extract<IOTheme, "textHeading-default"> | IOColors;
type AllowedWeight = Extract<IOFontWeight, "SemiBold">;

type MdH4Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const fontSize = 14;
const lineHeight = 24;
const font: FontFamily = "TitilliumSansPro";
const defaultColor: AllowedColors = "grey-700";
const defaultWeight: AllowedWeight = "SemiBold";

/**
 * `MdH4` typographic style
 */
export const MdH4 = (props: MdH4Props) =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight,
    defaultColor,
    font,
    fontStyle: {
      fontSize,
      textTransform: "uppercase",
      lineHeight
    }
  });
