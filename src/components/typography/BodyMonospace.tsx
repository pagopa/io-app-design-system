import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOTheme } from "../../core";
import { bodyFontSize, bodyLineHeight } from "./Body";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

/**
 * `BodyMonospace` typographic style
 */
export const BodyMonospace = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();

    const BodyProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "body", // iOS only
      font: "DMMono",
      weight: "Medium",
      size: bodyFontSize,
      lineHeight: bodyLineHeight,
      color: customColor ?? theme["textBody-tertiary"],
      textStyle: {
        letterSpacing: 0.5
      }
    };

    return (
      <IOText ref={ref} {...BodyProps}>
        {props.children}
      </IOText>
    );
  }
);
