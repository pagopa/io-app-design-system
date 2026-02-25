import {
  BodySmall,
  CodeInput,
  ContentWrapper,
  H1,
  H5,
  IOColors,
  IOVisualCostants,
  ListItemSwitch,
  NumberPad,
  VSpacer,
  useIOTheme
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";
import  { useCallback, useEffect, useState } from "react";
import { Alert, View } from "react-native";

const PIN_LENGTH = 6;
/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const NumberPadScreen = () => {
  const theme = useIOTheme();
  const navigation = useNavigation();

  const [value, setValue] = useState("");
  const [blueBackground, setBlueBackground] = useState(false);

  const onNumberPress = useCallback((v: number) => {
    setValue(prev => (prev.length < PIN_LENGTH ? `${prev}${v}` : prev));
  }, []);

  const onDeletePress = useCallback(() => {
    setValue(prev => prev.slice(0, -1));
  }, []);

  const onBiometricPress = useCallback(() => Alert.alert("biometric"), []);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: blueBackground
          ? IOColors[theme["appBackground-accent"]]
          : IOColors[theme["appBackground-primary"]]
      }
    });
  }, [blueBackground, navigation, theme]);

  return (
    <View
      style={{
        flexGrow: 1,
        paddingVertical: IOVisualCostants.appMarginDefault,
        backgroundColor: blueBackground
          ? IOColors[theme["appBackground-accent"]]
          : IOColors[theme["appBackground-primary"]]
      }}
    >
      <ContentWrapper>
        <ListItemSwitch
          label="Attiva sfondo blu"
          value={blueBackground}
          onSwitchValueChange={() => setBlueBackground(v => !v)}
        />
        <View style={{ alignItems: "center" }}>
          <H1>NumberPad + Code Input</H1>
          <H5>{"Value Typed on the NumberPad component"}</H5>
          <VSpacer />

          <BodySmall
            weight="Semibold"
            color={blueBackground ? "white" : "black"}
          >
            {value}
          </BodySmall>
        </View>
        <VSpacer />
        <CodeInput
          value={value}
          length={PIN_LENGTH}
          variant={blueBackground ? "primary" : "neutral"}
          onValueChange={setValue}
          onValidate={v => v === "123456"}
        />
        <VSpacer size={48} />
        <NumberPad
          deleteAccessibilityLabel="Delete"
          onNumberPress={onNumberPress}
          onDeletePress={onDeletePress}
          variant={blueBackground ? "primary" : "neutral"}
          biometricType="FACE_ID"
          biometricAccessibilityLabel="Face ID"
          onBiometricPress={onBiometricPress}
        />
      </ContentWrapper>
    </View>
  );
};
