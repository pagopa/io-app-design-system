import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { IOSpacer } from "../../core";
import { useIOFontDynamicScale } from "../../utils/accessibility";

type AllowedStyleProps = Pick<
  ViewStyle,
  "alignItems" | "flexShrink" | "flexGrow" | "flex" | "flexWrap"
>;

type Stack = {
  space?: IOSpacer;
  children: ReactNode;
  style?: AllowedStyleProps;
  allowScaleSpacing?: boolean;
};

const DEFAULT_SPACING_VALUE: IOSpacer = 16;

/**
Horizontal Stack component
@param {IOSpacer} space
 */
export const HStack = ({
  space = DEFAULT_SPACING_VALUE,
  children,
  style,
  allowScaleSpacing
}: Stack) => {
  const { dynamicFontScale, spacingScaleMultiplier } = useIOFontDynamicScale();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
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

/**
Vertical Stack component
@param {IOSpacer} space
 */

export const VStack = ({
  space = DEFAULT_SPACING_VALUE,
  children,
  style,
  allowScaleSpacing
}: Stack) => {
  const { dynamicFontScale, spacingScaleMultiplier } = useIOFontDynamicScale();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
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
