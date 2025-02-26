import {
  Body,
  BodyMonospace,
  ButtonText,
  Caption,
  Divider,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HSpacer,
  HStack,
  Hero,
  IOColors,
  LabelMini,
  BodySmall,
  MdH1,
  MdH2,
  MdH3,
  VSpacer,
  VStack
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Screen } from "../components/Screen";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  distancedTitle: {
    marginTop: 12
  }
});

const linkOnPress = () => Alert.alert("onPress triggered");

export const Typography = () => (
  <Screen>
    <VStack space={40}>
      <HeroRow />
      <H1Row />
      <H2Row />
      <H3Row />
      <H4Row />
      <H5Row />
      <H6Row />

      <ButtonTextRow />
      <CaptionRow />

      <VStack space={16}>
        <Body>Body</Body>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a felis
          congue, congue leo sit amet, semper ex. Nulla consectetur non quam vel
          porttitor. Vivamus ac ex non nunc pellentesque molestie. Aliquam id
          lorem aliquam, aliquam massa eget, commodo erat. Maecenas finibus dui
          massa, eget pharetra mauris posuere semper.
        </Body>
        <Body weight="Semibold">Body Semibold</Body>
        <Body asLink onPress={linkOnPress}>
          Body asLink
        </Body>
        <BodyMonospace>BodyMonoSpace</BodyMonospace>
      </VStack>
      <VStack space={16}>
        <BodySmallRow />
        <LabelMiniRow />
      </VStack>
    </VStack>

    <VSpacer size={48} />

    <Divider />
    <VSpacer size={24} />
    <VStack space={32}>
      <MdH1Row />
      <MdH2Row />
      <MdH3Row />
    </VStack>

    <VSpacer size={40} />
  </Screen>
);

const getTitle = (element: string) => `Heading ${element}`;
const getLongerTitle = (element: string) =>
  `Very loooong looong title set with Heading ${element}`;

export const DarkBackgroundTypographicScale = () => (
  <View style={{ backgroundColor: IOColors["grey-700"] }}>
    <H1 color={"white"}>Header H1</H1>
    <HSpacer size={16} />
  </View>
);

export const HeroRow = () => (
  <VStack space={4}>
    <Hero>{getTitle("Hero")}</Hero>
    <Hero>{getLongerTitle("Hero")}</Hero>
  </VStack>
);

export const H1Row = () => (
  <VStack space={4}>
    <H1>{getTitle("H1")}</H1>
    <H1 style={styles.distancedTitle}>{getLongerTitle("H1")}</H1>
  </VStack>
);

export const H2Row = () => (
  <VStack space={4}>
    <H2>{getTitle("H2")}</H2>
    <H2 style={styles.distancedTitle}>{getLongerTitle("H2")}</H2>
    <H2 style={styles.distancedTitle} weight="Bold">
      Header H2 Bold
    </H2>
  </VStack>
);

export const H3Row = () => (
  <HStack space={16} style={{ flexWrap: "wrap" }}>
    <H3>Header H3</H3>
    <H3 color="grey-650">Header H3</H3>
    <View style={{ backgroundColor: IOColors["grey-700"] }}>
      <H3 color={"white"}>Header H3</H3>
    </View>
  </HStack>
);

export const H4Row = () => (
  <View style={styles.row}>
    {/* Bold */}
    <H4>Header H4</H4>
    <HSpacer size={16} />
    <H4 color="blueIO-500">Header H4</H4>
    <HSpacer size={16} />
    <View style={{ backgroundColor: IOColors["grey-700"] }}>
      <H4 color={"white"}>Header H4</H4>
    </View>
  </View>
);

export const H5Row = () => (
  <View style={styles.row}>
    <H5>Header H5</H5>
    <HSpacer size={16} />
    <H5 color="grey-650">Header H5</H5>
    <HSpacer size={16} />
    <H5 color={"blueIO-500"}>Header H5</H5>
  </View>
);

export const H6Row = () => (
  <View style={styles.row}>
    <H6>Header H6</H6>
    <HSpacer size={16} />
    <H6 color="grey-650">Header H6</H6>
    <HSpacer size={16} />
    <H6 color={"blueIO-500"}>Header H6</H6>
  </View>
);

export const ButtonTextRow = () => (
  <View style={styles.row}>
    <View style={{ backgroundColor: IOColors["grey-700"] }}>
      <ButtonText>ButtonText</ButtonText>
    </View>
    <HSpacer size={16} />
    <ButtonText color="grey-700">ButtonText</ButtonText>
    <HSpacer size={16} />
    <ButtonText color="blueIO-500">ButtonText</ButtonText>
  </View>
);

export const CaptionRow = () => (
  <View style={styles.row}>
    <Caption>Caption</Caption>
    <HSpacer size={16} />
    <Caption color="grey-650">Caption</Caption>
    <HSpacer size={16} />
    <Caption color={"blueIO-500"}>Caption</Caption>
  </View>
);

