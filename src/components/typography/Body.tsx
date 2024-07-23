import React from "react";
import { View } from "react-native";
import {
  IOColors,
  IOTheme,
  IOVisualCostants,
  useIOExperimentalDesign
} from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type PartialAllowedColors = Extract<
  IOColors,
  "bluegreyDark" | "white" | "blue" | "bluegrey" | "bluegreyLight"
>;
type AllowedColors = PartialAllowedColors | IOTheme["textBody-default"];
type AllowedWeight = IOFontWeight | "Regular" | "Semibold";

type BodyProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const fontName: FontFamily = "TitilliumSansPro";

export const bodyFontSize = 16;
export const bodyLineHeight = 24;
export const bodyDefaultColor: AllowedColors = "bluegrey";
export const bodyDefaultWeight: AllowedWeight = "Regular";

/**
 * `Body` typographic style
 */
export const Body = React.forwardRef<View, BodyProps>((props, ref) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>(
    {
      ...props,
      allowFontScaling: isExperimental,
      maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier,
      dynamicTypeRamp: "body" /* iOS only */,
      defaultWeight: bodyDefaultWeight,
      defaultColor: bodyDefaultColor,
      font: fontName,
      fontStyle: { fontSize: bodyFontSize, lineHeight: bodyLineHeight }
    },
    ref
  );
});
