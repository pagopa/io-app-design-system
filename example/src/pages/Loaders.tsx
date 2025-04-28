import {
  H3,
  IOColors,
  LoadingSpinner,
  ProgressLoader,
  VStack
} from "@pagopa/io-app-design-system";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Screen } from "../components/Screen";

export const Loaders = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev + 10) % 100);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Screen>
      <VStack space={24}>
        <VStack space={16}>
          <H3>LoadingSpinner</H3>
          <VStack space={16}>
            <VStack space={16}>
              <LoadingSpinner />
              <LoadingSpinner size={48} />
              <LoadingSpinner size={76} />
            </VStack>
            <View
              style={{
                borderRadius: 8,
                borderCurve: "continuous",
                backgroundColor: IOColors["blueIO-500"],
                padding: 16
              }}
            >
              <VStack space={16}>
                <LoadingSpinner color={IOColors.white} />
                <LoadingSpinner color={IOColors.white} size={48} />
                <LoadingSpinner color={IOColors.white} size={76} />
              </VStack>
            </View>
          </VStack>
        </VStack>
        <VStack space={16}>
          <H3>ProgressLoader</H3>
          <ProgressLoader progress={progress} />
        </VStack>
      </VStack>
    </Screen>
  );
};
