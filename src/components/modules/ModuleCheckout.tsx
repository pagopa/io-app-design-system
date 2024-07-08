import * as React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageURISource,
  StyleSheet,
  View
} from "react-native";
import Placeholder from "rn-placeholder";
import {
  IOSelectionListItemVisualParams,
  IOSpacingScale,
  useIOTheme
} from "../../core";
import { ButtonLink } from "../buttons";
import { IOLogoPaymentType, LogoPayment } from "../logos";
import { HStack, VStack } from "../stack";
import { H6, LabelSmall } from "../typography";
import { ModuleStatic } from "./ModuleStatic";
import { PressableModuleBase } from "./PressableModuleBase";

type LoadingProps = {
  isLoading: true;
};

type ImageProps =
  | { paymentLogo: IOLogoPaymentType; image?: never }
  | { paymentLogo?: never; image: ImageURISource | ImageSourcePropType }
  | { paymentLogo?: never; image?: never };

type BaseProps = {
  isLoading?: false;
  paymentLogo?: IOLogoPaymentType;
  title: string;
  subtitle?: string;
  ctaText?: string;
  onPress: () => void;
} & ImageProps;

export type ModuleCheckoutProps = LoadingProps | BaseProps;

export const ModuleCheckout = (props: ModuleCheckoutProps) => {
  const theme = useIOTheme();

  const imageMargin: IOSpacingScale = 12;

  if (props.isLoading) {
    return <ModuleCheckoutSkeleton />;
  }

  const { paymentLogo, image, title, subtitle, ctaText, onPress } = props;

  const paymentLogoComponent = paymentLogo && (
    <LogoPayment name={paymentLogo} />
  );

  const imageComponent = image && (
    <Image
      source={image}
      style={styles.image}
      accessibilityIgnoresInvertColors={true}
    />
  );

  const ModuleBaseContent = () => (
    <HStack space={imageMargin} style={{ alignItems: "center", flexShrink: 1 }}>
      {/* Graphical elements */}
      {paymentLogoComponent ?? imageComponent}

      <View style={{ flexGrow: 1, flexShrink: 1 }}>
        <H6 color={theme["textBody-default"]}>{title}</H6>
        {subtitle && (
          <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
            {subtitle}
          </LabelSmall>
        )}
      </View>
    </HStack>
  );

  return ctaText ? (
    <PressableModuleBase onPress={onPress}>
      <HStack space={4} style={{ alignItems: "center" }}>
        <ModuleBaseContent />
        <View pointerEvents="none">
          <ButtonLink label={ctaText} onPress={() => null} />
        </View>
      </HStack>
    </PressableModuleBase>
  ) : (
    <ModuleStatic>
      <ModuleBaseContent />
    </ModuleStatic>
  );
};

const ModuleCheckoutSkeleton = () => (
  <ModuleStatic
    startBlock={
      <HStack space={8} style={{ alignItems: "center" }}>
        <Placeholder.Box animate="fade" radius={8} height={24} width={24} />
        <VStack space={8}>
          <Placeholder.Box animate="fade" radius={8} height={20} width={170} />
          <Placeholder.Box animate="fade" radius={8} height={16} width={110} />
        </VStack>
      </HStack>
    }
    endBlock={
      <Placeholder.Box animate="fade" width={64} height={16} radius={8} />
    }
  />
);

const styles = StyleSheet.create({
  image: {
    width: IOSelectionListItemVisualParams.iconSize,
    height: IOSelectionListItemVisualParams.iconSize,
    resizeMode: "contain"
  }
});
