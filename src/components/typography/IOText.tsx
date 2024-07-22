import React, { ComponentProps, forwardRef, useMemo } from "react";
import { Text, TextStyle, View } from "react-native";
import { IOColors, useIOTheme } from "../../core";
import { useBoldTextEnabled } from "../../utils/accessibility";
import {
  IOFontFamily,
  IOFontSize,
  IOFontWeight,
  makeFontStyleObject
} from "../../utils/fonts";

/**
 * The specific properties needed to calculate the font style using {@link makeFontStyleObject} (these information
 * cannot be included in the default StyleProp<TextStyle>
 */
type IOTextBaseProps = {
  size?: IOFontSize;
  weight?: IOFontWeight;
  color?: IOColors;
  font?: IOFontFamily;
  lineHeight?: TextStyle["lineHeight"];
  fontStyle?: TextStyle["fontStyle"];
};

type IOTextProps = IOTextBaseProps & ComponentProps<typeof Text>;

/**
 * We exclude all of the following props when we define a new
 * typographic style in which all of these visual attributes
 * are already defined.
 */
export type IOTextStyle = Omit<
  TextStyle,
  "fontFamily" | "fontSize" | "fontWeight" | "color" | "lineHeight"
>;

export type TypographicStyleProps = Omit<
  IOTextProps,
  "style" | "font" | "size" | "weight" | "color" | "lineHeight" | "fontStyle"
> & { style?: IOTextStyle } & {
  color?: IOTextBaseProps["color"];
};

/**
 * Decorate the function {@link makeFontStyleObject} with the additional color calculation.
 * @param color A value key from {@link IOColors}, transformed here in {@link ColorValue}
 * @param args the args of the function {@link makeFontStyleObject}
 */
const calculateTextStyle = (
  color: IOColors,
  ...args: Parameters<typeof makeFontStyleObject>
) => ({
  ...makeFontStyleObject(...args),
  color: IOColors[color]
});

/**
 * `IOText` is the core Typography component used to render a text.
 * It accepts all the default text style `StyleProp<TextStyle>` (excluding the ones already applied) in addition with {@link IOTextBaseProps}
 * used to calculate at runtime the platform-dependent styles.
 * @param props
 * @constructor
 */
export const IOText = forwardRef<View, IOTextProps>(
  (
    {
      color,
      size,
      font,
      lineHeight,
      weight,
      fontStyle,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const theme = useIOTheme();
    const boldEnabled = useBoldTextEnabled();

    const fontStyleObj = useMemo(
      () =>
        calculateTextStyle(
          color ?? theme["textBody-default"],
          size,
          font,
          lineHeight,
          weight,
          fontStyle,
          boldEnabled
        ),
      [color, theme, size, font, lineHeight, weight, fontStyle, boldEnabled]
    );

    return (
      <Text ref={ref} style={[style ?? {}, fontStyleObj]} {...props}>
        {children}
      </Text>
    );
  }
);
