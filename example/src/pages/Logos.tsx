import {
  Avatar,
  AvatarSearch,
  H2,
  HSpacer,
  HStack,
  IOColors,
  IOLogoPaymentCardType,
  IOLogoPaymentExtType,
  IOLogoPaymentType,
  IOPaymentCardLogos,
  IOPaymentExtLogos,
  IOPaymentLogos,
  IOVisualCostants,
  LogoPayment,
  LogoPaymentCard,
  LogoPaymentExt,
  VSpacer,
  hexToRgba
} from "@pagopa/io-app-design-system";
import { Fragment } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import {
  LogoPaymentViewerBox,
  logoItemGutter
} from "../components/LogoPaymentViewerBox";
import { Screen } from "../components/Screen";

const styles = StyleSheet.create({
  itemsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginBottom: 16,
    marginLeft: (logoItemGutter / 2) * -1,
    marginRight: (logoItemGutter / 2) * -1
  },
  horizontalScroll: {
    marginLeft: -IOVisualCostants.appMarginDefault,
    marginRight: -IOVisualCostants.appMarginDefault,
    paddingHorizontal: IOVisualCostants.appMarginDefault
  }
});

export const Logos = () => (
  <Screen>
    <H2
      style={{
        marginBottom: 12,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      Avatar
    </H2>
    {renderAvatar()}

    <VSpacer size={24} />

    <H2 style={{ marginBottom: 12 }}>Payment Networks (Small)</H2>
    {renderPaymentLogosSmall()}

    <H2 style={{ marginBottom: 12 }}>Payment Networks (Big)</H2>
    {renderPaymentLogosBig()}

    <H2 style={{ marginBottom: 12 }}>Payment Networks (Card)</H2>
    {renderPaymentLogosCard()}
  </Screen>
);

const cdnPath = "https://assets.cdn.io.italia.it/logos/organizations/";

const organizationsURIs = [
  {
    imageSource: undefined,
    name: "Placeholder"
  },
  {
    imageSource: [
      { uri: `${cdnPath}wrongUri.png`, width: 100, height: 100 },
      { uri: `${cdnPath}1199250158.png`, width: 100, height: 100 }
    ],
    name: "Multi image uris"
  },
  {
    imageSource: [
      { uri: `${cdnPath}wrongUri.png`, width: 100, height: 100 },
      { uri: `${cdnPath}wrongUri.pg`, width: 100, height: 100 }
    ],
    name: "Multi image uris both bad uris"
  },
  {
    imageSource: { uri: `${cdnPath}1199250158.png` },
    name: "Comune di Milano"
  },
  {
    imageSource: { uri: `${cdnPath}82003830161.png` },
    name: "Comune di Sotto il Monte Giovanni XXIII"
  },
  {
    imageSource: { uri: `${cdnPath}82001760675.png` },
    name: "Comune di Controguerra"
  },
  {
    imageSource: { uri: `${cdnPath}80078750587.png` },
    name: "INPS"
  },
  {
    imageSource: { uri: `${cdnPath}5779711000.png` },
    name: "e-distribuzione"
  },
  {
    imageSource: { uri: `${cdnPath}97254170588.png` },
    name: "Agenzia della Difesa"
  },
  {
    imageSource: { uri: `${cdnPath}80215430580.png` },
    name: "Ministero dell'Interno"
  },
  {
    imageSource: { uri: `${cdnPath}wrongUri.png` },
    name: "Wrong URI"
  }
];

const renderAvatar = () => (
  <>
    <ComponentViewerBox name={`Avatar, small size`}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <HStack space={8}>
          {organizationsURIs.map(({ imageSource }, i) => (
            <Fragment key={i}>
              <Avatar size="small" logoUri={imageSource} />
              {i === organizationsURIs.length - 1 && <HSpacer size={32} />}
            </Fragment>
          ))}
        </HStack>
      </ScrollView>
    </ComponentViewerBox>
    <ComponentViewerBox name={`Avatar, medium size`}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <HStack space={8}>
          {organizationsURIs.map(({ imageSource }, i) => (
            <Fragment key={i}>
              <Avatar size="medium" logoUri={imageSource} />
              {i === organizationsURIs.length - 1 && <HSpacer size={32} />}
            </Fragment>
          ))}
        </HStack>
      </ScrollView>
    </ComponentViewerBox>
    <ComponentViewerBox name={`AvatarSearch`}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <HStack space={8}>
          {organizationsURIs.map(({ imageSource }, i) => (
            <Fragment key={i}>
              <AvatarSearch source={imageSource} />
              {i === organizationsURIs.length - 1 && <HSpacer size={32} />}
            </Fragment>
          ))}
        </HStack>
      </ScrollView>
    </ComponentViewerBox>
  </>
);

const renderPaymentLogosSmall = () => (
  <View style={styles.itemsWrapper}>
    {Object.entries(IOPaymentLogos).map(([logoItemName]) => (
      <LogoPaymentViewerBox
        key={logoItemName}
        name={logoItemName}
        size="medium"
        image={
          <LogoPayment name={logoItemName as IOLogoPaymentType} size={"100%"} />
        }
      />
    ))}
  </View>
);

const renderPaymentLogosBig = () => (
  <View style={styles.itemsWrapper}>
    {Object.entries(IOPaymentExtLogos).map(([logoItemName]) => (
      <LogoPaymentViewerBox
        key={logoItemName}
        name={logoItemName}
        size="large"
        image={
          <LogoPaymentExt
            name={logoItemName as IOLogoPaymentExtType}
            size={"100%"}
          />
        }
      />
    ))}
  </View>
);

const renderPaymentLogosCard = () => (
  <View style={styles.itemsWrapper}>
    {Object.entries(IOPaymentCardLogos).map(([logoItemName]) => (
      <LogoPaymentViewerBox
        key={logoItemName}
        name={logoItemName}
        size="full"
        image={
          <LogoPaymentCard
            accessibilityLabel={logoItemName}
            align="start"
            height={32}
            name={logoItemName as IOLogoPaymentCardType}
            testID={`${logoItemName}-testID`}
          />
        }
      />
    ))}
    <VSpacer size={24} />
    <ComponentViewerBox
      fullWidth
      name="Debug mode enabled, possible align values"
    >
      <View
        style={{
          borderRadius: 16,
          padding: 16,
          backgroundColor: IOColors.white,
          borderColor: hexToRgba(IOColors.black, 0.15),
          borderWidth: 1
        }}
      >
        <LogoPaymentCard
          debugMode
          height={32}
          name="payPal"
          accessibilityLabel="PayPal"
          align="start"
        />
        <VSpacer size={8} />
        <LogoPaymentCard
          debugMode
          height={32}
          name="payPal"
          accessibilityLabel="PayPal"
          align="center"
        />
        <VSpacer size={8} />
        <LogoPaymentCard
          debugMode
          height={32}
          name="payPal"
          accessibilityLabel="PayPal"
          align="end"
        />
      </View>
    </ComponentViewerBox>
  </View>
);
