import {
  Body,
  ButtonText,
  Caption,
  Chip,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Hero,
  HSpacer,
  IOColors,
  Label,
  LabelSmall,
  Link,
  BodyMonospace,
  VSpacer
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

export const Typography = () => (
  <Screen>
    <HeroRow />
    <H1Row />
    <H2Row />
    <H3Row />
    <H4Row />
    <H5Row />
    <H6Row />

    <ButtonTextRow />
    <CaptionRow />
    <ChipRow />

    <Body>Body</Body>
    <Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a felis
      congue, congue leo sit amet, semper ex. Nulla consectetur non quam vel
      porttitor. Vivamus ac ex non nunc pellentesque molestie. Aliquam id lorem
      aliquam, aliquam massa eget, commodo erat. Maecenas finibus dui massa,
      eget pharetra mauris posuere semper.
    </Body>
    <VSpacer size={40} />
    <BodyMonospace>BodyMonoSpace</BodyMonospace>
    <VSpacer size={40} />

    <LabelSmallRow />
    <LabelRow />
    <Link onPress={() => Alert.alert("onPress link!")}>Link</Link>
    <VSpacer size={40} />
  </Screen>
);

const getTitle = (element: string) => `Heading ${element}`;
const getLongerTitle = (element: string) =>
  `Very loooong looong title set with Heading ${element}`;

export const DarkBackgroundTypographicScale = () => (
  <View style={{ backgroundColor: IOColors.bluegrey }}>
    <H1 color={"white"}>Header H1</H1>
    <HSpacer size={16} />
  </View>
);

export const HeroRow = () => (
  <>
    <View>
      <Hero>{getTitle("Hero")}</Hero>
      <Hero>{getLongerTitle("Hero")}</Hero>
    </View>
    <VSpacer size={40} />
  </>
);

export const H1Row = () => (
  <>
    <View>
      <H1>{getTitle("H1")}</H1>
      <H1 style={styles.distancedTitle}>{getLongerTitle("H1")}</H1>
    </View>
    <VSpacer size={40} />
  </>
);

export const H2Row = () => (
  <>
    <View>
      <H2>{getTitle("H2")}</H2>
      <H2 style={styles.distancedTitle}>{getLongerTitle("H2")}</H2>
    </View>
    <VSpacer size={40} />
  </>
);

export const H3Row = () => (
  <>
    <View style={styles.row}>
      <H3>Header H3</H3>
      <HSpacer size={16} />
      <H3 color="grey-650">Header H3</H3>
      <HSpacer size={16} />
      <View style={{ backgroundColor: IOColors["grey-700"] }}>
        <H3 color={"white"}>Header H3</H3>
      </View>
    </View>
    <VSpacer size={40} />
  </>
);

export const H4Row = () => (
  <>
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
    <VSpacer size={40} />
  </>
);

export const H5Row = () => (
  <>
    <View style={styles.row}>
      <H5>Header H5</H5>
      <HSpacer size={16} />
      <H5 color="grey-650">Header H5</H5>
      <HSpacer size={16} />
      <H5 color={"blueIO-500"}>Header H5</H5>
    </View>
    <VSpacer size={40} />
  </>
);

export const H6Row = () => (
  <>
    <View style={styles.row}>
      <H6>Header H6</H6>
      <HSpacer size={16} />
      <H6 color="grey-650">Header H6</H6>
      <HSpacer size={16} />
      <H6 color={"blueIO-500"}>Header H6</H6>
    </View>
    <VSpacer size={40} />
  </>
);

export const ButtonTextRow = () => (
  <>
    <View style={styles.row}>
      <View style={{ backgroundColor: IOColors["grey-700"] }}>
        <ButtonText>ButtonText</ButtonText>
      </View>
      <HSpacer size={16} />
      <ButtonText color="grey-700">ButtonText</ButtonText>
      <HSpacer size={16} />
      <ButtonText color="blueIO-500">ButtonText</ButtonText>
    </View>
    <VSpacer size={40} />
  </>
);

export const CaptionRow = () => (
  <>
    <View style={styles.row}>
      <Caption>Caption</Caption>
      <HSpacer size={16} />
      <Caption color="grey-650">Caption</Caption>
      <HSpacer size={16} />
      <Caption color={"blueIO-500"}>Caption</Caption>
    </View>
    <VSpacer size={40} />
  </>
);

export const ChipRow = () => (
  <>
    <View style={styles.row}>
      <Chip>Chip</Chip>
      <HSpacer size={16} />
      <Chip color="grey-650">Chip</Chip>
      <HSpacer size={16} />
      <Chip color={"blueIO-500"}>Chip</Chip>
    </View>
    <VSpacer size={40} />
  </>
);

export const LabelSmallRow = () => (
  <>
    <View style={styles.row}>
      <LabelSmall>Label small</LabelSmall>
      <HSpacer size={16} />
      <LabelSmall color={"bluegrey"}>Label small</LabelSmall>
      <HSpacer size={16} />
      <LabelSmall color={"red"}>Label small</LabelSmall>
      <HSpacer size={16} />
      <View style={{ backgroundColor: IOColors.bluegrey }}>
        <LabelSmall color={"white"}>Label small</LabelSmall>
      </View>
    </View>
    <VSpacer size={40} />
  </>
);

export const LabelRow = () => (
  <>
    <View style={styles.row}>
      <Label>Label</Label>
      <HSpacer size={16} />
      <View style={{ backgroundColor: IOColors.bluegrey }}>
        <Label color={"white"}>Label</Label>
      </View>
    </View>
    <VSpacer size={40} />
  </>
);
