import React from "react";
import { View } from "react-native";
import { IOTheme } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Semibold">;

type H5Props = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const h5FontSize = 14;
export const h5LineHeight = 16;
const font: FontFamily = "TitilliumSansPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Semibold";

/**
 * `H5` typographic style
 */
export const H5 = React.forwardRef<View, H5Props>((props, ref) =>
  useTypographyFactory<AllowedWeight, AllowedColors>(
    {
      ...props,
      defaultWeight,
      defaultColor,
      font,
      fontStyle: {
        fontSize: h5FontSize,
        lineHeight: h5LineHeight,
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    },
    ref
  )
);
