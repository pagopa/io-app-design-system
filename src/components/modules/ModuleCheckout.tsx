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
import { HSpacer, VSpacer } from "../spacer";
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

  if (props.isLoading) {
    return <ModuleCheckoutSkeleton />;
  }

  const { paymentLogo, image, title, subtitle, ctaText, onPress } = props;

  const imageComponent = (
    <>
      {paymentLogo && (
        <View style={styles.imageWrapper}>
          <LogoPayment name={paymentLogo} />
        </View>
      )}
      {image && (
        <Image
          source={image}
          style={[styles.imageWrapper, styles.image]}
          accessibilityIgnoresInvertColors={true}
        />
      )}
    </>
  );

  const ModuleBaseContent = () => (
    <>
      {imageComponent}
      <View style={styles.content}>
        <H6 color={theme["textBody-default"]}>{title}</H6>
        {subtitle && (
          <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
            {subtitle}
          </LabelSmall>
        )}
      </View>
    </>
  );

  return ctaText ? (
    <PressableModuleBase onPress={onPress}>
      <ModuleBaseContent />
      <HSpacer size={4} />
      <View pointerEvents="none">
        <ButtonLink label={ctaText} onPress={() => null} />
      </View>
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
      <React.Fragment>
        {/* Rewrite it using HStack and VStack */}
        <Placeholder.Box animate="fade" radius={8} height={24} width={24} />
        <HSpacer size={8} />
        <View>
          <Placeholder.Box animate="fade" radius={8} height={20} width={170} />
          <VSpacer size={8} />
          <Placeholder.Box animate="fade" radius={8} height={16} width={116} />
        </View>
      </React.Fragment>
    }
    endBlock={
      <Placeholder.Box animate="fade" width={64} height={16} radius={8} />
    }
  />
);

const imageMarginRight: IOSpacingScale = 12;

const styles = StyleSheet.create({
  imageWrapper: {
    marginRight: imageMarginRight
  },
  image: {
    width: IOSelectionListItemVisualParams.iconSize,
    height: IOSelectionListItemVisualParams.iconSize,
    resizeMode: "contain"
  },
  content: {
    flexGrow: 1,
    flexShrink: 1
  }
});
