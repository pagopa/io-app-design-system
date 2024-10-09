import * as React from "react";
import { ComponentProps, useEffect, useLayoutEffect } from "react";
import {
  AccessibilityInfo,
  ColorValue,
  Platform,
  StyleSheet,
  View,
  findNodeHandle
} from "react-native";
import Animated, {
  AnimatedRef,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useScrollViewOffset,
  useSharedValue,
  withSpring,
  withTiming
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  IOColors,
  IOSpringValues,
  IOStyles,
  IOVisualCostants,
  alertEdgeToEdgeInsetTransitionConfig,
  hexToRgba,
  iconBtnSizeSmall,
  useIOExperimentalDesign,
  useIOTheme
} from "../../core";
import type { IOSpacer, IOSpacingScale } from "../../core/IOSpacing";
import { makeFontStyleObject } from "../../utils/fonts";
import { WithTestID } from "../../utils/types";
import IconButton from "../buttons/IconButton";
import { HSpacer } from "../spacer";
import { HeaderActionProps } from "./common";

type ScrollValues = {
  contentOffsetY: SharedValue<number>;
  triggerOffset: number;
};

type DiscreteTransitionProps =
  | {
      enableDiscreteTransition: true;
      animatedRef: AnimatedRef<Animated.ScrollView>;
    }
  | {
      enableDiscreteTransition?: false;
      animatedRef?: never;
    };

type BackProps =
  | {
      goBack: () => void;
      backAccessibilityLabel: string;
      backTestID?: string;
    }
  | {
      goBack?: never;
      backAccessibilityLabel?: never;
      backTestID?: never;
    };

type CommonProps = WithTestID<{
  scrollValues?: ScrollValues;
  title: string;
  // Visual attributes
  transparent?: boolean;
  variant?: "neutral" | "contrast";
  backgroundColor?: string;
  ignoreSafeAreaMargin?: boolean;
}>;

interface Base extends CommonProps {
  type: "base";
  firstAction?: never;
  secondAction?: never;
  thirdAction?: never;
}

interface OneAction extends CommonProps {
  type: "singleAction";
  firstAction: HeaderActionProps;
  secondAction?: never;
  thirdAction?: never;
}

interface TwoActions extends CommonProps {
  type: "twoActions";
  firstAction: HeaderActionProps;
  secondAction: HeaderActionProps;
  thirdAction?: never;
}

interface ThreeActions extends CommonProps {
  type: "threeActions";
  firstAction: HeaderActionProps;
  secondAction: HeaderActionProps;
  thirdAction: HeaderActionProps;
}

export type HeaderSecondLevel = BackProps &
  DiscreteTransitionProps &
  (Base | OneAction | TwoActions | ThreeActions);

const titleHorizontalMargin: IOSpacingScale = 16;

