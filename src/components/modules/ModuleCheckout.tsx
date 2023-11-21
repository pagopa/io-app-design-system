import * as React from "react";
import { View } from "react-native";
import Placeholder from "rn-placeholder";
import {
  IOColors,
  IOModuleIDPSavedVSpacing,
  IOModuleStyles,
  useIOExperimentalDesign
} from "../../core";
import { IOLogoPaymentType, LogoPayment } from "../logos";
import { VSpacer } from "../spacer";
import { Body, H6 } from "../typography";
import { PressableModuleBase } from "./PressableModuleBase";

type ModuleCheckoutProps = { ctaText: string } & (
  | {
      paymentLogo?: IOLogoPaymentType;
      header: string;
      body: string;
      isLoading?: false;
      onPress?: () => void;
    }
  | {
      isLoading: true;
    }
);

type CtaOnlyProps = { text?: string };

export const ModuleCheckout = (props: ModuleCheckoutProps) => {
  if (props.isLoading) {
    return <LoadingVersion text={props.ctaText} />;
  }
  return (
    <PressableModuleBase onPress={props.onPress}>
      {props.paymentLogo && <LogoPayment name={props.paymentLogo} />}
      <View>
        <H6>{props.header}</H6>
        <Body>{props.body}</Body>
      </View>
      <CTA text={props.ctaText} />
    </PressableModuleBase>
  );
};

const CTA = ({ text }: CtaOnlyProps) => {
  const isExperimental = useIOExperimentalDesign();
  const blue: IOColors = isExperimental ? "blueIO-500" : "blue";

  return (
    <Body color={blue} weight="SemiBold">
      {text}
    </Body>
  );
};

const LoadingVersion = ({ text }: CtaOnlyProps) => (
  <View
    style={[
      IOModuleStyles.button,
      { paddingVertical: IOModuleIDPSavedVSpacing }
    ]}
  >
    <Placeholder.Box animate="fade" radius={8} height={24} width={24} />
    <View>
      <Placeholder.Box animate="fade" radius={8} height={20} width={170} />
      <VSpacer size={8} />
      <Placeholder.Box animate="fade" radius={8} height={16} width={116} />
    </View>
    <CTA text={text} />
  </View>
);
