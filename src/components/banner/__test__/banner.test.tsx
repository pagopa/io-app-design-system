import React from "react";
import { Alert } from "react-native";
import * as TestRenderer from "react-test-renderer";
import { TestRendererWithExperimentalEnabledContextProvider } from "../../../utils/testing";
import { Banner } from "../Banner";

const onLinkPress = () => {
  Alert.alert("Alert", "Action triggered");
};

describe("Test Banner Components", () => {
  it("Banner Snapshot", () => {
    const advice = TestRenderer.create(
      <Banner
        color="neutral"
        title="Banner title"
        pictogramName="charity"
        action="Action text"
        onPress={onLinkPress}
        accessibilityLabel="Action text"
      />
    ).toJSON();
    expect(advice).toMatchSnapshot();
  });
});

describe("Test Banner Components - Experimental Enabled", () => {
  it("Banner Snapshot", () => {
    const advice = TestRendererWithExperimentalEnabledContextProvider(
      <Banner
        color="neutral"
        title="Banner title"
        pictogramName="charity"
        action="Action text"
        onPress={onLinkPress}
        accessibilityLabel="Action text"
      />
    ).toJSON();
    expect(advice).toMatchSnapshot();
  });
});
