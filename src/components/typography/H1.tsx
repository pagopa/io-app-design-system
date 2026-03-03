import { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIONewTypeface, useIOTheme } from "../../context";
import { IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const h1FontSize: IOFontSize = 28;
export const h1LineHeight = 42;

/**
 * `H1` typographic style
 */
export const H1 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { newTypefaceEnabled } = useIONewTypeface();

    const H1Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "largeTitle", // iOS only
      font: newTypefaceEnabled ? "Titillio" : "TitilliumSansPro",
      weight: "Semibold",
      size: h1FontSize,
      lineHeight: h1LineHeight,
      color: customColor ?? theme["textHeading-default"]
    };

    return (
      <IOText ref={ref} {...H1Props}>
        {props.children}
      </IOText>
    );
  }
);
