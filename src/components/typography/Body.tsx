import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOTheme } from "../../core";
import { IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const bodyFontSize = 16;
export const bodyLineHeight = 24;
export const bodyFontWeight: IOFontWeight = "Regular";

/**
 * `Body` typographic style
 */
export const Body = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();

    const BodyProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "body", // iOS only
      font: "TitilliumSansPro",
      weight: "Regular",
      size: bodyFontSize,
      lineHeight: bodyLineHeight,
      color: customColor ?? theme["textBody-tertiary"]
    };

    return (
      <IOText ref={ref} {...BodyProps}>
        {props.children}
      </IOText>
    );
  }
);
