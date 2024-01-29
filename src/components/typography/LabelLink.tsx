import { useIOExperimentalDesign, type IOColors } from "../../core";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import {
  ExternalTypographyProps,
  FontSize,
  TypographyProps,
  fontSizeMapping,
  lineHeightMapping
} from "./common";

type AllowedColors = IOColors;
type AllowedWeight = Extract<IOFontWeight, "SemiBold">;
type AllowedFontSize = { fontSize?: FontSize };

type LinkProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
> &
  AllowedFontSize;

const fontName: IOFontFamily = "TitilliumSansPro";
const legacyFontName: IOFontFamily = "TitilliumWeb";

export const linkLegacyDefaultColor: AllowedColors = "blue";

export const linkDefaultColor: AllowedColors = "blueIO-500";
export const linkDefaultWeight: AllowedWeight = "SemiBold";

/**
 * `Link` typographic style
 */
export const LabelLink = (props: LinkProps) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    accessibilityRole: props.onPress ? "link" : undefined,
    ...props,
    defaultWeight: linkDefaultWeight,
    defaultColor: isExperimental ? linkDefaultColor : linkLegacyDefaultColor,
    font: isExperimental ? fontName : legacyFontName,
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
};
