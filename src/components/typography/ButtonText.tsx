import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const buttonTextFontSize: IOFontSize = 16;

/**
 * `ButtonText` typographic style
 */
export const ButtonText = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const ButtonTextProps: IOTextProps = {
      ...props,
      font: "ReadexPro",
      weight: "Regular",
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
