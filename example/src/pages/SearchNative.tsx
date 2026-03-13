import {
  Body,
  H2,
  IOVisualCostants,
  useIOTheme
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ScrollView } from "react-native";

export const SearchNative = () => {
  const navigation = useNavigation();
  const theme = useIOTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        textColor: theme["textBody-default"],
        barTintColor: theme["appBackground-secondary"],
        tintColor: theme["interactiveElem-default"],
        placeholder: "Cerca tra i tuoi messaggi",
        cancelButtonText: "Annulla",
        hideWhenScrolling: false
      }
    });
  }, [navigation, theme]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        padding: IOVisualCostants.appMarginDefault
      }}
    >
      <H2>Start</H2>
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>{`Repeated text ${i}`}</Body>
      ))}
      <H2>End</H2>
    </ScrollView>
  );
};
