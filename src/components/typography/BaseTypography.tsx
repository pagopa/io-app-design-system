import React, { useMemo } from "react";
import { Text, TextStyle, View } from "react-native";
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
type BaseTypographyProps = {
  weight: IOFontWeight;
  color: IOColors;
  font?: IOFontFamily;
  isItalic?: boolean;
};

type OwnProps = BaseTypographyProps & {
  fontStyle?: TextStyle;
} & React.ComponentPropsWithRef<typeof Text>;

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
 * `BaseTypography` is the core Typography component used to render a text.
 * It accepts all the default text style `StyleProp<TextStyle>` in addition with {@link BaseTypographyProps}
 * used to calculate at runtime the platform-dependent styles.
 * This component shouldn't be used in the application but only to compose others `Typography elements`.
 * @param props
 * @deprecated Use {@link IOText} instead
 * @constructor
 */
export const BaseTypography = React.forwardRef<View, OwnProps>((props, ref) => {
  const fontStyle = useMemo(
    () =>
      calculateTextStyle(
        props.color,
        props.fontStyle?.fontSize as IOFontSize,
        props.font,
        props.fontStyle?.lineHeight,
        props.weight,
        props.isItalic ? "italic" : "normal"
      ),
    [props.color, props.fontStyle, props.font, props.weight, props.isItalic]
  );

  const style = props.style
    ? [props.style, props.fontStyle, fontStyle]
    : [props.fontStyle, fontStyle];

  return (
    <Text allowFontScaling={false} {...props} ref={ref} style={style}>
      {props.children}
    </Text>
  );
});
