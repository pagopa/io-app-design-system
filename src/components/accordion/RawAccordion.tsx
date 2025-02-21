import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  AccessibilityProps,
  Animated,
  Easing,
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  UIManager,
  View
} from "react-native";
import { IOStyles, IOVisualCostants } from "../../core/IOStyles";
import { Icon } from "../icons/Icon";

// TODO: handle external initial open/closed state
type Props = {
  // The header component, an arrow indicating the open/closed state will be added on the right
  header: React.ReactElement;
  // The accordion component must accept one children
  children: React.ReactElement;
  // The component should be animated? default: true
  animated?: boolean;
  headerStyle?: React.ComponentProps<typeof View>["style"];
  accessibilityLabel?: AccessibilityProps["accessibilityLabel"];
};

const styles = StyleSheet.create({
  headerIcon: {
    alignSelf: "center"
  },
  row: {
    ...IOStyles.row,
    justifyContent: "space-between"
  },
  internalHeader: {
    flex: 1,
    paddingRight: IOVisualCostants.appMarginDefault
  }
});

/**
 * Obtains the degree starting from the open state
 * @param isOpen
 */
const getDegree = (isOpen: boolean) => (isOpen ? "-90deg" : "-270deg");

/**
 * The base accordion component, implements the opening and closing logic for viewing the children
 * @param props
 * @constructor
 */
export const RawAccordion: React.FC<Props> = props => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const animatedController = useRef(new Animated.Value(1)).current;
  const shouldAnimate = props.animated ?? true;
  const headerStyle = props.headerStyle ?? {};
  const accessibilityLabel = props.accessibilityLabel
    ? `${props.accessibilityLabel}, `
    : "";

  const arrowAngle = shouldAnimate
    ? animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "-180deg"]
      })
    : getDegree(isOpen);

  useEffect(() => {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(shouldAnimate);
    }
  }, [shouldAnimate]);

  const onPress = () => {
    if (shouldAnimate) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      Animated.timing(animatedController, {
        duration: 300,
        toValue: isOpen ? 1 : 0,
        useNativeDriver: true,
        easing: Easing.linear
      }).start();
    }
    setOpen(!isOpen);
  };

  return (
    <View style={IOStyles.flex}>
      <TouchableWithoutFeedback
        onPress={onPress}
        accessible={true}
        accessibilityRole={"button"}
        accessibilityLabel={
          accessibilityLabel +
          (isOpen ? "Paragrafo espanso" : "Paragrafo chiuso")
        }
      >
        <View style={[styles.row, headerStyle]}>
          <View style={styles.internalHeader}>{props.header}</View>
          <Animated.View
            testID={"ArrowAccordion"}
            style={{
              ...styles.headerIcon,
              transform: [{ rotateZ: arrowAngle }]
            }}
          >
            <Icon name="chevronTop" color="blue-500" size={24} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      {isOpen && props.children}
    </View>
  );
};
