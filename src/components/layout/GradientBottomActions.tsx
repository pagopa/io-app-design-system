import * as React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated from "react-native-reanimated";
import { IOColors, IOSpacer, IOVisualCostants, hexToRgba } from "../../core";
import { WithTestID } from "../../utils/types";
import {
  ButtonLink,
  ButtonLinkProps,
  ButtonSolid,
  ButtonSolidProps
} from "../buttons";
import { VSpacer } from "../spacer";

export interface ButtonLinkAction {
  type: "ButtonLink";
  actionProps: ButtonLinkProps;
}

export interface ButtonSolidAction {
  type: "ButtonSolid";
  actionProps: ButtonSolidProps;
}

export type GradientBottomActions = WithTestID<{
  transitionAnimStyle: Animated.AnimateStyle<StyleProp<ViewStyle>>;
  dimensions: GradientBottomActionsDimensions;
  // Accepted components: ButtonSolid, ButtonLink
  // Don't use any components other than this, please.
  primaryAction?: ButtonSolidAction;
  secondaryAction?: ButtonLinkAction;
  // Debug mode
  debugMode?: boolean;
}>;

type GradientBottomActionsDimensions = {
  bottomMargin: number;
  extraBottomMargin: number;
  gradientAreaHeight: number;
  spaceBetweenActions: IOSpacer;
  safeBackgroundHeight: number;
};

// Background color should be app main background (both light and dark themes)
const HEADER_BG_COLOR: IOColors = "white";

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    width: "100%",
    flex: 1,
    flexShrink: 0,
    justifyContent: "flex-end"
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject
  },
  safeBackgroundBlock: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: IOColors[HEADER_BG_COLOR]
  }
});

export const GradientBottomActions = ({
  primaryAction,
  secondaryAction,
  dimensions,
  transitionAnimStyle,
  debugMode,
  testID
}: GradientBottomActions) => (
  <View
    style={{
      width: "100%",
      position: "absolute",
      bottom: 0,
      height: dimensions.gradientAreaHeight,
      paddingBottom: dimensions.bottomMargin
    }}
    testID={testID}
    pointerEvents="box-none"
  >
    <Animated.View
      style={[
        styles.gradientContainer,
        debugMode && {
          borderTopColor: IOColors["error-500"],
          borderTopWidth: 1,
          backgroundColor: hexToRgba(IOColors["error-500"], 0.5)
        },
        transitionAnimStyle
      ]}
      pointerEvents="none"
    >
      <LinearGradient
        style={{ height: dimensions.gradientAreaHeight }}
        // 100% opacity bg color fills at least 50% of the area
        locations={[0, 0.5]}
        colors={[
          hexToRgba(IOColors[HEADER_BG_COLOR], 0),
          IOColors[HEADER_BG_COLOR]
        ]}
      />
    </Animated.View>

    <View
      style={[
        styles.safeBackgroundBlock,
        {
          height: dimensions.safeBackgroundHeight
        }
      ]}
    />
    <View style={styles.buttonContainer} pointerEvents="box-none">
      {primaryAction && (
        <ButtonSolid {...primaryAction.actionProps}></ButtonSolid>
      )}

      {secondaryAction && (
        <View
          style={{
            alignSelf: "center",
            marginBottom: dimensions.extraBottomMargin
          }}
        >
          <VSpacer size={dimensions.spaceBetweenActions} />
          {<ButtonLink {...secondaryAction.actionProps}></ButtonLink>}
        </View>
      )}
    </View>
  </View>
);

export default GradientBottomActions;
