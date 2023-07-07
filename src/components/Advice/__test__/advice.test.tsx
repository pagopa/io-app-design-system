import React from "react";
import * as TestRenderer from "react-test-renderer";
import Advice from "../Advice";

describe("Test Advice Components", () => {
  it("Advice Snapshot", () => {
    const advice = TestRenderer.create(<Advice text={"Text"}></Advice>).toJSON();
    expect(advice).toMatchSnapshot();
  });
});
