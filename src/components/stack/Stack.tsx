import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { IOSpacer } from "../../core";

type Stack = {
  space?: IOSpacer;
  children: ReactNode;
  alignItems?: ViewStyle["alignItems"];
};

/**
Horizontal Stack component
@param {IOSpacer} space
 */
export const HStack = ({ space, children, alignItems }: Stack) => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      columnGap: space,
      alignItems
    }}
  >
    {children}
  </View>
);

/**
Vertical Stack component
@param {IOSpacer} space
 */

export const VStack = ({ space, children, alignItems }: Stack) => (
  <View
    style={{
      display: "flex",
      flexDirection: "column",
      rowGap: space,
      alignItems
    }}
  >
    {children}
  </View>
);
