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

const defaultColor: keyof IOTheme = "textBody-default";

export const captionFontSize: IOFontSize = 12;
const fontName: IOFontFamily = "ReadexPro";
const fontWeight: IOFontWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontName: IOFontFamily = "TitilliumSansPro";

/**
 * `Caption` typographic style
 */
export const Caption = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const CaptionProps = {
      ...props,
      font: isExperimental ? fontName : legacyFontName,
      size: captionFontSize,
      weight: fontWeight,
      color: customColor ?? theme[defaultColor],
      allowFontScaling: isExperimental,
      maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier,
      textStyle: {
        textTransform: "uppercase"
      } as TextStyle
    };

    return (
      <IOText ref={ref} {...CaptionProps} dynamicTypeRamp="caption1">
        {props.children}
      </IOText>
    );
  }
);
