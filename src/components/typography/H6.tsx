import React from "react";
import { IOTheme, IOThemeLight } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

// when the weight is bold, only these color are allowed
type AllowedColors = IOTheme["textBody-default"] | "blueIO-850";
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Regular">;

type OwnProps = ExternalTypographyProps<
    TypographyProps<AllowedWeight, AllowedColors>
>;

export const h6FontSize = 16;
export const h6LineHeight = 20;
export const h6DefaultColor: AllowedColors = IOThemeLight["textBody-default"];
export const h6DefaultWeight: AllowedWeight = "Regular";

/**
 * Typography component to render `H6` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Regular`, color: `black`
 * @param props
 * @constructor
 */
export const H6: React.FC<OwnProps> = (props) => {
    const fontName: FontFamily = "ReadexPro";
    return useTypographyFactory<AllowedWeight, AllowedColors>({
        ...props,
        defaultWeight: h6DefaultWeight,
        defaultColor: h6DefaultColor,
        font: fontName,
        fontStyle: { fontSize: h6FontSize, lineHeight: h6LineHeight }
    });
};
