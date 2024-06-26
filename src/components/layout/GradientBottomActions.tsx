import * as React from "react";
import { Easing, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { easeGradient } from "react-native-easing-gradient";
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

export type GradientBottomActions = WithTestID<{
  transitionAnimStyle: Animated.AnimateStyle<StyleProp<ViewStyle>>;
  dimensions: GradientBottomActionsDimensions;
  // Accepted components: ButtonSolid for the primaryAction, ButtonLink for the secondaryAction
  primaryActionProps?: Omit<ButtonSolidProps, "fullWidth">;
  secondaryActionProps?: ButtonLinkProps;
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

const { colors, locations } = easeGradient({
  colorStops: {
    0: { color: hexToRgba(IOColors[HEADER_BG_COLOR], 0) },
    1: { color: IOColors[HEADER_BG_COLOR] }
  },
  easing: Easing.ease,
  extraColorStopsPerTransition: 20
});

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

/**
 * @deprecated This component has been included in the new `IOScrollView` after a proper refactor. It will be removed in a future release.
 * @see IOScrollView
 */
export const GradientBottomActions = ({
  primaryActionProps: primaryAction,
  secondaryActionProps: secondaryAction,
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
      {/* 100% opacity bg color fills at least 45% of the area */}
      <LinearGradient
        style={{ height: dimensions.gradientAreaHeight * 0.55 }}
        locations={locations}
        colors={colors}
      />
      <View
        style={{
          bottom: 0,
          height: dimensions.gradientAreaHeight * 0.45,
          backgroundColor: IOColors[HEADER_BG_COLOR]
        }}
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
        <ButtonSolid fullWidth {...primaryAction}></ButtonSolid>
      )}

      {secondaryAction && (
        <View
          style={{
            alignSelf: "center",
            marginBottom: dimensions.extraBottomMargin
          }}
        >
          <VSpacer size={dimensions.spaceBetweenActions} />
          {<ButtonLink {...secondaryAction}></ButtonLink>}
        </View>
      )}
    </View>
  </View>
);

export default GradientBottomActions;
