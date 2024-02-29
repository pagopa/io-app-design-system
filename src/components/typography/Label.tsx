import {
  IOColors,
  IOColorsStatusForeground,
  useIOExperimentalDesign
} from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import {
  ExternalTypographyProps,
  FontSize,
  TypographyProps,
  fontSizeMapping,
  lineHeightMapping
} from "./common";

type PartialAllowedColors = Extract<IOColors, "black" | "white">;
type AllowedColors = PartialAllowedColors | IOColorsStatusForeground;
type AllowedWeight = Extract<IOFontWeight, "Bold" | "Regular" | "SemiBold">;
type LabelProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
> & { fontSize?: FontSize };

const fontName: FontFamily = "TitilliumSansPro";
const legacyFontName: FontFamily = "TitilliumWeb";
const labelDefaultWeight = "Bold";
const labelDefaultcolor = "black";

/**
 * `Label` typographic style
 */
export const Label = ({ fontSize, ...props }: LabelProps) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: labelDefaultWeight,
    defaultColor: labelDefaultcolor,
    font: isExperimental ? fontName : legacyFontName,
    fontStyle: {
      fontSize: fontSize ? fontSizeMapping[fontSize] : fontSizeMapping.regular,
      lineHeight: fontSize
        ? lineHeightMapping[fontSize]
        : lineHeightMapping.regular
    }
  });
};
