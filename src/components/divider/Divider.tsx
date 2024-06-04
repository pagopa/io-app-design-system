import React from "react";
import { View, StyleSheet } from "react-native";
import { IOColors, useIOTheme } from "../../core";

const DEFAULT_BORDER_SIZE = StyleSheet.hairlineWidth;

/**
Horizontal `Divider` component
 */
export const Divider = () => {
  const theme = useIOTheme();

  return (
    <View
      style={{
        backgroundColor: IOColors[theme["divider-default"]],
        height: DEFAULT_BORDER_SIZE
      }}
    />
  );
};
