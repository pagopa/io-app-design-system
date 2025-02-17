import React from "react";
import { Platform, Switch, SwitchProps } from "react-native";
import { useIOExperimentalDesign, useIOTheme } from "../../core";
import { IOColors } from "../../core/IOColors";

type OwnProps = Pick<
  SwitchProps,
  | "onValueChange"
  | "value"
  | "accessible"
  | "accessibilityLabel"
  | "testID"
  | "disabled"
  | "accessibilityElementsHidden"
  | "importantForAccessibility"
>;

// TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
const bgLegacyTrackColorAndroid =
  Platform.OS === "android" ? IOColors["grey-300"] : IOColors["grey-50"];

export const NativeSwitch = ({
  onValueChange,
  value,
  ...accessibility
}: OwnProps) => {
  const theme = useIOTheme();
  const { isExperimental } = useIOExperimentalDesign();
  const trackColor = {
    false: IOColors[theme["switch-background-off"]],
    true: IOColors[theme["switch-background-on"]]
  };

  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const legacyTrackColor = {
    false: bgLegacyTrackColorAndroid,
    true: IOColors["blue-500"]
  };

  const trackColorComponent = isExperimental ? trackColor : legacyTrackColor;

  return (
    <Switch
      {...accessibility}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled: accessibility.disabled }}
      trackColor={trackColorComponent}
      thumbColor={IOColors[theme["switch-thumb-color"]]}
      ios_backgroundColor={
        isExperimental
          ? IOColors[theme["switch-background-off"]]
          : bgLegacyTrackColorAndroid
      }
      onValueChange={onValueChange}
      value={value}
    />
  );
};
