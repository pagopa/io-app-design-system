import {
  H4,
  IOVisualCostants,
  SearchInput,
  VStack
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Platform, ScrollView } from "react-native";

export const SearchCustom = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = React.useState("");

  return (
    <ScrollView
      contentContainerStyle={{
        padding: IOVisualCostants.appMarginDefault
      }}
      keyboardDismissMode={Platform.select({
        ios: "interactive",
        default: "on-drag"
      })}
      keyboardShouldPersistTaps="handled"
    >
      <VStack space={32}>
        <VStack space={8}>
          <H4>Basic behavior</H4>
          <SearchInput
            autoFocus
            accessibilityLabel="Search input"
            cancelButtonLabel="Annulla"
            clearAccessibilityLabel="Cancella"
            keepCancelVisible
            onCancel={() => navigation.goBack()}
            onChangeText={setInputValue}
            placeholder="Cerca nei messaggi"
            value={inputValue}
          />
        </VStack>
        <VStack space={8}>
          <H4>Pressable behavior</H4>
          <SearchInput
            accessibilityLabel="Search input"
            cancelButtonLabel="Annulla"
            clearAccessibilityLabel="Cancella"
            placeholder="Cerca nei messaggi"
            pressable={{
              onPress: () => {
                Alert.alert("Pressed");
              }
            }}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
};
