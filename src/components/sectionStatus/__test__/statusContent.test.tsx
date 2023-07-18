import React from "react";
import { View } from "react-native";
import * as TestRenderer from "react-test-renderer";
import { StatusContent } from "../StatusContent";
const viewRef = React.createRef<View>();
describe("Test Advice Components", () => {
  it("StatusContent Snapshot", () => {
    const statusContent = TestRenderer.create(<StatusContent backgroundColor={"white"} iconName={"search"} viewRef={viewRef} foregroundColor={"bluegreyDark"}></StatusContent>).toJSON();
    expect(statusContent).toMatchSnapshot();
  });
});
