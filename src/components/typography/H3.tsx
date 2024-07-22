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

/* Common typographic styles */
export const h3FontSize: IOFontSize = 22;
export const h3LineHeight = 33;
const fontName: IOFontFamily = "ReadexPro";
const fontWeight: IOFontWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontName: IOFontFamily = "TitilliumSansPro";
const legacyFontWeight: IOFontWeight = "Semibold";

/**
 * `H3` typographic style
 */
export const H3 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const H3Props = {
      ...props,
      font: isExperimental ? fontName : legacyFontName,
      size: h3FontSize,
      weight: isExperimental ? fontWeight : legacyFontWeight,
      color: customColor ?? theme[defaultColor],
      lineHeight: h3LineHeight,
      allowFontScaling: isExperimental,
      maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier
    };

    return (
      <IOText ref={ref} {...H3Props} dynamicTypeRamp="title2">
        {props.children}
      </IOText>
    );
  }
);
