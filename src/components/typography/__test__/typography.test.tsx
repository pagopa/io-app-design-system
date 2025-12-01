import React from "react";
import { Alert } from "react-native";
import { render } from "@testing-library/react-native";
import type { IOColors } from "../../../core/IOColors";
import { IOFontWeight } from "../../../utils/fonts";
import { Body } from "../Body";
import { BodyMonospace } from "../BodyMonospace";
import { ButtonText } from "../ButtonText";
import { H1 } from "../H1";
import { H2 } from "../H2";
import { H3 } from "../H3";
import { H4 } from "../H4";
import { H5 } from "../H5";
import { H6 } from "../H6";
import { BodySmall } from "../BodySmall";
import { calculateWeightColor } from "../common";

describe("Test Typography Components", () => {
  it("H1 Snapshot", () => {
    const { toJSON: toJSONDefault } = render(<H1>Text</H1>);
    expect(toJSONDefault()).toMatchSnapshot();
    const { toJSON: toJSONWhite } = render(<H1 color={"white"}>Text</H1>);
    expect(toJSONWhite()).toMatchSnapshot();
  });
  it("H2 Snapshot", () => {
    const { toJSON } = render(<H2>Text</H2>);
    expect(toJSON()).toMatchSnapshot();
  });
  it("H3 Snapshot", () => {
    // SemiBold weight, default weight
    const { toJSON: toJSONDefault } = render(<H3>Text</H3>);
    expect(toJSONDefault()).toMatchSnapshot();
    const { toJSON: toJSONGrey } = render(<H3 color={"grey-200"}>Text</H3>);
    expect(toJSONGrey()).toMatchSnapshot();
    const { toJSON: toJSONWhite } = render(<H3 color={"white"}>Text</H3>);
    expect(toJSONWhite()).toMatchSnapshot();
    const { toJSON: toJSONWhiteBold } = render(<H3 color={"white"}>Text</H3>);
    expect(toJSONWhiteBold()).toMatchSnapshot();

    // default color when choose only bold
    const { toJSON: toJSONDefaultBold } = render(<H3>Text</H3>);
    expect(toJSONDefaultBold()).toMatchSnapshot();
  });
  it("H4 Snapshot", () => {
    // Bold weight, default weight
    const { toJSON: toJSONDefault } = render(<H4>Text</H4>);
    expect(toJSONDefault()).toMatchSnapshot();
    const { toJSON: toJSONBlue } = render(<H4 color={"blueIO-500"}>Text</H4>);
    expect(toJSONBlue()).toMatchSnapshot();
    const { toJSON: toJSONWhite } = render(<H4 color={"white"}>Text</H4>);
    expect(toJSONWhite()).toMatchSnapshot();
  });
  it("H5 Snapshot", () => {
    // SemiBold weight, default
    const { toJSON: toJSONDefault } = render(<H5>Text</H5>);
    expect(toJSONDefault()).toMatchSnapshot();
    const { toJSON: toJSONGrey } = render(<H5 color={"grey-700"}>Text</H5>);
    expect(toJSONGrey()).toMatchSnapshot();
    const { toJSON: toJSONBlue } = render(<H5 color={"blueIO-500"}>Text</H5>);
    expect(toJSONBlue()).toMatchSnapshot();
    const { toJSON: toJSONWhite } = render(<H5 color={"white"}>Text</H5>);
    expect(toJSONWhite()).toMatchSnapshot();
  });
  it("H6 Snapshot", () => {
    // SemiBold weight, default
    const { toJSON } = render(<H6>Text</H6>);
    expect(toJSON()).toMatchSnapshot();
  });
  it("Body Snapshot", () => {
    const { toJSON } = render(<Body>Text</Body>);
    expect(toJSON()).toMatchSnapshot();
  });
  it("CTA Snapshot", () => {
    const { toJSON } = render(<ButtonText>Text</ButtonText>);
    expect(toJSON()).toMatchSnapshot();
  });
  it("BodySmall Snapshot", () => {
    const { toJSON: toJSONDefault } = render(<BodySmall>Text</BodySmall>);
    expect(toJSONDefault()).toMatchSnapshot();

    type BodyColors = React.ComponentProps<typeof BodySmall>["color"];

    const allowedColors: ReadonlyArray<BodyColors> = [
      "blueIO-500",
      "grey-700",
      "error-600",
      "white"
    ];

    allowedColors.map(color => {
      const { toJSON } = render(<BodySmall color={color}>Text</BodySmall>);
      expect(toJSON()).toMatchSnapshot();
    });
  });
  it("Link Snapshot", () => {
    const { toJSON } = render(
      <Body asLink onPress={() => Alert.alert("Pressed")}>
        Text
      </Body>
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it("BodyMonospace Snapshot", () => {
    const { toJSON } = render(<BodyMonospace>Text</BodyMonospace>);
    expect(toJSON()).toMatchSnapshot();
  });
});

describe("Test Typography common", () => {
  it("Test calculateWeightColor behaviour", () => {
    const noValues = calculateWeightColor<IOFontWeight, IOColors>(
      "Bold",
      "error-600"
    );
    expect(noValues.color).toBe("error-600");
    expect(noValues.weight).toBe("Bold");

    const weightProvided = calculateWeightColor<IOFontWeight, IOColors>(
      "Bold",
      "error-600",
      "Regular"
    );
    expect(weightProvided.color).toBe("error-600");
    expect(weightProvided.weight).toBe("Regular");

    const allValuesProvided = calculateWeightColor<IOFontWeight, IOColors>(
      "Bold",
      "error-600",
      "Regular",
      "grey-700"
    );
    expect(allValuesProvided.color).toBe("grey-700");
    expect(allValuesProvided.weight).toBe("Regular");
  });
});
