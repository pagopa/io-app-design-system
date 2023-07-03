import React from "react";
import {
    IOColors,
    IOColorsStatusForeground,
    IOTheme
} from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type PartialAllowedColors = Extract<
    IOColors,
    "bluegreyDark" | "white" | "blue"
>;
type AllowedColors =
    | PartialAllowedColors
    | IOColorsStatusForeground
    | IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Bold">;

type OwnProps = ExternalTypographyProps<
    TypographyProps<AllowedWeight, AllowedColors>
>;

export const h1FontSize = 26;
export const h1LineHeight = 32;
export const h1DefaultColor: AllowedColors = "bluegreyDark";
export const h1DefaultWeight: AllowedWeight = "Bold";

/**
 * Typography component to render H1 text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Bold`, color: `bluegreyDark`
 * @param props
 * @constructor
 */
export const H1: React.FC<OwnProps> = (props) => {
    const fontName: FontFamily = "TitilliumWeb";
    return useTypographyFactory<AllowedWeight, AllowedColors>({
        ...props,
        defaultWeight: h1DefaultWeight,
        defaultColor: h1DefaultColor,
        font: fontName,
        fontStyle: { fontSize: h1FontSize, lineHeight: h1LineHeight }
    });
};