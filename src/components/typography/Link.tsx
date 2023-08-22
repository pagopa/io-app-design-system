import * as React from "react";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import type { IOColors } from "../../core";
import {
  ExternalTypographyProps,
  FontSize,
  TypographyProps,
  fontSizeMapping,
  lineHeightMapping
} from "./common";
import { useTypographyFactory } from "./Factory";

type AllowedColors = IOColors;
type AllowedWeight = Extract<IOFontWeight, "SemiBold">;
type AllowedFontSize = { fontSize?: FontSize };

type OwnProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
> &
  AllowedFontSize;

const fontName: IOFontFamily = "TitilliumWeb";

export const linkDefaultColor: AllowedColors = "blueIO-500";
export const linkDefaultWeight: AllowedWeight = "SemiBold";

/**
 * Typography component to render `Link` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `SemiBold`, color: `blue`
 * @param props`
 * @constructor
 */
export const Link: React.FunctionComponent<OwnProps> = props =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    accessibilityRole: props.onPress ? "link" : undefined,
    ...props,
    defaultWeight: linkDefaultWeight,
    defaultColor: linkDefaultColor,
    font: fontName,
    fontStyle: {
      fontSize: props.fontSize
        ? fontSizeMapping[props.fontSize]
        : fontSizeMapping.regular,
      lineHeight: props.fontSize
        ? lineHeightMapping[props.fontSize]
        : lineHeightMapping.regular,
      textDecorationLine: "underline"
    }
  });
