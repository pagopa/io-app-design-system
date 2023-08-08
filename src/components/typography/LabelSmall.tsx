import React from "react";
import type { IOColors, IOTheme } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type PartialAllowedColors = Extract<
  IOColors,
  | "blue"
  | "bluegrey"
  | "red"
  | "white"
  | "bluegreyDark"
  | "grey-700"
  | "grey-200"
>;
type AllowedColors = PartialAllowedColors | IOTheme["textBody-tertiary"];
type AllowedWeight = Extract<IOFontWeight, "Bold" | "Regular" | "SemiBold">;
type FontSize = "regular" | "small";
type AllowedFontSize = { fontSize?: FontSize };
type OwnProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
> &
  AllowedFontSize;

/**
 * Typography component to render `LabelSmall` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Bold`, color: `blue`
 * @param props`
 * @constructor
 */
export const LabelSmall: React.FC<OwnProps> = props => {
  const fontName: FontFamily = "TitilliumWeb";
  const fontSizeMapping: Record<FontSize, number> = { regular: 14, small: 12 };
  const labelDefaultWeight = "Bold";
  const labelDefaultcolor = "blue";

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: labelDefaultWeight,
    defaultColor: labelDefaultcolor,
    font: fontName,
    fontStyle: {
      fontSize: props.fontSize
        ? fontSizeMapping[props.fontSize]
        : fontSizeMapping.regular
    }
  });
};
