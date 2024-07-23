import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { IOColors, useIOTheme } from "../../core";
import { IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

type LabelLinkProps =
  | { color?: never; asLink: true; onPress: () => void }
  | { color?: IOColors; asLink?: false };

type LabelSmallProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Regular" | "Semibold" | "Bold">;
} & LabelLinkProps;

/**
 * `LabelSmall` typographic style
 */
export const LabelSmall = forwardRef<View, LabelSmallProps>(
  (
    { weight: customWeight, color: customColor, asLink, ...props },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();

    const defaultColor = asLink
      ? theme["interactiveElem-default"]
      : theme["textBody-tertiary"];

    const LabelSmallProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "footnote" /* iOS only */,
      font: "TitilliumSansPro",
      weight: customWeight ?? "Bold",
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
      <IOText ref={ref} {...LabelSmallProps}>
        {props.children}
      </IOText>
    );
  }
);
