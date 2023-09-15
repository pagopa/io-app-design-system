import type { IOColors, IOTheme } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

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
type FontSize = "regular" | "small";
type AllowedFontSize = { fontSize?: FontSize };

type LabelSmallProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
> &
  AllowedFontSize;

const fontName: FontFamily = "TitilliumWeb";
const fontSizeMapping: Record<FontSize, number> = {
  regular: 14,
  small: 12
};
const labelDefaultWeight = "Bold";
const labelDefaultcolor = "blue";

/**
 * `LabelSmall` typographic style
 */
export const LabelSmall = (props: LabelSmallProps) =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: labelDefaultWeight,
    defaultColor: labelDefaultcolor,
    font: fontName,
    fontStyle: {
      fontSize: props.fontSize
        ? fontSizeMapping[props.fontSize]
        : fontSizeMapping.regular
    }
  });
