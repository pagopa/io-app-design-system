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
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
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
import {
  ButtonLink,
  ButtonLinkProps,
  ButtonOutline,
  ButtonSolid
} from "../buttons";
import { VSpacer } from "../spacer";

type GradientScrollActions =
  | {
      type: "SingleButton";
      primary: Omit<ComponentProps<typeof ButtonSolid>, "fullWidth">;
      secondary?: never;
      tertiary?: never;
    }
  | {
      type: "TwoButtons";
      primary: Omit<ComponentProps<typeof ButtonSolid>, "fullWidth">;
      secondary: ComponentProps<typeof ButtonLink>;
      tertiary?: never;
    }
  | {
      type: "ThreeButtons";
      primary: Omit<ComponentProps<typeof ButtonSolid>, "fullWidth">;
      secondary: Omit<ComponentProps<typeof ButtonOutline>, "fullWidth">;
      tertiary: ComponentProps<typeof ButtonLink>;
    };

type GradientScrollView = WithTestID<
  PropsWithChildren<{
    actionsProps?: GradientScrollActions;
    debugMode?: boolean;
    /* Don't include safe area insets */
    excludeSafeAreaMargins?: boolean;
  }>
>;

/* Percentage of scrolled content that triggers
   the gradient opaciy transition */
const gradientOpacityScrollTrigger = 0.85;
/* Extended gradient area above the actions */
const gradientSafeAreaHeight: IOSpacingScale = 96;
/* End content margin before the actions */
const contentEndMargin: IOSpacingScale = 32;
/* Margin between ButtonSolid and ButtonOutline */
const spaceBetweenActions: IOSpacer = 8;
/* Margin between ButtonSolid and ButtonLink */
const spaceBetweenActionAndLink: IOSpacer = 16;
/* Extra bottom margin for iPhone bottom handle because
   ButtonLink doesn't have a fixed height */
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
  }
});

export const GradientScrollView = ({
  children,
  actionsProps,
  excludeSafeAreaMargins = false,
  debugMode = false,
  testID
}: GradientScrollView) => {
  const theme = useIOTheme();

  const type = actionsProps?.type;
  const primaryAction = actionsProps?.primary;
  const secondaryAction = actionsProps?.secondary;
  const tertiaryAction = actionsProps?.tertiary;

  /* Shared Values for `reanimated` */
  const scrollPositionPercentage = useSharedValue(0); /* Scroll position */

  /* Total height of actions */
  const [actionBlockHeight, setActionBlockHeight] =
    useState<LayoutRectangle["height"]>(0);

  const getActionBlockHeight = (event: LayoutChangeEvent) => {
    setActionBlockHeight(event.nativeEvent.layout.height);
  };

  const insets = useSafeAreaInsets();
  const needSafeAreaMargin = useMemo(() => insets.bottom !== 0, [insets]);
  const safeAreaMargin = useMemo(() => insets.bottom, [insets]);

  /* Check if the iPhone bottom handle is present.
     If not, or if you don't need safe area insets,
     add a default margin to prevent the button
     from sticking to the bottom. */
  const bottomMargin: number = useMemo(
    () =>
      !needSafeAreaMargin || excludeSafeAreaMargins
        ? IOVisualCostants.appMarginDefault
        : safeAreaMargin,
    [needSafeAreaMargin, excludeSafeAreaMargins, safeAreaMargin]
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
    () => (secondaryAction && needSafeAreaMargin ? extraSafeAreaMargin : 0),
    [needSafeAreaMargin, secondaryAction]
  );

  /* Safe background block. Cover at least 85% of the space
     to avoid glitchy elements underneath */
  const safeBackgroundBlockHeight: number = useMemo(
    () => (bottomMargin + actionBlockHeight) * 0.85,
    [actionBlockHeight, bottomMargin]
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

  const handleScroll = useAnimatedScrollHandler(
    ({ contentOffset, layoutMeasurement, contentSize }) => {
      const scrollPosition = contentOffset.y;
      const maxScrollHeight = contentSize.height - layoutMeasurement.height;
      const scrollPercentage = scrollPosition / maxScrollHeight;

      // eslint-disable-next-line functional/immutable-data
      scrollPositionPercentage.value = scrollPercentage;
    }
  );

  const opacityTransition = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollPositionPercentage.value,
      [0, gradientOpacityScrollTrigger, 1],
      [1, 1, 0],
      Extrapolate.CLAMP
    )
  }));

  return (
    <>
      <Animated.ScrollView
        testID={testID}
        onScroll={handleScroll}
        scrollEventThrottle={8}
        contentContainerStyle={{
          paddingHorizontal: IOVisualCostants.appMarginDefault,
          paddingBottom: actionsProps
            ? safeBottomAreaHeight
            : bottomMargin + contentEndMargin
        }}
      >
        {children}
      </Animated.ScrollView>
      {actionsProps && (
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
              <LinearGradient
                style={{
                  height: gradientAreaHeight - safeBackgroundBlockHeight
                }}
                locations={locations}
                colors={colors}
              />
            </Animated.View>

            {/* Safe background block. It's added because when you swipe up
          quickly, the content below is visible for about 100ms. Without this
          block, the content appears glitchy. */}
            <View
              style={{
                bottom: 0,
                height: safeBackgroundBlockHeight,
                backgroundColor: HEADER_BG_COLOR
              }}
            />
          </Animated.View>

          <View
            style={styles.buttonContainer}
            onLayout={getActionBlockHeight}
            pointerEvents="box-none"
          >
            {primaryAction && <ButtonSolid fullWidth {...primaryAction} />}

            {type === "TwoButtons" && secondaryAction && (
              <View
                style={{
                  alignSelf: "center",
                  marginBottom: extraBottomMargin
                }}
              >
                <VSpacer size={spaceBetweenActionAndLink} />
                <ButtonLink {...(secondaryAction as ButtonLinkProps)} />
              </View>
            )}

            {type === "ThreeButtons" && (
              <>
                {secondaryAction && (
                  <>
                    <VSpacer size={spaceBetweenActions} />
                    <ButtonOutline fullWidth {...secondaryAction} />
                  </>
                )}
                {tertiaryAction && (
                  <View
                    style={{
                      alignSelf: "center",
                      marginBottom: extraBottomMargin
                    }}
                  >
                    <VSpacer size={spaceBetweenActionAndLink} />
                    <ButtonLink {...tertiaryAction} />
                  </View>
                )}
              </>
            )}
          </View>
        </View>
      )}
    </>
  );
};

export default GradientScrollView;
