import React, {
  ComponentProps,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollViewProps,
  StyleSheet
} from "react-native";
import Animated, {
  runOnUI,
  scrollTo,
  useAnimatedRef,
  type AnimatedRef
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
  animatedScrollRef?: AnimatedRef<Animated.ScrollView>;
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
  animatedScrollRef
}: ForceScrollDownView) => {
  const internalAnimatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollViewRef = animatedScrollRef ?? internalAnimatedRef;

  const {
    footerActionsInlineMeasurements,
    handleFooterActionsInlineMeasurements
  } = useFooterActionsInlineMeasurements();

  const threshold = footerActions
    ? footerActionsInlineMeasurements.safeBottomAreaHeight
    : customThreshold;

  /**
   * The height of the scroll view, used to determine whether or not the scrollable content fits inside
   * the scroll view and whether the "scroll to bottom" button should be displayed.
   */
  const [scrollViewHeight, setScrollViewHeight] = useState<number>(0);

  /**
   * The height of the scrollable content, used to determine whether or not the "scroll to bottom" button
   * should be displayed.
   */
  const [contentHeight, setContentHeight] = useState<number>(0);

  /**
   * Whether or not the scroll view has crossed the threshold from the bottom.
   */
  const [isThresholdCrossed, setThresholdCrossed] = useState(false);

  /**
   * Whether or not the "scroll to bottom" button should be visible. This is controlled by the threshold
   * and the current scroll position.
   */
  const [isButtonVisible, setButtonVisible] = useState(true);

  /**
   * A callback that is called whenever the scroll view is scrolled. It checks whether or not the
   * scroll view has crossed the threshold from the bottom and updates the state accordingly.
   * The callback is designed to update button visibility only when crossing the threshold.
   */
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { layoutMeasurement, contentOffset, contentSize } =
        event.nativeEvent;

      const thresholdCrossed =
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - (threshold ?? 0);

      if (isThresholdCrossed !== thresholdCrossed) {
        setThresholdCrossed(thresholdCrossed);
        setButtonVisible(!thresholdCrossed);
      }
    },
    [threshold, isThresholdCrossed]
  );

  /**
   * A side effect that calls the `onThresholdCrossed` callback whenever the value of `isThresholdCrossed` changes.
   */
  useEffect(() => {
    onThresholdCrossed?.(isThresholdCrossed);
  }, [onThresholdCrossed, isThresholdCrossed]);

  /**
   * A callback that is called whenever the size of the scrollable content changes. It updates the
   * state with the new content height.
   */
  const handleContentSizeChange = useCallback(
    (_contentWidth: number, contentHeight: number) => {
      setContentHeight(contentHeight);
    },
    []
  );

  /**
   * A callback that is called whenever the size of the scroll view changes. It updates the state
   * with the new scroll view height.
   */
  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setScrollViewHeight(event.nativeEvent.layout.height);
  }, []);

  /**
   * A callback that is called when the "scroll to bottom" button is pressed. It scrolls the
   * scroll view to the bottom and hides the button.
   */
  const handleScrollDownPress = useCallback(() => {
    setButtonVisible(false);
    const targetY = Math.max(0, contentHeight - scrollViewHeight);
    runOnUI((y: number) => {
      "worklet";
      scrollTo(scrollViewRef, 0, y, true);
    })(targetY);
  }, [scrollViewRef, contentHeight, scrollViewHeight]);

  /**
   * Whether or not the "scroll to bottom" button needs to be displayed. It is only displayed
   * when the scrollable content cannot fit inside the scroll view and the button is enabled
   * (`scrollEnabled` is `true`).
   */
  const needsScroll = useMemo(
    () =>
      scrollViewHeight > 0 &&
      contentHeight > 0 &&
      scrollViewHeight < contentHeight,
    [scrollViewHeight, contentHeight]
  );

  /**
   * Whether or not to render the "scroll to bottom" button. It is only rendered when the scroll view
   * is enabled, needs to be scrolled, and the button is visible (`isButtonVisible` is `true`).
   */
  const shouldRenderScrollButton =
    scrollEnabled && needsScroll && isButtonVisible;

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
        onScroll={handleScroll}
        scrollEventThrottle={8}
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
