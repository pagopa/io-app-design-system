import { useEffect, useState } from "react";
import { AccessibilityInfo, Platform } from "react-native";

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
