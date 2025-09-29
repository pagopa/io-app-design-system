import React, { ForwardedRef, forwardRef } from "react";
import { View, Pressable } from "react-native";
import { useIOTheme } from "../../context";
import { IOFontWeight } from "../../utils/fonts";
import {
  IOText,
  IOTextProps,
  TypographicStyleAsLinkProps,
  TypographicStyleProps
} from "./IOText";

type BodySmallProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Regular" | "Semibold">;
} & TypographicStyleAsLinkProps;

/**
 * `BodySmall` typographic style
 */
export const BodySmall = forwardRef<View, BodySmallProps>(
  (
    {
      weight: customWeight,
      color: customColor,
      asLink,
      avoidPressable,
      accessibilityRole = "link",
      textStyle: customTextStyle,
      onPress,
      ...props
    },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();

    const defaultColor = asLink
      ? theme["interactiveElem-default"]
      : theme["textBody-tertiary"];

    const BodySmallProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "footnote" /* iOS only */,
      font: "Titillio",
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

    if (asLink && !avoidPressable) {
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
      <IOText
        ref={ref}
        {...BodySmallProps}
        onPress={asLink && avoidPressable ? onPress : undefined}
      >
        {props.children}
      </IOText>
    );
  }
);
