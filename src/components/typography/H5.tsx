import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIONewTypeface, useIOTheme } from "../../context";
import { IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const h5FontSize: IOFontSize = 14;
export const h5LineHeight = 16;

/**
 * `H5` typographic style
 */
export const H5 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { newTypefaceEnabled } = useIONewTypeface();

    const H5Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "subheadline", // iOS only
      font: newTypefaceEnabled ? "Titillio" : "TitilliumSansPro",
      weight: "Semibold",
      size: h5FontSize,
      lineHeight: h5LineHeight,
      color: customColor ?? theme["textHeading-default"],
      textStyle: {
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    };

    return (
      <IOText ref={ref} {...H5Props}>
        {props.children}
      </IOText>
    );
  }
);
