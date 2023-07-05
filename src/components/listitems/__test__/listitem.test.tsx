import React from "react";
import { Alert } from "react-native";
import * as TestRenderer from "react-test-renderer";
import ListItemInfo from "../ListItemInfo";
import ListItemInfoCopy from "../ListItemInfoCopy";
import ListItemNav from "../ListItemNav";
import ListItemNavAlert from "../ListItemNavAlert";

const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

describe("Test List Item Components", () => {
  it("ListItemInfo Snapshot", () => {
    const listItemInfo = TestRenderer.create(<ListItemInfo label={"label"} value={"testValue"} accessibilityLabel={"accessibilityLabel"}></ListItemInfo>).toJSON();
    expect(listItemInfo).toMatchSnapshot();
  });
  it("ListItemInfoCopy Snapshot", () => {
    const listItemInfoCopy = TestRenderer.create(<ListItemInfoCopy label={"label"} value={"testValue"} onPress={onButtonPress} accessibilityLabel={"accessibilityLabel"}></ListItemInfoCopy>).toJSON();
    expect(listItemInfoCopy).toMatchSnapshot();
  });
  it("ListItemNav Snapshot", () => {
    const listItemNav = TestRenderer.create(<ListItemNav value={"testValue"} onPress={onButtonPress} accessibilityLabel={"accessibilityLabel"} ></ListItemNav>).toJSON();
    expect(listItemNav).toMatchSnapshot();
  });
  it("ListItemNavAlert Snapshot", () => {
    const listItemNavAlert = TestRenderer.create(<ListItemNavAlert value={"testValue"} onPress={onButtonPress} accessibilityLabel={"accessibilityLabel"} ></ListItemNavAlert>).toJSON();
    expect(listItemNavAlert).toMatchSnapshot();
  });
});
