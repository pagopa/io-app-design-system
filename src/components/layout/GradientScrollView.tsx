import * as React from "react";
import { ComponentProps, PropsWithChildren, useMemo, useState } from "react";
import {
  ColorValue,
  LayoutChangeEvent,
  LayoutRectangle,
  StyleSheet,
  View
} from "react-native";
import { easeGradient } from "react-native-easing-gradient";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
  Easing,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  IOColors,
  IOSpacer,
  IOSpacingScale,
  IOVisualCostants,
  hexToRgba,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { ButtonLink, ButtonOutline, ButtonSolid } from "../buttons";
import { VSpacer } from "../spacer";

type GradientScrollActions =
  | {
      primary: Omit<ComponentProps<typeof ButtonSolid>, "fullWidth">;
      secondary?: never;
      tertiary?: never;
    }
  | {
      primary: Omit<ComponentProps<typeof ButtonSolid>, "fullWidth">;
      secondary: ComponentProps<typeof ButtonLink>;
      tertiary?: never;
    }
  | {
      primary: Omit<ComponentProps<typeof ButtonSolid>, "fullWidth">;
      secondary: Omit<ComponentProps<typeof ButtonOutline>, "fullWidth">;
      tertiary: ComponentProps<typeof ButtonLink>;
    };

type GradientScrollView = WithTestID<
  PropsWithChildren<{
    actionsProps: GradientScrollActions;
    excludeSafeAreaMargins?: boolean;
    debugMode?: boolean;
  }>
>;

// Extended gradient area above the actions
export const gradientSafeAreaHeight: IOSpacingScale = 96;
// End content margin before the actions
const contentEndMargin: IOSpacingScale = 32;
// Margin between primary action and secondary one
const spaceBetweenActions: IOSpacer = 24;
// Extra bottom margin for iPhone bottom handle
const extraSafeAreaMargin: IOSpacingScale = 8;

const styles = StyleSheet.create({
  gradientBottomActions: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    justifyContent: "flex-end"
  },
  buttonContainer: {
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    width: "100%",
    flexShrink: 0
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject
  },
  safeBackgroundBlock: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  }
});

