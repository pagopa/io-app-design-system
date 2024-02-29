import React from "react";
import TestRenderer from "react-test-renderer";
import { IODSExperimentalContextProvider } from "../core/IODSExperimentalContextProvider";

export const TestRendererWithExperimentalEnabledContextProvider = (
  ui: React.ReactElement,
  options?: TestRenderer.TestRendererOptions
) =>
  TestRenderer.create(
    <IODSExperimentalContextProvider isExperimentaEnabled={true}>
      {ui}
    </IODSExperimentalContextProvider>,
    options
  );
