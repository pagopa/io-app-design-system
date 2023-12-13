import React from "react";
import TestRenderer from "react-test-renderer";
import { IODSExperimentalEnabledContextProvider } from "../core/IODSExperimentalContextProvider";

export const TestRendererWithExperimentalEnabledContextProvider = (
  ui: React.ReactElement,
  options?: TestRenderer.TestRendererOptions
) =>
  TestRenderer.create(
    <IODSExperimentalEnabledContextProvider>
      {ui}
    </IODSExperimentalEnabledContextProvider>,
    options
  );
