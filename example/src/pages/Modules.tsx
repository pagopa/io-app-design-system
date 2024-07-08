import {
  H2,
  ListItemSwitch,
  ModuleAttachment,
  ModuleCheckout,
  ModuleCredential,
  ModuleIDP,
  ModuleNavigation,
  ModulePaymentNotice,
  useIOExperimentalDesign,
  useIOTheme
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { Alert, ImageSourcePropType, View } from "react-native";
import CgnLogo from "../../assets/images/cgn_logo.png";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";

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
    <ComponentViewerBox name="ModulePaymentNotice, default variant, loading">
      <View>
        <ModulePaymentNotice
          isLoading
          onPress={mockFn}
          paymentNoticeStatus="default"
          paymentNoticeAmount="100,00 €"
          title="Codice avviso"
          subtitle="302012131232131"
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
    <ComponentViewerBox name="ModuleCheckout, default, with image">
      <ModuleCheckout
        image={{
          uri: "https://assets.cdn.platform.pagopa.it/apm/bancomatpay.png"
        }}
        title="Paga con Bancomat PAY"
        ctaText="Modifica"
        onPress={modulePress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCheckout, no description">
      <ModuleCheckout
        paymentLogo="amex"
        title="Amex"
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
    <ComponentViewerBox name="ModuleCheckout, no CTA">
      <ModuleCheckout
        title="3,50 $"
        subtitle="Piú o meno"
        onPress={modulePress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCheckout, no CTA, with image">
      <ModuleCheckout
        image={{
          uri: "https://assets.cdn.platform.pagopa.it/apm/bancomatpay.png"
        }}
        title="3,50 $"
        subtitle="Piú o meno"
        onPress={modulePress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCheckout, loading">
      <ModuleCheckout isLoading />
    </ComponentViewerBox>
  </>
);

const renderModuleAttachment = () => (
  <>
    <ComponentViewerBox name="ModuleAttachment, pdf variant">
      <ModuleAttachment
        title="Documento dal nome molto molto molto lungo.pdf"
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

const renderModuleCredential = () => (
  <>
    <ComponentViewerBox name="ModuleCredential">
      <View>
        <ModuleCredential
          icon="fingerprint"
          label="Identità digitale"
          onPress={mockFn}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCredential, with Badge">
      <View>
        <ModuleCredential
          icon="fingerprint"
          label="Identità digitale"
          onPress={mockFn}
          badge={{
            text: "predefinita",
            variant: "info"
          }}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCredential, with long label">
      <View>
        <ModuleCredential
          icon="fingerprint"
          label="This is a very long long long label"
          onPress={mockFn}
          badge={{
            text: "predefinita",
            variant: "info"
          }}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCredential, with image asset">
      <View>
        <ModuleCredential
          image={CgnLogo}
          label="Carta Giovani Nazionale"
          badge={{
            text: "già presente",
            variant: "success"
          }}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCredential, loading">
      <View>
        <ModuleCredential isLoading={true} />
      </View>
    </ComponentViewerBox>
  </>
);

const renderModuleNavigation = () => (
  <>
    <ComponentViewerBox name="ModuleNavigation">
      <View>
        <ModuleNavigation
          icon="spid"
          title="SPID"
          subtitle="Usa credenziali e app (o SMS)"
          onPress={mockFn}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleNavigation, with Badge">
      <View>
        <ModuleNavigation
          icon="spid"
          title="SPID"
          subtitle="Usa credenziali e app (o SMS)"
          onPress={mockFn}
          badge={{
            text: "IN arrivo",
            variant: "blue",
            outline: true
          }}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleNavigation, loading">
      <View>
        <ModuleNavigation isLoading={true} />
      </View>
    </ComponentViewerBox>
  </>
);

const Modules = () => {
  const { isExperimental, setExperimental } = useIOExperimentalDesign();
  const theme = useIOTheme();
  return (
    <Screen>
      <ListItemSwitch
        label="Abilita Design Sperimentale"
        value={isExperimental}
        onSwitchValueChange={setExperimental}
      />
      <H2
        color={theme["textHeading-default"]}
        weight={"Semibold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        ModuleIDP
      </H2>
      {renderModuleIDP()}
      <H2
        color={theme["textHeading-default"]}
        weight={"Semibold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        ModulePaymentNotice
      </H2>
      {renderModulePaymentNotice()}
      <H2
        color={theme["textHeading-default"]}
        weight={"Semibold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        ModuleCheckout
      </H2>
      {renderModuleCheckout()}
      <H2
        color={theme["textHeading-default"]}
        weight={"Semibold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        ModuleAttachment
      </H2>
      {renderModuleAttachment()}
      <H2
        color={theme["textHeading-default"]}
        weight={"Semibold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        ModuleCredential
      </H2>
      {renderModuleCredential()}
      <H2
        color={theme["textHeading-default"]}
        weight={"Semibold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        ModuleNavigation
      </H2>
      {renderModuleNavigation()}
    </Screen>
  );
};

export default Modules;
