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

type ActionProp = Pick<
  React.ComponentProps<typeof IconButton>,
  "icon" | "onPress" | "accessibilityLabel" | "accessibilityHint"
>;

type CommonProps = WithTestID<{
  scrollValues: ScrollValues;
  title: string;
  goBack: () => void;
  backAccessibilityLabel: string;
  // Visual attributes
  transparent?: boolean;
}>;

interface Base extends CommonProps {
  type: "base";
}

interface OneAction extends CommonProps {
  type: "singleAction";
  firstAction: ActionProp;
}

interface TwoActions extends CommonProps {
  type: "twoActions";
  firstAction: ActionProp;
  secondAction: ActionProp;
}

interface ThreeActions extends CommonProps {
  type: "threeActions";
  firstAction: ActionProp;
  secondAction: ActionProp;
  thirdAction: ActionProp;
}

export type HeaderSecondLevel = Base | OneAction | TwoActions | ThreeActions;

type ScrollValues = {
  contentOffsetY: Animated.SharedValue<number>;
  triggerOffset: number;
};

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
export const HeaderSecondLevel = (props: HeaderSecondLevel) => {
  const {
    scrollValues,
    goBack,
    backAccessibilityLabel,
    title,
    type,
    transparent = false,
    testID
  } = props;
  const { isExperimental } = useIOExperimentalDesign();
  const insets = useSafeAreaInsets();

  const headerWrapperAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: transparent
      ? interpolateColor(
          scrollValues.contentOffsetY.value,
          [0, scrollValues.triggerOffset],
          [headerTransparent, IOColors[HEADER_BG_COLOR]]
        )
      : undefined,
    borderColor: interpolateColor(
      scrollValues.contentOffsetY.value,
      [0, scrollValues.triggerOffset],
      [borderColorDisabled, IOColors["grey-100"]]
    )
  }));

  const titleAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollValues.contentOffsetY.value,
      [0, scrollValues.triggerOffset],
      [0, 1]
    )
  }));

  return (
    <Animated.View
      accessibilityRole="header"
      testID={testID}
      style={[
        { marginTop: insets.top },
        styles.headerInner,
        transparent
          ? { borderBottomWidth: 0 }
          : { backgroundColor: IOColors[HEADER_BG_COLOR] },
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
          <IconButton {...props.firstAction} color="neutral" />
        ) : (
          <HSpacer size={iconBtnSizeSmall as IOSpacer} />
        )}
        {(type === "twoActions" || type === "threeActions") && (
          <>
            {/* Ideally, with the "gap" flex property,
              we can get rid of these ugly constructs */}
            <HSpacer size={16} />
            <IconButton {...props.secondAction} color="neutral" />
          </>
        )}
        {type === "threeActions" && (
          <>
            {/* Same as above */}
            <HSpacer size={16} />
            <IconButton {...props.thirdAction} color="neutral" />
          </>
        )}
      </View>
    </Animated.View>
  );
};

export default HeaderSecondLevel;
