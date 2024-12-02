import React, { PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";
import { IOSpacer } from "../../core";

type AllowedStyleProps = Pick<
  ViewStyle,
  "alignItems" | "flexShrink" | "flexGrow" | "flex" | "flexWrap" | "width"
>;

type Stack = PropsWithChildren<{
  space?: IOSpacer;
  style?: AllowedStyleProps;
}>;

type BaseStack = Stack & {
  orientation: "vertical" | "horizontal";
};

/**
Horizontal Stack component
@param {IOSpacer} space
 */

const Stack = ({
  space,
  style,
  orientation = "vertical",
  children
}: BaseStack) => (
  <View
    style={{
      display: "flex",
      flexDirection: orientation === "horizontal" ? "row" : "column",
      gap: space,
      ...style
    }}
  >
    {children}
  </View>
);

export const HStack = ({ children, ...props }: Stack) => (
  <Stack orientation="horizontal" {...props}>
    {children}
  </Stack>
);

/**
Vertical Stack component
@param {IOSpacer} space
 */

export const VStack = ({ children, ...props }: Stack) => (
  <Stack orientation="vertical" {...props}>
    {children}
  </Stack>
);
