import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { IOColors, useIOTheme } from "../../core";
import { IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

type LabelLinkProps =
  | { color?: never; asLink: true }
  | { color?: IOColors; asLink?: false };

type LabelProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Regular" | "Semibold" | "Bold">;
} & LabelLinkProps;

/**
 * `LabelSmall` typographic style
 */
export const Label = forwardRef<View, LabelProps>(
  (
    { weight: customWeight, color: customColor, asLink, ...props },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();

    const defaultColor = asLink
      ? theme["interactiveElem-default"]
      : theme["textBody-tertiary"];

    const LabelProps: IOTextProps = {
      ...props,
      font: "TitilliumSansPro",
      weight: customWeight ?? "Bold",
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
