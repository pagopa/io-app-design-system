import * as React from "react";
import { StyleSheet, View } from "react-native";
import Placeholder from "rn-placeholder";
import {
  IOModuleStyles,
  IOSpacingScale,
  IOStyles,
  useIOTheme
} from "../../core";
import { ButtonLink } from "../buttons";
import { IOLogoPaymentType, LogoPayment } from "../logos";
import { HSpacer, VSpacer } from "../spacer";
import { H6, LabelSmall } from "../typography";
import { PressableModuleBase } from "./PressableModuleBase";

// ---------------- types ----------------

type ModuleCheckoutPartialProps =
  | {
      isLoading?: false;
      paymentLogo?: IOLogoPaymentType;
      title: string;
      subtitle: string;
      onPress: () => void;
    }
  | {
      isLoading: true;
      paymentLogo?: never;
      title?: never;
      subtitle?: never;
      onPress?: never;
    };

export type ModuleCheckoutProps = ModuleCheckoutPartialProps & {
  ctaText?: string;
};

type CtaOnlyProps = { text?: string };

// ---------------- component ----------------

export const ModuleCheckout = (props: ModuleCheckoutProps) => {
  const theme = useIOTheme();

  if (props.isLoading) {
    return <LoadingVersion text={props.ctaText} />;
  }

  const paymentLogoEndMargin: IOSpacingScale = 12;

  const ModuleBaseContent = () => (
    <View style={styles.rowCenter}>
      {/*
          we don't want to let the `space-between`
          handle spacing for the logo/text section,
          so we use a row and a marginEnd on the logo
        */}
      {props.paymentLogo && (
        <View style={{ marginEnd: paymentLogoEndMargin }}>
          <LogoPayment name={props.paymentLogo} />
        </View>
      )}
      <View style={IOStyles.flex}>
        <H6>{props.title}</H6>
        <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
          {props.subtitle}
        </LabelSmall>
      </View>
    </View>
  );

  if (props.ctaText) {
    return (
      <PressableModuleBase onPress={props.onPress}>
        <ModuleBaseContent />
        {props.ctaText && <CTA text={props.ctaText} />}
      </PressableModuleBase>
    );
  }

  return <View style={IOModuleStyles.button}>{ModuleBaseContent}</View>;
};

// ---------------- sub-components----------------

const CTA = ({ text }: CtaOnlyProps) => (
  <View pointerEvents="none">
    <ButtonLink
      label={text ?? ""}
      accessibilityLabel={text}
      onPress={() => null}
    />
  </View>
);

const LoadingVersion = ({ text }: CtaOnlyProps) => (
  <View style={IOModuleStyles.button}>
    <View style={styles.rowCenter}>
      <Placeholder.Box animate="fade" radius={8} height={24} width={24} />
      <HSpacer size={8} />
      <View>
        <Placeholder.Box animate="fade" radius={8} height={20} width={170} />
        <VSpacer size={8} />
        <Placeholder.Box animate="fade" radius={8} height={16} width={116} />
      </View>
    </View>
    <CTA text={text} />
  </View>
);

// ---------------- styles ----------------

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  }
});
