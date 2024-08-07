import React from "react";
import { View } from "react-native";
import {
  IOVisualCostants,
  useIOExperimentalDesign,
  type IOColors
} from "../../core";
import { IOFontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import {
  ExternalTypographyProps,
  FontSize,
  TypographyProps,
  fontSizeMapping,
  lineHeightMapping
} from "./common";

type AllowedColors = IOColors;
type AllowedWeight = Extract<IOFontWeight, "Semibold">;
type AllowedFontSize = { fontSize?: FontSize };

type LinkProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
> &
  AllowedFontSize;

const font: IOFontFamily = "TitilliumSansPro";

export const linkLegacyDefaultColor: AllowedColors = "blue";
export const linkDefaultColor: AllowedColors = "blueIO-500";
export const linkDefaultWeight: AllowedWeight = "Semibold";

/**
 * `Link` typographic style
 */
export const LabelLink = React.forwardRef<View, LinkProps>((props, ref) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>(
    {
      accessibilityRole: props.onPress ? "link" : undefined,
      ...props,
      allowFontScaling: isExperimental,
      maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier,
      dynamicTypeRamp: "footnote" /* iOS only */,
      defaultWeight: linkDefaultWeight,
      defaultColor: isExperimental ? linkDefaultColor : linkLegacyDefaultColor,
      font,
      fontStyle: {
        fontSize: props.fontSize
          ? fontSizeMapping[props.fontSize]
          : fontSizeMapping.regular,
        lineHeight: props.fontSize
          ? lineHeightMapping[props.fontSize]
          : lineHeightMapping.regular,
        textDecorationLine: "underline"
      }
    },
    ref
  );
});
