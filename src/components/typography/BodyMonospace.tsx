import React from "react";
import { View } from "react-native";
import {
  IOVisualCostants,
  useIOExperimentalDesign,
  type IOColors
} from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = Extract<IOColors, "bluegreyDark" | "bluegrey">;
type AllowedWeight = Extract<IOFontWeight, "Medium">;

type BodyMonospaceProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const fontName: FontFamily = "DMMono";
const fontSize = 16;
const lineHeight = 24;
const monospaceDefaultWeight = "Medium";
const monospaceDefaultcolor = "bluegrey";

/**
 * `BodyMonospace` typographic style
 */
export const BodyMonospace = React.forwardRef<View, BodyMonospaceProps>(
  (props, ref) => {
    const { isExperimental } = useIOExperimentalDesign();

    return useTypographyFactory<AllowedWeight, AllowedColors>(
      {
        ...props,
        allowFontScaling: isExperimental,
        maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier,
        dynamicTypeRamp: "body" /* iOS only */,
        defaultWeight: monospaceDefaultWeight,
        defaultColor: monospaceDefaultcolor,
        font: fontName,
        fontStyle: { fontSize, lineHeight }
      },
      ref
    );
  }
);
