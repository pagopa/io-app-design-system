import * as React from "react";
import { View } from "react-native";
import {
  H1,
  H5,
  IOVisualCostants,
  IOStyles,
  VSpacer,
  AlertEdgeToEdge,
  AlertContext,
  ButtonSolid
} from "@pagopa/io-app-design-system";
import { useContext } from "react";
import { Screen } from "../components/Screen";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const Sandbox = () => {
  const { showAlert, removeAlert } = useContext(AlertContext);

  const handleShowAlert = () => {
    showAlert({
      variant: "error",
      title: "Error title",
      content: "Error content"
    });
  };

  return (
    <Screen>
      <View
        style={[
          IOStyles.flex,
          {
            paddingTop: IOVisualCostants.appMarginDefault
            // backgroundColor: IOColors["blueIO-500"]
          }
        ]}
      >
        <H1>Sandbox</H1>
        <H5>{"Insert here the component you're willing to test"}</H5>
        <ButtonSolid label="Show alert" onPress={handleShowAlert} />
        <ButtonSolid label="Hide alert" onPress={removeAlert} />
        <VSpacer />
        {/* Insert here the component you're willing to test */}
      </View>
    </Screen>
  );
};
