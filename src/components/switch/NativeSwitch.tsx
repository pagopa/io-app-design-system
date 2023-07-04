import React from "react";
import { Switch, SwitchProps } from "react-native";
import { IOColors } from "../../core/IOColors";
import { IOSwitchVisualParams } from "../../core/IOStyles";

type OwnProps = Pick<SwitchProps, "onValueChange" | "value">;

export const NativeSwitch = ({ onValueChange, value }: OwnProps) => (
  <Switch
    trackColor={{
      false: IOColors[IOSwitchVisualParams.bgColorOffState],
      true: IOColors[IOSwitchVisualParams.bgColorOnState]
    }}
    thumbColor={IOColors[IOSwitchVisualParams.bgCircle]}
    ios_backgroundColor={IOColors[IOSwitchVisualParams.bgColorOffState]}
    onValueChange={onValueChange}
    value={value}
  />
);
