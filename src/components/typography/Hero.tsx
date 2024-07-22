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

export const heroFontSize: IOFontSize = 32;
export const heroLineHeight = 48;
const fontName: IOFontFamily = "ReadexPro";
const fontWeight: IOFontWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyHeroFontSize: IOFontSize = 35;
const legacyHeroLineHeight = 49;
const legacyFontName: IOFontFamily = "TitilliumSansPro";
const legacyFontWeight: IOFontWeight = "Semibold";

/**
 * `Hero` typographic style
 */
export const Hero = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const HeroProps = {
      ...props,
      font: isExperimental ? fontName : legacyFontName,
      size: isExperimental ? heroFontSize : legacyHeroFontSize,
      weight: isExperimental ? fontWeight : legacyFontWeight,
      color: customColor ?? theme[defaultColor],
      lineHeight: isExperimental ? heroLineHeight : legacyHeroLineHeight,
      allowFontScaling: isExperimental,
      maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier
    };

    return (
      <IOText ref={ref} {...HeroProps}>
        {props.children}
      </IOText>
    );
  }
);
