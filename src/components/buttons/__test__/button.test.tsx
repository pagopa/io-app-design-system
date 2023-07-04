import React from "react";
import { Alert } from "react-native";
import * as TestRenderer from "react-test-renderer";
import ButtonExtendedOutline from "../ButtonExtendedOutline";
import ButtonLink from "../ButtonLink";
import ButtonOutline from "../ButtonOutline";
import ButtonSolid from "../ButtonSolid";

const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

describe("Test Buttons Components", () => {
  it("ButtonSolid Snapshot", () => {
    const buttonSolid = TestRenderer.create(<ButtonSolid label={"label"} accessibilityLabel={"accessibilityLabel"} onPress={onButtonPress}></ButtonSolid>).toJSON();
    expect(buttonSolid).toMatchSnapshot();
  });

  it("ButtonLink Snapshot", () => {
    const buttonLink = TestRenderer.create(<ButtonLink label={"label"} onPress={onButtonPress} ></ButtonLink>).toJSON();
    expect(buttonLink).toMatchSnapshot();
  });

  it("ButtonOutline Snapshot", () => {
    const buttonOutline = TestRenderer.create(<ButtonOutline label={"label"} accessibilityLabel={"accessibilityLabel"} onPress={onButtonPress} ></ButtonOutline>).toJSON();
    expect(buttonOutline).toMatchSnapshot();
  });

  it("ButtonExtendedOutline Snapshot", () => {
    const buttonExtendedOutline = TestRenderer.create(<ButtonExtendedOutline label={"label"} onPress={onButtonPress}></ButtonExtendedOutline>).toJSON();
    expect(buttonExtendedOutline).toMatchSnapshot();
  });
});
