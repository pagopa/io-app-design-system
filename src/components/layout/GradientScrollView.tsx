import * as React from "react";
import { ComponentProps, PropsWithChildren, useMemo } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
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
  buttonSolidHeight,
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
    excludeSafeAreaMargins?: boolean;
    debugMode?: boolean;
    actionsProps: GradientScrollActions;
  }>
>;

// Extended gradient area above the actions
export const gradientSafeArea: IOSpacingScale = 96;
// End content margin before the actions
const contentEndMargin: IOSpacingScale = 32;
// Margin between primary action and secondary one
const spaceBetweenActions: IOSpacer = 24;
// Estimated height of the secondary action
const secondaryActionEstHeight: number = 20;
// Extra bottom margin for iPhone bottom handle
const extraSafeAreaMargin: IOSpacingScale = 8;

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
    right: 0
  }
});

export const GradientScrollView = ({
  children,
  actionsProps: { primary: primaryAction, secondary: secondaryAction },
  // Don't include safe area insets
  excludeSafeAreaMargins = false,
  debugMode = false,
  testID
}: GradientScrollView) => {
  const gradientOpacity = useSharedValue(1);

  const theme = useIOTheme();

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

  // GENERATE EASING GRADIENT
  // Background color should be app main background (both light and dark themes)
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

  /* Total height of actions */
  const actionsArea: number = useMemo(
    () =>
      primaryAction && secondaryAction
        ? (buttonSolidHeight as number) +
          spaceBetweenActions +
          secondaryActionEstHeight +
          extraBottomMargin
        : buttonSolidHeight,
    [extraBottomMargin, primaryAction, secondaryAction]
  );

  /* Total height of "Actions + Gradient" area */
  const gradientAreaHeight: number = useMemo(
    () => bottomMargin + actionsArea + gradientSafeArea,
    [actionsArea, bottomMargin]
  );

  /* Height of the safe bottom area, applied to the ScrollView:
  Actions + Content end margin */
  const safeBottomAreaHeight: number = useMemo(
    () => bottomMargin + actionsArea + contentEndMargin,
    [actionsArea, bottomMargin]
  );

  {
    /* Safe background block. It's added because when
    you swipe up quickly, the content below is visible
    for about 100ms. Without this block, the content
    appears glitchy. */
  }

  const safeBackgroundHeight = useMemo(
    () =>
      secondaryAction
        ? spaceBetweenActions +
          secondaryActionEstHeight +
          extraBottomMargin +
          bottomMargin
        : bottomMargin,
    [bottomMargin, extraBottomMargin, secondaryAction]
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
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          height: gradientAreaHeight,
          paddingBottom: bottomMargin
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
            }
          ]}
          pointerEvents="none"
        >
          <Animated.View style={opacityTransition}>
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
        <View style={styles.buttonContainer} pointerEvents="box-none">
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
