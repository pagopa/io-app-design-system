import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIONewTypeface, useIOTheme } from "../../context";
import { IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const heroFontSize: IOFontSize = 32;
export const heroLineHeight = 48;

/**
 * `Hero` typographic style
 */
export const Hero = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { newTypefaceEnabled } = useIONewTypeface();

    const HeroProps: IOTextProps = {
      ...props,
      font: newTypefaceEnabled ? "Titillio" : "TitilliumSansPro",
      weight: "Semibold",
      size: 32,
      lineHeight: 48,
      color: customColor ?? theme["textHeading-default"]
    };

    return (
      <IOText ref={ref} {...HeroProps}>
        {props.children}
      </IOText>
    );
  }
);
