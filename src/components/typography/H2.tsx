import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIONewTypeface, useIOTheme } from "../../context";
import { IOFontSize, IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

type H2StyleProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Semibold" | "Bold">;
};

export const h2FontSize: IOFontSize = 26;
export const h2LineHeight = 34;

/**
 * `H2` typographic style
 */
export const H2 = forwardRef<View, H2StyleProps>(
  (
    { weight: customWeight, color: customColor, ...props },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();
    const { newTypefaceEnabled } = useIONewTypeface();

    const H2Props: IOTextProps = {
      ...props,
      dynamicTypeRamp: "title1", // iOS only
      font: newTypefaceEnabled ? "Titillio" : "TitilliumSansPro",
      weight: customWeight ?? "Semibold",
      size: h2FontSize,
      lineHeight: h2LineHeight,
      color: customColor ?? theme["textHeading-default"]
    };

    return (
      <IOText ref={ref} {...H2Props}>
        {props.children}
      </IOText>
    );
  }
);
