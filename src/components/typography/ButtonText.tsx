import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOExperimentalDesign } from "../../core";
import { IOFontFamily, IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const buttonTextFontSize: IOFontSize = 16;
/* Needed to render `ButtonOutline` and`ButtonLink` because they use
`AnimatedText` for color transition through Reanimated */
const fontName: IOFontFamily = "Titillio";
const legacyFontName: IOFontFamily = "TitilliumSansPro";

/**
 * `ButtonText` typographic style
 */
export const ButtonText = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const { isExperimental } = useIOExperimentalDesign();

    const ButtonTextProps: IOTextProps = {
      ...props,
      font: isExperimental ? fontName : legacyFontName,
      weight: "Semibold",
      size: buttonTextFontSize,
      lineHeight: 20,
      /* Needed to render `ButtonOutline` and`ButtonLink` because they use
`AnimatedText` for color transition through Reanimated */
      color: customColor ?? "white"
    };

    return (
      <IOText ref={ref} {...ButtonTextProps}>
        {props.children}
      </IOText>
    );
  }
);
