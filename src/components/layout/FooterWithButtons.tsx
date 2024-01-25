import * as React from "react";

import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IOColors, IOSpacingScale, IOVisualCostants } from "../../core";
import { BlockButtons, BlockButtonsProps } from "./BlockButtons";

type Props = BlockButtonsProps & {
  sticky?: boolean;
};

// TODO: Refactor with an unique component like `FooterTopShadow` after bonus vacanze
const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: "100%",
    // This Magic number is an heritage of the app code-base, this component should be removed in favor of `GradientBottomAction`
    marginTop: -50,
    paddingTop: 50
  },
  sticky: {
    position: "absolute",
    bottom: 0
  },
  footerShadow: {
    backgroundColor: IOColors.white,
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    // iOS shadow
    shadowColor: IOColors.black,
    shadowOffset: {
      width: 0,
      height: 50
    },
    shadowOpacity: 0.5,
    shadowRadius: 37,
    elevation: 20 // Prop supported on Android only
  }
});

const verticalSpacing: IOSpacingScale = 16;

/**
 * Implements a component that show buttons as sticky footer
 * It can include 1, 2 or 3 buttons. If they are 2, they can have the inlineHalf  or the inlineOneThird style
 */
export const FooterWithButtons = ({ sticky = false, ...rest }: Props) => {
  const insets = useSafeAreaInsets();

  /* Check if the iPhone bottom handle is present.
  If not add a default margin to prevent the
  button from sticking to the bottom. */
  const bottomMargin: number = useMemo(
    () => (insets.bottom === 0 ? verticalSpacing : insets.bottom),
    [insets]
  );

  return (
    <View
      style={{ ...styles.container, ...(sticky ? styles.sticky : {}) }}
      accessible={rest.accessible}
      pointerEvents={"box-none"}
      testID="FooterWithButtons"
    >
      <View
        style={[
          styles.footerShadow,
          { paddingBottom: bottomMargin, paddingTop: verticalSpacing }
        ]}
      >
        <BlockButtons {...rest} />
      </View>
    </View>
  );
};

export default FooterWithButtons;
