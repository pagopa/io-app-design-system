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

type LabelProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Regular" | "Semibold" | "Bold">;
} & TypographicStyleAsLinkProps;

const fontName: IOFontFamily = "Titillio";
const fontWeight: IOFontWeight = "Semibold";

const legacyFontName: IOFontFamily = "TitilliumSansPro";
const legacyFontWeight: IOFontWeight = "Semibold";

/**
 * `LabelSmall` typographic style
 */
export const Label = forwardRef<View, LabelProps>(
  (
    { weight: customWeight, color: customColor, asLink, ...props },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const defaultColor = asLink
      ? theme["interactiveElem-default"]
      : theme["textBody-tertiary"];

    const LabelProps: IOTextProps = {
      ...props,
      font: isExperimental ? fontName : legacyFontName,
      weight: customWeight
        ? customWeight
        : isExperimental
        ? fontWeight
        : legacyFontWeight,
      size: 16,
      lineHeight: 24,
      color: customColor ?? defaultColor,
      ...(asLink
        ? {
            accessibilityRole: "link",
            textStyle: { textDecorationLine: "underline" }
          }
        : {})
    };

    return (
      <IOText ref={ref} {...LabelProps}>
        {props.children}
      </IOText>
    );
  }
);
