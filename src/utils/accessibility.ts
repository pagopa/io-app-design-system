import { pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/lib/Option";
import I18n from "i18n-js";
import { useEffect, useState } from "react";
import { AccessibilityInfo, Platform, useWindowDimensions } from "react-native";
import { useIOExperimentalDesign } from "../core";
import { IOFontSizeMultiplier } from "./fonts";

/**
 * This function is used to get the text that will be read by the screen reader
 * with the correct minus symbol pronunciation.
 */
export const getAccessibleAmountText = (amount?: string) =>
  pipe(
    amount,
    O.fromNullable,
    O.map(amount =>
      amount.replace("-", I18n.t("global.accessibility.minusSymbol"))
    ),
    O.getOrElseW(() => undefined)
  );

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

  return {
    dynamicFontScale: Math.min(deviceFontScale, IOFontSizeMultiplier),
    /* We make the spacing dynamic based on the font scale, but we multiply
    this value to limit the amount of scaling applied to the spacing */
    spacingScaleMultiplier: 0.85
  };
};
