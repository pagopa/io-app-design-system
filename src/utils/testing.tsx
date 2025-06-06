import React from "react";
import TestRenderer from "react-test-renderer";
import { IODSExperimentalContextProvider } from "../context/IODSExperimentalContextProvider";

export const TestRendererWithExperimentalEnabledContextProvider = (
  ui: React.ReactElement,
  options?: Parameters<typeof TestRenderer.create>[1]
) =>
  TestRenderer.create(
    <IODSExperimentalContextProvider isExperimentaEnabled={true}>
      {ui}
    </IODSExperimentalContextProvider>,
    options
  );
