import React from "react";
import { View, StyleSheet } from "react-native";
import { IOColors, useIOTheme } from "../../core";

type DividerOrientation = "vertical" | "horizontal";

type DividerProps = {
  orientation: DividerOrientation;
};

const DEFAULT_BORDER_SIZE = StyleSheet.hairlineWidth;

/**
Native `Divider` component
@param  {DividerOrientation} orientation
 */
const BaseDivider = React.memo(({ orientation }: DividerProps) => {
  const theme = useIOTheme();
  const baseStyle = {
    backgroundColor: IOColors[theme["divider-default"]],
    ...(orientation === "vertical"
      ? { width: DEFAULT_BORDER_SIZE }
      : { height: DEFAULT_BORDER_SIZE })
  };
  return <View style={baseStyle} />;
});

/**
Horizontal Divider component
 */
export const Divider = () => <BaseDivider orientation={"horizontal"} />;
/**
Vertical Divider component
 */
export const VDivider = () => <BaseDivider orientation={"vertical"} />;
