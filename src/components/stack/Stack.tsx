import React, { PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";
import { IOSpacer } from "../../core";
import { useIOFontDynamicScale } from "../../utils/accessibility";

type AllowedStyleProps = Pick<
  ViewStyle,
  "alignItems" | "flexShrink" | "flexGrow" | "flex" | "flexWrap" | "width"
>;

type Stack = PropsWithChildren<{
  space?: IOSpacer;
  style?: AllowedStyleProps;
  allowScaleSpacing?: boolean;
}>;

type BaseStack = Stack & {
  orientation: "vertical" | "horizontal";
};

const DEFAULT_SPACING_VALUE: IOSpacer = 16;

/**
Horizontal Stack component
@param {IOSpacer} space
 */

const Stack = ({
  space = DEFAULT_SPACING_VALUE,
  style,
  orientation = "vertical",
  allowScaleSpacing,
  children
}: BaseStack) => {
  const { dynamicFontScale, spacingScaleMultiplier } = useIOFontDynamicScale();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: orientation === "horizontal" ? "row" : "column",
        gap: allowScaleSpacing
          ? space * dynamicFontScale * spacingScaleMultiplier
          : space,
        ...style
      }}
    >
      {children}
    </View>
  );
};

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
