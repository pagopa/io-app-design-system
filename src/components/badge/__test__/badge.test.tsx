import React from "react";
import * as TestRenderer from "react-test-renderer";
import { TestRendererWithExperimentalEnabledContextProvider } from "../../../utils/testing";
import { Badge } from "../Badge";

describe("Test Badge Components", () => {
  it("Badge Snapshot", () => {
    const badge = TestRenderer.create(
      <Badge text={"text"} variant={"default"}></Badge>
    ).toJSON();
    expect(badge).toMatchSnapshot();
  });
});

describe("Test Badge Components - Experimental Enabled", () => {
  it("Badge Snapshot", () => {
    const badge = TestRendererWithExperimentalEnabledContextProvider(
      <Badge text={"text"} variant={"default"}></Badge>
    ).toJSON();
    expect(badge).toMatchSnapshot();
  });
});
