import React from "react";
import { View } from "react-native";
import { hexToRgba, IOColors, IOSpacer } from "../../core";

type BaseSpacerProps = {
  orientation: "vertical" | "horizontal";
  size: IOSpacer;
};

type SpacerProps = {
  size?: IOSpacer;
};

const DEFAULT_SIZE: IOSpacer = 16;

/* Debug Mode */
const debugMode = false;
const debugBg = hexToRgba(IOColors.red, 0.2);

/**
Native `Spacer` component
@param  {string} orientation
@param {IOSpacer} size
 */
const Spacer = ({ orientation, size }: BaseSpacerProps) => {
  const style = React.useMemo(
    () => ({
      ...(orientation === "vertical" && {
        height: size
      }),
      ...(orientation === "horizontal" && {
        width: size
      }),
      ...((debugMode as boolean) && {
        backgroundColor: debugBg
      })
    }),
    [orientation, size]
  );

  return <View style={style} />;
};

/**
Horizontal spacer component
@param {IOSpacer} size
 */
export const HSpacer = ({ size = DEFAULT_SIZE }: SpacerProps) => (
  <Spacer orientation={"horizontal"} size={size} />
);
/**
Vertical spacer component
@param {IOSpacer} size
 */
export const VSpacer = ({ size = DEFAULT_SIZE }: SpacerProps) => (
  <Spacer orientation={"vertical"} size={size} />
);
