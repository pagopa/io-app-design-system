import * as React from "react";
import { ComponentProps, PropsWithChildren } from "react";
import { ColorValue, LayoutChangeEvent, StyleSheet, View } from "react-native";
import {
  IOColors,
  IOSpacer,
  IOSpacing,
  IOSpacingScale,
  IOVisualCostants,
  useIOTheme,
  useIOThemeContext
} from "../../core";
import { WithTestID } from "../../utils/types";
import { Button } from "../buttons";
import { HSpacer } from "../spacer";
import { useBottomMargins } from "./hooks/useBottomMargins";

type ButtonBlockProps = Omit<
  ComponentProps<typeof Button>,
  "variant" | "fullWidth" | "numberOfLines" | "textAlign"
>;

export type FooterActionsInlineMeasurements = {
  /* Height of the safe bottom area. It includes:
     - Margin between screen content
       and actions (contentEndMargin)
     - Actions block height
     - Eventual safe area margin (bottomMargin)
     This is the total bottom padding that needs
     to be applied to the ScrollView.
  */
  safeBottomAreaHeight: number;
};

type FooterActionsInline = WithTestID<
  PropsWithChildren<{
    startAction: ButtonBlockProps;
    endAction: ButtonBlockProps;
    onMeasure?: (measurements: FooterActionsInlineMeasurements) => void;
    /* Don't include safe area insets */
    excludeSafeAreaMargins?: boolean;
    /* Fixed at the bottom of the screen */
    fixed?: boolean;
  }>
>;

/* Margin between ButtonSolid and ButtonOutline */
const spaceBetweenActions: IOSpacer = 16;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    width: "100%",
    flexShrink: 0
  },
  buttonWrapper: {
    flex: 1
  },
  blockShadow: {
    shadowColor: IOColors.black,
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    elevation: 10 // Prop supported on Android only
  }
});

export const FooterActionsInline = ({
  startAction,
  endAction,
  excludeSafeAreaMargins = false,
  fixed = true,
  onMeasure,
  testID
}: FooterActionsInline) => {
  const theme = useIOTheme();
  const { themeType } = useIOThemeContext();

  const { bottomMargin } = useBottomMargins(false, excludeSafeAreaMargins);

  /* Top padding applied above the actions */
  const topSpacingValue: IOSpacingScale = 16;
  const topSpacing = fixed ? topSpacingValue : 0;

  /* Background color should be app main background
     (both light and dark themes) */
  const HEADER_BG_COLOR: ColorValue = IOColors[theme["appBackground-primary"]];

  const getActionBlockMeasurements = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    /* Height of the safe bottom area, applied to the ScrollView:
       Actions + Screen end margin */
    const safeBottomAreaHeight =
      bottomMargin + height + IOSpacing.screenEndMargin;
    onMeasure?.({ safeBottomAreaHeight });
  };

  return (
    <View
      style={[
        {
          width: "100%",
          paddingBottom: bottomMargin
        },
        fixed
          ? {
              position: "absolute",
              bottom: 0,
              backgroundColor: HEADER_BG_COLOR
            }
          : { marginTop: IOSpacing.screenEndMargin },
        /* Apply shadow only on light theme OR if fixed */
        fixed || themeType === "light" ? styles.blockShadow : {},
        /* Apply bottom border only on dark theme */
        themeType === "dark" && {
          borderTopColor: IOColors[theme["divider-bottomBar"]],
          borderTopWidth: 1
        }
      ]}
      testID={testID}
    >
      <View
        style={[styles.buttonContainer, { paddingTop: topSpacing }]}
        onLayout={getActionBlockMeasurements}
        pointerEvents="box-none"
      >
        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonWrapper}>
            <Button variant="outline" fullWidth {...startAction} />
          </View>
          <HSpacer size={spaceBetweenActions} />
          <View style={styles.buttonWrapper}>
            <Button variant="solid" fullWidth {...endAction} />
          </View>
        </View>
      </View>
    </View>
  );
};
