import { useIOExperimentalDesign } from "../../core";
import type { IOColors, IOTheme } from "../../core/IOColors";
import { FontFamily, IOFontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, FontType, TypographyProps } from "./common";

type PartialAllowedColors = Extract<
  IOColors,
  | "blue"
  | "bluegrey"
  | "red"
  | "white"
  | "bluegreyDark"
  | "grey-700"
  | "grey-200"
>;
type AllowedColors = PartialAllowedColors | IOTheme["textBody-tertiary"];
type AllowedWeight = Extract<IOFontWeight, "Bold" | "Regular" | "SemiBold">;
type AllowedFonts = Extract<IOFontFamily, "TitilliumWeb" | "ReadexPro">;

type FontSize = "regular" | "small";
type AllowedFontSize = { fontSize?: FontSize };

type LabelSmallProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
> &
  AllowedFontSize &
  FontType;

const defaultFontName: FontFamily = "TitilliumWeb";
const fontSizeMapping: Record<FontSize, number> = {
  regular: 14,
  small: 12
};
const labelDefaultWeight = "Bold";
const labelDefaultcolor = "blue";

/**
 * `LabelSmall` typographic style
 */
export const LabelSmall = (props: LabelSmallProps) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: labelDefaultWeight,
    defaultColor: labelDefaultcolor,
    font:
      isExperimental && props.font !== undefined ? props.font : defaultFontName,
    fontStyle: {
      fontSize: props.fontSize
        ? fontSizeMapping[props.fontSize]
        : fontSizeMapping.regular
    }
  });
};
