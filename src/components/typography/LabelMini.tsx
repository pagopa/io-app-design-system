import { ForwardedRef, forwardRef } from "react";
import { Pressable, View } from "react-native";
import { useIONewTypeface, useIOTheme } from "../../context";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import {
  IOText,
  IOTextProps,
  TypographicStyleAsLinkProps,
  TypographicStyleProps
} from "./IOText";

type LabelMiniProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Regular" | "Semibold">;
} & TypographicStyleAsLinkProps;

const fontName: IOFontFamily = "Titillio";
const legacyFontName: IOFontFamily = "TitilliumSansPro";

/**
 * `LabelMini` typographic style
 */
export const LabelMini = forwardRef<View, LabelMiniProps>(
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

    const LabelMiniProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "footnote" /* iOS only */,
      font: newTypefaceEnabled ? fontName : legacyFontName,
      weight: customWeight ? customWeight : "Semibold",
      size: 12,
      lineHeight: 18,
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
          <IOText {...LabelMiniProps}>{props.children}</IOText>
        </Pressable>
      );
    }

    return (
      <IOText ref={ref} {...LabelMiniProps}>
        {props.children}
      </IOText>
    );
  }
);
