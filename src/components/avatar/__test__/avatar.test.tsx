import React from "react";
import * as TestRenderer from "react-test-renderer";
import { TestRendererWithExperimentalEnabledContextProvider } from "../../../utils/testing";
import { Avatar, AvatarSearch } from "../Avatar";

describe("Test Avatar Components", () => {
  it("Avatar Snapshot", () => {
    const avatar = TestRenderer.create(
      <Avatar size={"small"} logoUri={{ uri: "" }} />
    ).toJSON();
    expect(avatar).toMatchSnapshot();
  });

  it("AvatarSearch Snapshot", () => {
    const avatar = TestRenderer.create(
      <AvatarSearch source={{ uri: "" }} />
    ).toJSON();
    expect(avatar).toMatchSnapshot();
  });
});

describe("Test Avatar Components - Experimental Enabled", () => {
  it("Avatar Snapshot", () => {
    const avatar = TestRendererWithExperimentalEnabledContextProvider(
      <Avatar size={"small"} logoUri={{ uri: "" }} />
    ).toJSON();
    expect(avatar).toMatchSnapshot();
  });

  it("AvatarSearch Snapshot", () => {
    const avatar = TestRendererWithExperimentalEnabledContextProvider(
      <AvatarSearch source={{ uri: "" }} />
    ).toJSON();
    expect(avatar).toMatchSnapshot();
  });
});
