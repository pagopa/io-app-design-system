import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { IOSpacer } from "../../core";

type AllowedStyleProps = Pick<
  ViewStyle,
  "alignItems" | "flexShrink" | "flexGrow" | "flex"
>;

type Stack = {
  space?: IOSpacer;
  children: ReactNode;
  style?: AllowedStyleProps;
};

/**
Horizontal Stack component
@param {IOSpacer} space
 */
export const HStack = ({ space, children, style }: Stack) => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      columnGap: space,
      ...style
    }}
  >
    {children}
  </View>
);

/**
Vertical Stack component
@param {IOSpacer} space
 */

export const VStack = ({ space, children, style }: Stack) => (
  <View
    style={{
      display: "flex",
      flexDirection: "column",
      rowGap: space,
      ...style
    }}
  >
    {children}
  </View>
);
