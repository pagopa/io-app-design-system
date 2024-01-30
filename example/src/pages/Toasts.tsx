import { ButtonSolid, VSpacer, useIOToast } from "@pagopa/io-app-design-system";
import React from "react";
import { Screen } from "../components/Screen";

export const Toasts = () => {
  const { error, show, info, success, warning } = useIOToast();
  return (
    <Screen>
      <ButtonSolid
        onPress={() => error("Error Toast")}
        accessibilityLabel=""
        label="Toast Error"
      />
      <VSpacer />
      <ButtonSolid
        accessibilityLabel=""
        onPress={() => info("Info Toast with a looooooooooong title")}
        label="Toast Info"
      />
      <VSpacer />
      <ButtonSolid
        accessibilityLabel=""
        onPress={() => show("Toast show simple")}
        label="Toast show"
      />
      <VSpacer />
      <ButtonSolid
        accessibilityLabel=""
        onPress={() => success("Success Toast")}
        label="Toast success"
      />
      <VSpacer />
      <ButtonSolid
        accessibilityLabel=""
        onPress={() => warning("Warning Toast")}
        label="Toast warning"
      />
    </Screen>
  );
};
