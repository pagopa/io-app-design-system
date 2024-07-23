import React from "react";
import { View } from "react-native";
import {
  IOColors,
  IOColorsStatusForeground,
  IOVisualCostants,
  useIOExperimentalDesign
} from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import {
  ExternalTypographyProps,
  FontSize,
  TypographyProps,
  fontSizeMapping,
  lineHeightMapping
} from "./common";

type PartialAllowedColors = Extract<IOColors, "black" | "white" | "grey-700">;
type AllowedColors = PartialAllowedColors | IOColorsStatusForeground;
type AllowedWeight = Extract<IOFontWeight, "Bold" | "Regular" | "Semibold">;
type LabelProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
> & { fontSize?: FontSize };

const font: FontFamily = "TitilliumSansPro";
const labelDefaultWeight = "Bold";
const labelDefaultcolor = "black";

/**
 * `Label` typographic style
 */
export const Label = React.forwardRef<View, LabelProps>(
  ({ fontSize, ...props }, ref) => {
    const { isExperimental } = useIOExperimentalDesign();

    return useTypographyFactory<AllowedWeight, AllowedColors>(
      {
        ...props,
        allowFontScaling: isExperimental,
        maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier,
        dynamicTypeRamp: "footnote" /* iOS only */,
        defaultWeight: labelDefaultWeight,
        defaultColor: labelDefaultcolor,
        font,
        fontStyle: {
          fontSize: fontSize
            ? fontSizeMapping[fontSize]
            : fontSizeMapping.regular,
          lineHeight: fontSize
            ? lineHeightMapping[fontSize]
            : lineHeightMapping.regular
        }
      },
      ref
    );
  }
);
