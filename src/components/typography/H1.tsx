import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { IOTheme, useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOFontFamily, IOFontSize, IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

const defaultColor: keyof IOTheme = "textHeading-default";

export const h1FontSize: IOFontSize = 28;
export const h1LineHeight = 42;
const fontName: IOFontFamily = "Titillio";
const fontWeight: IOFontWeight = "Semibold";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontName: IOFontFamily = "TitilliumSansPro";
const legacyFontWeight: IOFontWeight = "Semibold";

/**
 * `H1` typographic style
 */
export const H1 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const H1Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "largeTitle", // iOS only
      font: isExperimental ? fontName : legacyFontName,
      weight: isExperimental ? fontWeight : legacyFontWeight,
      size: h1FontSize,
      lineHeight: h1LineHeight,
      color: customColor ?? theme[defaultColor]
    };

    return (
      <IOText ref={ref} {...H1Props}>
        {props.children}
      </IOText>
    );
  }
);
