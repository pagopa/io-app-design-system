import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import {
  IOText,
  IOTextProps,
  TypographicStyleAsLinkProps,
  TypographicStyleProps
} from "./IOText";

type BodySmallProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Regular" | "Semibold">;
} & TypographicStyleAsLinkProps;

const fontName: IOFontFamily = "Titillio";
const legacyFontName: IOFontFamily = "TitilliumSansPro";

/**
 * `BodySmall` typographic style
 */
export const BodySmall = forwardRef<View, BodySmallProps>(
  (
    { weight: customWeight, color: customColor, asLink, ...props },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const defaultColor = asLink
      ? theme["interactiveElem-default"]
      : theme["textBody-tertiary"];

    const BodySmallProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "footnote" /* iOS only */,
      font: isExperimental ? fontName : legacyFontName,
      weight: customWeight ?? "Regular",
      size: 14,
      lineHeight: 21,
      color: customColor ?? defaultColor,
      ...(asLink
        ? {
            accessibilityRole: "link",
            textStyle: { textDecorationLine: "underline" }
          }
        : {})
    };

    return (
      <IOText ref={ref} {...BodySmallProps}>
        {props.children}
      </IOText>
    );
  }
);
