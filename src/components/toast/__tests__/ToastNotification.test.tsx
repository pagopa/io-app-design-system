import React from "react";
import * as TestRenderer from "react-test-renderer";
import { TestRendererWithExperimentalEnabledContextProvider } from "../../../utils/testing";
import { ToastNotification } from "../ToastNotification";
import { Toast } from "../types";

describe("Test ToastNotification component", () => {
  it.each<Toast>([
    { message: "Hello", icon: "checkTick" },
    { message: "Hello", variant: "error" },
    { message: "Hello", variant: "info" },
    { message: "Hello", variant: "neutral" },
    { message: "Hello", variant: "success" },
    { message: "Hello", variant: "warning" }
  ])("should match snapshot for props (%s)", toast => {
    const component = TestRenderer.create(<ToastNotification {...toast} />);
    expect(component).toMatchSnapshot();
  });
});

describe("Test ToastNotification component - Experimental Enabled", () => {
  it.each<Toast>([
    { message: "Hello", icon: "checkTick" },
    { message: "Hello", variant: "error" },
    { message: "Hello", variant: "info" },
    { message: "Hello", variant: "neutral" },
    { message: "Hello", variant: "success" },
    { message: "Hello", variant: "warning" }
  ])("should match snapshot for props (%s)", toast => {
    const component = TestRendererWithExperimentalEnabledContextProvider(
      <ToastNotification {...toast} />
    );
    expect(component).toMatchSnapshot();
  });
});
