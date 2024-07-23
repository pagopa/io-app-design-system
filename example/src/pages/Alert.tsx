import {
  Alert,
  AlertEdgeToEdge,
  AlertEdgeToEdgeContext,
  ButtonOutline,
  ButtonSolid,
  H2,
  H3,
  H6,
  HStack,
  IOVisualCostants,
  VSpacer,
  VStack
} from "@pagopa/io-app-design-system";
import React, { ComponentProps, useContext } from "react";
import { Alert as RNAlert } from "react-native";
import { FullWidthComponent } from "../components/FullWidthComponent";
import { Screen } from "../components/Screen";

export const DSAlert = () => {
  const viewRef = React.useRef(null);

  const { showAlert, removeAlert } = useContext(AlertEdgeToEdgeContext);

  const handleShowAlert = (
    variant: ComponentProps<typeof AlertEdgeToEdge>["variant"],
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
        color={"bluegrey"}
        weight={"Semibold"}
        style={{
          paddingTop: IOVisualCostants.appMarginDefault,
          marginBottom: 16
        }}
      >
        Edge to edge
      </H3>

      <VStack space={8}>
        {["info", "warning", "error"].map(variant => (
          <VStack space={4} key={variant}>
            <H6 color={"bluegrey"} style={{ textTransform: "capitalize" }}>
              {variant}
            </H6>
            <HStack space={4}>
              <ButtonSolid
                label="w/ Action"
                onPress={() =>
                  handleShowAlert(
                    variant as ComponentProps<
                      keyof typeof AlertEdgeToEdge
                    >["variant"]
                  )
                }
              />
              <ButtonSolid
                label="w/o Action"
                onPress={() =>
                  handleShowAlert(
                    variant as ComponentProps<
                      keyof typeof AlertEdgeToEdge
                    >["variant"],
                    false
                  )
                }
              />
            </HStack>
            <ButtonOutline label="Hide" onPress={removeAlert} />
          </VStack>
        ))}
      </VStack>

      <VSpacer size={24} />

      {/* Content only */}
      <H3
        color={"bluegrey"}
        style={{
          marginBottom: 16
        }}
      >
        Content only
      </H3>
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

      <VSpacer size={40} />

      <H3 color={"bluegrey"} style={{ marginBottom: 16 }}>
        Title + Content
      </H3>

      <Alert
        ref={viewRef}
        variant="error"
        title="Alert title"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="warning"
        title="Alert title"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="info"
        title="Alert title"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="success"
        title="Alert title"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="info"
        title="A very very very looooooooooong title"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer size={40} />

      <H2 color={"bluegrey"} weight={"Semibold"} style={{ marginBottom: 16 }}>
        Content + Action
      </H2>

      <Alert
        ref={viewRef}
        variant="error"
        action="Alert action"
        onPress={() => {
          alert("Action triggered");
        }}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="warning"
        action="Alert action"
        onPress={() => {
          alert("Action triggered");
        }}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="info"
        action="Alert action"
        onPress={() => {
          alert("Action triggered");
        }}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        ref={viewRef}
        variant="success"
        action="Alert action"
        onPress={() => {
          alert("Action triggered");
        }}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer size={40} />

      {/* Full width */}
      <H2 color={"bluegrey"} weight={"Semibold"} style={{ marginBottom: 16 }}>
        Full width
      </H2>
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
          title="Alert title"
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />

        <VSpacer />

        <Alert
          fullWidth
          ref={viewRef}
          variant="info"
          action="Alert action"
          onPress={() => {
            alert("Action triggered");
          }}
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />
      </FullWidthComponent>

      <VSpacer size={40} />
    </Screen>
  );
};
