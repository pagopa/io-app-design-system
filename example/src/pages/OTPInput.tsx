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
import { RefObject, useCallback, useMemo, useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

const OTP_LENGTH_8 = 8;
const OTP_LENGTH_6 = 6;
const OTP_COMPARE_8 = "12345678";
const OTP_COMPARE_6 = "123456";

type WrapperProps = {
  secret?: boolean;
  validation?: boolean;
  autoFocus?: boolean;
  length?: number;
  otpCompare?: string;
};

const OTPWrapper = ({
  secret = false,
  validation = false,
  autoFocus = false,
  length = OTP_LENGTH_8,
  otpCompare = OTP_COMPARE_8
}: WrapperProps) => {
  const [value, setValue] = useState("");
  const onValueChange = useCallback(
    (v: string) => {
      if (v.length <= length) {
        setValue(v);
      }
    },
    [length]
  );

  const onValidate = useCallback(
    (v: string) => !validation || v === otpCompare,
    [validation, otpCompare]
  );

  return useMemo(
    () => (
      <>
        <OTPInput
          value={value}
          accessibilityLabel={"OTP Input"}
          onValueChange={onValueChange}
          length={length}
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
    [value, onValueChange, secret, onValidate, autoFocus, length]
  );
};

const scrollVerticallyToView = (
  scrollViewRef: RefObject<ScrollView | null>,
  targetViewRef: RefObject<View | null>
) => {
  if (targetViewRef.current && scrollViewRef.current) {
    const nativeScrollRef = scrollViewRef.current.getNativeScrollRef();
    if (nativeScrollRef) {
      targetViewRef.current.measureLayout(
        nativeScrollRef,
        (_: number, y: number) => {
          scrollViewRef.current?.scrollTo({ y, animated: true });
        }
      );
    }
  }
};

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const OTPInputScreen = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const autofocusableOTPViewRef = useRef<View>(null);
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
            <BodySmall>Correct OTP {`${OTP_COMPARE_8}`}</BodySmall>
            <VSpacer />
            <OTPWrapper secret validation />
            <VSpacer />
            <H5>Validation+Secret+length 6</H5>
            <BodySmall>
              Correct OTP:{" "}
              <BodySmall weight="Semibold">{OTP_COMPARE_6}</BodySmall>
            </BodySmall>
            <VSpacer />
            <OTPWrapper
              secret
              validation
              length={OTP_LENGTH_6}
              otpCompare={OTP_COMPARE_6}
            />
            <VSpacer />
            <H5>Autofocus</H5>
            <VSpacer />
            <IOButton
              variant={showAutofocusableOTP ? "solid" : "outline"}
              onPress={() => setShowAutofocusableOTP(!showAutofocusableOTP)}
              label={`${
                showAutofocusableOTP ? "Hide" : "Show"
              } Autofocusable OTP`}
            />
            <VSpacer />
            {showAutofocusableOTP && (
              <View
                ref={autofocusableOTPViewRef}
                onLayout={() =>
                  scrollVerticallyToView(scrollViewRef, autofocusableOTPViewRef)
                }
              >
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
