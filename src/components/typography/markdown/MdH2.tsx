import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOExperimentalDesign, useIOTheme } from "../../../core";
import { IOText, IOTextProps, TypographicStyleProps } from "../IOText";

/**
 * `MdH2` typographic style
 */
export const MdH2 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { isExperimental } = useIOExperimentalDesign();

    const MdH2Props: IOTextProps = {
      ...props,
      font: isExperimental ? "Titillio" : "TitilliumSansPro",
      weight: "Semibold",
      size: 16,
      lineHeight: 24,
      color: customColor ?? theme["textHeading-tertiary"]
    };

    return (
      <IOText ref={ref} {...MdH2Props}>
        {props.children}
      </IOText>
    );
  }
);
