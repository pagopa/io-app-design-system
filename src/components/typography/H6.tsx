import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { IOTheme, useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOFontFamily, IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

const defaultColor: keyof IOTheme = "textHeading-default";

export const h6FontSize: IOFontSize = 16;
export const h6LineHeight = 24;
const fontName: IOFontFamily = "Titillio";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontName: IOFontFamily = "TitilliumSansPro";

/**
 * `H6` typographic style
 */
export const H6 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const H6Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "headline", // iOS only
      font: isExperimental ? fontName : legacyFontName,
      size: h6FontSize,
      lineHeight: h6LineHeight,
      weight: "Semibold",
      color: customColor ?? theme[defaultColor]
    };

    return (
      <IOText ref={ref} {...H6Props}>
        {props.children}
      </IOText>
    );
  }
);
