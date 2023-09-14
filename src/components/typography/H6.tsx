import { IOTheme, IOThemeLight } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

// when the weight is bold, only these color are allowed
type AllowedColors = IOTheme["textBody-default"] | "blueIO-850";
type AllowedWeight = Extract<IOFontWeight, "Regular">;

type H6Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const h6FontSize = 16;
export const h6LineHeight = 24;
const h6DefaultColor: AllowedColors = IOThemeLight["textBody-default"];
const h6DefaultWeight: AllowedWeight = "Regular";
const fontName: FontFamily = "ReadexPro";

/**
 * `H6` typographic style
 */
export const H6 = (props: H6Props) =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: h6DefaultWeight,
    defaultColor: h6DefaultColor,
    font: fontName,
    fontStyle: { fontSize: h6FontSize, lineHeight: h6LineHeight }
  });
