import * as React from "react";
import { ColorValue, View } from "react-native";
import {
  IOColors,
  IOSpacer,
  IOStyles,
  IOVisualCostants,
  useIOTheme
} from "../../core";

type StepperProps = {
  steps: number;
  currentStep: number;
};

export const Stepper = ({ steps, currentStep }: StepperProps) => {
  const theme = useIOTheme();

  const STEPPER_SPACE: IOSpacer = 4;

  const colorMap: Record<string, ColorValue> = {
    default: IOColors[theme["stepper-default"]],
    active: IOColors[theme["interactiveElem-default"]]
  };

  return (
    <View style={{ paddingHorizontal: IOVisualCostants.appMarginDefault }}>
      <View
        style={[
          IOStyles.flex,
          IOStyles.rowSpaceBetween,
          { gap: STEPPER_SPACE }
        ]}
      >
        {[...Array(steps)].map((_, i) => (
          <View
            key={i}
            style={{
              borderRadius: 2,
              borderCurve: "continuous",
              borderBottomColor:
                i > currentStep - 1 ? colorMap.default : colorMap.active,
              borderBottomWidth: 2,
              flex: 1
            }}
          />
        ))}
      </View>
    </View>
  );
};
