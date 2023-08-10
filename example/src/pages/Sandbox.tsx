import * as React from "react";
import { View } from "react-native";
import {
  H1,
  H5,
  IOVisualCostants,
  IOStyles,
  VSpacer,
  TextInputBase
} from "@pagopa/io-app-design-system";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const Sandbox = () => {
  const [value, onChangeText] = React.useState("");
  const [secondValue, onChangeSecondText] = React.useState("");
  return (
    <Screen>
      <View
        style={[
          IOStyles.flex,
          { paddingTop: IOVisualCostants.appMarginDefault }
        ]}
      >
        <H1>Sandbox</H1>
        <H5>{"Insert here the component you're willing to test"}</H5>
        <VSpacer />
        {/* Insert here the component you're willing to test */}
        <TextInputBase
          placeholder={"Text (disabled)"}
          disabled={true}
          value={value}
          onChangeText={onChangeText}
        />
        {/* <VSpacer />
        <TextInputBase
          placeholder={"Text"}
          value={secondValue}
          onChangeText={onChangeSecondText}
        /> */}
        <VSpacer />
        <TextInputBase
          placeholder={"Disabled with Value (disabled)"}
          disabled={true}
          value={"Some Value"}
          onChangeText={onChangeText}
        />
        <VSpacer />
        <TextInputBase
          icon="amount"
          secretInput={true}
          placeholder={"Text"}
          value={secondValue}
          onChangeText={onChangeSecondText}
        />
        <VSpacer />
        {/* <TextInputBase
          helperText="This is a helper text"
          placeholder={"Text"}
          value={secondValue}
          onChangeText={onChangeSecondText}
        /> */}
        {/* <VSpacer />
        <TextInputBase
          helperText="This is a helper text"
          counterLimit={15}
          placeholder={"Text"}
          value={secondValue}
          onChangeText={onChangeSecondText}
        /> */}
      </View>
    </Screen>
  );
};
