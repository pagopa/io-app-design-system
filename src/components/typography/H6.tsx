import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOTheme } from "../../core";
import { IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const h6FontSize: IOFontSize = 16;
export const h6LineHeight = 24;

/**
 * `H6` typographic style
 */
export const H6 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();

    const H6Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "headline", // iOS only
      font: "ReadexPro",
      weight: "Regular",
      size: h6FontSize,
      lineHeight: h6LineHeight,
      color: customColor ?? theme["textHeading-default"]
    };

    return (
      <IOText ref={ref} {...H6Props}>
        {props.children}
      </IOText>
    );
  }
);
