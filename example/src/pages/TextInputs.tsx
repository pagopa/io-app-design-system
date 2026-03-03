import {
  H4,
  H5,
  IOVisualCostants,
  TextInput,
  TextInputPassword,
  TextInputValidation,
  TextInputValidationRefProps,
  VSpacer
} from "@pagopa/io-app-design-system";
import { ComponentProps, useRef, useState } from "react";
import { Button, View } from "react-native";
import { Screen } from "../components/Screen";

const InputComponentWrapper = (
  props: Omit<ComponentProps<typeof TextInput>, "value" | "onChangeText"> & {
    value?: string;
  }
) => {
  const [inputValue, setInputValue] = useState(props.value ?? "");

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
    ComponentProps<typeof TextInputValidation>,
    "value" | "onChangeText"
  > & { value?: string }
) => {
  const [inputValue, setInputValue] = useState(props.value ?? "");

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
    ComponentProps<typeof TextInputPassword>,
    "value" | "onChangeText"
  > & { value?: string }
) => {
  const [inputValue, setInputValue] = useState(props.value ?? "");

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

const TextInputValidationOnContinue = (
  props: Omit<
    ComponentProps<typeof TextInputValidation>,
    "value" | "onChangeText"
  > & { value?: string }
) => {
  const textInputRef = useRef<TextInputValidationRefProps>(null);

  const handleContinue = () => {
    textInputRef.current?.validateInput();
  };
  const [inputValue, setInputValue] = useState(props.value ?? "");

  return (
    <>
      <VSpacer />
      <TextInputValidation
        {...props}
        ref={textInputRef}
        value={inputValue}
        onChangeText={setInputValue}
        validationMode="onContinue"
      />
      <Button title="Continue" onPress={handleContinue} />
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
      style={{
        flex: 1,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      <H4>Base input</H4>
      <InputComponentWrapper placeholder={"Base input"} />
      <H5>Base input with autofocus</H5>
      <InputComponentWrapper
        placeholder={"Focused base input"}
        bottomMessage="A normal input, but it focuses on page open!"
        autoFocus
      />
      <H5>Base input with value formatted</H5>
      <InputComponentWrapper
        placeholder={"Base input"}
        inputType={"credit-card"}
        bottomMessage="Handles credit card input type"
      />
      <InputComponentWrapper
        placeholder={"Base input"}
        inputType={"iban"}
        bottomMessage="Handles IBAN input type"
      />
      <InputComponentWrapper
        placeholder={"Input with max length"}
        counterLimit={10}
        inputType="default"
        textInputProps={{ keyboardType: "numeric" }}
        accessibilityAnnounceLimitReached="Hai inserito il numero massimo di caratteri"
        bottomMessage="Max length of 10 characters"
      />
      <H5>Base input with validation</H5>
      <InputValidationComponentWrapper
        placeholder={"Base input"}
        onValidate={value => value.length > 2}
        bottomMessage="Inserisci almeno 3 caratteri"
        errorMessage="Inserisci almeno 3 caratteri"
      />
      <TextInputValidationOnContinue
        placeholder={"Base input"}
        onValidate={value => value.length > 2}
        bottomMessage="Inserisci almeno 3 caratteri"
        errorMessage="Inserisci almeno 3 caratteri"
      />
      <H5>Base input with validation and error</H5>
      <InputValidationComponentWrapper
        placeholder={"Base input"}
        onValidate={value => value.length > 2}
        bottomMessage="Inserisci almeno 3 caratteri"
        errorMessage="Troppo corto"
      />
      <TextInputValidationOnContinue
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
        errorMessage="C'è stato un errore"
      />
      <VSpacer />
    </View>
  </Screen>
);
