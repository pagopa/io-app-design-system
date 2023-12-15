import React from "react";
import { Alert, View } from "react-native";
import * as TestRenderer from "react-test-renderer";
import { TestRendererWithExperimentalEnabledContextProvider } from "../../../utils/testing";
import { Banner } from "../Banner";

const viewRef = React.createRef<View>();
const onLinkPress = () => {
  Alert.alert("Alert", "Action triggered");
};

describe("Test Banner Components", () => {
  it("Banner Snapshot", () => {
    const advice = TestRenderer.create(
      <Banner
        viewRef={viewRef}
        color="neutral"
        size="big"
        title="Banner title"
        pictogramName="charity"
        action="Action text"
        onPress={onLinkPress}
      />
    ).toJSON();
    expect(advice).toMatchSnapshot();
  });
});

describe("Test Banner Components - Experimental Enabled", () => {
  it("Banner Snapshot", () => {
    const advice = TestRendererWithExperimentalEnabledContextProvider(
      <Banner
        viewRef={viewRef}
        color="neutral"
        size="big"
        title="Banner title"
        pictogramName="charity"
        action="Action text"
        onPress={onLinkPress}
      />
    ).toJSON();
    expect(advice).toMatchSnapshot();
  });
});