export const BodySmallRow = () => (
  <>
    <View style={styles.row}>
      <BodySmall>Body small</BodySmall>
      <HSpacer size={16} />
      <BodySmall color="grey-700">Body small</BodySmall>
      <HSpacer size={16} />
      <BodySmall color={"error-600"}>Body small</BodySmall>
      <HSpacer size={16} />
      <View style={{ backgroundColor: IOColors["grey-700"] }}>
        <BodySmall color={"white"}>Body small</BodySmall>
      </View>
      <HSpacer size={16} />
      <BodySmall asLink onPress={linkOnPress}>
        Body small asLink
      </BodySmall>
    </View>
    <View style={styles.row}>
      <BodySmall weight="Semibold">Body small SB</BodySmall>
      <HSpacer size={16} />
      <BodySmall weight="Semibold" color="grey-700">
        Body small SB
      </BodySmall>
      <HSpacer size={16} />
      <BodySmall weight="Semibold" color={"error-600"}>
        Body small SB
      </BodySmall>
      <HSpacer size={16} />
      <View style={{ backgroundColor: IOColors["grey-700"] }}>
        <BodySmall weight="Semibold" color={"white"}>
          Body small SB
        </BodySmall>
      </View>
      <HSpacer size={16} />
      <BodySmall asLink onPress={linkOnPress} weight="Semibold">
        Body small SB asLink
      </BodySmall>
    </View>
    <View style={styles.row}>
      <BodySmall weight="Regular">Body small Regular</BodySmall>
      <HSpacer size={16} />
      <BodySmall weight="Regular" color="grey-700">
        Body small Regular
      </BodySmall>
      <HSpacer size={16} />
      <BodySmall weight="Regular" color={"error-600"}>
        Body small Regular
      </BodySmall>
      <HSpacer size={16} />
      <View style={{ backgroundColor: IOColors["grey-700"] }}>
        <BodySmall weight="Regular" color={"white"}>
          Body small Regular
        </BodySmall>
      </View>
      <HSpacer size={16} />
      <BodySmall asLink onPress={linkOnPress} weight="Regular">
        Body small Regular asLink
      </BodySmall>
    </View>
  </>
);

export const LabelMiniRow = () => (
  <>
    <View style={styles.row}>
      <LabelMini>Label mini</LabelMini>
      <HSpacer size={16} />
      <LabelMini color="grey-700">Label mini</LabelMini>
      <HSpacer size={16} />
      <LabelMini color={"error-600"}>Label mini</LabelMini>
      <HSpacer size={16} />
      <View style={{ backgroundColor: IOColors["grey-700"] }}>
        <LabelMini color={"white"}>Label mini</LabelMini>
      </View>
    </View>
    <View style={styles.row}>
      <LabelMini weight="Semibold">Label mini SB</LabelMini>
      <HSpacer size={16} />
      <LabelMini weight="Semibold" color="grey-700">
        Label mini SB
      </LabelMini>
      <HSpacer size={16} />
      <LabelMini weight="Semibold" color={"error-600"}>
        Label mini SB
      </LabelMini>
      <HSpacer size={16} />
      <View style={{ backgroundColor: IOColors["grey-700"] }}>
        <LabelMini weight="Semibold" color={"white"}>
          Label mini SB
        </LabelMini>
      </View>
    </View>
    <View style={styles.row}>
      <LabelMini weight="Regular">Label mini Regular</LabelMini>
      <HSpacer size={16} />
      <LabelMini weight="Regular" color="grey-700">
        Label mini Regular
      </LabelMini>
      <HSpacer size={16} />
      <LabelMini weight="Regular" color={"error-600"}>
        Label mini Regular
      </LabelMini>
      <HSpacer size={16} />
      <View style={{ backgroundColor: IOColors["grey-700"] }}>
        <LabelMini weight="Regular" color={"white"}>
          Label mini Regular
        </LabelMini>
      </View>
    </View>
  </>
);

export const MdH1Row = () => (
  <VStack space={4}>
    <MdH1>{getTitle("Markdown H1")}</MdH1>
    <MdH1 style={styles.distancedTitle}>{getLongerTitle("Markdown H1")}</MdH1>
  </VStack>
);

export const MdH2Row = () => (
  <VStack space={4}>
    <MdH2>{getTitle("Markdown H2")}</MdH2>
    <MdH2 style={styles.distancedTitle}>{getLongerTitle("Markdown H2")}</MdH2>
  </VStack>
);

export const MdH3Row = () => (
  <VStack space={4}>
    <MdH3>{getTitle("Markdown H3")}</MdH3>
    <MdH3 style={styles.distancedTitle}>{getLongerTitle("Markdown H3")}</MdH3>
  </VStack>
);
