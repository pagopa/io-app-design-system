import React from "react";
import { View } from "react-native";
import type { IOSpacer } from "../../core";
import { hexToRgba, IOColors } from "../../core";
import { HORIZONTAL, VERTICAL } from "../../utils/constants";

export type SpacerOrientation = typeof VERTICAL | typeof HORIZONTAL;

type BaseSpacerProps = {
    orientation: SpacerOrientation;
    size: IOSpacer;
};

type SpacerProps = {
    size?: IOSpacer;
};

const DEFAULT_SIZE = 16;

/* Debug Mode */
const debugMode = false;
const debugBg = hexToRgba(IOColors.red, 0.2);

/**
Native `Spacer` component
@param  {SpacerOrientation} orientation 
@param {IOSpacer} size
 */
const Spacer = ({ orientation, size }: BaseSpacerProps) => {
    const style = React.useMemo(() => ({
        ...(orientation === VERTICAL && {
            height: size
        }),
        ...(orientation === HORIZONTAL && {
            width: size
        }),
        ...((debugMode as boolean) && {
            backgroundColor: debugBg
        })
    }), [orientation, size]);

    return <View style={style} />;
};

/**
Horizontal spacer component
@param {IOSpacer} size
 */
export const HSpacer = ({ size = DEFAULT_SIZE }: SpacerProps) => (
    <Spacer orientation={HORIZONTAL} size={size} />
);
/**
Vertical spacer component
@param {IOSpacer} size
 */
export const VSpacer = ({ size = DEFAULT_SIZE }: SpacerProps) => (
    <Spacer orientation={VERTICAL} size={size} />
);
