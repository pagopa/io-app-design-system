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

type LabelMiniProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Regular" | "Semibold" | "Bold">;
} & TypographicStyleAsLinkProps;

const fontName: IOFontFamily = "Titillio";
const fontWeight: IOFontWeight = "Bold";

const legacyFontName: IOFontFamily = "TitilliumSansPro";
const legacyFontWeight: IOFontWeight = "Bold";

/**
 * `LabelMini` typographic style
 */
export const LabelMini = forwardRef<View, LabelMiniProps>(
  (
    { weight: customWeight, color: customColor, asLink, ...props },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const defaultColor = asLink
      ? theme["interactiveElem-default"]
      : theme["textBody-tertiary"];

    const LabelMiniProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "footnote" /* iOS only */,
      font: isExperimental ? fontName : legacyFontName,
      weight: customWeight
        ? customWeight
        : isExperimental
        ? fontWeight
        : legacyFontWeight,
      size: 12,
      lineHeight: 18,
      color: customColor ?? defaultColor,
      ...(asLink
        ? {
            accessibilityRole: "link",
            textStyle: { textDecorationLine: "underline" }
          }
        : {})
    };

    return (
      <IOText ref={ref} {...LabelMiniProps}>
        {props.children}
      </IOText>
    );
  }
);
