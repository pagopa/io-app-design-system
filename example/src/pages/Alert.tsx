import {
  Alert,
  AlertEdgeToEdgeContext,
  ButtonSolid,
  H2,
  H3,
  HStack,
  IOVisualCostants,
  VSpacer
} from "@pagopa/io-app-design-system";
import React, { useContext } from "react";
import { View } from "react-native";
import { FullWidthComponent } from "../components/FullWidthComponent";
import { Screen } from "../components/Screen";

export const DSAlert = () => {
  const viewRef = React.createRef<View>();

  const { showAlert, removeAlert } = useContext(AlertEdgeToEdgeContext);

  const handleShowAlert = () => {
    showAlert({
      variant: "error",
      content:
        "Error content that is very long and shouldn't be truncated. Another line of text because I need to test a looooonger text"
    });
  };

  return (
    <Screen>
      <H3
        color={"bluegrey"}
        weight={"SemiBold"}
        style={{
          paddingTop: IOVisualCostants.appMarginDefault,
          marginBottom: 16
        }}
      >
        Edge to edge
      </H3>
      <HStack space={8}>
        <ButtonSolid label="Show alert" onPress={handleShowAlert} />
        <ButtonSolid label="Hide alert" onPress={removeAlert} />
      </HStack>

      <VSpacer size={24} />

      {/* Content only */}
      <H3
        color={"bluegrey"}
        weight={"SemiBold"}
        style={{
          marginBottom: 16
        }}
      >
        Content only
      </H3>
      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="error"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="warning"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="info"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="success"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer size={40} />

      <H3 color={"bluegrey"} weight={"SemiBold"} style={{ marginBottom: 16 }}>
        Title + Content
      </H3>

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="error"
        title="Alert title"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="warning"
        title="Alert title"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="info"
        title="Alert title"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="success"
        title="Alert title"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="info"
        title="A very very very looooooooooong title"
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer size={40} />

      <H2 color={"bluegrey"} weight={"SemiBold"} style={{ marginBottom: 16 }}>
        Content + Action
      </H2>

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="error"
        action="Alert action"
        onPress={() => {
          alert("Action triggered");
        }}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="warning"
        action="Alert action"
        onPress={() => {
          alert("Action triggered");
        }}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="info"
        action="Alert action"
        onPress={() => {
          alert("Action triggered");
        }}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer />

      <Alert
        viewRef={viewRef as React.RefObject<any>}
        variant="success"
        action="Alert action"
        onPress={() => {
          alert("Action triggered");
        }}
        content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
      />

      <VSpacer size={40} />

      {/* Full width */}
      <H2 color={"bluegrey"} weight={"SemiBold"} style={{ marginBottom: 16 }}>
        Full width
      </H2>
      <FullWidthComponent>
        <Alert
          fullWidth
          viewRef={viewRef as React.RefObject<any>}
          variant="error"
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />

        <VSpacer />

        <Alert
          fullWidth
          viewRef={viewRef as React.RefObject<any>}
          variant="warning"
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />

        <VSpacer />

        <Alert
          fullWidth
          viewRef={viewRef as React.RefObject<any>}
          variant="info"
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />

        <VSpacer />

        <Alert
          fullWidth
          viewRef={viewRef as React.RefObject<any>}
          variant="success"
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />

        <VSpacer />

        <Alert
          fullWidth
          viewRef={viewRef as React.RefObject<any>}
          variant="info"
          title="Alert title"
          content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
        />

        <VSpacer />

        <Alert
          fullWidth
          viewRef={viewRef as React.RefObject<any>}
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
