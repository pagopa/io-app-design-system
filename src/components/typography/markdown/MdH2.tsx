import { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIONewTypeface, useIOTheme } from "../../../context";
import { IOText, IOTextProps, TypographicStyleProps } from "../IOText";

/**
 * `MdH2` typographic style
 */
export const MdH2 = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const theme = useIOTheme();
    const { newTypefaceEnabled } = useIONewTypeface();

    const MdH2Props: IOTextProps = {
      ...props,
      font: newTypefaceEnabled ? "Titillio" : "TitilliumSansPro",
      weight: "Semibold",
      size: 18,
      lineHeight: 24,
      color: customColor ?? theme["textHeading-default"]
    };

    return (
      <IOText ref={ref} {...MdH2Props}>
        {props.children}
      </IOText>
    );
  }
);
