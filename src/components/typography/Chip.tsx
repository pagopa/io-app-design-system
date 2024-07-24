import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOFontFamily } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

const fontName: IOFontFamily = "Titillio";
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
      dynamicTypeRamp: "caption2", // iOS only
      font: isExperimental ? fontName : legacyFontName,
      weight: "Regular",
      size: 12,
      color: customColor ?? theme["textBody-default"]
    };

    return (
      <IOText ref={ref} {...ChipProps}>
        {props.children}
      </IOText>
    );
  }
);
