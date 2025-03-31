import {
  Banner,
  BodyProps,
  ComposedBodyFromArray,
  FeatureInfo,
  H2,
  IOPictogramsBleed,
  IOVisualCostants,
  VSpacer,
  VStack,
  WithTestID,
  BannerErrorState
} from "@pagopa/io-app-design-system";
import React from "react";
import { Alert, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";

const onLinkPress = () => {
  Alert.alert("Alert", "Action triggered");
};

const onClose = () => {
  Alert.alert("Alert", "Component dismissed");
};

type BannerProps = WithTestID<{
  size: "big" | "small";
  color: "neutral" | "turquoise";
  pictogramName: IOPictogramsBleed;
  viewRef: React.RefObject<View>;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}>;

const bannerBackgroundColours: Array<BannerProps["color"]> = [
  "neutral",
  "turquoise"
];

export const DSAdvice = () => (
  <Screen>
    {renderFeatureInfo()}

    <VSpacer size={24} />

    {renderBannerErrorState()}

    <VSpacer size={24} />

    {renderBanner()}

    <VSpacer size={40} />
  </Screen>
);

const renderFeatureInfo = () => {
  const composedBody: Array<BodyProps> = [
    {
      text: "Questa è la prima parte del testo. "
    },
    {
      text: "Questa la seconda parte in grassetto. ",
      weight: "Semibold"
    },
    {
      text: "Questa la terza parte che torna "
    }
  ];

  return (
    <>
      <H2 style={{ marginBottom: 16 }}>FeatureInfo</H2>
      <ComponentViewerBox name="FeatureInfo · with Icon">
        <FeatureInfo
          iconName="info"
          body={
            "Dopo questo passaggio non sarà più possibile annullare il pagamento"
          }
        />
        <VSpacer size={24} />
        <FeatureInfo
          iconName="gallery"
          body={<ComposedBodyFromArray textAlign="left" body={composedBody} />}
        />
        <VSpacer size={24} />
        <FeatureInfo
          iconName="security"
          action={{
            label:
              "Si applicano i Termini e condizioni d'uso e l'Informativa Privacy di Paytipper",
            onPress: onLinkPress
          }}
        />
      </ComponentViewerBox>
      <VSpacer size={16} />
      <ComponentViewerBox name="FeatureInfo · with Pictogram">
        <FeatureInfo
          pictogramName="clock"
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. sed do eiusmod tempor ut labore et dolore magna aliqua"
          }
        />
        <VSpacer size={24} />
        <FeatureInfo
          pictogramName="manual"
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua"
          }
        />
        <VSpacer size={24} />
        <FeatureInfo
          pictogramName="followMessage"
          body={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. sed do eiusmod tempor ut labore et dolore magna aliqua"
          }
          action={{
            label: "Scopri di più",
            onPress: onLinkPress,
            accessibilityRole: "button"
          }}
        />
      </ComponentViewerBox>
    </>
  );
};

const renderBanner = () => (
  <>
    <H2
      style={{
        marginBottom: 16,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      Banner
    </H2>
    {bannerBackgroundColours.map(color => (
      <React.Fragment key={`${color}-block`}>
        <ComponentViewerBox name={`Banner · Big size, ${color} variant`}>
          <Banner
            color={color}
            title="Banner title"
            pictogramName="charity"
            action="Action text"
            onPress={onLinkPress}
            accessibilityRole="link"
          />
          <VSpacer size={24} />
          <Banner
            color={color}
            content={
              "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
            }
            pictogramName="charity"
          />
          <VSpacer size={24} />
          <Banner
            color={color}
            content={
              "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
            }
            pictogramName="charity"
            action="Dona anche tu"
            onPress={onLinkPress}
          />
          <VSpacer size={24} />
          <Banner
            color={color}
            title="Banner title"
            content={
              "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
            }
            pictogramName="charity"
          />
          <VSpacer size={24} />
          <Banner
            color={color}
            title="Banner title"
            content={
              "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
            }
            pictogramName="charity"
            action="Dona anche tu"
            onPress={onLinkPress}
          />
        </ComponentViewerBox>
        <ComponentViewerBox
          name={`Banner · Big size, ${color} variant, close action`}
        >
          <Banner
            color={color}
            title="Banner title"
            content={
              "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
            }
            pictogramName="charity"
            onClose={onClose}
            labelClose="Nascondi questo banner"
          />
          <VSpacer size={24} />
          <Banner
            color={color}
            content={
              "Fai una donazione alle organizzazioni umanitarie che assistono le vittime civile della crisi in Ucraina"
            }
            action="Dona anche tu"
            onPress={onLinkPress}
            pictogramName="charity"
            onClose={onClose}
            labelClose="Nascondi questo banner"
          />
        </ComponentViewerBox>
      </React.Fragment>
    ))}
  </>
);

const renderBannerErrorState = () => (
  <>
    <H2 style={{ marginBottom: 16 }}>BannerErrorState</H2>
    <VStack space={16}>
      <ComponentViewerBox name="BannerErrorState, default icon">
        <BannerErrorState
          label="Il caricamento delle ricevute è fallito."
          actionText={"Riprova"}
          onPress={onLinkPress}
        />
      </ComponentViewerBox>
      <ComponentViewerBox name="BannerErrorState, custom icon">
        <BannerErrorState
          icon="errorFilled"
          label="Il caricamento delle ricevute è fallito."
          actionText={"Riprova"}
          onPress={onLinkPress}
        />
      </ComponentViewerBox>
    </VStack>
  </>
);
