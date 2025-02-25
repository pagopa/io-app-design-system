import {
  Badge,
  H2,
  H4,
  hexToRgba,
  HStack,
  IOColors,
  IOTagRadius,
  IOVisualCostants,
  Tag,
  VSpacer,
  VStack
} from "@pagopa/io-app-design-system";
import React from "react";
import { View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";

export const Badges = () => (
  <Screen>
    <H2
      style={{
        marginBottom: 16,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      Tag
    </H2>
    {renderTag()}

    <VSpacer size={16} />

    <H2 style={{ marginVertical: 16 }}>Badge</H2>
    {renderBadge()}

    <VSpacer size={40} />
  </Screen>
);

const renderBadge = () => (
  <>
    <VStack space={24}>
      <VStack space={16}>
        <H4>Default</H4>
        <HStack space={8} style={{ flexWrap: "wrap" }}>
          <Badge text={"Default"} variant="default" />
          <Badge text={"Warning"} variant="warning" />
          <Badge text={"Error"} variant="error" />
          <Badge text={"Success"} variant="success" />
          <Badge text={"Cgn"} variant="cgn" />
          <Badge text={"Highlight"} variant="highlight" />
        </HStack>
      </VStack>
      <VStack space={16}>
        <H4>Outline</H4>
        <HStack space={8} style={{ flexWrap: "wrap" }}>
          <Badge outline text={"Default"} variant="default" />
          <Badge outline text={"Warning"} variant="warning" />
          <Badge outline text={"Error"} variant="error" />
          <Badge outline text={"Success"} variant="success" />
          <Badge outline text={"Cgn"} variant="cgn" />
          <Badge outline text={"Highlight"} variant="highlight" />
        </HStack>
      </VStack>
    </VStack>
  </>
);

const renderTag = () => (
  <View>
    <ComponentViewerBox name={"Tag, different variants"}>
      <VStack space={8}>
        <Tag text={"Entro il 30 mag"} variant="warning" />
        <Tag text={"Completato"} variant="success" />
        <Tag text={"Scaduto"} variant="error" />
        <Tag text={"Informazione"} variant="info" />
        <HStack space={8}>
          <Tag text={"Certificato"} variant="qrCode" />
          <Tag text={"Valore legale"} variant="legalMessage" />
        </HStack>
        <Tag variant="attachment" iconAccessibilityLabel="Attachment" />
        <Tag text={"No icon"} variant="noIcon" />
        <Tag
          text={"Custom icon"}
          variant="custom"
          icon={{ name: "categTravel", color: "lightGrey" }}
        />
      </VStack>
    </ComponentViewerBox>

    <ComponentViewerBox name={"Tag, forced light mode"}>
      <HStack space={8} style={{ flexWrap: "wrap" }}>
        <Tag forceLightMode text={"Entro il 30 mag"} variant="warning" />
        <Tag forceLightMode text={"Completato"} variant="success" />
        <Tag forceLightMode text={"Scaduto"} variant="error" />
        <Tag forceLightMode text={"Informazione"} variant="info" />
        <Tag
          forceLightMode
          variant="attachment"
          iconAccessibilityLabel="Attachment"
        />
        <Tag forceLightMode text={"No icon"} variant="noIcon" />
        <Tag
          forceLightMode
          text={"Custom icon"}
          variant="custom"
          icon={{ name: "categTravel", color: "lightGrey" }}
        />
      </HStack>
    </ComponentViewerBox>
    <ComponentViewerBox name={"Tag, stress test"}>
      <View
        style={{
          backgroundColor: hexToRgba(IOColors["error-400"], 0.25),
          padding: 8,
          width: "50%",
          borderRadius: IOTagRadius + 8
        }}
      >
        <Tag text={"Looooooooong string"} variant="error" />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name={"Tag, font scaling not allowed"}>
      <Tag
        text={"Entro il 30 mag"}
        variant="warning"
        allowFontScaling={false}
      />
    </ComponentViewerBox>
  </View>
);
