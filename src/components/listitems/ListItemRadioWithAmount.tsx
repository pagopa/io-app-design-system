import * as React from "react";
import { StyleSheet, View } from "react-native";
import RNReactNativeHapticFeedback from "react-native-haptic-feedback";
import { IOColors, IOSelectionTickVisualParams, useIOTheme } from "../../core";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { Icon } from "../icons";
import { AnimatedRadio } from "../radio/AnimatedRadio";
import { HSpacer, VSpacer } from "../spacer";
import { H6, BodySmall } from "../typography";
import { PressableListItemBase } from "./PressableListItemsBase";

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
  const { dynamicFontScale } = useIOFontDynamicScale();
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
        <BodySmall
          weight="Semibold"
          numberOfLines={1}
          color={theme["textBody-default"]}
        >
          {label}
        </BodySmall>
        {isSuggested && (
          <>
            <VSpacer size={4} />
            <View style={styles.rowCenter}>
              <Icon name="sparkles" size={16} color={suggestColor} />
              <HSpacer size={4} />
              <BodySmall weight="Regular" color={suggestColor}>
                {suggestReason}
              </BodySmall>
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
        <AnimatedRadio
          size={IOSelectionTickVisualParams.size * dynamicFontScale}
          checked={selected ?? toggleValue}
        />
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
