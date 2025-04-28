import {
  BodySmall,
  ContentWrapper,
  H1,
  H5,
  IOButton,
  OTPInput,
  VSpacer
} from "@pagopa/io-app-design-system";
import { useHeaderHeight } from "@react-navigation/elements";
import * as React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

const OTP_LENGTH = 8;
const OTP_COMPARE = "12345678";

type WrapperProps = {
  secret?: boolean;
  validation?: boolean;
  autoFocus?: boolean;
};

const OTPWrapper = ({
  secret = false,
  validation = false,
  autoFocus = false
}: WrapperProps) => {
  const [value, setValue] = useState("");
  const onValueChange = React.useCallback((v: string) => {
    if (v.length <= OTP_LENGTH) {
      setValue(v);
    }
  }, []);

  const onValidate = React.useCallback(
    (v: string) => !validation || v === OTP_COMPARE,
    [validation]
  );

  return React.useMemo(
    () => (
      <>
        <OTPInput
          value={value}
          accessibilityLabel={"OTP Input"}
          onValueChange={onValueChange}
          length={OTP_LENGTH}
          secret={secret}
          onValidate={onValidate}
          errorMessage={"Wrong OTP"}
          autoFocus={autoFocus}
        />
        <VSpacer />
        <IOButton
          variant="solid"
          onPress={() => setValue("")}
          label={"Pulisci valore"}
        />
      </>
    ),
    [value, onValueChange, secret, onValidate, autoFocus]
  );
};

const scrollVerticallyToView = (
  scrollViewRef: React.RefObject<ScrollView>,
  targetViewRef: React.RefObject<View>
) => {
  if (targetViewRef.current && scrollViewRef.current) {
    targetViewRef.current.measureLayout(
      scrollViewRef.current.getInnerViewNode(),
      (_: number, y: number) => {
        scrollViewRef.current?.scrollTo({ y, animated: true });
      }
    );
  }
};

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const OTPInputScreen = () => {
  const scrollViewRef = React.useRef<ScrollView>(null);
  const autofocusableOTPViewRef = React.useRef<View>(null);
  const [showAutofocusableOTP, setShowAutofocusableOTP] = useState(false);
  const headerHeight = useHeaderHeight();

  return (
    <View
      style={{
        flexGrow: 1
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.select({
          ios: "padding",
          android: undefined
        })}
        contentContainerStyle={{ flex: 1, paddingBottom: 70 }}
        style={{ flex: 1 }}
        keyboardVerticalOffset={headerHeight}
      >
        <ScrollView ref={scrollViewRef}>
          <ContentWrapper>
            <View style={{ alignItems: "center" }}>
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
            <BodySmall>Correct OTP {`${OTP_COMPARE}`}</BodySmall>
            <VSpacer />
            <OTPWrapper secret validation />
            <VSpacer />
            <H5>Autofocus</H5>
            <VSpacer />
            <IOButton
              variant={showAutofocusableOTP ? "solid" : "outline"}
              onPress={() => {
                setShowAutofocusableOTP(!showAutofocusableOTP);
                setTimeout(() => {
                  scrollVerticallyToView(
                    scrollViewRef,
                    autofocusableOTPViewRef
                  );
                }, 100);
              }}
              label={`${
                showAutofocusableOTP ? "Hide" : "Show"
              } Autofocusable OTP`}
            />
            <VSpacer />
            {showAutofocusableOTP && (
              <View ref={autofocusableOTPViewRef}>
                <OTPWrapper autoFocus />
                <VSpacer />
              </View>
            )}
          </ContentWrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
