import {
  Body,
  ContentWrapper,
  FooterActions,
  H2,
  IOColors,
  VSpacer,
  useFooterActionsMeasurements
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { Alert, Platform, ScrollView, View } from "react-native";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const FooterActionsEmptyStateScreen = () => {
  const { footerActionsMeasurements, handleFooterActionsMeasurements } =
    useFooterActionsMeasurements();

  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: IOColors["error-100"]
      }}
    >
      {/* This extra View is mandatory when you have a fixed
        bottom component to get a consistent behavior
        across platforms */}
      <View
        style={{
          flexGrow: 1,
          paddingBottom: footerActionsMeasurements.safeBottomAreaHeight
        }}
      >
        <ScrollView
          centerContent
          contentContainerStyle={[
            { backgroundColor: IOColors.white },
            /* Android fallback because `centerContent`
              is only an iOS property */
            Platform.OS === "android" && {
              flexGrow: 1,
              justifyContent: "center"
            }
          ]}
        >
          <ContentWrapper>
            <H2>Start</H2>
            <VSpacer size={24} />
            <Body>Single text</Body>
            <VSpacer size={24} />
            <H2>End</H2>
          </ContentWrapper>
        </ScrollView>
      </View>
      <FooterActions
        onMeasure={handleFooterActionsMeasurements}
        actions={{
          type: "SingleButton",
          primary: {
            label: "Pay button",
            onPress: () => Alert.alert("Button pressed")
          }
        }}
      />
    </View>
  );
};
