import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const captionFontSize: IOFontSize = 12;

/**
 * `Caption` typographic style
 */
export const Caption = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const CaptionProps: IOTextProps = {
      ...props,
      dynamicTypeRamp: "caption1", // iOS only
      font: isExperimental ? "Titillio" : "TitilliumSansPro",
      weight: "Regular",
      size: captionFontSize,
      color: customColor ?? theme["textBody-default"],
      textStyle: {
        textTransform: "uppercase",
        letterSpacing: 0.5
      }
    };

    return (
      <IOText ref={ref} {...CaptionProps}>
        {props.children}
      </IOText>
    );
  }
);
