import { HSpacer, IOColors, IOSpacer, IOThemeContext, SpacerOrientation, VSpacer } from "@pagopa/io-app-design-system";
import React, { useContext } from "react";
import { Text, View } from "react-native";

type SpacerViewerBoxProps = {
    size: IOSpacer;
    orientation?: SpacerOrientation;
};

const SpacerLabel = ({ value }: { value: IOSpacer }) => {
    const theme = useContext(IOThemeContext);
    return (
        <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontSize: 9, color: IOColors[theme["textBody-tertiary"]] }}
        >
            {value}
        </Text>
    );
};

export const SpacerViewerBox = ({
    size,
    orientation = "vertical"
}: SpacerViewerBoxProps) => {
    const theme = useContext(IOThemeContext);
    return (
        <>
            {orientation === "vertical" ? (
                <View style={{ flexDirection: "column" }}>
                    <View
                        style={{
                            backgroundColor: IOColors[theme["appBackground-tertiary"]]
                        }}
                    >
                        <VSpacer size={size} />
                    </View>
                    {size && (
                        <View style={{ flexDirection: "row", marginTop: 4 }}>
                            <SpacerLabel value={size} />
                        </View>
                    )}
                </View>
            ) : (
                <View style={{ flexDirection: "row" }}>
                    <View
                        style={{
                            backgroundColor: IOColors[theme["appBackground-tertiary"]],
                            height: 75
                        }}
                    >
                        <HSpacer size={size} />
                    </View>
                    {size && (
                        <View style={{ flexDirection: "column", marginLeft: 4 }}>
                            <SpacerLabel value={size} />
                        </View>
                    )}
                </View>
            )}
        </>
    );
};
