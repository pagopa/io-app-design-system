import * as React from "react";
import {
  useIOExperimentalDesign,
  IOThemeContext,
  ListItemSwitch,
  H2,
  ModuleIDP,
  ModuleAttachment,
  ModulePaymentNotice,
  ModuleCheckout
} from "@pagopa/io-app-design-system";
import { Alert, ImageSourcePropType, View } from "react-native";
import { Screen } from "../components/Screen";
import { ComponentViewerBox } from "../components/ComponentViewerBox";

const mockIDPProviderItem = {
  id: "posteid",
  name: "Poste ID",
  logo: "",
  localLogo: require("../../assets/images/spid-idp-posteid.png"),
  profileUrl: "https://posteid.poste.it/private/cruscotto.shtml"
};

const mockFn = () => {
  Alert.alert("Action triggered");
};

const renderModuleIDP = () => (
  <>
    <ComponentViewerBox name="ModuleIDP, default variant">
      <View>
        <ModuleIDP
          name={mockIDPProviderItem.name}
          logo={mockIDPProviderItem.logo as ImageSourcePropType}
          localLogo={mockIDPProviderItem.localLogo as ImageSourcePropType}
          onPress={mockFn}
          testID={`idp-${mockIDPProviderItem.id}-button`}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleIDP, saved variant">
      <View>
        <ModuleIDP
          withLooseSpacing
          name={mockIDPProviderItem.name}
          logo={mockIDPProviderItem.logo as ImageSourcePropType}
          localLogo={mockIDPProviderItem.localLogo as ImageSourcePropType}
          onPress={mockFn}
          testID={`idp-${mockIDPProviderItem.id}-button`}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleIDP, default variant, stress test">
      <View>
        <ModuleIDP
          name={"This is a very loooooong IDP provider name"}
          logo={mockIDPProviderItem.logo as ImageSourcePropType}
          localLogo={mockIDPProviderItem.localLogo as ImageSourcePropType}
          onPress={mockFn}
          testID={`idp-${mockIDPProviderItem.id}-button`}
        />
      </View>
    </ComponentViewerBox>
  </>
);

const renderModulePaymentNotice = () => (
  <>
    <ComponentViewerBox name="ModulePaymentNotice, paid variant">
      <View>
        <ModulePaymentNotice
          onPress={mockFn}
          paymentNoticeStatus="paid"
          badgeText="Pagato"
          subtitle="F24"
          title="Codice avviso"
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModulePaymentNotice, default variant">
      <View>
        <ModulePaymentNotice
          onPress={mockFn}
          paymentNoticeStatus="default"
          paymentNoticeAmount="100,00 €"
          subtitle="F24"
          title="Codice avviso"
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModulePaymentNotice, default variant, stress test">
      <View>
        <ModulePaymentNotice
          onPress={mockFn}
          paymentNoticeStatus="error"
          badgeText="Errore"
          title="Codice avviso"
          subtitle="This is a very loooooong subtitle text"
        />
      </View>
    </ComponentViewerBox>
  </>
);

const modulePress = () => Alert.alert("ModulePress");

const renderModuleCheckout = () => (
  <>
    <ComponentViewerBox name="ModuleCheckout, default">
      <ModuleCheckout
        paymentLogo="amex"
        title="Amex"
        subtitle="arien_c********@**hoo.it"
        ctaText="Modifica"
        onPress={modulePress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCheckout, no icon">
      <ModuleCheckout
        title="3,50 $"
        subtitle="Piú o meno"
        ctaText="Modifica"
        onPress={modulePress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCheckout, loading">
      <ModuleCheckout isLoading ctaText="Loading" />
    </ComponentViewerBox>
  </>
);

const renderModuleAttachment = () => (
  <>
    <ComponentViewerBox name="ModuleAttachment, pdf variant">
      <ModuleAttachment
        title="Documento.pdf"
        format="pdf"
        onPress={modulePress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleAttachment, doc variant">
      <ModuleAttachment
        title="Documento.docx"
        format="doc"
        onPress={modulePress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleAttachment, disabled">
      <ModuleAttachment
        title="Documento.pdf"
        format="pdf"
        disabled
        onPress={modulePress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleAttachment, loading">
      <ModuleAttachment
        title="Documento.pdf"
        format="pdf"
        isLoading
        onPress={modulePress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleAttachment, fetching">
      <ModuleAttachment
        title="Documento.pdf"
        format="pdf"
        isFetching
        onPress={modulePress}
      />
    </ComponentViewerBox>
  </>
);

const Modules = () => {
  const { isExperimental, setExperimental } = useIOExperimentalDesign();
  return (
    <IOThemeContext.Consumer>
      {theme => (
        <Screen>
          <ListItemSwitch
            label="Abilita Design Sperimentale"
            value={isExperimental}
            onSwitchValueChange={setExperimental}
          />
          <H2
            color={theme["textHeading-default"]}
            weight={"SemiBold"}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            ModuleIDP
          </H2>
          {renderModuleIDP()}
          <H2
            color={theme["textHeading-default"]}
            weight={"SemiBold"}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            ModulePaymentNotice
          </H2>
          {renderModulePaymentNotice()}
          <H2
            color={theme["textHeading-default"]}
            weight={"SemiBold"}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            ModuleCheckout
          </H2>
          {renderModuleCheckout()}
          <H2
            color={theme["textHeading-default"]}
            weight={"SemiBold"}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            ModuleAttachment
          </H2>
          {renderModuleAttachment()}
        </Screen>
      )}
    </IOThemeContext.Consumer>
  );
};

export default Modules;
