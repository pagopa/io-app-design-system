import { IOButton, VSpacer, useIOToast } from "@pagopa/io-app-design-system";
import { Screen } from "../components/Screen";

export const Toasts = () => {
  const { error, show, info, success, warning } = useIOToast();
  return (
    <Screen>
      <IOButton
        variant="solid"
        onPress={() => error("Error Toast")}
        accessibilityLabel=""
        label="Toast Error"
      />
      <VSpacer />
      <IOButton
        variant="solid"
        accessibilityLabel=""
        onPress={() => info("Info Toast with a looooooooooong title")}
        label="Toast Info"
      />
      <VSpacer />
      <IOButton
        variant="solid"
        accessibilityLabel=""
        onPress={() => show("Toast show simple")}
        label="Toast show"
      />
      <VSpacer />
      <IOButton
        variant="solid"
        accessibilityLabel=""
        onPress={() => success("Success Toast")}
        label="Toast success"
      />
      <VSpacer />
      <IOButton
        variant="solid"
        accessibilityLabel=""
        onPress={() => warning("Warning Toast")}
        label="Toast warning"
      />
    </Screen>
  );
};
