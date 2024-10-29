import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOTheme } from "../../core";
import { IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const h4FontSize: IOFontSize = 20;
export const h4LineHeight = 24;

/**
 * `H4` typographic style
 */
export const H4 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();

    const H4Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "title3", // iOS only
      font: "ReadexPro",
      weight: "Regular",
      size: h4FontSize,
      lineHeight: h4LineHeight,
      color: customColor ?? theme["textHeading-default"]
    };

    return (
      <IOText ref={ref} {...H4Props}>
        {props.children}
      </IOText>
    );
  }
);
