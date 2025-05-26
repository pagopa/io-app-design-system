import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { renderWithExperimentalEnabledContextProvider } from "../../../utils/testing";
import { Banner } from "../Banner";

const onLinkPress = jest.fn();

describe("Test Banner Components", () => {
  it("renders correctly with all props", () => {
    const { getByText, getByLabelText } = render(
      <Banner
        color="neutral"
        title="Banner title"
        pictogramName="charity"
        action="Action text"
        onPress={onLinkPress}
        accessibilityLabel="Action text"
      />
    );

    expect(getByText("Banner title")).toBeTruthy();
    expect(getByText("Action text")).toBeTruthy();
    expect(getByLabelText("Action text")).toBeTruthy();
  });

  it("calls onPress when action is pressed", () => {
    const { getByText } = render(
      <Banner
        color="neutral"
        title="Banner title"
        pictogramName="charity"
        action="Action text"
        onPress={onLinkPress}
        accessibilityLabel="Action text"
      />
    );

    fireEvent.press(getByText("Action text"));
    expect(onLinkPress).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const { toJSON } = render(
      <Banner
        color="neutral"
        title="Banner title"
        pictogramName="charity"
        action="Action text"
        onPress={onLinkPress}
        accessibilityLabel="Action text"
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

describe("Test Banner Components - Experimental Enabled", () => {
  it("renders correctly with experimental context", () => {
    const { getByText, getByLabelText } =
      renderWithExperimentalEnabledContextProvider(
        <Banner
          color="neutral"
          title="Banner title"
          pictogramName="charity"
          action="Action text"
          onPress={onLinkPress}
          accessibilityLabel="Action text"
        />
      );

    expect(getByText("Banner title")).toBeTruthy();
    expect(getByText("Action text")).toBeTruthy();
    expect(getByLabelText("Action text")).toBeTruthy();
  });

  it("calls onPress when action is pressed with experimental context", () => {
    const { getByText } = renderWithExperimentalEnabledContextProvider(
      <Banner
        color="neutral"
        title="Banner title"
        pictogramName="charity"
        action="Action text"
        onPress={onLinkPress}
        accessibilityLabel="Action text"
      />
    );

    fireEvent.press(getByText("Action text"));
    expect(onLinkPress).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot with experimental context", () => {
    const { toJSON } = renderWithExperimentalEnabledContextProvider(
      <Banner
        color="neutral"
        title="Banner title"
        pictogramName="charity"
        action="Action text"
        onPress={onLinkPress}
        accessibilityLabel="Action text"
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
