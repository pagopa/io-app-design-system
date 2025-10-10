import {
  H2,
  IOColors,
  ListItemSwitch,
  ModuleAttachment,
  ModuleCheckout,
  ModuleCredential,
  ModuleIDP,
  ModuleNavigation,
  ModuleNavigationAlt,
  ModulePaymentNotice,
  ModuleSummary,
  useIOTheme,
  useIOThemeContext
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { Alert, View } from "react-native";
import CgnLogo from "../../assets/images/cgn_logo.png";
import SpidTextLogo from "../../assets/images/spid-text-logo.svg";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";

const mockIDPProviderItems = {
  poste: {
    id: "posteid",
    name: "Poste ID",
    logo: {
      light: require("../../assets/images/spid-idp-posteid.png")
    },
    profileUrl: "https://posteid.poste.it/private/cruscotto.shtml"
  },
  intesiGroup: {
    id: "intesiGroup",
    name: "Intesi Group",
    logo: {
      light: require("../../assets/images/intesi-group-light.png"),
      dark: require("../../assets/images/intesi-group-dark.png")
    }
  }
};

const mockFn = () => {
  Alert.alert("Action triggered");
};

const renderModuleIDP = () => {
  const { poste: posteItem, intesiGroup: intesiGroupItem } =
    mockIDPProviderItems;

  return (
    <>
      <ComponentViewerBox name="ModuleIDP, default variant">
        <View>
          <ModuleIDP
            name={posteItem.name}
            logo={{
              light: posteItem.logo.light
            }}
            onPress={mockFn}
            testID={`idp-${posteItem.id}-button`}
          />
        </View>
      </ComponentViewerBox>
      <ComponentViewerBox name="ModuleIDP, saved variant">
        <View>
          <ModuleIDP
            withLooseSpacing
            name={posteItem.name}
            logo={{
              light: posteItem.logo.light
            }}
            onPress={mockFn}
            testID={`idp-${posteItem.id}-button`}
          />
        </View>
      </ComponentViewerBox>
      <ComponentViewerBox name="ModuleIDP, both color modes supported">
        <View>
          <ModuleIDP
            name={intesiGroupItem.name}
            logo={{
              light: intesiGroupItem.logo.light,
              dark: intesiGroupItem.logo.dark
            }}
            onPress={mockFn}
            testID={`idp-${intesiGroupItem.id}-button`}
          />
        </View>
      </ComponentViewerBox>
      <ComponentViewerBox name="ModuleIDP, default variant, stress test">
        <View>
          <ModuleIDP
            name={"This is a very loooooong IDP provider name"}
            logo={{
              light: posteItem.logo.light
            }}
            onPress={mockFn}
            testID={`idp-${posteItem.id}-button`}
          />
        </View>
      </ComponentViewerBox>
    </>
  );
};

const renderModulePaymentNotice = () => (
  <>
    <ComponentViewerBox name="ModulePaymentNotice, paid variant">
      <View>
        <ModulePaymentNotice
          onPress={mockFn}
          paymentNotice={{
            status: "paid"
          }}
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
          paymentNotice={{
            status: "default",
            amount: "100,00 €",
            amountAccessibilityLabel: "100,00 €"
          }}
          subtitle="F24"
          title="Codice avviso"
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModulePaymentNotice, default variant, stress test">
      <View>
        <ModulePaymentNotice
          onPress={mockFn}
          paymentNotice={{
            status: "error"
          }}
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
          loadingAccessibilityLabel="Loading payment notice"
          paymentNotice={{
            status: "in-progress"
          }}
          badgeText="In corso"
          subtitle="F24"
          title="Codice avviso"
          onPress={mockFn}
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
      <ModuleCheckout
        isLoading
        loadingAccessibilityLabel="Loading checkout item"
      />
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
        loadingAccessibilityLabel="Loading attachment"
        onPress={modulePress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleAttachment, fetching">
      <ModuleAttachment
        title="Documento.pdf"
        format="pdf"
        isFetching
        fetchingAccessibilityLabel="Fetching attachment"
        onPress={modulePress}
      />
    </ComponentViewerBox>
  </>
);

const renderModuleCredential = () => (
  <>
    <ComponentViewerBox name="ModuleCredential, static w/ badge">
      <View>
        <ModuleCredential
          icon="fingerprint"
          label="Identità digitale"
          badge={{
            text: "predefinita",
            variant: "default"
          }}
        />
      </View>
    </ComponentViewerBox>
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
            variant: "default"
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
            variant: "default"
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
    <ComponentViewerBox name="ModuleCredential, fetching">
      <View>
        <ModuleCredential
          icon="fingerprint"
          label="Identità digitale"
          onPress={mockFn}
          isFetching={true}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCredential, fetching w/ badge">
      <View>
        <ModuleCredential
          icon="fingerprint"
          label="Identità digitale"
          onPress={mockFn}
          isFetching={true}
          badge={{
            text: "Predefinita",
            variant: "default"
          }}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCredential, with badge and chevron">
      <View>
        <ModuleCredential
          icon={"messageLegal"}
          label="Attestato di residenza"
          onPress={mockFn}
          badge={{
            text: "novità",
            variant: "default"
          }}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleCredential, loading">
      <View>
        <ModuleCredential
          isLoading={true}
          loadingAccessibilityLabel={"Loading credential"}
        />
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
            text: "In arrivo",
            variant: "highlight",
            outline: true
          }}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleNavigation, with Badge">
      <View>
        <ModuleNavigation
          icon="spid"
          title="Testo relativo allo SPID davvero molto lungo"
          subtitle="Usa credenziali e app (o SMS), ma anche qui il testo è molto lungo"
          onPress={mockFn}
          badge={{
            text: "IN arrivo",
            variant: "highlight",
            outline: true
          }}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleNavigation, loading">
      <View>
        <ModuleNavigation
          isLoading={true}
          loadingAccessibilityLabel={"Loading navigation"}
        />
      </View>
    </ComponentViewerBox>
  </>
);

