import {
  H4,
  IOVisualCostants,
  SearchInput,
  VStack
} from "@pagopa/io-app-design-system";
import React from "react";
import { Alert, ScrollView } from "react-native";

export const SearchCustom = () => (
  <ScrollView
    keyboardShouldPersistTaps="always"
    contentContainerStyle={{
      padding: IOVisualCostants.appMarginDefault
    }}
  >
    <VStack space={32}>
      <VStack space={8}>
        <H4>Basic behavior</H4>
        <SearchInput
          clearAccessibilityLabel="Cancella"
          placeholder="Cerca nei messaggi"
          accessibilityLabel="Search input"
          cancelButtonLabel="Annulla"
        />
      </VStack>
      <VStack space={8}>
        <H4>Pressable behavior</H4>
        <SearchInput
          pressable={{
            onPress: () => {
              Alert.alert("Pressed");
            }
          }}
          clearAccessibilityLabel="Cancella"
          placeholder="Cerca nei messaggi"
          accessibilityLabel="Search input"
          cancelButtonLabel="Annulla"
        />
      </VStack>
    </VStack>
  </ScrollView>
);
