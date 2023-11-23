import * as React from "react";
import { StyleSheet, View } from "react-native";
import Placeholder from "rn-placeholder";
import { IOModuleStyles, IOSpacingScale, useIOTheme } from "../../core";
import { ButtonLink } from "../buttons";
import { IOLogoPaymentType, LogoPayment } from "../logos";
import { HSpacer, VSpacer } from "../spacer";
import { H6, LabelSmall } from "../typography";
import { PressableModuleBase } from "./PressableModuleBase";

// ---------------- types ----------------

export type ModuleCheckoutProps = { ctaText: string } & (
  | {
      paymentLogo?: IOLogoPaymentType;
      title: string;
      subtitle: string;
      isLoading?: false;
      onPress?: () => void;
    }
  | {
      isLoading: true;
    }
);

type CtaOnlyProps = { text?: string };

// ---------------- component ----------------

export const ModuleCheckout = (props: ModuleCheckoutProps) => {
  const theme = useIOTheme();

  if (props.isLoading) {
    return <LoadingVersion text={props.ctaText} />;
  }

  const paymentLogoEndMargin: IOSpacingScale = 12;

  return (
    <PressableModuleBase onPress={props.onPress}>
      {/*
        we don't want to let the `space-between`
        handle spacing for the logo/text section,
        so we use a row and a marginEnd on the logo
      */}
      <View style={styles.rowCenter}>
        {props.paymentLogo && (
          <View style={{ marginEnd: paymentLogoEndMargin }}>
            <LogoPayment name={props.paymentLogo} />
          </View>
        )}
        <View>
          <H6>{props.title}</H6>
          <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
            {props.subtitle}
          </LabelSmall>
        </View>
      </View>
      <CTA text={props.ctaText} />
    </PressableModuleBase>
  );
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
    alignItems: "center"
  }
});
