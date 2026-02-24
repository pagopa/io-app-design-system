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
import { useIsFocused } from "@react-navigation/native";
import * as React from "react";
import { Button, View } from "react-native";
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

const TextInputValidationOnContinue = (
  props: Omit<
    React.ComponentProps<typeof TextInputValidation>,
    "value" | "onChangeText"
  > & { value?: string }
) => {
  const textInputRef = React.useRef<TextInputValidationRefProps>(null);

  const handleContinue = () => {
    textInputRef.current?.validateInput();
  };
  const [inputValue, setInputValue] = React.useState(props.value ?? "");

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

export const TextInputs = () => {
  const hasFocused = React.useRef(false);
  const isFocused = useIsFocused();

  const textInputRef =
    React.useRef<React.ComponentRef<typeof InputComponentWrapper>>(null);
  // Workaround to trigger autofocus on the input,
  // since autoFocus prop is not working due to this bug
  // https://github.com/react-navigation/react-navigation/issues/11643
  React.useEffect(() => {
    if (isFocused && !hasFocused.current) {
      // Small delay to let the native view hierarchy catch up
      const timer = setTimeout(() => {
        if (textInputRef.current && !hasFocused.current) {
          textInputRef.current.focus();
          // eslint-disable-next-line functional/immutable-data
          hasFocused.current = true;
        }
      }, 500);
      return () => clearTimeout(timer);
    }

    // Reset the lock when leaving the screen
    if (!isFocused) {
      // eslint-disable-next-line functional/immutable-data
      hasFocused.current = false;
    }
  }, [isFocused]);

  return (
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
          ref={textInputRef}
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
};
