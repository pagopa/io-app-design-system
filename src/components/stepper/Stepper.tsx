import * as React from "react";
import { Dimensions, LayoutChangeEvent, View } from "react-native";
import { IOColors, IOSpacer, IOStyles, IOVisualCostants } from "../../core";

type StepperProps = {
  steps: number;
  currentStep: number;
};
const STEPPER_SPACE: IOSpacer = 4;

const colorMap: Record<string, IOColors> = {
  active: "blueIO-500"
};

export const Stepper = ({ steps, currentStep }: StepperProps) => {
  const [stepWidth, setStepWidth] = React.useState(
    Dimensions.get("window").width / steps
  );
  const onLayout = (e: LayoutChangeEvent) => {
    setStepWidth(e.nativeEvent.layout.width / steps);
  };

  return (
    <View style={{ paddingHorizontal: IOVisualCostants.appMarginDefault }}>
      <View
        onLayout={onLayout}
        style={[IOStyles.flex, IOStyles.rowSpaceBetween]}
      >
        {[...Array(steps)].map((_, i) => (
          <View
            key={i}
            style={{
              borderRadius: 2,
              borderBottomColor:
                IOColors[i > currentStep - 1 ? "grey-200" : colorMap.active],
              borderBottomWidth: 2,
              width: stepWidth - STEPPER_SPACE
            }}
          />
        ))}
      </View>
    </View>
  );
};
