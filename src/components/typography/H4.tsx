import React from "react";
import { IOColorsStatusForeground, IOTheme } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOColorsStatusForeground | IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Regular">;

type OwnProps = ExternalTypographyProps<
    TypographyProps<AllowedWeight, AllowedColors>
> & { isDesignSystemEnabled?: boolean };

/* Common typographic styles */
export const h2FontSize = 20;
export const h2LineHeight = 24;

/**
 * Typography component to render `H4` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Regular/SemiBold`, color: `black/bluegreyDark` if design system is enabled or not
 * @param props
 * @constructor
 */
export const H4: React.FC<OwnProps> = props => {
    const isDesignSystemEnabled = props.isDesignSystemEnabled ?? false;

    /* Legacy typographic styles */
    const h2LegacyFontName: FontFamily = "TitilliumWeb";
    const h2LegacyDefaultColor: AllowedColors = "bluegreyDark";
    const h2LegacyDefaultWeight: AllowedWeight = "SemiBold";

    /* New typographic styles */
    const h2FontName: FontFamily = "ReadexPro";
    const h2DefaultColor: AllowedColors = "black";
    const h2DefaultWeight: AllowedWeight = "Regular";

    const font = isDesignSystemEnabled ? h2FontName : h2LegacyFontName;
    const defaultColor = isDesignSystemEnabled ? h2DefaultColor : h2LegacyDefaultColor;
    const defaultWeight = isDesignSystemEnabled ? h2DefaultWeight : h2LegacyDefaultWeight;

    return useTypographyFactory<AllowedWeight, AllowedColors>({
        ...props,
        defaultWeight,
        defaultColor,
        font,
        fontStyle: { fontSize: h2FontSize, lineHeight: h2LineHeight }
    });
};
