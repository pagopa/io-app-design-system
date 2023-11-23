import * as React from "react";
import { Alert, View } from "react-native";
import {
  H1,
  H5,
  IOVisualCostants,
  IOStyles,
  VSpacer,
  NumberPad,
  H3,
  CodeInput,
  ListItemSwitch,
  IOColors
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../components/Screen";

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
      style={[
        IOStyles.flex,
        { paddingVertical: IOVisualCostants.appMarginDefault },
        {
          backgroundColor: blueBackground
            ? IOColors["blueIO-500"]
            : IOColors.white
        }
      ]}
    >
      <Screen>
        <ListItemSwitch
          label="Attiva sfondo blu"
          value={blueBackground}
          onSwitchValueChange={() => setBlueBackground(v => !v)}
        />
        <H1>NumberPad + Code Input</H1>
        <H5>{"Value Typed on the NumberPad component"}</H5>
        <VSpacer />
        <H3>{value}</H3>
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
      </Screen>
    </View>
  );
};
