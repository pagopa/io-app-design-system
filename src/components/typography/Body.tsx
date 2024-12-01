import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIONewTypeface, useIOTheme } from "../../core";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import {
  IOText,
  IOTextProps,
  TypographicStyleAsLinkProps,
  TypographicStyleProps
} from "./IOText";

type BodyStyleProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Regular" | "Semibold">;
} & TypographicStyleAsLinkProps;

export const bodyFontSize = 16;
export const bodyLineHeight = 24;

const fontName: IOFontFamily = "Titillio";
const legacyFontName: IOFontFamily = "TitilliumSansPro";

/**
 * `Body` typographic style
 */
export const Body = forwardRef<View, BodyStyleProps>(
  (
    { weight: customWeight, color: customColor, asLink, ...props },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();
    const { newTypefaceEnabled } = useIONewTypeface();

    const defaultColor = asLink
      ? theme["interactiveElem-default"]
      : theme["textBody-tertiary"];

    const BodyProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "body", // iOS only
      font: newTypefaceEnabled ? fontName : legacyFontName,
      weight: customWeight ? customWeight : "Regular",
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
