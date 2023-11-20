import * as React from "react";
import { StyleSheet, View } from "react-native";
import RNReactNativeHapticFeedback from "react-native-haptic-feedback";
import { useIOExperimentalDesign } from "../../core";
import { Icon } from "../icons";
import { AnimatedRadio } from "../radio/AnimatedRadio";
import { HSpacer, VSpacer } from "../spacer";
import { H6 } from "../typography";
import { LabelSmall } from "../typography/LabelSmall";
import { PressableListItemBase } from "./PressableListItemsBase";

type ListItemTransactionRadioProps = {
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
export const ListItemTransactionRadio = (
  props: ListItemTransactionRadioProps
) => {
  const [toggleValue, setToggleValue] = React.useState(props.selected ?? false);
  const pressHandler = () => {
    RNReactNativeHapticFeedback.trigger("impactLight");
    setToggleValue(val => !val);
  };
  const isExperimental = useIOExperimentalDesign();
  return (
    <PressableListItemBase onPress={pressHandler}>
      <View>
        <LabelSmall color="black" weight="SemiBold">
          {props.label}
        </LabelSmall>
        {props.isSuggested && (
          <>
            <VSpacer size={4} />
            <View style={styles.rowCenter}>
              <Icon name="doubleSarsFilled" size={16} color="hanPurple-500" />
              <HSpacer size={4} />
              <LabelSmall weight="Regular" color="hanPurple-500">
                {props.suggestReason}
              </LabelSmall>
            </View>
          </>
        )}
      </View>
      <View pointerEvents="none" style={{ flexDirection: "row" }}>
        <H6 color={isExperimental ? "blueIO-500" : "blue"}>
          {props.formattedAmountString}
        </H6>
        <HSpacer size={8} />
        <AnimatedRadio checked={toggleValue} />
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
