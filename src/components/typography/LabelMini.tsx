import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOTheme } from "../../core";
import { IOFontWeight } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

type LabelMiniProps = TypographicStyleProps & {
  weight?: Extract<IOFontWeight, "Regular" | "Semibold" | "Bold">;
};

/**
 * `LabelMini` typographic style
 */
export const LabelMini = forwardRef<View, LabelMiniProps>(
  (
    { weight: customWeight, color: customColor, ...props },
    ref?: ForwardedRef<View>
  ) => {
    const theme = useIOTheme();

    const LabelMiniProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "footnote" /* iOS only */,
      font: "TitilliumSansPro",
      weight: customWeight ?? "Bold",
      size: 12,
      lineHeight: 18,
      color: customColor ?? theme["textBody-tertiary"]
    };

    return (
      <IOText ref={ref} {...LabelMiniProps}>
        {props.children}
      </IOText>
    );
  }
);
