import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import {
  IOVisualCostants,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import { IOFontFamily } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

const fontName: IOFontFamily = "ReadexPro";
// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontName: IOFontFamily = "TitilliumSansPro";
/**
 * `Chip` typographic style
 */
export const Chip = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const ChipProps: IOTextProps = {
      ...props,
      font: isExperimental ? fontName : legacyFontName,
      size: 12,
      weight: "Regular",
      color: customColor ?? theme["textBody-default"],
      allowFontScaling: isExperimental,
      maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier
    };

    return (
      <IOText ref={ref} {...ChipProps} dynamicTypeRamp="caption2">
        {props.children}
      </IOText>
    );
  }
);
