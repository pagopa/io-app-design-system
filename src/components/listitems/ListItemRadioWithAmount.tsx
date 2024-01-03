import * as React from "react";
import { StyleSheet, View } from "react-native";
import RNReactNativeHapticFeedback from "react-native-haptic-feedback";
import { IOColors, useIOExperimentalDesign } from "../../core";
import { Icon } from "../icons";
import { AnimatedRadio } from "../radio/AnimatedRadio";
import { HSpacer, VSpacer } from "../spacer";
import { H6, LabelSmallAlt } from "../typography";
import { LabelSmall } from "../typography/LabelSmall";
import { PressableListItemBase } from "./PressableListItemsBase";

export type ListItemRadioWithAmountProps = {
  onValueChange?: (newValue: boolean) => void;
  selected?: boolean;
  label: string;
  formattedAmountString: string;
} & (
  | {
      isSuggested?: false;
    }
  | {
      isSuggested: true;
      suggestReason: string;
    }
);
export const ListItemRadioWithAmount = (
  props: ListItemRadioWithAmountProps
) => {
  const [toggleValue, setToggleValue] = React.useState(props.selected ?? false);
  const pressHandler = () => {
    RNReactNativeHapticFeedback.trigger("impactLight");
    setToggleValue(val => !val);
    if (props.onValueChange !== undefined) {
      props.onValueChange(!toggleValue);
    }
  };
  const { isExperimental } = useIOExperimentalDesign();

  const interactiveColor: IOColors = isExperimental ? "blueIO-500" : "blue";
  const suggestColor: IOColors = "hanPurple-500";

  return (
    <PressableListItemBase onPress={pressHandler}>
      <View>
        <LabelSmallAlt>{props.label}</LabelSmallAlt>
        {props.isSuggested && (
          <>
            <VSpacer size={4} />
            <View style={styles.rowCenter}>
              <Icon name="sparkles" size={16} color={suggestColor} />
              <HSpacer size={4} />
              <LabelSmall weight="Regular" color={suggestColor}>
                {props.suggestReason}
              </LabelSmall>
            </View>
          </>
        )}
      </View>
      <View pointerEvents="none" style={{ flexDirection: "row" }}>
        <H6 color={interactiveColor}>{props.formattedAmountString}</H6>
        <HSpacer size={8} />
        <AnimatedRadio checked={props.selected ?? toggleValue} />
      </View>
    </PressableListItemBase>
  );
};

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    alignItems: "center"
  }
});
