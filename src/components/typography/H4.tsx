import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import {
  IOTheme,
  IOVisualCostants,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { IOFontFamily, IOFontSize, IOFontWeight } from "../../utils/fonts";
import { IOText, TypographicStyleProps } from "./IOText";

const defaultColor: keyof IOTheme = "textHeading-default";

export const h4FontSize: IOFontSize = 20;
export const h4LineHeight = 24;
const fontName: IOFontFamily = "ReadexPro";
const fontWeight: IOFontWeight = "Regular";

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

    const H4Props = {
      ...props,
      font: isExperimental ? fontName : legacyFontName,
      size: h4FontSize,
      weight: isExperimental ? fontWeight : legacyFontWeight,
      color: customColor ?? theme[defaultColor],
      lineHeight: h4LineHeight,
      allowFontScaling: isExperimental,
      maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier
    };

    return (
      <IOText ref={ref} {...H4Props} dynamicTypeRamp="title3">
        {props.children}
      </IOText>
    );
  }
);
