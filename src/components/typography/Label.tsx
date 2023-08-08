import React from "react";
import type { IOColors, IOColorsStatusForeground } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type PartialAllowedColors = Extract<
  IOColors,
  "blue" | "bluegrey" | "bluegreyDark" | "white" | "red"
>;
type AllowedColors = PartialAllowedColors | IOColorsStatusForeground;
type AllowedWeight = Extract<IOFontWeight, "Bold" | "Regular" | "SemiBold">;
type OwnProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

/**
 * Typography component to render `Label` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Bold`, color: `blue`
 * @param props`
 * @constructor
 */
export const Label: React.FC<OwnProps> = props => {
  const fontName: FontFamily = "TitilliumWeb";
  const fontSize = 16;
  const labelDefaultWeight = "Bold";
  const labelDefaultcolor = "blue";

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: labelDefaultWeight,
    defaultColor: labelDefaultcolor,
    font: fontName,
    fontStyle: { fontSize }
  });
};
