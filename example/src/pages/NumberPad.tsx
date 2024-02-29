import * as React from "react";
import { Alert, View } from "react-native";
import {
  H1,
  H5,
  IOVisualCostants,
  IOStyles,
  VSpacer,
  NumberPad,
  CodeInput,
  ListItemSwitch,
  IOColors,
  LabelSmallAlt
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";

const PIN_LENGTH = 6;
/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const NumberPadScreen = () => {
  const [value, setValue] = React.useState("");
  const [blueBackground, setBlueBackground] = React.useState(false);

  const navigation = useNavigation();

  const onValueChange = (v: string) => {
    if (v.length <= PIN_LENGTH) {
      setValue(v);
    }
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: blueBackground
          ? IOColors["blueIO-500"]
          : IOColors.white
      }
    });
  }, [blueBackground, navigation]);
  return (
    <View
      style={{
        flexGrow: 1,
        paddingVertical: IOVisualCostants.appMarginDefault,
        backgroundColor: blueBackground
          ? IOColors["blueIO-500"]
          : IOColors.white
      }}
    >
      <ListItemSwitch
        label="Attiva sfondo blu"
        value={blueBackground}
        onSwitchValueChange={() => setBlueBackground(v => !v)}
      />
      <View style={IOStyles.alignCenter}>
        <H1>NumberPad + Code Input</H1>
        <H5>{"Value Typed on the NumberPad component"}</H5>
        <VSpacer />

        <LabelSmallAlt color={blueBackground ? "white" : "black"}>
          {value}
        </LabelSmallAlt>
      </View>
      <VSpacer />
      <CodeInput
        value={value}
        length={PIN_LENGTH}
        variant={blueBackground ? "light" : "dark"}
        onValueChange={onValueChange}
        onValidate={v => v === "123456"}
      />
      <VSpacer size={48} />
      <NumberPad
        value={value}
        deleteAccessibilityLabel="Delete"
        onValueChange={onValueChange}
        variant={blueBackground ? "dark" : "light"}
        biometricType="FACE_ID"
        biometricAccessibilityLabel="Face ID"
        onBiometricPress={() => Alert.alert("biometric")}
      />
    </View>
  );
};
