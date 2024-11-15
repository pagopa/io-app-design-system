import * as React from "react";
import { StyleSheet, View } from "react-native";
import RNReactNativeHapticFeedback from "react-native-haptic-feedback";
import { IOColors, useIOTheme } from "../../core";
import { Icon } from "../icons";
import { AnimatedRadio } from "../radio/AnimatedRadio";
import { HSpacer, VSpacer } from "../spacer";
import { H6, LabelSmall } from "../typography";
import { PressableListItemBase } from "./PressableListItemBase";

export type ListItemRadioWithAmountProps = {
  onValueChange?: (newValue: boolean) => void;
  selected?: boolean;
  label: string;
  formattedAmountString: string;
  accessibilityLabel?: string;
} & (
  | {
      isSuggested?: false;
      suggestReason?: never;
    }
  | {
      isSuggested?: true;
      suggestReason: string;
    }
);
export const ListItemRadioWithAmount = ({
  onValueChange,
  selected,
  label,
  accessibilityLabel,
  isSuggested = false,
  suggestReason,
  formattedAmountString
}: ListItemRadioWithAmountProps) => {
  const [toggleValue, setToggleValue] = React.useState(selected ?? false);

  const pressHandler = () => {
    RNReactNativeHapticFeedback.trigger("impactLight");
    setToggleValue(val => !val);
    if (onValueChange !== undefined) {
      onValueChange(!toggleValue);
    }
  };
  const theme = useIOTheme();

  const suggestColor: IOColors = "hanPurple-500";

  return (
    <PressableListItemBase
      onPress={pressHandler}
      accessibilityRole="radio"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{
        checked: selected ?? toggleValue
      }}
    >
      <View style={{ flexShrink: 1 }}>
        <LabelSmall
          weight="Semibold"
          numberOfLines={1}
          color={theme["textBody-default"]}
        >
          {label}
        </LabelSmall>
        {isSuggested && (
          <>
            <VSpacer size={4} />
            <View style={styles.rowCenter}>
              <Icon name="sparkles" size={16} color={suggestColor} />
              <HSpacer size={4} />
              <LabelSmall weight="Regular" color={suggestColor}>
                {suggestReason}
              </LabelSmall>
            </View>
          </>
        )}
      </View>
      <View
        pointerEvents="none"
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={{ flexDirection: "row" }}
      >
        <H6 color={theme["interactiveElem-default"]}>
          {formattedAmountString}
        </H6>
        <HSpacer size={8} />
        <AnimatedRadio checked={selected ?? toggleValue} />
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
