import React, { ForwardedRef, forwardRef } from "react";
import { Pressable, View } from "react-native";
import { useIOTheme } from "../../context";
import { IOFontWeight } from "../../utils/fonts";
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

/**
 * `Body` typographic style
 */
export const Body = forwardRef<View, BodyStyleProps>(
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

    const BodyProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "body", // iOS only
      font: "Titillio",
      weight: customWeight ? customWeight : "Regular",
      size: bodyFontSize,
      lineHeight: bodyLineHeight,
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
          <IOText {...BodyProps}>{props.children}</IOText>
        </Pressable>
      );
    }

    return (
      <IOText
        ref={ref}
        {...BodyProps}
        onPress={asLink && avoidPressable ? onPress : undefined}
      >
        {props.children}
      </IOText>
    );
  }
);
