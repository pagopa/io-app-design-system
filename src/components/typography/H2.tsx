import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { IOTheme, useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOFontFamily, IOFontSize, IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

const defaultColor: keyof IOTheme = "textHeading-default";

export const h2FontSize: IOFontSize = 26;
export const h2LineHeight = 39;
const fontName: IOFontFamily = "ReadexPro";
const fontWeight: IOFontWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyH2FontSize: IOFontSize = 28;
const legacyH2LineHeight = 40;
const legacyFontName: IOFontFamily = "TitilliumSansPro";
const legacyFontWeight: IOFontWeight = "Semibold";

/**
 * `H2` typographic style
 */
export const H2 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const H2Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "title1", // iOS only
      font: isExperimental ? fontName : legacyFontName,
      size: isExperimental ? h2FontSize : legacyH2FontSize,
      weight: isExperimental ? fontWeight : legacyFontWeight,
      color: customColor ?? theme[defaultColor],
      lineHeight: isExperimental ? h2LineHeight : legacyH2LineHeight
    };

    return (
      <IOText ref={ref} {...H2Props}>
        {props.children}
      </IOText>
    );
  }
);
