import React from "react";
import { Switch, SwitchProps } from "react-native";
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

export const NativeSwitch = ({
  onValueChange,
  value,
  ...accessibility
}: OwnProps) => {
  const trackColor = {
    false: IOColors[IOSwitchVisualParams.bgColorOffState],
    true: IOColors[IOSwitchVisualParams.bgColorOnState]
  };

  return (
    <Switch
      {...accessibility}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled: accessibility.disabled }}
      trackColor={trackColor}
      thumbColor={IOColors[IOSwitchVisualParams.bgCircle]}
      ios_backgroundColor={IOColors[IOSwitchVisualParams.bgColorOffState]}
      onValueChange={onValueChange}
      value={value}
    />
  );
};
