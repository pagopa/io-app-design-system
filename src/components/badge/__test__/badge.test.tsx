import React from "react";
import * as TestRenderer from "react-test-renderer";
import { Badge } from "../Badge";
import CustomBadge from "../CustomBadge";
import { IOBadge } from "../IOBadge";
import { PercentageValueBox } from "../PercentageValueBox";

describe("Test Badge Components", () => {
  it("Badge Snapshot", () => {
    const badge = TestRenderer.create(<Badge text={"text"} variant={"default"}></Badge>).toJSON();
    expect(badge).toMatchSnapshot();
  });
  it("CustomBadge Snapshot", () => {
    const customBadge = TestRenderer.create(<CustomBadge></CustomBadge>).toJSON();
    expect(customBadge).toMatchSnapshot();
  });

  it("IOBadge Snapshot", () => {
    const ioBadge = TestRenderer.create(<IOBadge
      text="text"
      variant="solid"
      color="aqua"
    />).toJSON();
    expect(ioBadge).toMatchSnapshot();
  });
});

it("PercentageValueBox Snapshot", () => {
  const percentageValueBox = TestRenderer.create(<PercentageValueBox value={0}></PercentageValueBox>).toJSON();
  expect(percentageValueBox).toMatchSnapshot();
});