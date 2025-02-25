import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIONewTypeface, useIOTheme } from "../../core";
import { IOFontSize, IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

type H3StyleProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Semibold" | "Bold">;
};

/* Common typographic styles */
export const h3FontSize: IOFontSize = 22;
export const h3LineHeight = 33;

/**
 * `H3` typographic style
 */
export const H3 = forwardRef<View, H3StyleProps>(
  (
    { weight: customWeight, color: customColor, ...props },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();
    const { newTypefaceEnabled } = useIONewTypeface();

    const H3Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "title2", // iOS only
      font: newTypefaceEnabled ? "Titillio" : "TitilliumSansPro",
      weight: customWeight ?? "Semibold",
      size: h3FontSize,
      lineHeight: h3LineHeight,
      color: customColor ?? theme["textHeading-default"]
    };

    return (
      <IOText ref={ref} {...H3Props}>
        {props.children}
      </IOText>
    );
  }
);
