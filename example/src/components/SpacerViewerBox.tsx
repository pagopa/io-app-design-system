import {
  HSpacer,
  IOColors,
  IOSpacer,
  VSpacer,
  useIOTheme
} from "@pagopa/io-app-design-system";
import React from "react";
import { Text, View } from "react-native";

type SpacerViewerBoxProps = {
  size: IOSpacer;
  orientation?: "vertical" | "horizontal";
};

const SpacerLabel = ({ value }: { value: IOSpacer }) => {
  const theme = useIOTheme();
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
  const theme = useIOTheme();
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
