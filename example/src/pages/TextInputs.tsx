import * as React from "react";
import { View } from "react-native";
import {
  IOVisualCostants,
  IOStyles,
  VSpacer,
  TextInputBase,
  H4,
  H5
} from "@pagopa/io-app-design-system";
import { Screen } from "../components/Screen";

const InputComponentWrapper = (
  props: Omit<
    React.ComponentProps<typeof TextInputBase>,
    "value" | "onChangeText"
  > & { value?: string }
) => {
  const [inputValue, setInputValue] = React.useState(props.value ?? "");

  return (
    <>
      <VSpacer />
      <TextInputBase
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
      <H5>Base input with validation</H5>
      <InputComponentWrapper
        placeholder={"Base input"}
        onValidate={value => value.length > 2}
        helperText="Inserisci almeno 3 caratteri"
      />
      <H5>Base input with validation and error</H5>
      <InputComponentWrapper
        placeholder={"Base input"}
        onValidate={value => value.length > 2}
        helperText="Inserisci almeno 3 caratteri"
        errorMessage="Troppo corto"
      />
      <H5>Base input with icon</H5>
      <InputComponentWrapper icon="amount" placeholder={"Base input"} />
      <H4>Secret input</H4>
      <InputComponentWrapper secretInput placeholder={"Base input"} />
      <H5>Secret input with validation</H5>
      <InputComponentWrapper
        secretInput
        placeholder={"Base input"}
        onValidate={v => v.length > 3}
        errorMessage="Il testo deve avere almeno 4 caratteri"
      />
      <H4>Disabled</H4>
      <InputComponentWrapper disabled placeholder={"Base input (Disabled)"} />
      <InputComponentWrapper
        disabled
        placeholder={"Base input (Disabled with value)"}
        value={"Some value"}
      />
      <VSpacer />
    </View>
  </Screen>
);
