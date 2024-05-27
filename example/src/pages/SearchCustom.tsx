import { IOVisualCostants, SearchInput } from "@pagopa/io-app-design-system";
import React from "react";
import { ScrollView } from "react-native";

export const SearchCustom = () => (
  <ScrollView
    keyboardShouldPersistTaps="always"
    contentContainerStyle={{
      padding: IOVisualCostants.appMarginDefault
    }}
  >
    <SearchInput
      clearAccessibilityLabel="Cancella"
      placeholder="Cerca nei messaggi"
      accessibilityLabel="Search input"
      cancelButtonLabel="Annulla"
    />
  </ScrollView>
);
