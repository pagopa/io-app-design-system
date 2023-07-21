import * as React from "react";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import type { IOColors } from "../../core";
import { ExternalTypographyProps, TypographyProps } from "./common";
import { useTypographyFactory } from "./Factory";

type AllowedColors = IOColors;
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Bold">;
type FontSize = "regular" | "small";
type AllowedFontSize = { fontSize?: FontSize };

type OwnProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
> &
  AllowedFontSize;

const fontName: IOFontFamily = "TitilliumWeb";
const fontSizeMapping: Record<FontSize, number> = { regular: 16, small: 14 };

export const linkLegacyDefaultColor: AllowedColors = "blue";
export const linkLegacyDefaultWeight: AllowedWeight = "SemiBold";

export const linkDefaultColor: AllowedColors = "blueIO-500";
export const linkDefaultWeight: AllowedWeight = "Bold";

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
      textDecorationLine: "underline"
    }
  });
