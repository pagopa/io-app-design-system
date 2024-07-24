import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { IOTheme, useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOFontFamily, IOFontSize, IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

const defaultColor: keyof IOTheme = "textHeading-default";

export const h5FontSize: IOFontSize = 14;
export const h5LineHeight = 16;

const fontName: IOFontFamily = "Titillio";
const fontWeight: IOFontWeight = "Semibold";

const legacyFontName: IOFontFamily = "TitilliumSansPro";
const legacyFontWeight: IOFontWeight = "Semibold";

/**
 * `H5` typographic style
 */
export const H5 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const H5Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "subheadline", // iOS only
      font: isExperimental ? fontName : legacyFontName,
      weight: isExperimental ? fontWeight : legacyFontWeight,
      size: h5FontSize,
      lineHeight: h5LineHeight,
      color: customColor ?? theme[defaultColor],
      textStyle: {
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    };

    return (
      <IOText ref={ref} {...H5Props}>
        {props.children}
      </IOText>
    );
  }
);
