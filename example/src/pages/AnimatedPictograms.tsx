import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Rive from "rive-react-native";

export const AnimatedPictograms = () => (
  <ScrollView centerContent>
    {/* <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{
          marginBottom: 16,
          paddingTop: IOVisualCostants.appMarginDefault
        }}
      >
        Animated pictograms
      </H2> */}
    <Rive
      resourceName="umbrella"
      style={{
        aspectRatio: "1",
        width: 200,
        alignSelf: "center"
      }}
    />
  </ScrollView>
);
