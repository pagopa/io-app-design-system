import {
  H3,
  IOColors,
  LoadingSpinner,
  ProgressLoader
} from "@pagopa/io-app-design-system";
import React from "react";
import { View } from "react-native";
import { Screen } from "../components/Screen";

export const Loaders = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      // console.log("progress", progress, (progress + 10) % 100);
      setProgress(prev => (prev + 10) % 100);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Screen>
      <H3>LoadingSpinner</H3>
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        <View style={{ backgroundColor: IOColors.white, padding: 16 }}>
          <LoadingSpinner color="blueIO-500" />
        </View>
        <View style={{ backgroundColor: IOColors["blueIO-500"], padding: 16 }}>
          <LoadingSpinner color="white" />
        </View>
      </View>
      <H3>ProgressLoader</H3>
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        <View style={{ backgroundColor: IOColors.white, padding: 16 }}>
          <ProgressLoader progress={progress} />
        </View>
        <View style={{ backgroundColor: IOColors["blueIO-500"], padding: 16 }}>
          <ProgressLoader progress={90} />
        </View>
      </View>
    </Screen>
  );
};
