import * as React from "react";

import { View, Text } from "react-native";
import { IOStyles } from "@pagopa/io-app-design-system/core";

export default function App() {
  return (
    <View style={IOStyles.flex}>
      <Text>Result: {0}</Text>
    </View>
  );
}
