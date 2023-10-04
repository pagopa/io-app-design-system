import * as React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle
} from "react-native-reanimated";
import {
  IOStyles,
  IOVisualCostants,
  iconBtnSizeSmall,
  IOColors,
  hexToRgba,
  useIOExperimentalDesign
} from "../../core";
import { HSpacer } from "../spacer";
import type { IOSpacer } from "../../core/IOSpacing";
import { WithTestID } from "../../utils/types";
import IconButton from "../buttons/IconButton";
import { makeFontStyleObject } from "../../utils/fonts";
import { ActionProp } from "./common";

type ScrollValues = {
  contentOffsetY: Animated.SharedValue<number>;
  triggerOffset: number;
};

type CommonProps = WithTestID<{
  scrollValues?: ScrollValues;
  title: string;
  goBack: () => void;
  backAccessibilityLabel: string;
  // Visual attributes
  transparent?: boolean;
}>;

interface Base extends CommonProps {
  type: "base";
  firstAction?: never;
  secondAction?: never;
  thirdAction?: never;
}

interface OneAction extends CommonProps {
  type: "singleAction";
  firstAction: ActionProp;
  secondAction?: never;
  thirdAction?: never;
}

interface TwoActions extends CommonProps {
  type: "twoActions";
  firstAction: ActionProp;
  secondAction: ActionProp;
  thirdAction?: never;
}

interface ThreeActions extends CommonProps {
  type: "threeActions";
  firstAction: ActionProp;
  secondAction: ActionProp;
  thirdAction: ActionProp;
}

export type HeaderSecondLevel = Base | OneAction | TwoActions | ThreeActions;

const HEADER_BG_COLOR: IOColors = "white";
const borderColorDisabled = hexToRgba(IOColors["grey-100"], 0);
const headerTransparent = hexToRgba(IOColors[HEADER_BG_COLOR], 0);
const titleHorizontalMargin: IOSpacer = 16;

const styles = StyleSheet.create({
  headerInner: {
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    height: IOVisualCostants.headerHeight,
    borderBottomWidth: 1,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerTitle: {
    fontSize: 14,
    textAlign: "center",
    flexGrow: 1,
    flexShrink: 1,
    marginHorizontal: titleHorizontalMargin
  },
  headerTitleFont: {
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  },
  headerTitleLegacyFont: {
    ...makeFontStyleObject("SemiBold", false, "TitilliumWeb")
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
  title,
  type,
  transparent = false,
  testID,
  firstAction,
  secondAction,
  thirdAction
}: HeaderSecondLevel) => {
  const { isExperimental } = useIOExperimentalDesign();
  const insets = useSafeAreaInsets();

  const headerWrapperAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor:
      transparent && scrollValues
        ? interpolateColor(
            scrollValues.contentOffsetY.value,
            [0, scrollValues.triggerOffset],
            [headerTransparent, IOColors[HEADER_BG_COLOR]]
          )
        : IOColors[HEADER_BG_COLOR],
    borderColor: scrollValues
      ? interpolateColor(
          scrollValues.contentOffsetY.value,
          [0, scrollValues.triggerOffset],
          [borderColorDisabled, IOColors["grey-100"]]
        )
      : "transparent"
  }));

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: scrollValues
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
      style={
        transparent
          ? { borderBottomWidth: 0 }
          : { backgroundColor: IOColors[HEADER_BG_COLOR] }
      }
    >
      <Animated.View
        testID={testID}
        style={[
          { marginTop: insets.top },
          styles.headerInner,
          headerWrapperAnimatedStyle
        ]}
      >
        <IconButton
          icon={Platform.OS === "ios" ? "backiOS" : "backAndroid"}
          color="neutral"
          onPress={goBack}
          accessibilityLabel={backAccessibilityLabel}
        />
        <Animated.Text
          numberOfLines={1}
          style={[
            styles.headerTitle,
            isExperimental
              ? styles.headerTitleFont
              : styles.headerTitleLegacyFont,
            titleAnimatedStyle
          ]}
        >
          {title}
        </Animated.Text>
        <View style={[IOStyles.row, { flexShrink: 0 }]}>
          {type !== "base" ? (
            <IconButton {...firstAction} color="neutral" />
          ) : (
            <HSpacer size={iconBtnSizeSmall as IOSpacer} />
          )}
          {(type === "twoActions" || type === "threeActions") && (
            <>
              {/* Ideally, with the "gap" flex property,
              we can get rid of these ugly constructs */}
              <HSpacer size={16} />
              <IconButton {...secondAction} color="neutral" />
            </>
          )}
          {type === "threeActions" && (
            <>
              {/* Same as above */}
              <HSpacer size={16} />
              <IconButton {...thirdAction} color="neutral" />
            </>
          )}
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default HeaderSecondLevel;
