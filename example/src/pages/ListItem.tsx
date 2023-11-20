import {
  Divider,
  H2,
  IOThemeContext,
  Icon,
  ListItemAction,
  ListItemInfo,
  ListItemInfoCopy,
  ListItemNav,
  ListItemNavAlert,
  ListItemSwitch,
  ListItemTransaction,
  ListItemTransactionLogo,
  ListItemTransactionStatusWithBadge,
  ListItemTransactionRadio,
  VSpacer,
  useIOExperimentalDesign
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { Alert, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";

const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

export const ListItems = () => {
  const { isExperimental, setExperimental } = useIOExperimentalDesign();
  return (
    <IOThemeContext.Consumer>
      {theme => (
        <Screen>
          <H2
            color={theme["textHeading-default"]}
            weight={"SemiBold"}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            ListItemNav
          </H2>
          <ListItemSwitch
            label="Abilita Design Sperimentale"
            value={isExperimental}
            onSwitchValueChange={setExperimental}
          />
          {renderListItemNav()}

          <H2
            color={theme["textHeading-default"]}
            weight={"SemiBold"}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            ListItemInfoCopy
          </H2>
          {renderListItemInfoCopy()}

          <H2
            color={theme["textHeading-default"]}
            weight={"SemiBold"}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            ListItemInfo
          </H2>
          {renderListItemInfo()}

          <H2
            color={theme["textHeading-default"]}
            weight={"SemiBold"}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            ListItemAction
          </H2>
          {renderListItemAction()}

          <H2
            color={theme["textHeading-default"]}
            weight={"SemiBold"}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            ListItemTransaction
          </H2>
          {renderListItemTransaction()}
          <H2
            color={theme["textHeading-default"]}
            weight={"SemiBold"}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            ListItemTransactionRadio
          </H2>
          {renderListItemTransactionRadio()}
          <VSpacer size={40} />
        </Screen>
      )}
    </IOThemeContext.Consumer>
  );
};

const renderListItemNav = () => (
  <>
    <ComponentViewerBox name="ListItemNav">
      <View>
        <ListItemNav
          value={"Value"}
          onPress={() => {
            alert("Action triggered");
          }}
          accessibilityLabel="Empty just for testing purposes"
        />
        <ListItemNav
          value={"Value"}
          description="Description"
          onPress={() => {
            alert("Action triggered");
          }}
          accessibilityLabel="Empty just for testing purposes"
        />
        <ListItemNav
          value="A looong looooong looooooooong looooooooooong title"
          description="Description"
          onPress={() => {
            alert("Action triggered");
          }}
          accessibilityLabel="Empty just for testing purposes"
        />

        <ListItemNav
          value={"Value"}
          icon="gallery"
          onPress={() => {
            alert("Action triggered");
          }}
          accessibilityLabel="Empty just for testing purposes"
        />
        <ListItemNav
          value={"Value"}
          description="Description"
          icon="gallery"
          onPress={() => {
            alert("Action triggered");
          }}
          accessibilityLabel="Empty just for testing purposes"
        />
        <ListItemNav
          value={"Value"}
          description="Description"
          icon="productPagoPA"
          iconColor="blueIO-500"
          onPress={() => {
            alert("Action triggered");
          }}
          accessibilityLabel="Empty just for testing purposes"
        />
        <ListItemNav
          value={"Value"}
          description="This is a list item nav with a payment logo"
          paymentLogo="bancomatPay"
          onPress={() => {
            alert("Action triggered");
          }}
          accessibilityLabel="Empty just for testing purposes"
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ListItemNavAlert">
      <View>
        <ListItemNavAlert
          value={"Value"}
          onPress={() => {
            alert("Action triggered");
          }}
          accessibilityLabel="Empty just for testing purposes"
        />
        <ListItemNavAlert
          value={"Value"}
          description="Description"
          onPress={() => {
            alert("Action triggered");
          }}
          accessibilityLabel="Empty just for testing purposes"
        />
        <ListItemNavAlert
          withoutIcon
          value={"Value"}
          onPress={() => {
            alert("Action triggered");
          }}
          accessibilityLabel="Empty just for testing purposes"
        />
        <ListItemNavAlert
          withoutIcon
          value={"Value"}
          description="Description"
          onPress={() => {
            alert("Action triggered");
          }}
          accessibilityLabel="Empty just for testing purposes"
        />
      </View>
    </ComponentViewerBox>
  </>
);

const renderListItemInfoCopy = () => (
  <ComponentViewerBox name="ListItemInfoCopy">
    <View>
      <ListItemInfoCopy
        label={"Label"}
        value="Value"
        onPress={() => {
          alert("Value copied");
        }}
        accessibilityLabel="Empty just for testing purposes"
      />
      <ListItemInfoCopy
        label={"Codice fiscale"}
        value="01199250158"
        onPress={() => {
          alert("Value copied");
        }}
        accessibilityLabel="Empty just for testing purposes"
        icon="institution"
      />
      <ListItemInfoCopy
        label={"Carta di credito"}
        value="4975 3013 5042 7899"
        onPress={() => {
          alert("Value copied");
        }}
        accessibilityLabel="Empty just for testing purposes"
        icon="creditCard"
      />
      <ListItemInfoCopy
        label={"Indirizzo"}
        value={`P.za Colonna, 370\n00186 Roma (RM)`}
        onPress={() => {
          alert("Value copied");
        }}
        accessibilityLabel="Empty just for testing purposes"
      />
    </View>
  </ComponentViewerBox>
);

const renderListItemAction = () => (
  <>
    <ComponentViewerBox name="ListItemAction · Primary variant">
      <ListItemAction
        variant="primary"
        label={"Link interno oppure link ad una pagina esterna"}
        onPress={onButtonPress}
        accessibilityLabel="Empty just for testing purposes"
      />
      <ListItemAction
        variant="primary"
        icon="website"
        label={"Link interno oppure link ad una pagina esterna"}
        onPress={onButtonPress}
        accessibilityLabel="Empty just for testing purposes"
      />
      <ListItemAction
        variant="primary"
        icon="device"
        label={"Scarica l'app"}
        onPress={onButtonPress}
        accessibilityLabel="Empty just for testing purposes"
      />
      <ListItemAction
        variant="primary"
        icon="security"
        label={"Informativa sulla privacy"}
        onPress={onButtonPress}
        accessibilityLabel="Empty just for testing purposes"
      />
      <ListItemAction
        variant="primary"
        icon="chat"
        label={"Richiedi assistenza"}
        onPress={onButtonPress}
        accessibilityLabel="Empty just for testing purposes"
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ListItemAction · Danger variant">
      <ListItemAction
        variant="danger"
        label={"Danger action"}
        onPress={onButtonPress}
        accessibilityLabel="Empty just for testing purposes"
      />
      <ListItemAction
        variant="danger"
        icon="trashcan"
        label={"Elimina"}
        onPress={onButtonPress}
        accessibilityLabel="Empty just for testing purposes"
      />
      <ListItemAction
        variant="danger"
        icon="logout"
        label={"Esci da IO"}
        onPress={onButtonPress}
        accessibilityLabel="Empty just for testing purposes"
      />
    </ComponentViewerBox>
  </>
);

const renderListItemInfo = () => (
  <ComponentViewerBox name="ListItemInfo">
    <View>
      <ListItemInfo
        label="Label"
        value={"Value"}
        accessibilityLabel="Empty just for testing purposes"
      />
      <ListItemInfo
        label="Label"
        value="A looong looooong looooooooong looooooooooong title"
        accessibilityLabel="Empty just for testing purposes"
      />
      <ListItemInfo
        icon="creditCard"
        label="Label"
        value="A looong looooong looooooooong looooooooooong title"
        accessibilityLabel="Empty just for testing purposes"
        endElement={{
          type: "buttonLink",
          componentProps: {
            label: "Modifica",
            accessibilityLabel: "Modifica",
            onPress: onButtonPress
          }
        }}
      />
      <ListItemInfo
        icon="psp"
        label="Label"
        value="A looong looooong looooooooong looooooooooong title"
        accessibilityLabel="Empty just for testing purposes"
        endElement={{
          type: "iconButton",
          componentProps: {
            icon: "info",
            accessibilityLabel: "info",
            onPress: onButtonPress
          }
        }}
      />

      <ListItemInfo
        icon="psp"
        label="Label"
        value="A looong looooong looooooooong looooooooooong title"
        accessibilityLabel="Empty just for testing purposes"
        endElement={{
          type: "badge",
          componentProps: {
            text: "Pagato",
            variant: "success"
          }
        }}
      />

      <ListItemInfo
        label="Label"
        value={"Value"}
        icon="gallery"
        accessibilityLabel="Empty just for testing purposes"
      />
    </View>
  </ComponentViewerBox>
);

/* LIST ITEM TRANSACTION */

/* Mock assets */
const cdnPath = "https://assets.cdn.io.italia.it/logos/organizations/";
const organizationLogoURI = {
  imageSource: `${cdnPath}82003830161.png`,
  name: "Comune di Milano"
};

type mockTransactionStatusData = {
  status: ListItemTransactionStatusWithBadge;
  asset: ListItemTransactionLogo;
};

const transactionStatusArray: Array<mockTransactionStatusData> = [
  {
    status: "failure",
    asset: "amex"
  },
  {
    status: "pending",
    asset: { uri: organizationLogoURI.imageSource }
  },
  {
    status: "cancelled",
    asset: "unionPay"
  },
  {
    status: "reversal",
    asset: "applePay"
  }
];

const renderListItemTransaction = () => (
  <ComponentViewerBox name="ListItemTransaction">
    <View>
      <ListItemTransaction
        title="Title"
        subtitle="subtitle"
        transactionStatus="success"
        transactionAmount="€ 1.000,00"
        isLoading={true}
        onPress={onButtonPress}
      />

      <Divider />

      {transactionStatusArray.map(
        ({ status, asset }: mockTransactionStatusData) => (
          <React.Fragment key={`transactionStatus-${status}`}>
            <ListItemTransaction
              title="Title"
              subtitle="subtitle"
              paymentLogoIcon={asset}
              transactionStatus={status}
              badgeText={status}
              onPress={onButtonPress}
            />
            <Divider />
          </React.Fragment>
        )
      )}

      <ListItemTransaction
        title="Title"
        subtitle="subtitle"
        transactionStatus="success"
        transactionAmount="€ 1.000,00"
        onPress={onButtonPress}
      />

      <Divider />

      <ListItemTransaction
        title="Title"
        subtitle="subtitle"
        transactionStatus="success"
        transactionAmount="€ 1.000,00"
        paymentLogoIcon={"mastercard"}
        onPress={onButtonPress}
      />

      <Divider />

      <ListItemTransaction
        title="Title"
        subtitle="subtitle"
        transactionStatus="success"
        transactionAmount="€ 1.000,00"
        hasChevronRight={true}
        onPress={onButtonPress}
      />

      <Divider />

      <ListItemTransaction
        title="This one is not clickable"
        subtitle="subtitle"
        transactionStatus="failure"
        badgeText={"Failure"}
        paymentLogoIcon={"postepay"}
      />

      <Divider />

      <ListItemTransaction
        title="This one is clickable but has a very long title"
        subtitle="very long subtitle, the kind of subtitle you'd never wish to see in the app, like a very long one"
        transactionAmount="€ 1.000,00"
        paymentLogoIcon={"postepay"}
        onPress={onButtonPress}
        transactionStatus="success"
      />

      <Divider />

      <ListItemTransaction
        title="Custom icon"
        subtitle="This one has a custom icon on the left"
        transactionStatus="success"
        paymentLogoIcon={<Icon name="notice" color="red" />}
        transactionAmount=""
        onPress={onButtonPress}
      />

      <Divider />

      <ListItemTransaction
        title="Refunded transaction"
        subtitle="This one has a custom icon and transaction amount with a green color"
        transactionStatus="refunded"
        paymentLogoIcon={<Icon name="refund" color="bluegrey" />}
        transactionAmount="€ 100"
        onPress={onButtonPress}
      />
    </View>
  </ComponentViewerBox>
);

const renderListItemTransactionRadio = () => (
  <ComponentViewerBox name="ListItemTransaction">
    <View>
      <ListItemTransactionRadio
        label="Banca Intesa"
        formattedAmountString={"2,50 €"}
        suggestReason="Perché costa meno"
        isSuggested={true}
      />

      <Divider />
      <ListItemTransactionRadio
        label="Banca Malintesa"
        formattedAmountString={"4,50 €"}
      />
    </View>
  </ComponentViewerBox>
);
