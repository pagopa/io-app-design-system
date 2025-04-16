import React from "react";
import { Alert } from "react-native";
import * as TestRenderer from "react-test-renderer";
import Button from "../Button";
import IconButton from "../IconButton";
import IconButtonContained from "../IconButtonContained";
import IconButtonSolid from "../IconButtonSolid";
const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

describe("Test Buttons Components", () => {
  it("Button Snapshot · Solid variant", () => {
    const buttonSolid = TestRenderer.create(
      <Button
        variant="solid"
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      ></Button>
    ).toJSON();
    expect(buttonSolid).toMatchSnapshot();
  });

  it("Button Snapshot · Link variant", () => {
    const buttonLink = TestRenderer.create(
      <Button
        variant="link"
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      ></Button>
    ).toJSON();
    expect(buttonLink).toMatchSnapshot();
  });

  it("Button Snapshot · Outline variant", () => {
    const buttonOutline = TestRenderer.create(
      <Button
        variant="outline"
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      ></Button>
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
