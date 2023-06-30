import React from "react";
import { View } from "react-native";
import { IOColors, IOThemeContext } from "../../core";
import { DIVIDER_DEFAULT, HORIZONTAL, VERTICAL } from "../../utils/constants";

type DividerOrientation = typeof VERTICAL | typeof HORIZONTAL;

type DividerProps = {
    orientation: DividerOrientation;
};

const DEFAULT_BORDER_SIZE = 1;

/**
Native `Divider` component
@param  {DividerOrientation} orientation
 */
const BaseDivider = React.memo(({ orientation }: DividerProps) => {
    const theme = React.useContext(IOThemeContext);
    const baseStyle = {
        backgroundColor: IOColors[theme[DIVIDER_DEFAULT]],
        ...(orientation === VERTICAL ? { width: DEFAULT_BORDER_SIZE } : { height: DEFAULT_BORDER_SIZE })
    };
    return <View style={baseStyle} />;
});

/**
Horizontal Divider component
 */
export const Divider = () => <BaseDivider orientation={HORIZONTAL} />;
/**
Vertical Divider component
 */
export const VDivider = () => <BaseDivider orientation={VERTICAL} />;
