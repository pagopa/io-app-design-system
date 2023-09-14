import { IOColors } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOColors;
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Regular">;

type ChipProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const chipFontSize = 12;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

/**
 * `Chip` typographic style
 */
export const Chip = (props: ChipProps) =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight,
    defaultColor,
    font,
    fontStyle: { fontSize: chipFontSize }
  });
