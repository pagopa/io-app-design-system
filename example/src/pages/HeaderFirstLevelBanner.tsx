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

export const HeaderFirstLevelBannerScreen = () => {
  const [alertProps, setAlertProps] =
    React.useState<React.ComponentProps<typeof HeaderFirstLevel>["alertProps"]>(
      undefined
    );
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderFirstLevel
          backgroundColor="light"
          title={"Pagina"}
          type="singleAction"
          alertProps={alertProps}
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
  }, [navigation, alertProps]);

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
        color={alertProps ? "danger" : "primary"}
        label={`${alertProps ? "Disattiva" : "Attiva"} banner di stato`}
        onPress={() =>
          setAlertProps(ap =>
            ap
              ? undefined
              : {
                  variant: "warning",
                  content: "Ci sono problemi nella sezione pagamenti"
                }
          )
        }
        fullWidth
      />
      <VSpacer />
      <ButtonSolid
        label="Torna indietro"
        onPress={navigation.goBack}
        accessibilityLabel=""
      />
      <VSpacer />
    </ScrollView>
  );
};
