import React from "react";
import { StyleSheet, View } from "react-native";
import { IOColors, IOStyles } from "../../core";

type CodeInputProps = {
  value: string;
  length: number;
  variant?: "light" | "dark";
};

const DOT_SIZE = 16;

const styles = StyleSheet.create({
  dotShape: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: 8,
    borderWidth: 2
  },
  dotEmpty: {
    borderColor: IOColors["grey-200"]
  },
  wrapper: { justifyContent: "center", gap: DOT_SIZE }
});

const EmptyDot = () => <View style={[styles.dotShape, styles.dotEmpty]} />;

const FilletDot = ({ color }: { color: IOColors }) => (
  <View style={[styles.dotShape, { backgroundColor: IOColors[color] }]} />
);

export const CodeInput = ({
  length,
  value,
  variant = "light"
}: CodeInputProps) => (
  <View style={[IOStyles.row, styles.wrapper]}>
    {[...Array(length)].map((_, i) => (
      <React.Fragment key={i}>
        {value[i] ? (
          <FilletDot color={variant === "light" ? "white" : "black"} />
        ) : (
          <EmptyDot />
        )}
      </React.Fragment>
    ))}
  </View>
);
