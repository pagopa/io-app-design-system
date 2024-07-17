import React, { ComponentPropsWithRef, forwardRef, useMemo } from "react";
import { StyleProp, Text, TextStyle, View } from "react-native";
import { IOColors } from "../../core/IOColors";
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
  size: IOFontSize;
  weight: IOFontWeight;
  color: IOColors;
  font?: IOFontFamily;
  fontStyle?: TextStyle["fontStyle"];
  style?: StyleProp<TextStyle>;
};

type IOTextProps = IOTextBaseProps & ComponentPropsWithRef<typeof Text>;

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
 * It accepts all the default text style `StyleProp<TextStyle>` in addition with {@link IOTextBaseProps}
 * used to calculate at runtime the platform-dependent styles.
 * @param props
 * @constructor
 */
export const IOText = forwardRef<View, IOTextProps>(
  (
    { color, size, font, weight, fontStyle, style, children, ...props },
    ref
  ) => {
    const fontStyleObj = useMemo(
      () => calculateTextStyle(color, size, font, weight, fontStyle),
      [color, size, font, weight, fontStyle]
    );

    return (
      <Text {...props} ref={ref} style={[style, fontStyleObj]}>
        {children}
      </Text>
    );
  }
);
