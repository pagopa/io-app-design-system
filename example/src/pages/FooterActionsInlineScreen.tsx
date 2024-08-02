import {
  Body,
  ButtonOutline,
  ContentWrapper,
  FooterActionsInline,
  H1,
  useFooterActionsInlineMeasurements
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { Alert, ScrollView, View } from "react-native";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const FooterActionsInlineScreen = () => {
  const {
    footerActionsInlineMeasurements,
    handleFooterActionsInlineMeasurements
  } = useFooterActionsInlineMeasurements();

  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: footerActionsInlineMeasurements.safeBottomAreaHeight
        }}
      >
        <ContentWrapper>
          <H1>Footer Actions (inline)</H1>
          {[...Array(50)].map((_el, i) => (
            <Body key={`body-${i}`}>{`Repeated text ${i}`}</Body>
          ))}
          <ButtonOutline
            color="primary"
            accessibilityLabel="Test ButtonOutline"
            onPress={() => Alert.alert("Button pressed")}
            label="Test Button"
          />
          {[...Array(10)].map((_el, i) => (
            <Body key={`body-${i}`}>{`Repeated text ${i}`}</Body>
          ))}
        </ContentWrapper>
      </ScrollView>
      <FooterActionsInline
        onMeasure={handleFooterActionsInlineMeasurements}
        startAction={{
          color: "primary",
          label: "Outline button",
          onPress: () => Alert.alert("Button pressed")
        }}
        endAction={{
          color: "primary",
          onPress: () => Alert.alert("Button pressed"),
          label: "Solid button"
        }}
      />
    </View>
  );
};
