import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { IOTheme, useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOFontFamily, IOFontSize, IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

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

    const HeroProps: IOTextProps = {
      ...props,
      font: isExperimental ? fontName : legacyFontName,
      weight: isExperimental ? fontWeight : legacyFontWeight,
      size: isExperimental ? heroFontSize : legacyHeroFontSize,
      lineHeight: isExperimental ? heroLineHeight : legacyHeroLineHeight,
      color: customColor ?? theme[defaultColor]
    };

    return (
      <IOText ref={ref} {...HeroProps}>
        {props.children}
      </IOText>
    );
  }
);
