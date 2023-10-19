import * as React from "react";
import { View } from "react-native";
import {
  IOVisualCostants,
  IOStyles,
  VSpacer,
  TextInput,
  TextInputPassword,
  TextInputValidation,
  H4,
  H5
} from "@pagopa/io-app-design-system";
import { Screen } from "../components/Screen";

const InputComponentWrapper = (
  props: Omit<
    React.ComponentProps<typeof TextInput>,
    "value" | "onChangeText"
  > & { value?: string }
) => {
  const [inputValue, setInputValue] = React.useState(props.value ?? "");

  return (
    <>
      <VSpacer />
      <TextInput {...props} value={inputValue} onChangeText={setInputValue} />
      <VSpacer />
    </>
  );
};

const InputValidationComponentWrapper = (
  props: Omit<
    React.ComponentProps<typeof TextInputValidation>,
    "value" | "onChangeText"
  > & { value?: string }
) => {
  const [inputValue, setInputValue] = React.useState(props.value ?? "");

  return (
    <>
      <VSpacer />
      <TextInputValidation
        {...props}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <VSpacer />
    </>
  );
};

const InputPasswordComponentWrapper = (
  props: Omit<
    React.ComponentProps<typeof TextInputPassword>,
    "value" | "onChangeText"
  > & { value?: string }
) => {
  const [inputValue, setInputValue] = React.useState(props.value ?? "");

  return (
    <>
      <VSpacer />
      <TextInputPassword
        {...props}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <VSpacer />
    </>
  );
};
/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const TextInputs = () => (
  <Screen>
    <View
      style={[IOStyles.flex, { paddingTop: IOVisualCostants.appMarginDefault }]}
    >
      <H4>Base input</H4>
      <InputComponentWrapper placeholder={"Base input"} />
      <H5>Base input with value formatted</H5>
      <InputComponentWrapper
        placeholder={"Base input"}
        inputType={"credit-card"}
        bottomMessage="Handles credit card input type"
      />
      <H5>Base input with validation</H5>
      <InputValidationComponentWrapper
        placeholder={"Base input"}
        onValidate={value => value.length > 2}
        bottomMessage="Inserisci almeno 3 caratteri"
      />
      <H5>Base input with validation and error</H5>
      <InputValidationComponentWrapper
        placeholder={"Base input"}
        onValidate={value => value.length > 2}
        bottomMessage="Inserisci almeno 3 caratteri"
        errorMessage="Troppo corto"
      />
      <H5>Base input with icon</H5>
      <InputComponentWrapper icon="amount" placeholder={"Base input"} />
      <H4>Secret input</H4>
      <InputPasswordComponentWrapper placeholder={"Base input"} />
      <H4>Disabled</H4>
      <InputComponentWrapper disabled placeholder={"Base input (Disabled)"} />
      <InputComponentWrapper
        disabled
        placeholder={"Base input (Disabled with value)"}
        value={"Some value"}
      />
      <InputPasswordComponentWrapper
        disabled
        placeholder={"Password input (Disabled)"}
      />
      <InputValidationComponentWrapper
        disabled
        placeholder={"Validation input (Disabled)"}
        onValidate={value => value.length > 2}
      />
      <VSpacer />
    </View>
  </Screen>
);
