import React, { ForwardedRef, forwardRef } from "react";
import { View, Pressable } from "react-native";
import { useIONewTypeface, useIOTheme } from "../../context";
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
    {
      weight: customWeight,
      color: customColor,
      asLink,
      accessibilityRole = "link",
      textStyle: customTextStyle,
      onPress,
      ...props
    },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();
    const { newTypefaceEnabled } = useIONewTypeface();

    const defaultColor = asLink
      ? theme["interactiveElem-default"]
      : theme["textBody-tertiary"];

    const BodySmallProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "footnote" /* iOS only */,
      font: newTypefaceEnabled ? fontName : legacyFontName,
      weight: customWeight ?? "Regular",
      size: 14,
      lineHeight: 21,
      color: customColor ?? defaultColor,
      ...(asLink
        ? {
            accessibilityRole,
            textStyle: customTextStyle ?? { textDecorationLine: "underline" }
          }
        : {})
    };

    if (asLink) {
      return (
        <Pressable
          onPress={onPress}
          ref={ref}
          accessibilityRole={accessibilityRole}
        >
          <IOText {...BodySmallProps}>{props.children}</IOText>
        </Pressable>
      );
    }

    return (
      <IOText ref={ref} {...BodySmallProps}>
        {props.children}
      </IOText>
    );
  }
);
