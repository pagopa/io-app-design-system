import React, { ForwardedRef, forwardRef } from "react";
import { TextStyle, View } from "react-native";
import {
  IOTheme,
  IOVisualCostants,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { IOFontFamily, IOFontSize, IOFontWeight } from "../../utils/fonts";
import { IOText, TypographicStyleProps } from "./IOText";

const defaultColor: keyof IOTheme = "textHeading-default";

export const h5FontSize: IOFontSize = 14;
export const h5LineHeight = 16;
const fontName: IOFontFamily = "TitilliumSansPro";
const fontWeight: IOFontWeight = "Semibold";

/**
 * `H5` typographic style
 */
export const H5 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const H5Props = {
      ...props,
      font: fontName,
      size: h5FontSize,
      lineHeight: h5LineHeight,
      weight: fontWeight,
      color: customColor ?? theme[defaultColor],
      allowFontScaling: isExperimental,
      maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier,
      textStyle: {
        textTransform: "uppercase",
        letterSpacing: 0.5
      } as TextStyle
    };

    return (
      <IOText ref={ref} {...H5Props} dynamicTypeRamp="subheadline">
        {props.children}
      </IOText>
    );
  }
);
