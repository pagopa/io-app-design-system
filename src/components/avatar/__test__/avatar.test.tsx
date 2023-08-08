import React from "react";
import * as TestRenderer from "react-test-renderer";
import { Avatar } from "../Avatar";
import { MultiImage } from "../MultiImage";

describe("Test Avatar Components", () => {
  it("Avatar Snapshot", () => {
    const avatar = TestRenderer.create(
      <Avatar shape={"circle"} size={"small"} logoUri={[]}></Avatar>
    ).toJSON();
    expect(avatar).toMatchSnapshot();
  });
  it("MultiImage Snapshot", () => {
    const multiImage = TestRenderer.create(
      <MultiImage source={[]}></MultiImage>
    ).toJSON();
    expect(multiImage).toMatchSnapshot();
  });
});
