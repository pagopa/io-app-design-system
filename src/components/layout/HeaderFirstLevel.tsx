import * as React from "react";
import { createRef, useEffect, useLayoutEffect } from "react";
import {
  AccessibilityInfo,
  findNodeHandle,
  StyleSheet,
  View
} from "react-native";
import Animated, {
  AnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  alertEdgeToEdgeInsetTransitionConfig,
  IOColors,
  IOVisualCostants,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { IconButton } from "../buttons";
import { HStack } from "../stack";
import { H2 } from "../typography";
import { HeaderActionProps } from "./common";

type HeaderActionsProp =
  | readonly [] // No actions
  | readonly [HeaderActionProps] // Single action
  | readonly [HeaderActionProps, HeaderActionProps] // Two actions
  | readonly [HeaderActionProps, HeaderActionProps, HeaderActionProps]; // Three actions

export type HeaderFirstLevel = WithTestID<{
  title: string;
  actions: HeaderActionsProp;
  animatedRef?: AnimatedRef<Animated.ScrollView>;
  animatedFlatListRef?: AnimatedRef<Animated.FlatList<any>>;
  ignoreSafeAreaMargin?: boolean;
}>;

const styles = StyleSheet.create({
  headerInner: {
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    height: IOVisualCostants.headerHeight,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerDivider: {
    position: "absolute",
    width: "100%",
    height: StyleSheet.hairlineWidth,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export const HeaderFirstLevel = ({
  title,
  testID,
  actions = [],
  ignoreSafeAreaMargin = false,
  animatedRef,
  animatedFlatListRef
}: HeaderFirstLevel) => {
  const titleRef = createRef<View>();
  const insets = useSafeAreaInsets();
  const theme = useIOTheme();
  const paddingTop = useSharedValue(ignoreSafeAreaMargin ? 0 : insets.top);

  useLayoutEffect(() => {
    const reactNode = findNodeHandle(titleRef.current);
    if (reactNode !== null) {
      AccessibilityInfo.setAccessibilityFocus(reactNode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* We show the divider only when the header is scrolled down */
  const offset = useScrollViewOffset(
    (animatedRef as AnimatedRef<Animated.ScrollView>) ||
      (animatedFlatListRef as AnimatedRef<Animated.FlatList<any>>)
  );

  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    paddingTop.value = withTiming(
      ignoreSafeAreaMargin ? 0 : insets.top,
      alertEdgeToEdgeInsetTransitionConfig
    );
  }, [ignoreSafeAreaMargin, insets.top, paddingTop]);

  const animatedStyle = useAnimatedStyle(() => ({
    paddingTop: paddingTop.value
  }));

  const animatedDivider = useAnimatedStyle(() => ({
    opacity: withTiming(offset.value > 0 ? 1 : 0, { duration: 200 })
  }));

  return (
    <Animated.View
      style={[
        { backgroundColor: IOColors[theme["appBackground-primary"]] },
        animatedStyle
      ]}
      accessibilityRole="header"
      testID={testID}
    >
      {/* Divider */}
      {(animatedRef || animatedFlatListRef) && (
        <Animated.View
          style={[
            {
              ...styles.headerDivider,
              backgroundColor: IOColors[theme["divider-default"]]
            },
            animatedDivider
          ]}
        />
      )}

      <View style={styles.headerInner}>
        <View ref={titleRef} accessible accessibilityRole="header">
          <H2
            weight="Bold"
            style={{ flexShrink: 1 }}
            numberOfLines={1}
            color={theme["textHeading-default"]}
            maxFontSizeMultiplier={1.25}
          >
            {title}
          </H2>
        </View>
        <HStack space={16} style={{ flexShrink: 0 }}>
          {actions.map((action, index) => (
            <IconButton
              key={`header-first-level-action-${index}`}
              {...action}
              color={"primary"}
            />
          ))}
        </HStack>
      </View>
    </Animated.View>
  );
};

export default HeaderFirstLevel;
