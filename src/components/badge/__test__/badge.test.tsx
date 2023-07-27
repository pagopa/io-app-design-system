import React from "react";
import * as TestRenderer from "react-test-renderer";
import { Badge } from "../Badge";

describe("Test Badge Components", () => {
  it("Badge Snapshot", () => {
    const badge = TestRenderer.create(
      <Badge text={"text"} variant={"default"}></Badge>
    ).toJSON();
    expect(badge).toMatchSnapshot();
  });
});
