import React, { ReactNode } from "react";
import { View } from "react-native";
import { IOSpacer } from "../../core";

type Stack = {
  space?: IOSpacer;
  children: ReactNode;
};

/**
Horizontal Stack component
@param {IOSpacer} space
 */
export const HStack = ({ space, children }: Stack) => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      columnGap: space
    }}
  >
    {children}
  </View>
);

/**
Vertical Stack component
@param {IOSpacer} space
 */

export const VStack = ({ space, children }: Stack) => (
  <View
    style={{
      display: "flex",
      flexDirection: "column",
      rowGap: space
    }}
  >
    {children}
  </View>
);
