import * as React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { IOColors, IOSpringValues } from "../../core";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 4,
    backgroundColor: IOColors.white
  }
});

export type ProgressLoader = {
  progress: number;
  accessibilityLabel?: string;
  color?: IOColors;
};

/**
 * ProgressLoader component
 * @param progress - the progress percentage
 * @param color - IOColors value or undefined to define the color of the progress bar
 */
export const ProgressLoader = ({
  progress,
  accessibilityLabel,
  color = "blueIO-500"
}: ProgressLoader) => {
  const [width, setWidth] = React.useState(0);
  const progressWidth = useSharedValue(0);

  React.useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    progressWidth.value = withSpring(
      (progress / 100) * width,
      IOSpringValues.accordion
    );
  }, [progressWidth, progress, width]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: progressWidth.value
  }));

  return (
    <View
      style={styles.container}
      onLayout={e => setWidth(e.nativeEvent.layout.width)}
      accessibilityLabel={accessibilityLabel}
    >
      <Animated.View
        style={[
          animatedStyle,
          { height: "100%", backgroundColor: IOColors[color] }
        ]}
      />
    </View>
  );
};
