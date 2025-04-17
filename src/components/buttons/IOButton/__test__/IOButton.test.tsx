import React from "react";
import { Alert } from "react-native";
import * as TestRenderer from "react-test-renderer";
import IOButton from "../IOButton";

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
});
