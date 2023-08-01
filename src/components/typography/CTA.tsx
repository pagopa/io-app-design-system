import * as React from "react";
import { IOTheme, IOThemeLight } from "../../core/IOColors";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textBody-default"] | "blueIO-850";
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Regular">;

type OwnProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

/* Common typographic styles */
const ctaFontSize = 16;
const ctaLineHeight = 20;
const ctaDefaultColor: AllowedColors = IOThemeLight["textBody-default"];
/* New typographic styles */
const ctaFontName: IOFontFamily = "ReadexPro";
const ctaDefaultWeight: AllowedWeight = "Regular";

/**
 * Typography component to render `CTA` text with font size {@link ctaFontSize} and fontFamily {@link ctaFontName}.
 * default values(if not defined) are weight: {@link ctaDefaultWeight}, color: {@link ctaDefaultColor}
 * @param props
 * @constructor
 */
export const CTA: React.FunctionComponent<OwnProps> = props =>
  useTypographyFactory<AllowedWeight, AllowedColors>({
    ...props,
    defaultWeight: ctaDefaultWeight,
    defaultColor: ctaDefaultColor,
    font: ctaFontName,
    fontStyle: { fontSize: ctaFontSize, lineHeight: ctaLineHeight }
  });
