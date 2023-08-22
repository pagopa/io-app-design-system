import React from "react";
import type { IOColors } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = Extract<IOColors, "bluegreyDark" | "bluegrey">;
type AllowedWeight = Extract<IOFontWeight, "Regular" | "SemiBold" | "Bold">;

type OwnProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

/**
 * Typography component to render `Monospace` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Regular`, color: `bluegrey`
 * @param props`
 * @constructor
 */
export const Monospace: React.FC<OwnProps> = props => {
  const fontName: FontFamily = "RobotoMono";
  const fontSize = 16;
  const lineHeight = 24;

  const monospaceDefaultWeight = "Regular";
  const monospaceDefaultcolor = "bluegrey";

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: monospaceDefaultWeight,
    defaultColor: monospaceDefaultcolor,
    font: fontName,
    fontStyle: { fontSize, lineHeight }
  });
};
