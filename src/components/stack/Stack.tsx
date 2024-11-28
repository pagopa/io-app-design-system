import React, { PropsWithChildren } from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { IOSpacer } from "../../core";

type AllowedStyleProps = Pick<
  ViewStyle,
  "alignItems" | "flexShrink" | "flexGrow" | "flex" | "flexWrap" | "width"
>;

type A11YRelatedProps = Pick<
  ViewProps,
  "pointerEvents" | "accessibilityElementsHidden" | "importantForAccessibility"
>;

type Stack = PropsWithChildren<{
  space?: IOSpacer;
  style?: AllowedStyleProps;
}> &
  A11YRelatedProps;

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
  children,
  ...props
}: BaseStack) => (
  <View
    {...props}
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
