import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { IOTheme, useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOFontFamily, IOFontSize, IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

const defaultColor: keyof IOTheme = "textHeading-default";

export const h4FontSize: IOFontSize = 20;
export const h4LineHeight = 24;
const fontName: IOFontFamily = "Titillio";
const fontWeight: IOFontWeight = "Semibold";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontName: IOFontFamily = "TitilliumSansPro";
const legacyFontWeight: IOFontWeight = "Semibold";

/**
 * `H4` typographic style
 */
export const H4 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const H4Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "title3", // iOS only
      font: isExperimental ? fontName : legacyFontName,
      size: h4FontSize,
      weight: isExperimental ? fontWeight : legacyFontWeight,
      color: customColor ?? theme[defaultColor],
      lineHeight: h4LineHeight
    };

    return (
      <IOText ref={ref} {...H4Props}>
        {props.children}
      </IOText>
    );
  }
);
