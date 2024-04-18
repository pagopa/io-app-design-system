import {
  Body,
  H2,
  IOScrollView,
  VSpacer,
  useIOTheme
} from "@pagopa/io-app-design-system";
import * as React from "react";

export const IOScrollViewScreenWithoutActions = () => {
  const theme = useIOTheme();

  return (
    <IOScrollView>
      <H2 color={theme["textHeading-default"]}>Start</H2>
      {[...Array(50)].map((_el, i) => (
        <Body key={`body-${i}`}>Repeated text</Body>
      ))}
      <VSpacer />
      <H2 color={theme["textHeading-default"]}>End</H2>
    </IOScrollView>
  );
};
