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

type LinkProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
> &
  AllowedFontSize;

const fontName: IOFontFamily = "TitilliumWeb";

export const linkDefaultColor: AllowedColors = "blueIO-500";
export const linkDefaultWeight: AllowedWeight = "SemiBold";

/**
 * `Link` typographic style
 */
export const Link = (props: LinkProps) =>
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
