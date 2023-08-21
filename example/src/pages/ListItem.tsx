import {
  ButtonLink,
  H2,
  IOThemeContext,
  IconButton,
  ListItemAction,
  ListItemIDP,
  ListItemInfo,
  ListItemInfoCopy,
  ListItemNav,
  ListItemNavAlert,
  ListItemTransaction,
  VSpacer
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { Alert, ImageSourcePropType, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";

const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

export const ListItems = () => (
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
          ListItemIDP
        </H2>
        {renderListItemIDP()}

        <H2
          color={theme["textHeading-default"]}
          weight={"SemiBold"}
          style={{ marginBottom: 16, marginTop: 16 }}
        >
          ListItemTransaction
        </H2>
        {renderListItemTransaction()}
        <VSpacer size={40} />
      </Screen>
    )}
  </IOThemeContext.Consumer>
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
        action={
          <ButtonLink
            label="Modifica"
            onPress={onButtonPress}
            accessibilityLabel={""}
          />
        }
      />
      <ListItemInfo
        icon="psp"
        label="Label"
        value="A looong looooong looooooooong looooooooooong title"
        accessibilityLabel="Empty just for testing purposes"
        action={
          <IconButton
            icon="info"
            onPress={onButtonPress}
            accessibilityLabel={""}
          />
        }
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

const mockIDPProviderItem = {
  id: "posteid",
  name: "Poste ID",
  logo: "",
  localLogo: require("../../assets/images/spid-idp-posteid.png"),
  profileUrl: "https://posteid.poste.it/private/cruscotto.shtml"
};

const renderListItemIDP = () => (
  <>
    <ComponentViewerBox name="ListItemIDP, default variant">
      <View>
        <ListItemIDP
          name={mockIDPProviderItem.name}
          logo={mockIDPProviderItem.logo as ImageSourcePropType}
          localLogo={mockIDPProviderItem.localLogo as ImageSourcePropType}
          onPress={() => {
            Alert.alert("Action triggered");
          }}
          testID={`idp-${mockIDPProviderItem.id}-button`}
          urlLogoIDP={""}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ListItemIDP, saved variant">
      <View>
        <ListItemIDP
          saved
          name={mockIDPProviderItem.name}
          logo={mockIDPProviderItem.logo as ImageSourcePropType}
          localLogo={mockIDPProviderItem.localLogo as ImageSourcePropType}
          onPress={() => {
            Alert.alert("Action triggered");
          }}
          testID={`idp-${mockIDPProviderItem.id}-button`}
          urlLogoIDP={""}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ListItemIDP, default variant, stress test">
      <View>
        <ListItemIDP
          name={"This is a very loooooong IDP provider name"}
          logo={mockIDPProviderItem.logo as ImageSourcePropType}
          localLogo={mockIDPProviderItem.localLogo as ImageSourcePropType}
          onPress={() => {
            Alert.alert("Action triggered");
          }}
          testID={`idp-${mockIDPProviderItem.id}-button`}
          urlLogoIDP={""}
        />
      </View>
    </ComponentViewerBox>
  </>
);

const renderListItemTransaction = () => (
  <ComponentViewerBox name="ListItemTransaction">
    <View>
      <ListItemTransaction
        title="TITLE"
        subtitle="subtitle"
        transactionStatus="success"
        transactionAmount="€ 1.000,00"
        isLoading={true}
        onPress={onButtonPress}
      />
      <ListItemTransaction
        title="TITLE"
        subtitle="subtitle"
        // paymentLogoIcon={"amex"}
        transactionStatus="failure"
        onPress={onButtonPress}
      />
      <ListItemTransaction
        title="TITLE"
        subtitle="subtitle"
        // paymentLogoIcon={{ uri: organizationLogoURI.imageSource }}
        transactionStatus="pending"
        onPress={onButtonPress}
      />
      <ListItemTransaction
        title="TITLE"
        subtitle="subtitle"
        transactionStatus="success"
        transactionAmount="€ 1.000,00"
        onPress={onButtonPress}
      />
      <ListItemTransaction
        title="TITLE"
        subtitle="subtitle"
        transactionStatus="success"
        transactionAmount="€ 1.000,00"
        // paymentLogoIcon={"mastercard"}
        onPress={onButtonPress}
      />
      <ListItemTransaction
        title="TITLE"
        subtitle="subtitle"
        transactionStatus="success"
        transactionAmount="€ 1.000,00"
        hasChevronRight={true}
        onPress={onButtonPress}
      />
      <ListItemTransaction
        title="This one is not clickable"
        subtitle="subtitle"
        transactionStatus="failure"
        // paymentLogoIcon={"postepay"}
      />
      <ListItemTransaction
        title="This one is clickable but has a very long title"
        subtitle="very long subtitle, the kind of subtitle you'd never wish to see in the app, like a very long one"
        transactionAmount="€ 1.000,00"
        // paymentLogoIcon={"postepay"}
        onPress={onButtonPress}
        transactionStatus="success"
      />
      <ListItemTransaction
        title="Custom icon"
        subtitle="This one has a custom icon on the left"
        transactionStatus="success"
        // paymentLogoIcon={<Icon name="notice" color="red" />}
        transactionAmount=""
        onPress={onButtonPress}
      />
      <ListItemTransaction
        title="Refunded transaction"
        subtitle="This one has a custom icon and transaction amount with a green color"
        transactionStatus="failure"
        // paymentLogoIcon={<Icon name="refund" color="bluegrey" />}
        transactionAmount="€ 100"
        onPress={onButtonPress}
      />
    </View>
  </ComponentViewerBox>
);
