import { IOColors } from "@pagopa/io-app-design-system";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  componentWrapper: {
    marginBottom: 24
  },
  componentWrapperFullWidth: {
    flexGrow: 1
  },
  lastItem: {
    marginBottom: 0
  },
  labelWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12
  },
  componentLabel: {
    fontSize: 10
  },
  componenentLabelLight: {
    color: IOColors["grey-700"]
  },
  componenentLabelDark: {
    color: IOColors["grey-100"]
  }
});

type ComponentViewerBoxProps = {
  name: string;
  colorMode?: "dark" | "light";
  last?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
};

export const ComponentViewerBox = ({
  name,
  colorMode = "light",
  last = false,
  fullWidth = false,
  children
}: ComponentViewerBoxProps) => (
  <View
    style={[
      last ? styles.lastItem : styles.componentWrapper,
      fullWidth && styles.componentWrapperFullWidth
    ]}
  >
    {children}
    <View style={styles.labelWrapper}>
      {name && (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[
            styles.componentLabel,
            colorMode === "light"
              ? styles.componenentLabelLight
              : styles.componenentLabelDark
          ]}
        >
          {name}
        </Text>
      )}
    </View>
  </View>
);
