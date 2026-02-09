import React from "react";
import { Dimensions } from "react-native";
import { usePanGesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { WithTestID } from "../../utils/types";

const windowWidth = Dimensions.get("window").width;

type Dismissable = WithTestID<{
  onDismiss?: () => void;
  dismissThreshold?: number;
  children: React.ReactNode;
}>;

/**
 * Component that allows for a dismissable gesture, both left and right.
 * When the threshold is reached, the `onDismiss` callback is called.
 * @param onDismiss Callback to be called when the threshold is reached.
 * @param dismissThreshold Threshold to be reached to call the `onDismiss` callback.
 * @param children Children to be rendered inside the component.
 * @returns A dismissable component.
 */
const Dismissable = ({
  onDismiss = () => undefined,
  dismissThreshold = windowWidth / 3,
  children,
  testID
}: Dismissable) => {
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }]
  }));

  /* eslint-disable functional/immutable-data */
  const pan = usePanGesture({
    onUpdate: event => {
      translateX.value = event.translationX;
    },
    onDeactivate: event => {
      if (Math.abs(event.translationX) > dismissThreshold) {
        translateX.value = withTiming(
          windowWidth * Math.sign(event.translationX),
          {
            duration: 300,
            easing: Easing.inOut(Easing.exp)
          },
          () => {
            "worklet";
            scheduleOnRN(onDismiss);
          }
        );
      } else {
        translateX.value = withSpring(0, { mass: 0.5 });
      }
    },
    testID: testID ?? ""
  });
  /* eslint-enable functional/immutable-data */

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </GestureDetector>
  );
};

export { Dismissable };
