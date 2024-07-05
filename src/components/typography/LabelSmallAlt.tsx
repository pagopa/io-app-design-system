import React from "react";
import { View } from "react-native";
import { IOVisualCostants, useIOExperimentalDesign } from "../../core";
import type { IOColors, IOTheme } from "../../core/IOColors";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type PartialAllowedColors = Extract<
  IOColors,
  | "blue"
  | "bluegrey"
  | "red"
  | "white"
  | "bluegreyDark"
  | "grey-700"
  | "grey-200"
>;
type AllowedColors = PartialAllowedColors | IOTheme["textBody-tertiary"];
type AllowedWeight = Extract<IOFontWeight, "Bold" | "Regular" | "Semibold">;

type LabelSmallAltProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

const labelFontSize = 14;
const labelLineHeight = 21;
const fontName: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyLabelFontSize = 16;
const legacyFontName: FontFamily = "TitilliumSansPro";
const legacyDefaultWeight: AllowedWeight = "Semibold";

/**
 * `LabelSmallAlt` typographic style. It's referenced as `LabelSmallReadex` in the design projects.
 */
export const LabelSmallAlt = React.forwardRef<View, LabelSmallAltProps>(
  (props, ref) => {
    const { isExperimental } = useIOExperimentalDesign();

    return useTypographyFactory<AllowedWeight, AllowedColors>(
      {
        ...props,
        allowFontScaling: isExperimental,
        maxFontSizeMultiplier: IOVisualCostants.maxFontSizeMultiplier,
        dynamicTypeRamp: "footnote" /* iOS only */,
        defaultWeight: isExperimental ? defaultWeight : legacyDefaultWeight,
        defaultColor,
        font: isExperimental ? fontName : legacyFontName,
        fontStyle: {
          fontSize: isExperimental ? labelFontSize : legacyLabelFontSize,
          lineHeight: labelLineHeight
        }
      },
      ref
    );
  }
);
