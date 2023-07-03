import React from "react";
import type { IOColors } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOColors;
type AllowedWeight = Extract<IOFontWeight, "SemiBold" | "Bold">;
type FontSize = "regular" | "small";
type AllowedFontSize = { fontSize?: FontSize };

type OwnProps = ExternalTypographyProps<
    TypographyProps<AllowedWeight, AllowedColors>
> &
    AllowedFontSize & { isDesignSystemEnabled?: boolean };;

export const linkLegacyDefaultColor: AllowedColors = "blue";
export const linkLegacyDefaultWeight: AllowedWeight = "SemiBold";

export const linkDefaultColor: AllowedColors = "blueIO-500";
export const linkDefaultWeight: AllowedWeight = "Bold";

/**
 * Typography component to render `Link` text with font size {@link fontSize} and fontFamily {@link fontName}.
 * default values(if not defined) are weight: `Bold/SemiBold`, color: `blue/blueIO-500`
 * @param props`
 * @constructor
 */
export const Link: React.FC<OwnProps> = (props) => {
    const isDesignSystemEnabled = props.isDesignSystemEnabled ?? false;

    const fontName: FontFamily = "TitilliumWeb";
    const fontSizeMapping: Record<FontSize, number> = { regular: 16, small: 14 };

    const defaultWeight = isDesignSystemEnabled
        ? linkDefaultWeight
        : linkLegacyDefaultWeight;
    const defaultColor = isDesignSystemEnabled
        ? linkDefaultColor
        : linkLegacyDefaultColor;

    const defaultFontSize = props.fontSize
        ? fontSizeMapping[props.fontSize]
        : fontSizeMapping.regular;
    const defaultTextDecorationLine = "underline";

    return useTypographyFactory<AllowedWeight, AllowedColors>({
        accessibilityRole: props.onPress ? "link" : undefined,
        ...props,
        defaultWeight,
        defaultColor,
        font: fontName,
        fontStyle: {
            fontSize: defaultFontSize,
            textDecorationLine: defaultTextDecorationLine
        },
    });
};