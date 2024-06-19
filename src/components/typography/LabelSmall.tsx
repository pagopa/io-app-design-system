import React from "react";
import { View } from "react-native";
import { IOColors, IOTheme } from "../../core";
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
type AllowedWeight = Extract<IOFontWeight, "Bold" | "Regular" | "Semibold">;

type FontSize = "regular" | "small";
type AllowedFontSize = { fontSize?: FontSize };

type LabelSmallProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
> &
  AllowedFontSize;

const font: FontFamily = "TitilliumSansPro";
const fontSizeMapping: Record<FontSize, number> = {
  regular: 14,
  small: 12
};
const lineHeightMapping: Record<FontSize, number> = {
  regular: 21,
  small: 18
};
const labelDefaultWeight = "Bold";
const labelDefaultcolor = "blue";

/**
 * `LabelSmall` typographic style
 */
export const LabelSmall = React.forwardRef<View, LabelSmallProps>(
  (props, ref) =>
    useTypographyFactory<AllowedWeight, AllowedColors>(
      {
        ...props,
        defaultWeight: labelDefaultWeight,
        defaultColor: labelDefaultcolor,
        font,
        fontStyle: {
          fontSize: props.fontSize
            ? fontSizeMapping[props.fontSize]
            : fontSizeMapping.regular,
          lineHeight: props.fontSize
            ? lineHeightMapping[props.fontSize]
            : lineHeightMapping.regular
        }
      },
      ref
    )
);
