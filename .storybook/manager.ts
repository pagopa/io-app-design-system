import { addons, types } from "@storybook/manager-api";
import { sbTheme } from "./theme";
import { ExperimentalDsToggle } from "../stories/addons/ExperimentalDsToggle";
addons.setConfig({
  theme: sbTheme
});

// Register the addon
addons.register("EXPERIMENTAL_DS_ADDON", () => {
  // Register the tool
  addons.add("EXPERIMENTAL_DS_ADDON_ID", {
    type: types.TOOL,
    title: "Experimental DS Addon",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ExperimentalDsToggle
  });
});
