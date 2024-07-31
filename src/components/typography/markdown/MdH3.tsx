import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOExperimentalDesign, useIOTheme } from "../../../core";
import { IOText, IOTextProps, TypographicStyleProps } from "../IOText";

/**
 * `MdH3` typographic style
 */
export const MdH3 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const MdH3Props: IOTextProps = {
      ...props,
      font: isExperimental ? "Titillio" : "TitilliumSansPro",
      weight: "Regular",
      size: 16,
      lineHeight: 24,
      color: customColor ?? theme["textHeading-tertiary"]
    };

    return (
      <IOText ref={ref} {...MdH3Props}>
        {props.children}
      </IOText>
    );
  }
);
