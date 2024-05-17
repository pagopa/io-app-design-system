import React from "react";
import { View } from "react-native";
import { IOTheme, useIOExperimentalDesign } from "../../core";
import { FontFamily, IOFontWeight } from "../../utils/fonts";
import { useTypographyFactory } from "./Factory";
import { ExternalTypographyProps, TypographyProps } from "./common";

type AllowedColors = IOTheme["textHeading-default"];
type AllowedWeight = Extract<IOFontWeight, "Regular">;

type CaptionProps = ExternalTypographyProps<
  TypographyProps<AllowedWeight, AllowedColors>
>;

export const captionFontSize = 12;
const font: FontFamily = "ReadexPro";
const defaultColor: AllowedColors = "black";
const defaultWeight: AllowedWeight = "Regular";

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const legacyFont: FontFamily = "TitilliumWeb";

/**
 * `Caption` typographic style
 */
export const Caption = React.forwardRef<View, CaptionProps>((props, ref) => {
  const { isExperimental } = useIOExperimentalDesign();

  return useTypographyFactory<AllowedWeight, AllowedColors>(
    {
      ...props,
      defaultWeight,
      defaultColor,
      font: isExperimental ? font : legacyFont,
      fontStyle: {
        fontSize: captionFontSize,
        textTransform: "uppercase"
      }
    },
    ref
  );
});
