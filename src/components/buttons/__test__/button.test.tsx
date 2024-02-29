import React from "react";
import { Alert } from "react-native";
import * as TestRenderer from "react-test-renderer";
import { TestRendererWithExperimentalEnabledContextProvider } from "../../../utils/testing";
import ButtonExtendedOutline from "../ButtonExtendedOutline";
import ButtonLink from "../ButtonLink";
import ButtonOutline from "../ButtonOutline";
import ButtonSolid from "../ButtonSolid";
import IconButton from "../IconButton";
import IconButtonContained from "../IconButtonContained";
import IconButtonSolid from "../IconButtonSolid";
const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

describe("Test Buttons Components", () => {
  it("ButtonSolid Snapshot", () => {
    const buttonSolid = TestRenderer.create(
      <ButtonSolid
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      ></ButtonSolid>
    ).toJSON();
    expect(buttonSolid).toMatchSnapshot();
  });

  it("ButtonLink Snapshot", () => {
    const buttonLink = TestRenderer.create(
      <ButtonLink label={"label"} onPress={onButtonPress}></ButtonLink>
    ).toJSON();
    expect(buttonLink).toMatchSnapshot();
  });

  it("ButtonOutline Snapshot", () => {
    const buttonOutline = TestRenderer.create(
      <ButtonOutline
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      ></ButtonOutline>
    ).toJSON();
    expect(buttonOutline).toMatchSnapshot();
  });

  it("ButtonExtendedOutline Snapshot", () => {
    const buttonExtendedOutline = TestRenderer.create(
      <ButtonExtendedOutline
        label={"label"}
        onPress={onButtonPress}
      ></ButtonExtendedOutline>
    ).toJSON();
    expect(buttonExtendedOutline).toMatchSnapshot();
  });

  it("IconButtonSolid Snapshot", () => {
    const iconButtonSolid = TestRenderer.create(
      <IconButtonSolid
        onPress={onButtonPress}
        icon={"spid"}
        accessibilityLabel={"accessibilityLabel"}
      ></IconButtonSolid>
    ).toJSON();
    expect(iconButtonSolid).toMatchSnapshot();
  });

  it("IconButton Snapshot", () => {
    const iconButton = TestRenderer.create(
      <IconButton
        onPress={onButtonPress}
        icon={"spid"}
        accessibilityLabel={"accessibilityLabel"}
      ></IconButton>
    ).toJSON();
    expect(iconButton).toMatchSnapshot();
  });

  it("IconButtonContained Snapshot", () => {
    const iconButtonContained = TestRenderer.create(
      <IconButtonContained
        onPress={onButtonPress}
        icon={"spid"}
        accessibilityLabel={"accessibilityLabel"}
      ></IconButtonContained>
    ).toJSON();
    expect(iconButtonContained).toMatchSnapshot();
  });
});

describe("Test Buttons Components - Experimental Enabled", () => {
  it("ButtonSolid Snapshot", () => {
    const buttonSolid = TestRendererWithExperimentalEnabledContextProvider(
      <ButtonSolid
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      ></ButtonSolid>
    ).toJSON();
    expect(buttonSolid).toMatchSnapshot();
  });

  it("ButtonLink Snapshot", () => {
    const buttonLink = TestRendererWithExperimentalEnabledContextProvider(
      <ButtonLink label={"label"} onPress={onButtonPress}></ButtonLink>
    ).toJSON();
    expect(buttonLink).toMatchSnapshot();
  });

  it("ButtonOutline Snapshot", () => {
    const buttonOutline = TestRendererWithExperimentalEnabledContextProvider(
      <ButtonOutline
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      ></ButtonOutline>
    ).toJSON();
    expect(buttonOutline).toMatchSnapshot();
  });

  it("ButtonExtendedOutline Snapshot", () => {
    const buttonExtendedOutline =
      TestRendererWithExperimentalEnabledContextProvider(
        <ButtonExtendedOutline
          label={"label"}
          onPress={onButtonPress}
        ></ButtonExtendedOutline>
      ).toJSON();
    expect(buttonExtendedOutline).toMatchSnapshot();
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
