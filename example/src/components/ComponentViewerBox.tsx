import { IOColors } from "@pagopa/io-app-design-system";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  componentWrapper: {
    marginBottom: 24
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
    color: IOColors.bluegrey
  },
  componenentLabelDark: {
    color: IOColors.greyLight
  }
});

type ComponentViewerBoxProps = {
  name: string;
  colorMode?: "dark" | "light";
  last?: boolean;
  children: React.ReactNode;
};

export const ComponentViewerBox = ({
  name,
  colorMode = "light",
  last = false,
  children
}: ComponentViewerBoxProps) => (
  <View style={last ? styles.lastItem : styles.componentWrapper}>
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
