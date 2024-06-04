import React, { memo, useCallback, useEffect } from "react";

import { useGlobals, useStorybookApi } from "@storybook/manager-api";
import { Icons, IconButton } from "@storybook/components";

export const EXPERIMENTAL_DS_PARAM_KEY = "experimentalDs";

export const ExperimentalDsToggle = memo(function ExperimentalDS() {
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();

  const isActive = [true, "true"].includes(globals[EXPERIMENTAL_DS_PARAM_KEY]);

  const toggleMyTool = useCallback(() => {
    updateGlobals({
      [EXPERIMENTAL_DS_PARAM_KEY]: !isActive
    });
  }, [isActive, updateGlobals]);

  useEffect(() => {
    void api.setAddonShortcut("EXPERIMENTAL_DS_ADDON", {
      label: "Toggle Addon [8]",
      defaultShortcut: ["8"],
      actionName: "ExperimentalDS",
      showInMenu: false,
      action: toggleMyTool
    });
  }, [toggleMyTool, api]);

  return (
    <IconButton
      key={"EXPERIMENTAL_DS_ADDO_ID"}
      active={isActive}
      title="Apply the experimental DS"
      onClick={toggleMyTool}
    >
      <Icons icon="lightning" />
    </IconButton>
  );
});
