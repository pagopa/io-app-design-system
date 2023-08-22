import React from "react";
import { IOColorsStatusForeground, IOTheme } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOColorsStatusForeground | IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Regular">;

type OwnProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

/* Common typographic styles */
export const h3FontSize = 22;
export const h3LineHeight = 33;

/**
 * Typography component to render `H4` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Regular/SemiBold`, color: `black/bluegreyDark` if design system is enabled or not
 * @param props
 * @constructor
 */
export const H3: React.FC<OwnProps> = props => {
  /* New typographic styles */
  const font: FontFamily = "ReadexPro";
  const defaultColor: AllowedColors = "black";
  const defaultWeight: AllowedWeight = "Regular";

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight,
    defaultColor,
    font,
    fontStyle: { fontSize: h3FontSize, lineHeight: h3LineHeight }
  });
};
