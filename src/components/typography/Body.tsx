import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOTheme } from "../../core";
import { IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

type BodyStyleProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Regular" | "Semibold" | "Bold">;
};

export const bodyFontSize = 16;
export const bodyLineHeight = 24;

/**
 * `Body` typographic style
 */
export const Body = forwardRef<View, BodyStyleProps>(
  (
    { weight: customWeight, color: customColor, ...props },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();

    const BodyProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "body", // iOS only
      font: "TitilliumSansPro",
      weight: customWeight ?? "Regular",
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
