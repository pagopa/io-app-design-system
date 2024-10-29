import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOTheme } from "../../core";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

/**
 * `Hero` typographic style
 */
export const Hero = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();

    const HeroProps: IOTextProps = {
      ...props,
      font: "ReadexPro",
      weight: "Regular",
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
