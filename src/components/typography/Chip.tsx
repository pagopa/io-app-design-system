import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOTheme } from "../../core";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

/**
 * `Chip` typographic style
 */
export const Chip = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();

    const ChipProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "caption2", // iOS only
      font: "ReadexPro",
      weight: "Regular",
      size: 12,
      color: customColor ?? theme["textBody-default"]
    };

    return (
      <IOText ref={ref} {...ChipProps}>
        {props.children}
      </IOText>
    );
  }
);
