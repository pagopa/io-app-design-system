import {
  Badge,
  H2,
  HSpacer,
  IOColors,
  IOStyles,
  IOTagRadius,
  IOVisualCostants,
  Tag,
  VSpacer
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
    <View style={IOStyles.row}>
      <Badge text={"Default"} variant="default" />
    </View>
    <VSpacer size={16} />
    <View style={IOStyles.row}>
      <Badge text={"Info"} variant="info" />
      <HSpacer size={16} />
      <Badge text={"Warning"} variant="warning" />
      <HSpacer size={16} />
      <Badge text={"Error"} variant="error" />
      <HSpacer size={16} />
      <Badge text={"Success"} variant="success" />
    </View>
    <VSpacer size={16} />
    <View style={IOStyles.row}>
      <Badge text={"Purple"} variant="purple" />
      <HSpacer size={16} />
      <Badge text={"Light blue"} variant="lightBlue" />
      <HSpacer size={16} />
      <Badge text={"Blue"} variant="blue" />
      <HSpacer size={16} />
      <Badge text={"Turquoise"} variant="turquoise" />
      <HSpacer size={16} />
    </View>
    <VSpacer size={16} />
    <View style={IOStyles.row}>
      <Badge outline text={"Info"} variant="info" />
      <HSpacer size={16} />
      <Badge outline text={"Warning"} variant="warning" />
      <HSpacer size={16} />
      <Badge outline text={"Error"} variant="error" />
      <HSpacer size={16} />
      <Badge outline text={"Success"} variant="success" />
    </View>
    <VSpacer size={16} />
    <View style={IOStyles.row}>
      <Badge outline text={"Purple"} variant="purple" />
      <HSpacer size={16} />
      <Badge outline text={"Light blue"} variant="lightBlue" />
      <HSpacer size={16} />
      <Badge outline text={"Blue"} variant="blue" />
      <HSpacer size={16} />
      <Badge outline text={"Turquoise"} variant="turquoise" />
      <HSpacer size={16} />
    </View>
    <VSpacer size={16} />
    <View
      style={{
        backgroundColor: IOColors.bluegrey,
        padding: 16,
        borderRadius: 8
      }}
    >
      <View style={IOStyles.row}>
        <Badge text={"Default"} variant="default" />
        <HSpacer size={16} />
        <Badge text={"Contrast"} variant="contrast" />
      </View>
    </View>
    <VSpacer size={16} />
    <ComponentViewerBox name={"Badge, font scaling not allowed"}>
      <View style={IOStyles.row}>
        <Badge
          allowFontScaling={false}
          outline
          text={"Purple"}
          variant="purple"
        />
      </View>
    </ComponentViewerBox>
  </>
);

const renderTag = () => (
  <View>
    <ComponentViewerBox name={"Tag, different variants"}>
      <Tag text={"Entro il 30 mag"} variant="warning" />
      <VSpacer size={8} />
      <Tag text={"Completato"} variant="success" />
      <VSpacer size={8} />
      <Tag text={"Scaduto"} variant="error" />
      <VSpacer size={8} />
      <View style={IOStyles.row}>
        <Tag text={"Certificato"} variant="qrCode" />
        <HSpacer size={8} />
        <Tag text={"Valore legale"} variant="legalMessage" />
      </View>
      <VSpacer size={8} />
      <Tag variant="attachment" iconAccessibilityLabel="Attachment" />
      <VSpacer size={8} />
      <Tag text={"No icon"} variant="noIcon" />
      <VSpacer size={8} />
      <Tag
        text={"Custom icon"}
        variant="customIcon"
        customIconProps={{
          iconName: "categTravel",
          iconColor: "grey-700"
        }}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name={"Tag, stress test"}>
      <View
        style={{
          backgroundColor: IOColors["error-100"],
          padding: 8,
          width: "60%",
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
