import {
  CodeInput,
  ContentWrapper,
  H1,
  H5,
  IOColors,
  IOStyles,
  IOVisualCostants,
  LabelSmallAlt,
  ListItemSwitch,
  NumberPad,
  VSpacer,
  useIOTheme
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
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

  const onPinChange = useCallback((v: number) => {
    setValue((prev) => prev.length < PIN_LENGTH ? `${prev}${v}` : prev);
  }, []);

  const onDeletePress = useCallback(() => {
    setValue((prev) => prev.slice(0, -1));
  }, []);

  const onBiometricPress = useCallback(() => Alert.alert("biometric"),[]);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: blueBackground
          ? IOColors[theme["appBackground-accent"]]
          : IOColors.white
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
          : IOColors.white
      }}
    >
      <ContentWrapper>
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
          onValueChange={setValue}
          onValidate={v => v === "123456"}
        />
        <VSpacer size={48} />
        <NumberPad
          deleteAccessibilityLabel="Delete"
          onValueChange={onPinChange}
          onDeletePress={onDeletePress}
          variant={blueBackground ? "dark" : "light"}
          biometricType="FACE_ID"
          biometricAccessibilityLabel="Face ID"
          onBiometricPress={onBiometricPress}
        />
      </ContentWrapper>
    </View>
  );
};
