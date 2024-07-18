import { pipe } from "fp-ts/lib/function";
import * as O from "fp-ts/lib/Option";
import I18n from "i18n-js";
import { useEffect, useState } from "react";
import { AccessibilityInfo } from "react-native";

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
  }, []);

  return boldTextEnabled;
};
