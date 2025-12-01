import React from "react";
import { Alert } from "react-native";
import { render } from "@testing-library/react-native";
import { renderWithExperimentalEnabledContextProvider } from "../../../utils/testing";
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
    const { toJSON } = render(
      <ButtonSolid
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("ButtonLink Snapshot", () => {
    const { toJSON } = render(
      <ButtonLink label={"label"} onPress={onButtonPress} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("ButtonOutline Snapshot", () => {
    const { toJSON } = render(
      <ButtonOutline
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

describe("Test Buttons Components - Experimental Enabled", () => {
  it("ButtonSolid Snapshot", () => {
    const { toJSON } = renderWithExperimentalEnabledContextProvider(
      <ButtonSolid
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("ButtonLink Snapshot", () => {
    const { toJSON } = renderWithExperimentalEnabledContextProvider(
      <ButtonLink label={"label"} onPress={onButtonPress} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("ButtonOutline Snapshot", () => {
    const { toJSON } = renderWithExperimentalEnabledContextProvider(
      <ButtonOutline
        label={"label"}
        accessibilityLabel={"accessibilityLabel"}
        onPress={onButtonPress}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("IconButtonSolid Snapshot", () => {
    const { toJSON } = renderWithExperimentalEnabledContextProvider(
      <IconButtonSolid
        onPress={onButtonPress}
        icon={"spid"}
        accessibilityLabel={"accessibilityLabel"}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("IconButton Snapshot", () => {
    const { toJSON } = renderWithExperimentalEnabledContextProvider(
      <IconButton
        onPress={onButtonPress}
        icon={"spid"}
        accessibilityLabel={"accessibilityLabel"}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("IconButtonContained Snapshot", () => {
    const { toJSON } = renderWithExperimentalEnabledContextProvider(
      <IconButtonContained
        onPress={onButtonPress}
        icon={"spid"}
        accessibilityLabel={"accessibilityLabel"}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
