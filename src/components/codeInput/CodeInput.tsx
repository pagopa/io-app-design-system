import React from "react";
import { StyleSheet, View } from "react-native";
import { IOColors, IOStyles } from "../../core";
import { HSpacer, VSpacer } from "../spacer";

type CodeInputProps = {
  value: string;
  length: number;
};

const styles = StyleSheet.create({
  dotShape: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: IOColors["grey-200"]
  }
});

const EmptyDot = () => <View style={styles.dotShape} />;

export const CodeInput = ({ length }: CodeInputProps) => (
  <View
    style={[
      IOStyles.flex,
      IOStyles.row,
      { justifyContent: "center" },
      IOStyles.horizontalContentPadding
    ]}
  >
    {[...Array(length)].map((_, i) => (
      <View key={i}>
        <EmptyDot />
      </View>
    ))}
  </View>
);
