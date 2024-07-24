import {
  IOColors,
  IOFontSize,
  IOText,
  useIOTheme
} from "@pagopa/io-app-design-system";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const iconItemGutter = 8;

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: "flex-start",
    marginBottom: 16,
    paddingHorizontal: iconItemGutter / 2
  },
  iconWrapperSmall: {
    width: `${100 / 6}%`
  },
  iconWrapperMedium: {
    width: "20%"
  },
  iconWrapperLarge: {
    width: "25%"
  },
  iconWrapperAuto: {
    width: "auto"
  },
  nameWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4
  },
  iconItem: {
    overflow: "hidden",
    position: "relative",
    aspectRatio: 1,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1
  },
  iconItemLarger: {
    padding: 12
  },
  signalDot: {
    position: "absolute",
    right: 4,
    top: 4,
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: IOColors["success-500"]
  }
});

type IconViewerBoxProps = {
  name: string;
  image: React.ReactNode;
  size?: "small" | "medium" | "large" | undefined;
  withDot?: boolean;
};

const sizeMap = {
  small: {
    wrapper: styles.iconWrapperSmall,
    item: styles.iconItemLarger,
    label: 9 as IOFontSize
  },
  medium: {
    wrapper: styles.iconWrapperMedium,
    item: null,
    label: 10 as IOFontSize
  },
  large: {
    wrapper: styles.iconWrapperLarge,
    item: styles.iconItemLarger,
    label: 11 as IOFontSize
  }
};

export const IconViewerBox = ({
  name,
  image,
  size,
  withDot = false
}: IconViewerBoxProps) => {
  const theme = useIOTheme();
  return (
    <View
      style={[
        styles.iconWrapper,
        size ? sizeMap[size].wrapper : styles.iconWrapperAuto
      ]}
    >
      <View
        style={[
          styles.iconItem,
          size ? sizeMap[size].item : {},
          { borderColor: IOColors[theme["cardBorder-default"]] }
        ]}
      >
        {withDot && <View style={styles.signalDot} />}
        {image}
      </View>
      <View style={styles.nameWrapper}>
        {name && (
          <IOText
            numberOfLines={1}
            ellipsizeMode="tail"
            size={size ? sizeMap[size].label : sizeMap.medium.label}
            style={{ color: IOColors[theme["textBody-tertiary"]] }}
          >
            {name}
          </IOText>
        )}
      </View>
    </View>
  );
};
