import {
  Alert,
  AlertEdgeToEdgeProps,
  H2,
  H3,
  H6,
  HeaderSecondLevel,
  HStack,
  IOButton,
  IOVisualCostants,
  VSpacer,
  VStack
} from "@pagopa/io-app-design-system";
import { useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect, useRef } from "react";
import { Alert as RNAlert } from "react-native";
import { FullWidthComponent } from "../components/FullWidthComponent";
import { Screen } from "../components/Screen";
import { StatusBannerContext } from "../components/StatusBannerProvider";

const onAlertPress = () => {
  RNAlert.alert("Alert triggered");
};

export const DSAlert = () => {
  const viewRef = useRef(null);

  const { showAlert, removeAlert } = useContext(StatusBannerContext);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderSecondLevel
          title="Alert"
          goBack={() => navigation.goBack()}
          backAccessibilityLabel="Torna indietro"
          type="threeActions"
          firstAction={{
            icon: "help",
            onPress: () => RNAlert.alert("help"),
            accessibilityLabel: ""
          }}
          secondAction={{
            icon: "add",
            onPress: () => RNAlert.alert("add"),
            accessibilityLabel: ""
          }}
          thirdAction={{
            icon: "coggle",
            onPress: () => RNAlert.alert("coggle"),
            accessibilityLabel: ""
          }}
        />
      )
    });
  });

  const handleShowAlert = (
    variant: AlertEdgeToEdgeProps["variant"],
    enableAction = true
  ) => {
    const content =
      "Alert content that is very long. And here's another line of text because I need to test a looooonger text.";
    const actionProps = {
      action: "Action text that's very long and could be placed on a new line",
      onPress: () => RNAlert.alert("Action triggered")
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    enableAction
      ? showAlert({ variant, content, ...actionProps })
      : showAlert({ variant, content });
  };

  return (
    <Screen>
      <H3
        color={"grey-700"}
        style={{
          paddingTop: IOVisualCostants.appMarginDefault,
          marginBottom: 16
        }}
      >
        Edge to edge
      </H3>

      <VStack space={8}>
        {["info", "warning", "error", "success"].map(variant => (
          <VStack space={4} key={variant}>
            <H6 color={"grey-700"} style={{ textTransform: "capitalize" }}>
              {variant}
            </H6>
            <HStack space={4}>
              <IOButton
                variant="solid"
                label="w/ Action"
                onPress={() =>
                  handleShowAlert(variant as AlertEdgeToEdgeProps["variant"])
                }
              />
              <IOButton
                variant="solid"
                label="w/o Action"
                onPress={() =>
                  handleShowAlert(
                    variant as AlertEdgeToEdgeProps["variant"],
                    false
                  )
                }
              />
            </HStack>
            <IOButton variant="outline" label="Hide" onPress={removeAlert} />
          </VStack>
        ))}
      </VStack>

      <VSpacer size={24} />

      {/* Content only */}
      <H3
        color={"grey-700"}
        style={{
          marginBottom: 16
        }}
      >
        Content only
      </H3>

      <Alert ref={viewRef} variant="error" content="Ut enim ad minim veniam" />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="error"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="warning"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="info"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="success"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert ref={viewRef} variant="success" content="Single line" />

      <VSpacer size={40} />

      <H2 style={{ marginBottom: 16 }}>Content + Action</H2>

      <Alert
        ref={viewRef}
        variant="error"
        action="Alert action"
        onPress={onAlertPress}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="warning"
        action="Alert action"
        onPress={onAlertPress}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="info"
        action="Alert action"
        onPress={onAlertPress}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="success"
        action="Alert action"
        onPress={onAlertPress}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer size={40} />

      {/* Full width */}
      <H2 style={{ marginBottom: 16 }}>Full width</H2>
      <FullWidthComponent>
        <Alert
          fullWidth
          ref={viewRef}
          variant="error"
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />

        <VSpacer />

        <Alert
          fullWidth
          ref={viewRef}
          variant="warning"
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />

        <VSpacer />

        <Alert
          fullWidth
          ref={viewRef}
          variant="info"
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />

        <VSpacer />

        <Alert
          fullWidth
          ref={viewRef}
          variant="success"
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />

        <VSpacer />

        <Alert
          fullWidth
          ref={viewRef}
          variant="info"
          action="Alert action"
          onPress={onAlertPress}
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />
      </FullWidthComponent>

      <VSpacer size={40} />
    </Screen>
  );
};
