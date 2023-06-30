import * as React from "react";
import { IOTheme, IOThemeLight } from "../../core/IOColors";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import { ExternalTypographyProps, TypographyProps } from "./common";
import { useTypographyFactory } from "./Factory";

type AllowedColors = IOTheme["textBody-default"] | "blueIO-850";
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Regular">;

type OwnProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

/* Common typographic styles */
export const h6FontSize = 16;
export const h6LineHeight = 24;
export const h6DefaultColor: AllowedColors = IOThemeLight["textBody-default"];

/* New typographic styles */
const h6FontName: IOFontFamily = "ReadexPro";
const h6DefaultWeight: AllowedWeight = "Regular";

/**
 * Typography component to render `H4` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Bold`, color: `bluegreyDark`
 * @param props
 * @constructor
 */
export const H6: React.FunctionComponent<OwnProps> = props =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: h6DefaultWeight,
    defaultColor: h6DefaultColor,
    font: h6FontName,
    fontStyle: { fontSize: h6FontSize, lineHeight: h6LineHeight }
  });

export default H6;
