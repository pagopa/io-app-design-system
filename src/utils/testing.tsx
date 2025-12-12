import React from "react";
import { render, RenderOptions } from "@testing-library/react-native";
import { IODSExperimentalContextProvider } from "../context/IODSExperimentalContextProvider";

export const renderWithExperimentalEnabledContextProvider = (
  ui: React.ReactElement,
  options?: RenderOptions
) =>
  render(
    <IODSExperimentalContextProvider isExperimentaEnabled={true}>
      {ui}
    </IODSExperimentalContextProvider>,
    options
  );
