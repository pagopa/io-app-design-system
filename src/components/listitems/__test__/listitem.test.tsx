import React from "react";
import { Alert } from "react-native";
import * as TestRenderer from "react-test-renderer";
import { TestRendererWithExperimentalEnabledContextProvider } from "../../../utils/testing";
import ListItemAction from "../ListItemAction";
import ListItemInfo from "../ListItemInfo";
import ListItemInfoCopy from "../ListItemInfoCopy";
import ListItemNav from "../ListItemNav";
import ListItemNavAlert from "../ListItemNavAlert";
import { ListItemRadioWithAmount } from "../ListItemRadioWithAmount";
import { ListItemTransaction } from "../ListItemTransaction";
import { PressableListItemBase } from "../PressableListItemBase";

const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

describe("Test List Item Components", () => {
  it("ListItemInfo Snapshot", () => {
    const listItemInfo = TestRenderer.create(
      <ListItemInfo
        label={"label"}
        value={"testValue"}
        accessibilityLabel={"accessibilityLabel"}
      ></ListItemInfo>
    ).toJSON();
    expect(listItemInfo).toMatchSnapshot();
  });
  it("ListItemInfoCopy Snapshot", () => {
    const listItemInfoCopy = TestRenderer.create(
      <ListItemInfoCopy
        label={"label"}
        value={"testValue"}
        onPress={onButtonPress}
        accessibilityLabel={"accessibilityLabel"}
      ></ListItemInfoCopy>
    ).toJSON();
    expect(listItemInfoCopy).toMatchSnapshot();
  });
  it("ListItemNav Snapshot", () => {
    const listItemNav = TestRenderer.create(
      <ListItemNav
        value={"testValue"}
        onPress={onButtonPress}
        accessibilityLabel={"accessibilityLabel"}
      ></ListItemNav>
    ).toJSON();
    expect(listItemNav).toMatchSnapshot();
  });
  it("ListItemNavAlert Snapshot", () => {
    const listItemNavAlert = TestRenderer.create(
      <ListItemNavAlert
        value={"testValue"}
        onPress={onButtonPress}
        accessibilityLabel={"accessibilityLabel"}
      ></ListItemNavAlert>
    ).toJSON();
    expect(listItemNavAlert).toMatchSnapshot();
  });
  it("ListItemAction Snapshot", () => {
    const listItemAction = TestRenderer.create(
      <ListItemAction
        label={"label"}
        variant={"primary"}
        onPress={onButtonPress}
        accessibilityLabel={"accessibilityLabel"}
      ></ListItemAction>
    ).toJSON();
    expect(listItemAction).toMatchSnapshot();
  });
  it("ListItemTransaction Snapshot", () => {
    const listItemIDP = TestRenderer.create(
      <ListItemTransaction
        title="TITLE"
        subtitle="subtitle"
        transaction={{
          amount: "€ 1.000,00",
          amountAccessibilityLabel: "€ 1.000,00"
        }}
        isLoading={true}
        onPress={onButtonPress}
      />
    ).toJSON();
    expect(listItemIDP).toMatchSnapshot();
  });
  it("PressableListItemsBase Snapshot", () => {
    const listItemIDP = TestRenderer.create(
      <PressableListItemBase></PressableListItemBase>
    ).toJSON();
    expect(listItemIDP).toMatchSnapshot();
  });
  it("ListItemRadioWithAmount Snapshot", () => {
    const suggested = TestRenderer.create(
      <ListItemRadioWithAmount
        formattedAmountString="€ 1.000,00"
        label="label"
        suggestReason="suggestReason"
        isSuggested={true}
        selected={true}
      />
    ).toJSON();
    const notSuggested = TestRenderer.create(
      <ListItemRadioWithAmount
        formattedAmountString="€ 1.000,00"
        label="label"
        isSuggested={false}
      />
    ).toJSON();
    expect(suggested).toMatchSnapshot();
    expect(notSuggested).toMatchSnapshot();
  });
});

describe("Test List Item Components - Experimental Enabled ", () => {
  it("ListItemInfo Snapshot", () => {
    const listItemInfo = TestRendererWithExperimentalEnabledContextProvider(
      <ListItemInfo
        label={"label"}
        value={"testValue"}
        accessibilityLabel={"accessibilityLabel"}
      ></ListItemInfo>
    ).toJSON();
    expect(listItemInfo).toMatchSnapshot();
  });
  it("ListItemInfoCopy Snapshot", () => {
    const listItemInfoCopy = TestRendererWithExperimentalEnabledContextProvider(
      <ListItemInfoCopy
        label={"label"}
        value={"testValue"}
        onPress={onButtonPress}
        accessibilityLabel={"accessibilityLabel"}
      ></ListItemInfoCopy>
    ).toJSON();
    expect(listItemInfoCopy).toMatchSnapshot();
  });
  it("ListItemNav Snapshot", () => {
    const listItemNav = TestRendererWithExperimentalEnabledContextProvider(
      <ListItemNav
        value={"testValue"}
        onPress={onButtonPress}
        accessibilityLabel={"accessibilityLabel"}
      ></ListItemNav>
    ).toJSON();
    expect(listItemNav).toMatchSnapshot();
  });
  it("ListItemNavAlert Snapshot", () => {
    const listItemNavAlert = TestRendererWithExperimentalEnabledContextProvider(
      <ListItemNavAlert
        value={"testValue"}
        onPress={onButtonPress}
        accessibilityLabel={"accessibilityLabel"}
      ></ListItemNavAlert>
    ).toJSON();
    expect(listItemNavAlert).toMatchSnapshot();
  });
  it("ListItemAction Snapshot", () => {
    const listItemAction = TestRendererWithExperimentalEnabledContextProvider(
      <ListItemAction
        label={"label"}
        variant={"primary"}
        onPress={onButtonPress}
        accessibilityLabel={"accessibilityLabel"}
      ></ListItemAction>
    ).toJSON();
    expect(listItemAction).toMatchSnapshot();
  });
  it("ListItemTransaction Snapshot", () => {
    const listItemIDP = TestRendererWithExperimentalEnabledContextProvider(
      <ListItemTransaction
        title="TITLE"
        subtitle="subtitle"
        transaction={{
          amount: "€ 1.000,00",
          amountAccessibilityLabel: "€ 1.000,00"
        }}
        isLoading={true}
        onPress={onButtonPress}
      />
    ).toJSON();
    expect(listItemIDP).toMatchSnapshot();
  });
  it("PressableListItemsBase Snapshot", () => {
    const listItemIDP = TestRendererWithExperimentalEnabledContextProvider(
      <PressableListItemBase></PressableListItemBase>
    ).toJSON();
    expect(listItemIDP).toMatchSnapshot();
  });
  it("ListItemRadioWithAmount Snapshot", () => {
    const suggested = TestRendererWithExperimentalEnabledContextProvider(
      <ListItemRadioWithAmount
        formattedAmountString="€ 1.000,00"
        label="label"
        suggestReason="suggestReason"
        isSuggested={true}
        selected={true}
      />
    ).toJSON();
    const notSuggested = TestRendererWithExperimentalEnabledContextProvider(
      <ListItemRadioWithAmount
        formattedAmountString="€ 1.000,00"
        label="label"
        isSuggested={false}
      />
    ).toJSON();
    expect(suggested).toMatchSnapshot();
    expect(notSuggested).toMatchSnapshot();
  });
});
