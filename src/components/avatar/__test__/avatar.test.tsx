import React from "react";
import * as TestRenderer from "react-test-renderer";
import { Avatar } from "../Avatar";

describe("Test Avatar Components", () => {
  it("Avatar Snapshot", () => {
    const avatar = TestRenderer.create(
      <Avatar shape={"circle"} size={"small"} logoUri={{ uri: "" }}></Avatar>
    ).toJSON();
    expect(avatar).toMatchSnapshot();
  });
});
