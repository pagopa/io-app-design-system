import React from "react";
import { Alert } from "react-native";
import * as TestRenderer from "react-test-renderer";
import IOButton from "../IOButton";
import IconButton from "../IconButton";
import IconButtonContained from "../IconButtonContained";
import IconButtonSolid from "../IconButtonSolid";
const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

describe("Test Buttons Components", () => {
  it("IOButton Snapshot · Solid variant", () => {
    const buttonSolid = TestRenderer.create(
      <IOButton
        variant="solid"
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      ></IOButton>
    ).toJSON();
    expect(buttonSolid).toMatchSnapshot();
  });

  it("IOButton Snapshot · Link variant", () => {
    const buttonLink = TestRenderer.create(
      <IOButton
        variant="link"
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      ></IOButton>
    ).toJSON();
    expect(buttonLink).toMatchSnapshot();
  });

  it("IOButton Snapshot · Outline variant", () => {
    const buttonOutline = TestRenderer.create(
      <IOButton
        variant="outline"
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      ></IOButton>
    ).toJSON();
    expect(buttonOutline).toMatchSnapshot();
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
