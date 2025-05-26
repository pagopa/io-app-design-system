import React from "react";
import { render } from "@testing-library/react-native";
import { IODSExperimentalContextProvider } from "../core/IODSExperimentalContextProvider";

export const renderWithExperimentalEnabledContextProvider = (
  ui: React.ReactElement,
  options?: Parameters<typeof render>[1]
) =>
  render(
    <IODSExperimentalContextProvider isExperimentaEnabled={true}>
      {ui}
    </IODSExperimentalContextProvider>,
    options
  );