const RenderModuleNavigationAlt = () => {
  const theme = useIOTheme();
  return (
    <>
      <ComponentViewerBox name="ModuleNavigationAlt">
        <View>
          <ModuleNavigationAlt
            icon="securityPad"
            title="Usa CIE + PIN"
            subtitle="Dovrai usare la Carta di Identità Elettronica (CIE) e inserire il suo PIN di 8 cifre."
            onPress={mockFn}
            badge={{
              text: "scelta consigliata",
              variant: "highlight",
              outline: false
            }}
          />
        </View>
      </ComponentViewerBox>
      <ComponentViewerBox name="ModuleNavigationAlt, image">
        <ModuleNavigationAlt
          image={<SpidTextLogo fill={IOColors[theme["italyBrand-default"]]} />}
          title="Usa SPID"
          subtitle="Dovrai usare credenziali e app (o SMS)"
          onPress={mockFn}
        />
      </ComponentViewerBox>
      <ComponentViewerBox name="ModuleNavigationAlt, fetching">
        <ModuleNavigationAlt
          icon="cie"
          iconColor={theme["italyBrand-default"]}
          title="Usa l’app CieID"
          subtitle="Dovrai usare credenziali e app CieID"
          onPress={mockFn}
          isFetching
        />
      </ComponentViewerBox>
      <ComponentViewerBox name="ModuleNavigationAlt, custom right icon">
        <ModuleNavigationAlt
          icon="cie"
          iconColor={theme["italyBrand-default"]}
          title="Usa l’app CieID"
          subtitle="Dovrai usare credenziali e app CieID"
          onPress={mockFn}
          rightIcon="arrowRight"
        />
      </ComponentViewerBox>
      <ComponentViewerBox name="ModuleNavigationAlt, loading">
        <View>
          <ModuleNavigationAlt
            isLoading={true}
            loadingAccessibilityLabel={"Loading navigation"}
          />
        </View>
      </ComponentViewerBox>
    </>
  );
};

const renderModuleSummary = () => (
  <>
    <ComponentViewerBox name="ModuleSummary, default variant">
      <ModuleSummary
        label={"Label name"}
        description={"This is a description of the element"}
        onPress={mockFn}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleSummary, custom icon, label only">
      <View>
        <ModuleSummary
          icon="chevronRightListItem"
          label={"Label only"}
          onPress={mockFn}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleSummary, stress test">
      <ModuleSummary
        label={"A very looong loooooooong looooooooooooooong label"}
        description={"This is a very looooooong description of the element"}
        onPress={mockFn}
      />
    </ComponentViewerBox>
  </>
);

const Modules = () => {
  const { setTheme, themeType } = useIOThemeContext();

  return (
    <Screen>
      <ListItemSwitch
        label="Abilita Dark Mode"
        value={themeType === "dark"}
        onSwitchValueChange={() =>
          setTheme(themeType === "dark" ? "light" : "dark")
        }
      />
      <H2 style={{ marginBottom: 16, marginTop: 16 }}>ModuleIDP</H2>
      {renderModuleIDP()}
      <H2 style={{ marginBottom: 16, marginTop: 16 }}>ModulePaymentNotice</H2>
      {renderModulePaymentNotice()}
      <H2 style={{ marginBottom: 16, marginTop: 16 }}>ModuleSummary</H2>
      {renderModuleSummary()}
      <H2 style={{ marginBottom: 16, marginTop: 16 }}>ModuleCheckout</H2>
      {renderModuleCheckout()}
      <H2 style={{ marginBottom: 16, marginTop: 16 }}>ModuleAttachment</H2>
      {renderModuleAttachment()}
      <H2 style={{ marginBottom: 16, marginTop: 16 }}>ModuleCredential</H2>
      {renderModuleCredential()}
      <H2 style={{ marginBottom: 16, marginTop: 16 }}>ModuleNavigation</H2>
      {renderModuleNavigation()}
      <H2 style={{ marginBottom: 16, marginTop: 16 }}>ModuleNavigationAlt</H2>
      {RenderModuleNavigationAlt()}
    </Screen>
  );
};

export default Modules;
