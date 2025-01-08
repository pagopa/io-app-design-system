import React, { ForwardedRef, forwardRef } from "react";
import { View } from "react-native";
import { useIOExperimentalDesign } from "../../core";
import { IOColors } from "../../core/IOColors";
import { IOFontFamily, IOFontSize } from "../../utils/fonts";
import { IOText, IOTextProps, TypographicStyleProps } from "./IOText";

export const buttonTextFontSize: IOFontSize = 16;
export const buttonTextLineHeight = 20;
/* Needed to render `ButtonOutline` and`ButtonLink` because they use
`AnimatedText` for color transition through Reanimated */
const defaultColor: IOColors = "white";
const fontName: IOFontFamily = "Titillio";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFontName: IOFontFamily = "TitilliumSansPro";

/**
 * `ButtonText` typographic style
 */
export const ButtonText = forwardRef<View, TypographicStyleProps>(
  ({ color: customColor, ...props }, ref?: ForwardedRef<View>) => {
    const { isExperimental } = useIOExperimentalDesign();

    const ButtonTextProps: IOTextProps = {
      ...props,
      font: isExperimental ? fontName : legacyFontName,
      weight: "Semibold",
      size: buttonTextFontSize,
      lineHeight: buttonTextLineHeight,
      color: customColor ?? defaultColor
    };

    return (
      <IOText ref={ref} {...ButtonTextProps}>
        {props.children}
      </IOText>
    );
  }
);
