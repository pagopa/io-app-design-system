/* eslint-disable functional/immutable-data */
import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import Animated, {
  LayoutAnimation,
  WithSpringConfig,
  withSpring
} from "react-native-reanimated";

type Props = {
  visible?: boolean;
  springConfig?: WithSpringConfig;
  children: ReactNode;
  style?: ViewStyle;
};

const ScaleInOutAnimation = ({
  visible = true,
  springConfig = { damping: 500, mass: 3, stiffness: 1000 },
  children,
  style
}: Props) => {
  const enteringAnimation = (): LayoutAnimation => {
    "worklet";
    return {
      initialValues: {
        opacity: 0,
        transform: [{ scale: 0.5 }]
      },
      animations: {
        opacity: withSpring(1, springConfig),
        transform: [{ scale: withSpring(1, springConfig) }]
      }
    };
  };

  const exitingAnimation = (): LayoutAnimation => {
    "worklet";
    return {
      initialValues: {
        opacity: 1,
        transform: [{ scale: 1 }]
      },
      animations: {
        opacity: withSpring(0, springConfig),
        transform: [{ scale: withSpring(0.5, springConfig) }]
      }
    };
  };

  if (!visible) {
    return null;
  }

  return (
    <Animated.View
      style={style}
      entering={enteringAnimation}
      exiting={exitingAnimation}
    >
      {children}
    </Animated.View>
  );
};

export { ScaleInOutAnimation };
