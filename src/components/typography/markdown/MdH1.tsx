import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOExperimentalDesign, useIOTheme } from "../../../core";
import { IOText, IOTextProps, TypographicStyleProps } from "../IOText";

/**
 * `MdH1` typographic style
 */
export const MdH1 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const MdH1Props: IOTextProps = {
      ...props,
      font: isExperimental ? "Titillio" : "TitilliumSansPro",
      weight: "Semibold",
      size: 20,
      lineHeight: 24,
      color: customColor ?? theme["textHeading-default"]
    };

    return (
      <IOText ref={ref} {...MdH1Props}>
        {props.children}
      </IOText>
    );
  }
);
