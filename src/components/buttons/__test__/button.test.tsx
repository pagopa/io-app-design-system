import React from "react";
import { Alert } from "react-native";
import * as TestRenderer from "react-test-renderer";
import { TestRendererWithExperimentalEnabledContextProvider } from "../../../utils/testing";
import IconButton from "../IconButton";
import IconButtonContained from "../IconButtonContained";
import IconButtonSolid from "../IconButtonSolid";
import { IOButton } from "../IOButton";

const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

describe("Test Buttons Components", () => {
  it("ButtonSolid Snapshot", () => {
    const buttonSolid = TestRenderer.create(
      <IOButton
        variant="solid"
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      />
    ).toJSON();
    expect(buttonSolid).toMatchSnapshot();
  });

  it("ButtonLink Snapshot", () => {
    const buttonLink = TestRenderer.create(
      <IOButton variant="link" label={"label"} onPress={onButtonPress} />
    ).toJSON();
    expect(buttonLink).toMatchSnapshot();
  });

  it("ButtonOutline Snapshot", () => {
    const buttonOutline = TestRenderer.create(
      <IOButton
        variant="outline"
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      />
    ).toJSON();
    expect(buttonOutline).toMatchSnapshot();
  });
});

describe("Test Buttons Components - Experimental Enabled", () => {
  it("ButtonSolid Snapshot", () => {
    const buttonSolid = TestRendererWithExperimentalEnabledContextProvider(
      <IOButton
        variant="solid"
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      />
    ).toJSON();
    expect(buttonSolid).toMatchSnapshot();
  });

  it("ButtonLink Snapshot", () => {
    const buttonLink = TestRendererWithExperimentalEnabledContextProvider(
      <IOButton variant="link" label={"label"} onPress={onButtonPress} />
    ).toJSON();
    expect(buttonLink).toMatchSnapshot();
  });

  it("ButtonOutline Snapshot", () => {
    const buttonOutline = TestRendererWithExperimentalEnabledContextProvider(
      <IOButton
        variant="outline"
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      />
    ).toJSON();
    expect(buttonOutline).toMatchSnapshot();
  });

  it("IconButtonSolid Snapshot", () => {
    const iconButtonSolid = TestRendererWithExperimentalEnabledContextProvider(
      <IconButtonSolid
        onPress={onButtonPress}
        icon={"spid"}
        accessibilityLabel={"accessibilityLabel"}
      ></IconButtonSolid>
    ).toJSON();
    expect(iconButtonSolid).toMatchSnapshot();
  });

  it("IconButton Snapshot", () => {
    const iconButton = TestRendererWithExperimentalEnabledContextProvider(
      <IconButton
        onPress={onButtonPress}
        icon={"spid"}
        accessibilityLabel={"accessibilityLabel"}
      ></IconButton>
    ).toJSON();
    expect(iconButton).toMatchSnapshot();
  });

  it("IconButtonContained Snapshot", () => {
    const iconButtonContained =
      TestRendererWithExperimentalEnabledContextProvider(
        <IconButtonContained
          onPress={onButtonPress}
          icon={"spid"}
          accessibilityLabel={"accessibilityLabel"}
        ></IconButtonContained>
      ).toJSON();
    expect(iconButtonContained).toMatchSnapshot();
  });
});
