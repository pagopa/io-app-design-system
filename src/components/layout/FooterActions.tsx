import * as React from "react";
import { ComponentProps, Fragment, PropsWithChildren, useState } from "react";
import {
  ColorValue,
  LayoutChangeEvent,
  LayoutRectangle,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native";
import Animated from "react-native-reanimated";
import {
  IOColors,
  IOSpacer,
  IOSpacing,
  IOVisualCostants,
  buttonSolidHeight,
  hexToRgba,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { ButtonLink, ButtonOutline, ButtonSolid } from "../buttons";
import { VSpacer } from "../spacer";
import { useBottomMargins } from "./hooks/useBottomMargins";

type FooterSingleButton = {
  type: "SingleButton";
  primary: Omit<ComponentProps<typeof ButtonSolid>, "fullWidth">;
  secondary?: never;
  tertiary?: never;
};

type FooterTwoButtons = {
  type: "TwoButtons";
  primary: Omit<ComponentProps<typeof ButtonSolid>, "fullWidth">;
  secondary: Omit<ComponentProps<typeof ButtonLink>, "color">;
  tertiary?: never;
};

type FooterThreeButtons = {
  type: "ThreeButtons";
  primary: Omit<ComponentProps<typeof ButtonSolid>, "fullWidth">;
  secondary: Omit<ComponentProps<typeof ButtonOutline>, "fullWidth" | "color">;
  tertiary: Omit<ComponentProps<typeof ButtonLink>, "color">;
};

export type FooterActionsMeasurements = {
  // Height of the "Actions" block
  actionBlockHeight: number;
  /* Height of the safe bottom area. It includes:
     - Margin between screen content
       and actions (contentEndMargin)
     - Actions block height
     - Eventual safe area margin (bottomMargin)
     This is the total bottom padding that needs
     to be applied to the ScrollView.
  */
  safeBottomAreaHeight: number;
};

type FooterActions = FooterSingleButton | FooterTwoButtons | FooterThreeButtons;

type FooterAnimatedStyles = {
  /* Apply object returned by `useAnimatedStyle` to the main block */
  mainBlock?: Animated.AnimateStyle<ViewStyle>;
  /* Apply object returned by `useAnimatedStyle` to the background */
  background?: Animated.AnimateStyle<ViewStyle>;
};

type FooterActionsProps = WithTestID<
  PropsWithChildren<{
    actions?: FooterActions;
    onMeasure?: (measurements: FooterActionsMeasurements) => void;
    animatedStyles?: FooterAnimatedStyles;
    /* Make the background transparent */
    transparent?: boolean;
    /* Don't include safe area insets */
    excludeSafeAreaMargins?: boolean;
    /* Fixed at the bottom of the screen */
    fixed?: boolean;
    /* Show the following elements:
       - Opaque red background to show the component boundaries
       - Height of the component */
    debugMode?: boolean;
  }>
>;

/* Margin between ButtonSolid and ButtonOutline */
const spaceBetweenActions: IOSpacer = 16;
/* Margin between ButtonSolid and ButtonLink */
const spaceBetweenActionAndLink: IOSpacer = 16;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    width: "100%",
    flexShrink: 0
  },
  debugText: {
    position: "absolute",
    right: 8,
    top: -16,
    color: IOColors.black,
    fontSize: 9,
    opacity: 0.75
  },
  blockShadow: {
    shadowColor: IOColors.black,
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowOpacity: 0.1,
    shadowRadius: 32
  }
});

export const FooterActions = ({
  actions,
  excludeSafeAreaMargins = false,
  animatedStyles,
  fixed = true,
  transparent = false,
  onMeasure,
  testID,
  debugMode = false
}: FooterActionsProps) => {
  const theme = useIOTheme();

  const { bottomMargin, extraBottomMargin } = useBottomMargins(
    !!actions?.secondary,
    excludeSafeAreaMargins
  );

  /* Total height of actions */
  const [actionBlockHeight, setActionBlockHeight] =
    useState<LayoutRectangle["height"]>(0);

  /* Background color should be app main background
     (both light and dark themes) */
  const HEADER_BG_COLOR: ColorValue = IOColors[theme["appBackground-primary"]];
  const TRANSPARENT_BG_COLOR: ColorValue = "transparent";

  /* Safe background block. Cover everything until it reaches
     the half of the primary action button. It avoids
     glitchy behavior underneath.  */
  const safeBackgroundBlockHeight =
    bottomMargin + actionBlockHeight - buttonSolidHeight / 2;

  const getActionBlockMeasurements = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setActionBlockHeight(height);
    /* Height of the safe bottom area, applied to the ScrollView:
       Actions + Content end margin */
    const safeBottomAreaHeight =
      bottomMargin + height + IOSpacing.screenEndMargin;
    onMeasure?.({ actionBlockHeight: height, safeBottomAreaHeight });
  };

  return (
    <Animated.View
      style={[
        {
          width: "100%",
          paddingBottom: bottomMargin
        },
        fixed
          ? { position: "absolute", bottom: 0 }
          : { marginTop: IOSpacing.screenEndMargin },
        debugMode && {
          backgroundColor: hexToRgba(IOColors["error-500"], 0.15)
        },
        animatedStyles?.mainBlock
      ]}
      testID={testID}
    >
      {/* Safe background block. It's added because when you swipe up
          quickly, the content below is visible for about 100ms. Without this
          block, the content scrolls underneath. */}
      <Animated.View
        style={[
          {
            ...(fixed && {
              width: "100%",
              height: safeBackgroundBlockHeight,
              position: "absolute",
              bottom: 0,
              backgroundColor: transparent
                ? TRANSPARENT_BG_COLOR
                : HEADER_BG_COLOR
            }),
            ...(fixed ? styles.blockShadow : null)
          },
          animatedStyles?.background
        ]}
        pointerEvents="none"
      />

      <View
        style={styles.buttonContainer}
        onLayout={getActionBlockMeasurements}
        pointerEvents="box-none"
      >
        {debugMode && (
          <Text style={styles.debugText}>{`Height: ${actionBlockHeight}`}</Text>
        )}

        {renderActions(actions, extraBottomMargin)}
      </View>
    </Animated.View>
  );
};

const renderActions = (
  actions: FooterActions | undefined,
  extraBottomMargin: number
) => {
  if (!actions) {
    return null;
  }
  const {
    type,
    primary: primaryAction,
    secondary: secondaryAction,
    tertiary: tertiaryAction
  } = actions;
  return (
    <Fragment>
      {primaryAction && <ButtonSolid fullWidth {...primaryAction} />}
      {type === "TwoButtons" && secondaryAction && (
        <View style={{ alignSelf: "center", marginBottom: extraBottomMargin }}>
          <VSpacer size={spaceBetweenActionAndLink} />
          <ButtonLink color="primary" {...secondaryAction} />
        </View>
      )}
      {type === "ThreeButtons" && (
        <>
          {secondaryAction && (
            <>
              <VSpacer size={spaceBetweenActions} />
              <ButtonOutline fullWidth color="primary" {...secondaryAction} />
            </>
          )}
          {tertiaryAction && (
            <View
              style={{ alignSelf: "center", marginBottom: extraBottomMargin }}
            >
              <VSpacer size={spaceBetweenActionAndLink} />
              <ButtonLink color="primary" {...tertiaryAction} />
            </View>
          )}
        </>
      )}
    </Fragment>
  );
};
