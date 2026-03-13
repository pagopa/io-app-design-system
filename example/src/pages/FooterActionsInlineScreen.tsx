import {
  Body,
  ContentWrapper,
  FooterActionsInline,
  H1,
  IOButton,
  useFooterActionsInlineMeasurements
} from "@pagopa/io-app-design-system";

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
          <IOButton
            variant="outline"
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
