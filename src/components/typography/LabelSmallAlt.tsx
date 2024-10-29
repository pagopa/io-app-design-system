import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOTheme } from "../../core";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

/**
 * `LabelSmallAlt` typographic style. It's referenced as `LabelSmallReadex` in the design projects.
 */
export const LabelSmallAlt = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();

    const LabelSmallAltProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "footnote" /* iOS only */,
      font: "ReadexPro",
      weight: "Regular",
      size: 14,
      lineHeight: 21,
      color: customColor ?? theme["textBody-tertiary"]
    };

    return (
      <IOText ref={ref} {...LabelSmallAltProps}>
        {props.children}
      </IOText>
    );
  }
);
