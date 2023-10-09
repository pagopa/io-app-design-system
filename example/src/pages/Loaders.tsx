import { IOColors, LoadingSpinner } from "@pagopa/io-app-design-system";
import React from "react";
import { View } from "react-native";
import { Screen } from "../components/Screen";

export const Loaders = () => (
  <Screen>
    <View style={{ borderRadius: 8, overflow: "hidden" }}>
      <View style={{ backgroundColor: IOColors.white, padding: 16 }}>
        <LoadingSpinner color="blueIO-500" />
      </View>
      <View style={{ backgroundColor: IOColors["blueIO-500"], padding: 16 }}>
        <LoadingSpinner color="white" />
      </View>
    </View>
  </Screen>
);
