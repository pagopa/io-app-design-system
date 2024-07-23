import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOTheme } from "../../core";
import { IOFontWeight } from "../../utils/fonts";
import {
  IOText,
  IOTextProps,
  TypographicStyleAsLinkProps,
  TypographicStyleProps
} from "./IOText";

type BodyStyleProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Regular" | "Semibold" | "Bold">;
} & TypographicStyleAsLinkProps;

export const bodyFontSize = 16;
export const bodyLineHeight = 24;

/**
 * `Body` typographic style
 */
export const Body = forwardRef<View, BodyStyleProps>(
  (
    { weight: customWeight, color: customColor, asLink, ...props },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();

    const defaultColor = asLink
      ? theme["interactiveElem-default"]
      : theme["textBody-tertiary"];

    const BodyProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "body", // iOS only
      font: "TitilliumSansPro",
      weight: customWeight ?? "Regular",
      size: bodyFontSize,
      lineHeight: bodyLineHeight,
      color: customColor ?? defaultColor,
      ...(asLink
        ? {
            accessibilityRole: "link",
            textStyle: { textDecorationLine: "underline" }
          }
        : {})
    };

    return (
      <IOText ref={ref} {...BodyProps}>
        {props.children}
      </IOText>
    );
  }
);
