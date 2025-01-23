import React from "react";
import { Platform, Switch, SwitchProps } from "react-native";
import { useIOExperimentalDesign } from "../../core";
import { IOColors } from "../../core/IOColors";
import { IOSwitchVisualParams } from "../../core/IOStyles";

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
  const { isExperimental } = useIOExperimentalDesign();
  const trackColor = {
    false: IOColors[IOSwitchVisualParams.bgColorOffState],
    true: IOColors[IOSwitchVisualParams.bgColorOnState]
  };

  // TODO: Remove this when legacy look is deprecated https://pagopa.atlassian.net/browse/IOPLT-153
  const legacyTrackColor = {
    false: bgLegacyTrackColorAndroid,
    true: IOColors.blue
  };

  const trackColorComponent = isExperimental ? trackColor : legacyTrackColor;

  return (
    <Switch
      {...accessibility}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled: accessibility.disabled }}
      trackColor={trackColorComponent}
      thumbColor={IOColors[IOSwitchVisualParams.bgCircle]}
      ios_backgroundColor={
        isExperimental
          ? IOColors[IOSwitchVisualParams.bgColorOffState]
          : bgLegacyTrackColorAndroid
      }
      onValueChange={onValueChange}
      value={value}
    />
  );
};