const styles = StyleSheet.create({
  headerInner: {
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    height: IOVisualCostants.headerHeight,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  titleContainer: {
    flexGrow: 1,
    flexShrink: 1,
    marginHorizontal: titleHorizontalMargin
  },
  headerTitle: {
    fontSize: 14,
    textAlign: "center"
  },
  headerTitleFont: {
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  },
  headerTitleLegacyFont: {
    ...makeFontStyleObject("Semibold", false, "TitilliumSansPro")
  }
});

/**
 * HeaderSecondLevel component is used to display the header on pages on the second level of navigation.
 * @param {HeaderSecondLevel} props - The props of the component
 * @returns React Element
 */
export const HeaderSecondLevel = ({
  scrollValues = undefined,
  goBack,
  backAccessibilityLabel,
  backTestID,
  title,
  type,
  variant = "neutral",
  backgroundColor,
  transparent = false,
  ignoreSafeAreaMargin = false,
  enableDiscreteTransition = false,
  animatedRef,
  testID,
  firstAction,
  secondAction,
  thirdAction
}: HeaderSecondLevel) => {
  const scrollOffset = useScrollViewOffset(
    animatedRef as AnimatedRef<Animated.ScrollView>
  );
  const titleRef = React.createRef<View>();

  const { isExperimental } = useIOExperimentalDesign();
  const theme = useIOTheme();
  const insets = useSafeAreaInsets();
  const isTitleAccessible = React.useMemo(() => !!title.trim(), [title]);
  const paddingTop = useSharedValue(ignoreSafeAreaMargin ? 0 : insets.top);

  const iconButtonColor: ComponentProps<typeof IconButton>["color"] =
    variant === "neutral" ? "neutral" : "contrast";
  const titleColor: ColorValue =
    variant === "neutral"
      ? IOColors[theme["textHeading-default"]]
      : IOColors.white;

  /* Visual attributes when there are transitions between states */
  const HEADER_DEFAULT_BG_COLOR: IOColors = "white";

  const headerBgColorTransparentState = backgroundColor
    ? hexToRgba(backgroundColor, 0)
    : transparent
    ? hexToRgba(IOColors[HEADER_DEFAULT_BG_COLOR], 0)
    : IOColors[HEADER_DEFAULT_BG_COLOR];

  const headerBgColorSolidState =
    backgroundColor ?? IOColors[HEADER_DEFAULT_BG_COLOR];

  const borderColorTransparentState = backgroundColor
    ? hexToRgba(backgroundColor, 0)
    : hexToRgba(IOColors["grey-100"], 0);
  const borderColorSolidState = backgroundColor ?? IOColors["grey-100"];

  useLayoutEffect(() => {
    if (isTitleAccessible) {
      const reactNode = findNodeHandle(titleRef.current);
      if (reactNode !== null) {
        AccessibilityInfo.setAccessibilityFocus(reactNode);
      }
    }
  });

  const bgColorDiscreteTransition = useDerivedValue(() =>
    withSpring(scrollOffset.value > 0 ? 1 : 0, IOSpringValues.header)
  );

  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    paddingTop.value = withTiming(
      ignoreSafeAreaMargin ? 0 : insets.top,
      alertEdgeToEdgeInsetTransitionConfig
    );
  }, [ignoreSafeAreaMargin, insets.top, paddingTop]);

  const animatedPaddingStyle = useAnimatedStyle(() => ({
    marginTop: paddingTop.value
  }));

  const headerWrapperAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: enableDiscreteTransition
      ? interpolateColor(
          bgColorDiscreteTransition.value,
          [0, 1],
          [headerBgColorTransparentState, headerBgColorSolidState]
        )
      : scrollValues
      ? interpolateColor(
          scrollValues.contentOffsetY.value,
          [0, scrollValues.triggerOffset],
          [headerBgColorTransparentState, headerBgColorSolidState]
        )
      : headerBgColorSolidState,
    borderColor: enableDiscreteTransition
      ? interpolateColor(
          bgColorDiscreteTransition.value,
          [0, 1],
          [borderColorTransparentState, borderColorSolidState]
        )
      : scrollValues
      ? interpolateColor(
          scrollValues.contentOffsetY.value,
          [0, scrollValues.triggerOffset],
          [borderColorTransparentState, borderColorSolidState]
        )
      : "transparent"
  }));

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: enableDiscreteTransition
      ? interpolate(bgColorDiscreteTransition.value, [0, 1], [0, 1])
      : scrollValues
      ? interpolate(
          scrollValues.contentOffsetY.value,
          [0, scrollValues.triggerOffset],
          [0, 1]
        )
      : 1
  }));

  return (
    <Animated.View
      accessibilityRole="header"
      style={[
        { borderBottomWidth: 1, borderColor: borderColorTransparentState },
        ignoreSafeAreaMargin ? { borderColor: borderColorSolidState } : {},
        !transparent ? { backgroundColor: headerBgColorSolidState } : {},
        headerWrapperAnimatedStyle
      ]}
    >
      <Animated.View
        testID={testID}
        style={[animatedPaddingStyle, styles.headerInner]}
      >
        {goBack ? (
          <IconButton
            icon={Platform.select({
              android: "backAndroid",
              default: "backiOS"
            })}
            color={iconButtonColor}
            onPress={goBack}
            accessibilityLabel={backAccessibilityLabel}
            testID={backTestID}
          />
        ) : (
          <HSpacer size={32} />
        )}
        <View
          ref={titleRef}
          accessibilityElementsHidden={!isTitleAccessible}
          importantForAccessibility={
            isTitleAccessible ? "yes" : "no-hide-descendants"
          }
          accessible={isTitleAccessible}
          accessibilityLabel={title}
          accessibilityRole="header"
          style={styles.titleContainer}
        >
          <Animated.Text
            numberOfLines={1}
            accessible={false}
            style={[
              styles.headerTitle,
              { color: titleColor },
              isExperimental
                ? styles.headerTitleFont
                : styles.headerTitleLegacyFont,
              titleAnimatedStyle
            ]}
          >
            {title}
          </Animated.Text>
        </View>
        <View style={[IOStyles.row, { flexShrink: 0 }]}>
          {type === "threeActions" && (
            <>
              <IconButton {...thirdAction} color={iconButtonColor} />
              {/* Same as above */}
              <HSpacer size={16} />
            </>
          )}
          {(type === "twoActions" || type === "threeActions") && (
            <>
              <IconButton {...secondAction} color={iconButtonColor} />
              {/* Ideally, with the "gap" flex property,
              we can get rid of these ugly constructs */}
              <HSpacer size={16} />
            </>
          )}
          {type !== "base" ? (
            <IconButton {...firstAction} color={iconButtonColor} />
          ) : (
            <HSpacer size={iconBtnSizeSmall as IOSpacer} />
          )}
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default HeaderSecondLevel;
