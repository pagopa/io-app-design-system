// __tests__/ModuleNavigationAlt.test.tsx
import React from "react";
import * as TestRenderer from "react-test-renderer";
import { Alert } from "react-native";
import { TestRendererWithExperimentalEnabledContextProvider } from "../../../utils/testing";
import { ModuleNavigationAlt } from "../ModuleNavigationAlt";

const onPress = () => {
  Alert.alert("Alert", "Action triggered");
};

describe("ModuleNavigationAlt - Snapshot", () => {
  it("Loading state", () => {
    const tree = TestRenderer.create(
      <ModuleNavigationAlt
        isLoading
        loadingAccessibilityLabel="loading items"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Title only + chevron (onPress)", () => {
    const tree = TestRenderer.create(
      <ModuleNavigationAlt title="My Title" onPress={onPress} icon="spid" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Title + Subtitle", () => {
    const tree = TestRenderer.create(
      <ModuleNavigationAlt
        title="My Title"
        subtitle="A nice subtitle"
        icon="spid"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("With Badge (badge + chevron)", () => {
    const tree = TestRenderer.create(
      <ModuleNavigationAlt
        title="With Badge"
        onPress={onPress}
        badge={{ text: "TEST", variant: "highlight" }}
        icon="spid"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("With Image (no icon) + chevron (onPress)", () => {
    const tree = TestRenderer.create(
      <ModuleNavigationAlt
        title="With Image"
        image={{ uri: "https://example.com/icon.png" }}
        onPress={onPress}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("ModuleNavigationAlt - Snapshot (Experimental Enabled)", () => {
  it("Loading state", () => {
    const tree = TestRendererWithExperimentalEnabledContextProvider(
      <ModuleNavigationAlt
        isLoading
        loadingAccessibilityLabel="loading items"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Title only + chevron (onPress)", () => {
    const tree = TestRendererWithExperimentalEnabledContextProvider(
      <ModuleNavigationAlt title="My Title" onPress={onPress} icon="spid" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Title + Subtitle", () => {
    const tree = TestRendererWithExperimentalEnabledContextProvider(
      <ModuleNavigationAlt
        title="My Title"
        subtitle="A nice subtitle"
        icon="spid"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("With Badge (badge + chevron)", () => {
    const tree = TestRendererWithExperimentalEnabledContextProvider(
      <ModuleNavigationAlt
        title="With Badge"
        onPress={onPress}
        badge={{ text: "TEST", variant: "highlight" }}
        icon="spid"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("With Image (no icon) + chevron (onPress) - Experimental", () => {
    const tree = TestRendererWithExperimentalEnabledContextProvider(
      <ModuleNavigationAlt
        title="With Image"
        image={{ uri: "https://example.com/icon.png" }}
        onPress={onPress}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
