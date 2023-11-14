import * as React from "react";
import { Dimensions, LayoutChangeEvent, View } from "react-native";
// import { useCallback } from "react";
import { useMemo } from "react";
import {
  IOColors,
  IOSpacer,
  IOStyles,
  IOVisualCostants,
  useIOExperimentalDesign
} from "../../core";

type StepperProps = {
  steps: number;
  currentStep: number;
  padded?: boolean;
};
const STEPPER_SPACE: IOSpacer = 4;

const colorMap: Record<string, IOColors> = {
  active: "blueIO-500",
  inactive: "grey-200"
};

const legacyColorMap: Record<string, IOColors> = {
  active: "blue",
  inactive: "bluegrey"
};

export const Stepper = ({
  steps,
  currentStep,
  padded = false
}: StepperProps) => {
  const { isExperimental } = useIOExperimentalDesign();
  const colors = useMemo(
    () => (isExperimental ? colorMap : legacyColorMap),
    [isExperimental]
  );

  const [stepWidth, setStepWidth] = React.useState(
    Dimensions.get("window").width / steps
  );
  const onLayout = (e: LayoutChangeEvent) => {
    setStepWidth(e.nativeEvent.layout.width / steps);
  };

  return (
    <View
      style={
        padded ? { paddingHorizontal: IOVisualCostants.appMarginDefault } : {}
      }
    >
      <View
        onLayout={onLayout}
        style={[IOStyles.flex, IOStyles.rowSpaceBetween]}
      >
        {[...Array(steps)].map((_, i) => (
          <View
            key={i}
            style={{
              borderBottomColor:
                IOColors[i > currentStep - 1 ? colors.inactive : colors.active],
              borderBottomWidth: 2,
              width: stepWidth - STEPPER_SPACE
            }}
          />
        ))}
      </View>
    </View>
  );
};
