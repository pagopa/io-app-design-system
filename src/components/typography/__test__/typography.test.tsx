import React from "react";
import { Alert } from "react-native";
import * as TestRenderer from "react-test-renderer";
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
import { LabelSmall } from "../LabelSmall";
import { calculateWeightColor } from "../common";

describe("Test Typography Components", () => {
  it("H1 Snapshot", () => {
    const h1Default = TestRenderer.create(<H1>Text</H1>).toJSON();
    expect(h1Default).toMatchSnapshot();
    const h1White = TestRenderer.create(<H1 color={"white"}>Text</H1>).toJSON();
    expect(h1White).toMatchSnapshot();
  });
  it("H2 Snapshot", () => {
    const h2Default = TestRenderer.create(<H2>Text</H2>).toJSON();
    expect(h2Default).toMatchSnapshot();
  });
  it("H3 Snapshot", () => {
    // SemiBold weight, default weight
    const h3Default = TestRenderer.create(<H3>Text</H3>).toJSON();
    expect(h3Default).toMatchSnapshot();
    const h3bluegreyLight = TestRenderer.create(
      <H3 color={"bluegreyLight"}>Text</H3>
    ).toJSON();
    expect(h3bluegreyLight).toMatchSnapshot();
    const h3white = TestRenderer.create(<H3 color={"white"}>Text</H3>).toJSON();
    expect(h3white).toMatchSnapshot();
    const h3whiteBold = TestRenderer.create(
      <H3 color={"white"}>Text</H3>
    ).toJSON();
    expect(h3whiteBold).toMatchSnapshot();

    // default color when choose only bold
    const h3defaultBold = TestRenderer.create(<H3>Text</H3>).toJSON();
    expect(h3defaultBold).toMatchSnapshot();
  });
  it("H4 Snapshot", () => {
    // Bold weight, default weight
    const h4Default = TestRenderer.create(<H4>Text</H4>).toJSON();
    expect(h4Default).toMatchSnapshot();
    const h4Dblue = TestRenderer.create(<H4 color={"blue"}>Text</H4>).toJSON();
    expect(h4Dblue).toMatchSnapshot();
    const h4white = TestRenderer.create(<H4 color={"white"}>Text</H4>).toJSON();
    expect(h4white).toMatchSnapshot();
  });
  it("H5 Snapshot", () => {
    // SemiBold weight, default
    const h5Default = TestRenderer.create(<H5>Text</H5>).toJSON();
    expect(h5Default).toMatchSnapshot();
    const h5Defaultbluegrey = TestRenderer.create(
      <H5 color={"bluegrey"}>Text</H5>
    ).toJSON();
    expect(h5Defaultbluegrey).toMatchSnapshot();
    const h5Defaultblue = TestRenderer.create(
      <H5 color={"blue"}>Text</H5>
    ).toJSON();
    expect(h5Defaultblue).toMatchSnapshot();
    const h5Defaultwhite = TestRenderer.create(
      <H5 color={"white"}>Text</H5>
    ).toJSON();
    expect(h5Defaultwhite).toMatchSnapshot();
  });
  it("H6 Snapshot", () => {
    // SemiBold weight, default
    const h6Default = TestRenderer.create(<H6>Text</H6>).toJSON();
    expect(h6Default).toMatchSnapshot();
  });
  it("Body Snapshot", () => {
    const bodyDefault = TestRenderer.create(<Body>Text</Body>).toJSON();
    expect(bodyDefault).toMatchSnapshot();
  });
  it("CTA Snapshot", () => {
    const cta = TestRenderer.create(<ButtonText>Text</ButtonText>).toJSON();
    expect(cta).toMatchSnapshot();
  });
  it("LabelSmall Snapshot", () => {
    const labelSmallDefault = TestRenderer.create(
      <LabelSmall>Text</LabelSmall>
    ).toJSON();
    expect(labelSmallDefault).toMatchSnapshot();

    type BodyColors = React.ComponentProps<typeof LabelSmall>["color"];

    const allowedColors: ReadonlyArray<BodyColors> = [
      "blue",
      "bluegrey",
      "red",
      "white"
    ];

    allowedColors.map(color => {
      const labelSmall = TestRenderer.create(
        <LabelSmall color={color}>Text</LabelSmall>
      ).toJSON();
      expect(labelSmall).toMatchSnapshot();
    });
  });
  it("Link Snapshot", () => {
    const link = TestRenderer.create(
      <Body asLink onPress={() => Alert.alert("Pressed")}>
        Text
      </Body>
    ).toJSON();
    expect(link).toMatchSnapshot();
  });
  it("BodyMonospace Snapshot", () => {
    const monospace = TestRenderer.create(
      <BodyMonospace>Text</BodyMonospace>
    ).toJSON();
    expect(monospace).toMatchSnapshot();
  });
});

describe("Test Typography common", () => {
  it("Test calculateWeightColor behaviour", () => {
    const noValues = calculateWeightColor<IOFontWeight, IOColors>(
      "Bold",
      "red"
    );
    expect(noValues.color).toBe("red");
    expect(noValues.weight).toBe("Bold");

    const weightProvided = calculateWeightColor<IOFontWeight, IOColors>(
      "Bold",
      "red",
      "Regular"
    );
    expect(weightProvided.color).toBe("red");
    expect(weightProvided.weight).toBe("Regular");

    const allValuesProvided = calculateWeightColor<IOFontWeight, IOColors>(
      "Bold",
      "red",
      "Regular",
      "bluegrey"
    );
    expect(allValuesProvided.color).toBe("bluegrey");
    expect(allValuesProvided.weight).toBe("Regular");
  });
});
