import {
  Avatar,
  H2,
  HSpacer,
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
  hexToRgba,
  useIOTheme
} from "@pagopa/io-app-design-system";
import * as React from "react";
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

export const Logos = () => {
  const theme = useIOTheme();

  return (
    <Screen>
      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{
          marginBottom: 12,
          paddingTop: IOVisualCostants.appMarginDefault
        }}
      >
        Avatar
      </H2>
      {renderAvatar()}

      <VSpacer size={24} />

      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{ marginBottom: 12 }}
      >
        Payment Networks (Small)
      </H2>
      {renderPaymentLogosSmall()}

      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{ marginBottom: 12 }}
      >
        Payment Networks (Big)
      </H2>
      {renderPaymentLogosBig()}

      <H2
        color={theme["textHeading-default"]}
        weight={"SemiBold"}
        style={{ marginBottom: 12 }}
      >
        Payment Networks (Card)
      </H2>
      {renderPaymentLogosCard()}
    </Screen>
  );
};

const cdnPath = "https://assets.cdn.io.italia.it/logos/organizations/";

const organizationsURIs = [
  {
    imageSource: undefined,
    name: "Placeholder"
  },
  {
    imageSource: [`${cdnPath}wrongUri.png`, `${cdnPath}1199250158.png`],
    name: "Multi image uris"
  },
  {
    imageSource: [`${cdnPath}wrongUri.png`, `${cdnPath}wrongUri.pg`],
    name: "Multi image uris both bad uris"
  },
  {
    imageSource: `${cdnPath}1199250158.png`,
    name: "Comune di Milano"
  },
  {
    imageSource: `${cdnPath}82003830161.png`,
    name: "Comune di Sotto il Monte Giovanni XXIII"
  },
  {
    imageSource: `${cdnPath}82001760675.png`,
    name: "Comune di Controguerra"
  },
  {
    imageSource: `${cdnPath}80078750587.png`,
    name: "INPS"
  },
  {
    imageSource: `${cdnPath}5779711000.png`,
    name: "e-distribuzione"
  },
  {
    imageSource: `${cdnPath}97254170588.png`,
    name: "Agenzia della Difesa"
  },
  {
    imageSource: `${cdnPath}80215430580.png`,
    name: "Ministero dell'Interno"
  },
  {
    imageSource: `${cdnPath}wrongUri.png`,
    name: "Wrong URI"
  }
];

const renderAvatar = () => (
  <>
    <ComponentViewerBox name={`Avatar, small size, circle shape`}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {organizationsURIs.map(({ imageSource }, i) => (
          <React.Fragment key={i}>
            <Avatar
              shape="circle"
              size="small"
              logoUri={
                imageSource
                  ? Array.isArray(imageSource)
                    ? imageSource.map(s => ({ uri: s }))
                    : {
                        uri: imageSource
                      }
                  : undefined
              }
            />
            {i < organizationsURIs.length - 1 && <HSpacer size={4} />}
          </React.Fragment>
        ))}
      </ScrollView>
    </ComponentViewerBox>
    {/* <ComponentViewerBox name={`Avatar, small size, square shape`}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {organizationsURIs.map(({ imageSource }, i) => (
          <React.Fragment key={i}>
            <Avatar
              shape="square"
              size="small"
              logoUri={
                imageSource
                  ? Array.isArray(imageSource)
                    ? imageSource.map(s => ({ uri: s }))
                    : {
                        uri: imageSource
                      }
                  : undefined
              }
            />
            {i < organizationsURIs.length - 1 && <HSpacer size={8} />}
          </React.Fragment>
        ))}
      </ScrollView>
    </ComponentViewerBox>
    <ComponentViewerBox name={`Avatar, medium size, square shape`}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {organizationsURIs.map(({ imageSource }, i) => (
          <React.Fragment key={i}>
            <Avatar
              shape="square"
              size="medium"
              logoUri={
                imageSource
                  ? Array.isArray(imageSource)
                    ? imageSource.map(s => ({ uri: s }))
                    : {
                        uri: imageSource
                      }
                  : undefined
              }
            />
            {i < organizationsURIs.length - 1 && <HSpacer size={8} />}
          </React.Fragment>
        ))}
      </ScrollView>
    </ComponentViewerBox> */}
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
            align="start"
            height={32}
            name={logoItemName as IOLogoPaymentCardType}
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
        <LogoPaymentCard debugMode height={32} name="payPal" align="start" />
        <VSpacer size={8} />
        <LogoPaymentCard debugMode height={32} name="payPal" align="center" />
        <VSpacer size={8} />
        <LogoPaymentCard debugMode height={32} name="payPal" align="end" />
      </View>
    </ComponentViewerBox>
  </View>
);
