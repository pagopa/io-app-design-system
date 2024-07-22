import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { IOVisualCostants, useIOExperimentalDesign } from "../../core";
import { IOColors } from "../../core/IOColors";
import { IOFontFamily, IOFontSize, IOFontWeight } from "../../utils/fonts";
import { IOText, TypographicStyleProps } from "./IOText";

export const buttonTextFontSize: IOFontSize = 16;
/* Needed to render `ButtonOutline` and`ButtonLink` because they use
`AnimatedText` for color transition through Reanimated */
const defaultColor: IOColors = "white";
const fontName: IOFontFamily = "ReadexPro";
const fontWeight: IOFontWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontName: IOFontFamily = "TitilliumSansPro";
const legacyFontWeight: IOFontWeight = "Semibold";

/**
 * `ButtonText` typographic style
 */
export const ButtonText = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const { isExperimental } = useIOExperimentalDesign();

    const ButtonTextProps = {
      ...props,
      font: isExperimental ? fontName : legacyFontName,
      size: buttonTextFontSize,
      weight: isExperimental ? fontWeight : legacyFontWeight,
      color: customColor ?? defaultColor,
      allowFontScaling: isExperimental,
      maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier
    };

    return (
      <IOText ref={ref} {...ButtonTextProps}>
        {props.children}
      </IOText>
    );
  }
);
