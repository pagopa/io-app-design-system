import { useEffect, useState } from "react";
import { AccessibilityInfo, Platform, useWindowDimensions } from "react-native";
import { useIOExperimentalDesign } from "../core";
import { IOFontSizeMultiplier } from "./fonts";

/**
 * Query whether a bold text is currently enabled. The result is true
 * when bold text is enabled and false otherwise.
 */
export const useBoldTextEnabled = () => {
  const [boldTextEnabled, setBoldTextEnabled] = useState(false);

  useEffect(() => {
    if (Platform.OS !== "web") {
      const boldTextChangedSubscription = AccessibilityInfo.addEventListener(
        "boldTextChanged",
        isBoldTextEnabled => {
          setBoldTextEnabled(isBoldTextEnabled);
        }
      );

      AccessibilityInfo.isBoldTextEnabled()
        .then(isBoldTextEnabled => {
          setBoldTextEnabled(isBoldTextEnabled);
        })
        .catch(_ => false);

      return () => {
        boldTextChangedSubscription.remove();
      };
    }
    return;
  }, []);

  return boldTextEnabled;
};

/**
 * Returns a font size multiplier based on the font scale of the device,
 * but limited to the `IOFontSizeMultiplier` value.
 * @returns number
 */
export const useIOFontDynamicScale = (): {
  dynamicFontScale: number;
  spacingScaleMultiplier: number;
} => {
  const { isExperimental } = useIOExperimentalDesign();
  const { fontScale } = useWindowDimensions();

  const deviceFontScale = isExperimental ? fontScale : 1;

  const dynamicFontScale = Math.min(deviceFontScale, IOFontSizeMultiplier);
  /* We make the spacing dynamic based on the font scale, but we multiply
    this value to limit the amount of scaling applied to the spacing */
  const spacingScaleMultiplier =
    dynamicFontScale <= IOFontSizeMultiplier ? 1 : 0.8;

  return {
    dynamicFontScale,
    spacingScaleMultiplier
  };
};
