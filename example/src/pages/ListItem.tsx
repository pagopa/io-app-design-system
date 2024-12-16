import {
  Divider,
  H2,
  Icon,
  ListItemAction,
  ListItemAmount,
  ListItemHeader,
  ListItemInfo,
  ListItemInfoCopy,
  ListItemNav,
  ListItemNavAlert,
  ListItemRadio,
  ListItemRadioWithAmount,
  ListItemTransaction,
  ListItemTransactionBadge,
  ListItemTransactionLogo,
  VSpacer
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { Alert, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";

const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

export const ListItems = () => (
  <Screen>
    <H2 style={{ marginBottom: 16, marginTop: 16 }}>ListItemNav</H2>
    {renderListItemNav()}

    <H2 style={{ marginBottom: 16, marginTop: 16 }}>ListItemInfoCopy</H2>
    {renderListItemInfoCopy()}

    <H2 style={{ marginBottom: 16, marginTop: 16 }}>ListItemInfo</H2>
    {renderListItemInfo()}

    <H2 style={{ marginBottom: 16, marginTop: 16 }}>ListItemHeader</H2>
    {renderListItemHeader()}

    <H2 style={{ marginBottom: 16, marginTop: 16 }}>ListItemAmount</H2>
    {renderListItemAmount()}

    <H2 style={{ marginBottom: 16, marginTop: 16 }}>ListItemAction</H2>
    {renderListItemAction()}

    <H2 style={{ marginBottom: 16, marginTop: 16 }}>ListItemTransaction</H2>
    {renderListItemTransaction()}
    <H2 style={{ marginBottom: 16, marginTop: 16 }}>ListItemRadio</H2>
    {renderListItemRadio()}
    <H2 style={{ marginBottom: 16, marginTop: 16 }}>ListItemRadioWithAmount</H2>
    {renderListItemRadioWithAmount()}
    <VSpacer size={40} />
  </Screen>
);

const renderListItemNav = () => (
  <>
    <ComponentViewerBox name="ListItemNav">
      <View>
        <ListItemNav
          value={"Value"}
          onPress={() => {
            alert("Action triggered");
          }}
        />
        <ListItemNav
          value={"Value"}
          description="Description"
          onPress={() => {
            alert("Action triggered");
          }}
        />
        <ListItemNav
          value="A looong looooong looooooooong looooooooooong title"
          description="Description"
          onPress={() => {
            alert("Action triggered");
          }}
        />

        <ListItemNav
          value={"Value"}
          icon="gallery"
          onPress={() => {
            alert("Action triggered");
          }}
        />
        <ListItemNav
          value={"Value"}
          description="Description"
          icon="gallery"
          onPress={() => {
            alert("Action triggered");
          }}
        />
        <ListItemNav
          value={"Value"}
          description="Description"
          icon="productPagoPA"
          iconColor="blueIO-500"
          onPress={() => {
            alert("Action triggered");
          }}
        />
        <ListItemNav
          value={"Value"}
          description="This is a list item nav with a payment logo"
          paymentLogoUri="https://github.com/pagopa/io-services-metadata/blob/master/logos/apps/paypal.png?raw=true"
          onPress={() => {
            alert("Action triggered");
          }}
        />
        <ListItemNav
          value={"Value"}
          description="This is a list item nav with a loading indicator"
          paymentLogoUri="https://github.com/pagopa/io-services-metadata/blob/master/logos/apps/paypal.png?raw=true"
          onPress={() => {
            alert("Action triggered");
          }}
          loading
        />
        <ListItemNav
          avatarProps={{
            logoUri: {
              uri: "https://assets.cdn.io.italia.it/logos/organizations/82003830161.png"
            }
          }}
          description="Description"
          onPress={() => {
            alert("Action triggered");
          }}
          value={"Value"}
        />
        <ListItemNav
          value={"Value"}
          description="This is a list item nav without chevron icon"
          onPress={() => {
            alert("Action triggered");
          }}
          hideChevron
        />
        <ListItemNav
          value={"Value"}
          description="This is a list item nav with badge"
          onPress={() => {
            alert("Action triggered");
          }}
          topElement={{
            badgeProps: {
              text: "Novità",
              variant: "blue"
            }
          }}
        />
        <ListItemNav
          value={"Value"}
          description="This is a list item nav with badge"
          onPress={() => {
            alert("Action triggered");
          }}
          topElement={{
            badgeProps: {
              text: "Novità",
              variant: "blue"
            }
          }}
          hideChevron
        />
        <ListItemNav
          value={"Value"}
          description="This is a list item nav with badge"
          onPress={() => {
            alert("Action triggered");
          }}
          topElement={{
            dateValue: "14/04/2024"
          }}
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
      <Divider />
      <ListItemInfoCopy
        label={"Codice fiscale"}
        value="01199250158"
        onPress={() => {
          alert("Value copied");
        }}
        accessibilityLabel="Empty just for testing purposes"
        icon="institution"
      />
      <Divider />
      <ListItemInfoCopy
        label={"Carta di credito"}
        value="4975 3013 5042 7899"
        onPress={() => {
          alert("Value copied");
        }}
        accessibilityLabel="Empty just for testing purposes"
        icon="creditCard"
      />
      <Divider />
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
      <ListItemInfo label="Label" value={"Value"} />
      <ListItemInfo
        label="Label"
        value="A looong looooong looooooooong looooooooooong title"
      />
      <ListItemInfo
        icon="creditCard"
        label="Label"
        value="A looong looooong looooooooong looooooooooong title"
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
        endElement={{
          type: "badge",
          componentProps: {
            text: "Pagato",
            variant: "success"
          }
        }}
      />

      <ListItemInfo label="Label" value={"Value"} icon="gallery" />
      <ListItemInfo label="Label" value={"Value"} paymentLogoIcon="payPal" />
    </View>
  </ComponentViewerBox>
);

const renderListItemHeader = () => (
  <ComponentViewerBox name="ListItemHeader">
    <View>
      <ListItemHeader label="Label" />
      <ListItemHeader label="Label" />
      <ListItemHeader
        iconName="creditCard"
        label="Label"
        endElement={{
          type: "buttonLink",
          componentProps: {
            label: "Modifica",
            accessibilityLabel: "Modifica",
            onPress: onButtonPress
          }
        }}
      />
      <ListItemHeader
        iconName="psp"
        label="Label"
        endElement={{
          type: "iconButton",
          componentProps: {
            icon: "info",
            accessibilityLabel: "info",
            onPress: onButtonPress
          }
        }}
      />

      <ListItemHeader
        iconName="psp"
        label="Label"
        endElement={{
          type: "badge",
          componentProps: {
            text: "Pagato",
            variant: "success"
          }
        }}
      />

      <ListItemHeader label="Label" iconName="gallery" />
    </View>
  </ComponentViewerBox>
);

const renderListItemAmount = () => (
  <ComponentViewerBox name="ListItemAmount">
    <ListItemAmount label="Amount" valueString="€ 1.000,00" />
    <ListItemAmount
      iconName="creditCard"
      label="Amount with card"
      valueString="€ 1.000,00"
    />
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
  badge: ListItemTransactionBadge;
  asset: ListItemTransactionLogo;
};

const transactionStatusArray: Array<mockTransactionStatusData> = [
  {
    badge: {
      variant: "error",
      text: "failure"
    },
    asset: "amex"
  },
  {
    badge: {
      variant: "info",
      text: "pending"
    },
    asset: { uri: organizationLogoURI.imageSource }
  },
  {
    badge: {
      variant: "error",
      text: "cancelled"
    },
    asset: "unionPay"
  },
  {
    badge: {
      variant: "lightBlue",
      text: "reversal"
    },
    asset: "applePay"
  }
];

const renderListItemTransaction = () => (
  <ComponentViewerBox name="ListItemTransaction">
    <View>
      <ListItemTransaction
        title="Title"
        subtitle="subtitle"
        transaction={{
          amount: "€ 1.000,00",
          amountAccessibilityLabel: "€ 1.000,00"
        }}
        isLoading={true}
        onPress={onButtonPress}
      />

      <Divider />

      {transactionStatusArray.map(
        ({ badge, asset }: mockTransactionStatusData) => (
          <React.Fragment key={`transactionStatus-${badge?.text}`}>
            <ListItemTransaction
              title="Title"
              subtitle="subtitle"
              paymentLogoIcon={asset}
              transaction={{ badge }}
              onPress={onButtonPress}
            />
            <Divider />
          </React.Fragment>
        )
      )}

      <ListItemTransaction
        title="Title"
        subtitle="subtitle"
        transaction={{
          amount: "€ 1.000,00",
          amountAccessibilityLabel: "€ 1.000,00"
        }}
        onPress={onButtonPress}
      />

      <Divider />

      <ListItemTransaction
        title="Title"
        subtitle="subtitle"
        transaction={{
          amount: "€ 1.000,00",
          amountAccessibilityLabel: "€ 1.000,00"
        }}
        paymentLogoIcon={"mastercard"}
        onPress={onButtonPress}
      />

      <Divider />

      <ListItemTransaction
        showChevron
        title="Title"
        subtitle="subtitle"
        transaction={{
          amount: "€ 1.000,00",
          amountAccessibilityLabel: "€ 1.000,00"
        }}
        onPress={onButtonPress}
      />

      <Divider />

      <ListItemTransaction
        title="This one is not clickable"
        subtitle="subtitle"
        transaction={{
          badge: { variant: "error", text: "failure" }
        }}
        paymentLogoIcon={"postepay"}
      />

      <Divider />

      <ListItemTransaction
        title="This one is clickable but has a very long title"
        subtitle="very long subtitle, the kind of subtitle you'd never wish to see in the app, like a very long one"
        transaction={{
          amount: "€ 1.000,00",
          amountAccessibilityLabel: "€ 1.000,00"
        }}
        paymentLogoIcon={"postepay"}
        onPress={onButtonPress}
      />

      <Divider />

      <ListItemTransaction
        title="Custom icon"
        subtitle="This one has a custom icon on the left"
        transaction={{
          amount: "",
          amountAccessibilityLabel: ""
        }}
        paymentLogoIcon={<Icon name="notice" color="red" />}
        onPress={onButtonPress}
      />

      <Divider />

      <ListItemTransaction
        title="Refunded transaction"
        subtitle="This one has a custom icon and transaction amount with a green color"
        transaction={{
          amount: "€ 100",
          amountAccessibilityLabel: "€ 100",
          refund: true
        }}
        paymentLogoIcon={<Icon name="refund" color="bluegrey" />}
        onPress={onButtonPress}
      />

      <Divider />

      <ListItemTransaction
        title="Long long text truncated by ellipsis"
        numberOfLines={1}
        subtitle="Subtitle"
        transaction={{
          amount: "€ 1.000,00",
          amountAccessibilityLabel: "€ 1.000,00"
        }}
        paymentLogoIcon={"postepay"}
        onPress={onButtonPress}
      />
    </View>
  </ComponentViewerBox>
);

const renderListItemRadio = () => (
  <ComponentViewerBox name="ListItemRadio">
    <View>
      <ListItemRadio value="Item (selected)" selected={true} />
      <Divider />
      <ListItemRadio value="Item" selected={false} />
      <Divider />
      <ListItemRadio
        value="Item with square icon"
        selected={false}
        startImage={{
          uri: "https://github.com/pagopa/io-services-metadata/blob/master/logos/apps/paypal.png?raw=true"
        }}
      />
      <Divider />
      <ListItemRadio
        value="Item with rectangular icon"
        selected={false}
        startImage={{
          uri: "https://raw.githubusercontent.com/slaterjohn/payment-logos/master/Rounded%20Corners/PNG/medium/visa.png?raw=true"
        }}
      />
      <Divider />
    </View>
  </ComponentViewerBox>
);

const renderListItemRadioWithAmount = () => (
  <ComponentViewerBox name="ListItemRadioWithAmount">
    <View>
      <ListItemRadioWithAmount
        label="Banca Intesa"
        formattedAmountString={"2,50 €"}
        isSuggested
        suggestReason="Perché costa meno"
      />

      <Divider />
      <ListItemRadioWithAmount
        label="Banca Malintesa"
        formattedAmountString={"4,50 €"}
      />
      <Divider />
      <ListItemRadioWithAmount
        label="Banca Malintesa con un testo molto ma molto lungo"
        formattedAmountString={"4,50 €"}
      />
    </View>
  </ComponentViewerBox>
);
