import * as React from "react";
import { Alert, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  Body,
  ButtonSolid,
  H3,
  HeaderFirstLevel,
  IOVisualCostants,
  VSpacer
} from "@pagopa/io-app-design-system";

export const HeaderFirstLevelScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderFirstLevel
          backgroundColor="dark"
          title={"Pagina"}
          type="singleAction"
          firstAction={{
            icon: "help",
            onPress: () => {
              Alert.alert("Contextual Help");
            },
            accessibilityLabel: ""
          }}
        />
      )
    });
  }, [navigation]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: insets.bottom,
        paddingHorizontal: IOVisualCostants.appMarginDefault
      }}
      scrollEventThrottle={8}
      snapToEnd={false}
      decelerationRate="normal"
    >
      <H3>Questo è un titolo lungo, ma lungo lungo davvero, eh!</H3>
      <VSpacer />
      <ButtonSolid
        label="Torna indietro"
        onPress={navigation.goBack}
        accessibilityLabel=""
      />
      <VSpacer />
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
    </ScrollView>
  );
};
