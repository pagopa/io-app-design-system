import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIONewTypeface, useIOTheme } from "../../core";
import { IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

/* Common typographic styles */
export const h3FontSize: IOFontSize = 22;
export const h3LineHeight = 33;

/**
 * `H3` typographic style
 */
export const H3 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { newTypefaceEnabled } = useIONewTypeface();

    const H3Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "title2", // iOS only
      font: newTypefaceEnabled ? "Titillio" : "TitilliumSansPro",
      weight: "Semibold",
      size: h3FontSize,
      lineHeight: h3LineHeight,
      color: customColor ?? theme["textHeading-default"]
    };

    return (
      <IOText ref={ref} {...H3Props}>
        {props.children}
      </IOText>
    );
  }
);
