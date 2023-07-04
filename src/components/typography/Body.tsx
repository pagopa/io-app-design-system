import React from "react";
import { IOColors, IOTheme } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type PartialAllowedColors = Extract<
    IOColors,
    "bluegreyDark" | "white" | "blue" | "bluegrey" | "bluegreyLight"
>;
type AllowedColors = PartialAllowedColors | IOTheme["textBody-default"];
type AllowedWeight = IOFontWeight | "Regular" | "SemiBold";

type OwnProps = ExternalTypographyProps<
    TypographyProps<AllowedWeight, AllowedColors>
>;

const fontName: FontFamily = "TitilliumWeb";
export const bodyFontSize = 16;
export const bodyLineHeight = 24;
export const bodyDefaultColor: AllowedColors = "bluegrey";
export const bodyDefaultWeight: AllowedWeight = "Regular";

/**
 * Typography component to render `Body` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values (if not defined) are weight: `Regular`, color: `bluegrey`
 * @param props`
 * @constructor
 */
export const Body: React.FunctionComponent<OwnProps> = props =>
    useTypographyFactory<AllowedWeight, AllowedColors>({
        ...props,
        defaultWeight: bodyDefaultWeight,
        defaultColor: bodyDefaultColor,
        font: fontName,
        fontStyle: { fontSize: bodyFontSize, lineHeight: bodyLineHeight }
    });