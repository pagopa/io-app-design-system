import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { IOColors, useIONewTypeface } from "../../core";
import { IOFontFamily, IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const buttonTextFontSize: IOFontSize = 16;
export const buttonTextLineHeight = 20;

/* Needed to render `ButtonOutline` and`ButtonLink` because they use
`AnimatedText` for color transition through Reanimated */
const defaultColor: IOColors = "white";
const fontName: IOFontFamily = "Titillio";
const legacyFontName: IOFontFamily = "TitilliumSansPro";

/**
 * `ButtonText` typographic style
 */
export const ButtonText = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const { newTypefaceEnabled } = useIONewTypeface();

    const ButtonTextProps: IOTextProps = {
      ...props,
      font: newTypefaceEnabled ? fontName : legacyFontName,
      weight: "Semibold",
      size: buttonTextFontSize,
      lineHeight: buttonTextLineHeight,
      /* Needed to render `ButtonOutline` and`ButtonLink` because they use
`AnimatedText` for color transition through Reanimated */
      color: customColor ?? defaultColor
    };

    return (
      <IOText ref={ref} {...ButtonTextProps}>
        {props.children}
      </IOText>
    );
  }
);
