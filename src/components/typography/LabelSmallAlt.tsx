import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

const fontSize = 14;
const lineHeight = 21;
const fontName: IOFontFamily = "ReadexPro";
const fontWeight: IOFontWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontSize = 16;
const legacyFontName: IOFontFamily = "TitilliumSansPro";
const legacyFontWeight: IOFontWeight = "Semibold";

/**
 * `LabelSmallAlt` typographic style. It's referenced as `LabelSmallReadex` in the design projects.
 */
export const LabelSmallAlt = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const LabelSmallAltProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "footnote" /* iOS only */,
      font: isExperimental ? fontName : legacyFontName,
      weight: isExperimental ? fontWeight : legacyFontWeight,
      size: isExperimental ? fontSize : legacyFontSize,
      lineHeight,
      color: customColor ?? theme["textBody-tertiary"]
    };

    return (
      <IOText ref={ref} {...LabelSmallAltProps}>
        {props.children}
      </IOText>
    );
  }
);
