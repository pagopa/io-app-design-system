import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { Body } from "../../../components/typography";
import { AccordionItem } from "..";

describe("AccordionItem", () => {
  const accordionBody = (
    <Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Body>
  );

  it("match snapshot with default props", () => {
    const component = render(
      <AccordionItem title="My Accordion" body={accordionBody} />
    );
    fireEvent(component.getByTestId("AccordionBodyContainer"), "layout", {
      nativeEvent: { layout: { height: 100 } }
    });
    expect(component).toMatchSnapshot();
  });

  it("call onPress when toggling the accordtion", () => {
    const fn = jest.fn();

    const { getByTestId } = render(
      <AccordionItem title="My Accordion" body={accordionBody} onPress={fn} />
    );
    fireEvent(getByTestId("AccordionToggleButton"), "press");
    expect(fn).toHaveBeenNthCalledWith(1, true);
  });
});
