import React, { ComponentProps, ReactNode, useCallback, useState } from "react";
import { LayoutChangeEvent, ScrollViewProps, StyleSheet } from "react-native";
import Animated, {
  runOnJS,
  runOnUI,
  scrollTo,
  useAnimatedRef,
  useAnimatedReaction,
  useScrollViewOffset,
  useSharedValue,
  AnimatedRef
} from "react-native-reanimated";
import { IOSpringValues, IOVisualCostants } from "../../core";
import { IconButtonSolid } from "../buttons";
import { ScaleInOutAnimation } from "../common/ScaleInOutAnimation";
import { FooterActions, useFooterActionsInlineMeasurements } from "../layout";

type ForceScrollDownViewActions = {
  /**
   * The distance from the bottom is computed automatically based on the actions.
   */
  threshold?: never;
  footerActions: Omit<
    ComponentProps<typeof FooterActions>,
    "fixed" | "onMeasure"
  >;
};

type ForceScrollDownViewCustomSlot = {
  /**
   * The distance from the bottom of the scrollable content at which the "scroll to bottom" button
   * should become hidden.
   */
  threshold: number;
  footerActions?: never;
};

type ForceScrollDownViewSlot =
  | ForceScrollDownViewActions
  | ForceScrollDownViewCustomSlot;

export type ForceScrollDownView = {
  /**
   * The content to display inside the scroll view.
   */
  children: ReactNode;
  /**
   * A callback that will be called whenever the scroll view crosses the threshold. The callback
   * is passed a boolean indicating whether the threshold has been crossed (`true`) or not (`false`).
   */
  onThresholdCrossed?: (crossed: boolean) => void;
  /**
   * Optional Animated ref to be used with `useScrollViewOffset`
   * (outside this component)
   */
  animatedRef?: AnimatedRef<Animated.ScrollView>;
} & ForceScrollDownViewSlot &
  Pick<
    ScrollViewProps,
    "style" | "contentContainerStyle" | "scrollEnabled" | "testID"
  >;

/**
 * A React Native component that displays a scroll view with a button that scrolls to the bottom of the content
 * when pressed. The button is hidden when the scroll view reaches a certain threshold from the bottom, which is
 * configurable by the `threshold` prop. The button, and the scrolling, can also be disabled by setting the
 * `scrollEnabled` prop to `false`.
 */
const ForceScrollDownView = ({
  footerActions,
  children,
  threshold: customThreshold,
  style,
  contentContainerStyle,
  scrollEnabled = true,
  onThresholdCrossed,
  animatedRef
}: ForceScrollDownView) => {
  const internalAnimatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollViewRef = animatedRef ?? internalAnimatedRef;

  const {
    footerActionsInlineMeasurements,
    handleFooterActionsInlineMeasurements
  } = useFooterActionsInlineMeasurements();

  const threshold = footerActions
    ? footerActionsInlineMeasurements.safeBottomAreaHeight
    : customThreshold;

  /**
   * Whether or not the "scroll to bottom" button should be visible. This is controlled by the threshold
   * and the current scroll position.
   */
  const [isButtonVisible, setButtonVisible] = useState(true);

  const scrollViewHeight = useSharedValue(0);
  const contentHeight = useSharedValue(0);
  const offsetY = useScrollViewOffset(scrollViewRef);

  useAnimatedReaction(
    () =>
      scrollViewHeight.value + Math.max(offsetY.value, 0) >=
      contentHeight.value - (threshold ?? 0),
    (crossed, previous) => {
      if (crossed !== previous) {
        runOnJS(setButtonVisible)(!crossed);
        if (onThresholdCrossed) {
          runOnJS(onThresholdCrossed)(crossed);
        }
      }
    }
  );

  /**
   * A callback that is called whenever the size of the scrollable content changes. It updates the
   * state with the new content height.
   */
  const handleContentSizeChange = useCallback(
    // eslint-disable-next-line functional/immutable-data
    (_w: number, h: number) => (contentHeight.value = h),
    [contentHeight]
  );

  /**
   * A callback that is called whenever the size of the scroll view changes. It updates the state
   * with the new scroll view height.
   */
  const handleLayout = useCallback(
    (event: LayoutChangeEvent) =>
      // eslint-disable-next-line functional/immutable-data
      (scrollViewHeight.value = event.nativeEvent.layout.height),
    [scrollViewHeight]
  );

  /**
   * A callback that is called when the "scroll to bottom" button is pressed. It scrolls the
   * scroll view to the bottom and hides the button.
   */
  const handleScrollDownPress = useCallback(() => {
    setButtonVisible(false);
    const targetY = Math.max(0, contentHeight.value - scrollViewHeight.value);
    runOnUI((x: number, y: number, animated: boolean) => {
      "worklet";
      scrollTo(scrollViewRef, x, y, animated);
    })(0, targetY, true);
  }, [scrollViewRef, contentHeight, scrollViewHeight]);

  /**
   * Whether or not to render the "scroll to bottom" button. It is only rendered when the scroll view
   * is enabled, needs to be scrolled, and the button is visible (`isButtonVisible` is `true`).
   */
  const shouldRenderScrollButton = scrollEnabled && isButtonVisible;

  /**
   * The "scroll to bottom" button component. It is wrapped in a reanimated view and has enter and exit
   * animations applied to it.
   */
  const scrollDownButton = (
    <ScaleInOutAnimation
      springConfig={IOSpringValues.button}
      style={styles.scrollDownButton}
      visible={shouldRenderScrollButton}
    >
      <IconButtonSolid
        testID={"ScrollDownButton"}
        accessibilityLabel="Scroll to bottom"
        icon="arrowBottom"
        onPress={handleScrollDownPress}
      />
    </ScaleInOutAnimation>
  );

  return (
    <>
      <Animated.ScrollView
        testID={"ScrollView"}
        ref={scrollViewRef}
        scrollEnabled={scrollEnabled}
        style={style}
        onLayout={handleLayout}
        onContentSizeChange={handleContentSizeChange}
        contentContainerStyle={contentContainerStyle}
      >
        {children}
        {footerActions && (
          <FooterActions
            {...footerActions}
            onMeasure={handleFooterActionsInlineMeasurements}
            fixed={false}
          />
        )}
      </Animated.ScrollView>
      {scrollDownButton}
    </>
  );
};

const styles = StyleSheet.create({
  scrollDownButton: {
    position: "absolute",
    zIndex: 10,
    right: IOVisualCostants.scrollDownButtonRight,
    bottom: IOVisualCostants.scrollDownButtonBottom
  }
});

export { ForceScrollDownView };
