import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOTheme } from "../../core";
import { IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const h2FontSize: IOFontSize = 26;
export const h2LineHeight = 39;

/**
 * `H2` typographic style
 */
export const H2 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();

    const H2Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "title1", // iOS only
      font: "ReadexPro",
      weight: "Regular",
      size: h2FontSize,
      lineHeight: h2LineHeight,
      color: customColor ?? theme["textHeading-default"]
    };

    return (
      <IOText ref={ref} {...H2Props}>
        {props.children}
      </IOText>
    );
  }
);
