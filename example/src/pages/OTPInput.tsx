import * as React from "react";
import { View } from "react-native";
import {
  H1,
  H5,
  IOStyles,
  VSpacer,
  OTPInput,
  LabelSmall,
  ButtonSolid
} from "@pagopa/io-app-design-system";
import { useState } from "react";
import { Screen } from "../components/Screen";

const OTP_LENGTH = 8;
const OTP_COMPARE = "12345678";

type WrapperProps = {
  secret?: boolean;
  validation?: boolean;
};

const OTPWrapper = ({ secret = false, validation = false }: WrapperProps) => {
  const [value, setValue] = useState("");
  const onValueChange = (v: string) => {
    if (v.length <= OTP_LENGTH) {
      setValue(v);
    }
  };

  const onValidate = (v: string) => !validation || v === OTP_COMPARE;

  return (
    <>
      <OTPInput
        value={value}
        accessibilityLabel={"OTP Input"}
        onValueChange={onValueChange}
        length={OTP_LENGTH}
        secret={secret}
        onValidate={onValidate}
        errorMessage={"Wrong OTP"}
      />
      <VSpacer />
      <ButtonSolid onPress={() => setValue("")} label={"Pulisci valore"} />
    </>
  );
};
/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const OTPInputScreen = () => (
  <View
    style={{
      flexGrow: 1
    }}
  >
    <Screen>
      <View style={IOStyles.alignCenter}>
        <H1>OTP Input</H1>
      </View>
      <VSpacer />
      <H5>Default</H5>
      <VSpacer />
      <OTPWrapper />
      <VSpacer />
      <H5>Secret</H5>
      <VSpacer />
      <OTPWrapper secret />
      <VSpacer />
      <H5>Validation+Secret</H5>
      <LabelSmall>Correct OTP {`${OTP_COMPARE}`}</LabelSmall>
      <VSpacer />
      <OTPWrapper secret validation />
    </Screen>
  </View>
);
