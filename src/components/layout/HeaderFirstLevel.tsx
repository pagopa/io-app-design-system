import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WithTestID } from "../../utils/types";
import { IOStyles, IOVisualCostants, IOColors } from "../../core";
import { H3 } from "../typography";
import { HSpacer } from "../spacer";
import { ActionProp } from "./common";

type CommonProps = WithTestID<{
  title: string;
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

export type HeaderFirstLevel = Base | OneAction | TwoActions | ThreeActions;

const HEADER_BG_COLOR: IOColors = "white";

const styles = StyleSheet.create({
  headerInner: {
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    height: IOVisualCostants.headerHeight,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export const HeaderFirstLevel = (props: HeaderFirstLevel) => {
  const { title, type, testID } = props;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: IOColors[HEADER_BG_COLOR]
      }}
      accessibilityRole="header"
      testID={testID}
    >
      <View style={styles.headerInner}>
        <H3 style={{ flexShrink: 1 }} numberOfLines={1}>
          {title}
        </H3>
        <View style={[IOStyles.row, { flexShrink: 0 }]}>
          {type !== "base" && props.firstAction}
          {(type === "twoActions" || type === "threeActions") && (
            <>
              {/* Ideally, with the "gap" flex property,
              we can get rid of these ugly constructs */}
              <HSpacer size={16} />
              {props.secondAction}
            </>
          )}
          {type === "threeActions" && (
            <>
              {/* Same as above */}
              <HSpacer size={16} />
              {props.thirdAction}
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default HeaderFirstLevel;
