import * as React from "react";
import { Alert, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  AlertEdgeToEdgeProps,
  Body,
  ButtonOutline,
  ButtonSolid,
  H3,
  H6,
  HeaderFirstLevel,
  HStack,
  IOVisualCostants,
  VSpacer,
  VStack
} from "@pagopa/io-app-design-system";
import { useContext, useLayoutEffect } from "react";
import { StatusBannerContext } from "../components/StatusBannerProvider";

export const HeaderFirstLevelScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const { showAlert, removeAlert, alert } = useContext(StatusBannerContext);

  const handleShowAlert = (
    variant: AlertEdgeToEdgeProps["variant"],
    enableAction = true
  ) => {
    const content =
      "Alert content that is very long. And here's another line of text because I need to test a looooonger text.";
    const actionProps = {
      action: "Action text that's very long and could be placed on a new line",
      onPress: () => Alert.alert("Action triggered")
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    enableAction
      ? showAlert({ variant, content, ...actionProps })
      : showAlert({ variant, content });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderFirstLevel
          ignoreSafeAreaMargin={alert !== undefined}
          title={"Pagina"}
          firstAction={{
            icon: "help",
            accessibilityLabel: "Go to the help section",
            onPress: () => {
              Alert.alert("Contextual Help");
            }
          }}
          secondAction={{
            icon: "coggle",
            accessibilityLabel: "Go to the Settings section",
            onPress: () => {
              Alert.alert("Settings");
            }
          }}
        />
      )
    });
  }, [navigation, alert]);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: insets.bottom,
        paddingHorizontal: IOVisualCostants.appMarginDefault
      }}
      scrollEventThrottle={8}
    >
      <H3>Questo è un titolo lungo, ma lungo lungo davvero, eh!</H3>
      <VSpacer />
      <ButtonSolid
        label="Torna indietro"
        onPress={navigation.goBack}
        accessibilityLabel=""
      />
      <VSpacer />
      {["info", "warning", "error"].map(variant => (
        <VStack space={4} key={variant}>
          <H6 color={"bluegrey"} style={{ textTransform: "capitalize" }}>
            {variant}
          </H6>
          <HStack space={4}>
            <ButtonSolid
              label="w/ Action"
              onPress={() =>
                handleShowAlert(variant as AlertEdgeToEdgeProps["variant"])
              }
            />
            <ButtonSolid
              label="w/o Action"
              onPress={() =>
                handleShowAlert(
                  variant as AlertEdgeToEdgeProps["variant"],
                  false
                )
              }
            />
          </HStack>
          <ButtonOutline label="Hide" onPress={removeAlert} />
        </VStack>
      ))}
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
    </ScrollView>
  );
};