export const GradientScrollView = ({
  children,
  actionsProps: {
    primary: primaryAction,
    secondary: secondaryAction,
    tertiary: tertiaryAction
  },
  // Don't include safe area insets
  excludeSafeAreaMargins = false,
  debugMode = false,
  testID
}: GradientScrollView) => {
  const theme = useIOTheme();

  /* Shared Values for `reanimated` */
  const gradientOpacity = useSharedValue(1);

  /* Total height of actions */
  const [actionBlockHeight, setActionBlockHeight] =
    useState<LayoutRectangle["height"]>(0);

  const getActionBlockHeight = (event: LayoutChangeEvent) => {
    setActionBlockHeight(event.nativeEvent.layout.height);
  };

  const insets = useSafeAreaInsets();
  const isSafeAreaMarginNeeded = useMemo(() => insets.bottom !== 0, [insets]);
  const safeAreaMargin = useMemo(() => insets.bottom, [insets]);

  /* Check if the iPhone bottom handle is present.
     If not, or if you don't need safe area insets,
     add a default margin to prevent the button
     from sticking to the bottom. */
  const bottomMargin: number = useMemo(
    () =>
      isSafeAreaMarginNeeded || excludeSafeAreaMargins
        ? IOVisualCostants.appMarginDefault
        : safeAreaMargin,
    [isSafeAreaMarginNeeded, excludeSafeAreaMargins, safeAreaMargin]
  );

  /* GENERATE EASING GRADIENT
     Background color should be app main background
     (both light and dark themes) */
  const HEADER_BG_COLOR: ColorValue = IOColors[theme["appBackground-primary"]];

  const { colors, locations } = easeGradient({
    colorStops: {
      0: { color: hexToRgba(HEADER_BG_COLOR, 0) },
      1: { color: HEADER_BG_COLOR }
    },
    easing: Easing.ease,
    extraColorStopsPerTransition: 20
  });

  /* When the secondary action is visible, add extra margin
     to avoid little space from iPhone bottom handle */
  const extraBottomMargin: number = useMemo(
    () => (secondaryAction && isSafeAreaMarginNeeded ? extraSafeAreaMargin : 0),
    [isSafeAreaMarginNeeded, secondaryAction]
  );

  /* Total height of "Actions + Gradient" area */
  const gradientAreaHeight: number = useMemo(
    () => bottomMargin + actionBlockHeight + gradientSafeAreaHeight,
    [actionBlockHeight, bottomMargin]
  );

  /* Height of the safe bottom area, applied to the ScrollView:
     Actions + Content end margin */
  const safeBottomAreaHeight: number = useMemo(
    () => bottomMargin + actionBlockHeight + contentEndMargin,
    [actionBlockHeight, bottomMargin]
  );

  /* Safe background block. It's added because when
     you swipe up quickly, the content below is visible
     for about 100ms. Without this block, the content
     appears glitchy. */

  const safeBackgroundHeight = useMemo(
    () => actionBlockHeight * 0.5 + bottomMargin,
    [actionBlockHeight, bottomMargin]
  );

  const handleScroll = useAnimatedScrollHandler(
    ({ contentOffset, layoutMeasurement, contentSize }) => {
      /* We use Math.floor because decimals used on Android
      devices never change the `isEndReached` boolean value.
      We have more consistent behavior across platforms
      if we round these calculations ¯\_(ツ)_/¯ */
      const isEndReached =
        Math.floor(layoutMeasurement.height + contentOffset.y) >=
        Math.floor(contentSize.height);

      // eslint-disable-next-line functional/immutable-data
      gradientOpacity.value = isEndReached ? 0 : 1;
    }
  );

  const opacityTransition = useAnimatedStyle(() => ({
    opacity: withTiming(gradientOpacity.value, {
      duration: 200,
      easing: Easing.ease
    })
  }));

  return (
    <>
      <Animated.ScrollView
        testID={testID}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingHorizontal: IOVisualCostants.appMarginDefault,
          paddingBottom: safeBottomAreaHeight
        }}
      >
        {children}
      </Animated.ScrollView>
      <View
        style={[
          styles.gradientBottomActions,
          {
            height: gradientAreaHeight,
            paddingBottom: bottomMargin
          }
        ]}
        testID={testID}
        pointerEvents="box-none"
      >
        <Animated.View
          style={[
            styles.gradientContainer,
            debugMode && {
              backgroundColor: hexToRgba(IOColors["error-500"], 0.15)
            }
          ]}
          pointerEvents="none"
        >
          <Animated.View
            style={[
              opacityTransition,
              debugMode && {
                borderTopColor: IOColors["error-500"],
                borderTopWidth: 1,
                backgroundColor: hexToRgba(IOColors["error-500"], 0.4)
              }
            ]}
          >
            {/* 100% opacity bg color fills at least 45% of the area */}
            <LinearGradient
              style={{ height: gradientAreaHeight * 0.55 }}
              locations={locations}
              colors={colors}
            />
          </Animated.View>
          <View
            style={{
              bottom: 0,
              height: gradientAreaHeight * 0.45,
              backgroundColor: HEADER_BG_COLOR
            }}
          />
        </Animated.View>

        <View
          style={[
            styles.safeBackgroundBlock,
            {
              height: safeBackgroundHeight,
              backgroundColor: HEADER_BG_COLOR
            }
          ]}
        />
        <View
          style={styles.buttonContainer}
          onLayout={getActionBlockHeight}
          pointerEvents="box-none"
        >
          {primaryAction && (
            <ButtonSolid fullWidth {...primaryAction}></ButtonSolid>
          )}

          {secondaryAction && (
            <View
              style={{
                alignSelf: "center",
                marginBottom: extraBottomMargin
              }}
            >
              <VSpacer size={spaceBetweenActions} />
              {<ButtonLink {...secondaryAction}></ButtonLink>}
            </View>
          )}
        </View>
      </View>
      {/* <GradientBottomActions
        debugMode={debugMode}
        primaryActionProps={primaryActionProps}
        secondaryActionProps={secondaryActionProps}
        transitionAnimStyle={opacityTransition}
        dimensions={{
          bottomMargin,
          extraBottomMargin,
          gradientAreaHeight,
          spaceBetweenActions,
          safeBackgroundHeight
        }}
      /> */}
    </>
  );
};

export default GradientScrollView;
