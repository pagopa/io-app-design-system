/* eslint-disable functional/immutable-data */
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";
import { ForceScrollDownView } from "../ForceScrollDownView";

const tContent = "Some content";

describe("ForceScrollDownView", () => {
  jest.useFakeTimers();

  it("should match snapshot", () => {
    const tChildren = <Text>{tContent}</Text>;

    const component = render(
      <ForceScrollDownView threshold={100}>{tChildren}</ForceScrollDownView>
    );

    expect(component).toMatchSnapshot();
  });

  it("renders the content correctly", () => {
    const tChildren = <Text>{tContent}</Text>;

    const { getByText } = render(
      <ForceScrollDownView threshold={100}>{tChildren}</ForceScrollDownView>
    );

    expect(getByText(tContent)).toBeDefined();
  });

  it("displays the scroll down button when necessary", async () => {
    const tChildren = <Text>{tContent}</Text>;

    const tScreenHeight = 1000;

    const { getByTestId, queryByTestId } = render(
      <ForceScrollDownView threshold={100}>{tChildren}</ForceScrollDownView>
    );

    const scrollView = getByTestId("ScrollView");

    // Update scroll view height
    fireEvent(scrollView, "layout", {
      nativeEvent: {
        layout: {
          height: tScreenHeight
        }
      }
    });

    // Update scroll view content height
    fireEvent(scrollView, "contentSizeChange", null, tScreenHeight - 500);

    // Button should not be visible because content does not need scrolling
    const buttonBefore = queryByTestId("ScrollDownButton");
    expect(buttonBefore).toBeNull();

    // Increase content height to force button to be shown
    fireEvent(scrollView, "contentSizeChange", null, tScreenHeight + 500);

    jest.advanceTimersByTime(500);

    // Button should be visible now beacuse content needs scrolling
    const buttonAfter = queryByTestId("ScrollDownButton");
    expect(buttonAfter).not.toBeNull();
  });

  it("scrolls to the bottom when the button is pressed", () => {
    const tChildren = <Text>{tContent}</Text>;

    const tScreenHeight = 1000;

    const { getByTestId, queryByTestId } = render(
      <ForceScrollDownView threshold={100}>{tChildren}</ForceScrollDownView>
    );

    const scrollView = getByTestId("ScrollView");

    // Update scroll view height
    fireEvent(scrollView, "layout", {
      nativeEvent: {
        layout: {
          height: tScreenHeight
        }
      }
    });

    // Update scroll view content height
    fireEvent(scrollView, "contentSizeChange", null, tScreenHeight + 500);

    // Button should be visible
    const buttonBefore = getByTestId("ScrollDownButton");
    expect(buttonBefore).not.toBeNull();

    // Fire button press event
    fireEvent.press(buttonBefore);

    // Wait for the scroll animation
    jest.advanceTimersByTime(500);

    // Button should not be visible after scrolling
    const buttonAfter = queryByTestId("ScrollDownButton");
    expect(buttonAfter).toBeNull();
  });
});
