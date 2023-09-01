import * as React from "react";

import { StyleSheet, View } from "react-native";
import { IOStyles, IOVisualCostants } from "../../core";
import { BlockButtons, BlockButtonsProps } from "./BlockButtons";

// TODO: Refactor with an unique component like `FooterTopShadow` after bonus vacanze
const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: "100%",
    // This Magic number is an heritage of the app code-base, this component should be removed in favor of `GradientBottomAction`
    marginTop: -50,
    paddingTop: 50,
    position: "absolute",
    bottom: 0
  }
});

/**
 * Implements a component that show buttons as sticky footer
 * It can include 1, 2 or 3 buttons. If they are 2, they can have the inlineHalf  or the inlineOneThird style
 */
export const FooterWithButtons = (props: BlockButtonsProps) => (
  <View
    style={styles.container}
    accessible={props.accessible}
    pointerEvents={"box-none"}
    testID="FooterWithButtons"
  >
    <View style={IOStyles.footer}>
      <BlockButtons {...props} />
    </View>
  </View>
);

export default FooterWithButtons;
