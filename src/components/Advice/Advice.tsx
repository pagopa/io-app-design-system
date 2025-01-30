import React from "react";
import { StyleSheet, View } from "react-native";
import { IOColors, IOStyles } from "../../core";
import { IOIconSizeScale, IOIcons, Icon } from "../icons";
import { HSpacer } from "../spacer";
import { Body } from "../typography";

interface Props {
  text: string;
  iconName?: IOIcons;
  iconSize?: IOIconSizeScale;
  iconColor?: IOColors;
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 4
  }
});

const defaultIconSize: IOIconSizeScale = 20;

/**
 * This component displays an info icon on top-left and a text message
 * @constructor
 */
export const Advice: React.FC<Props> = React.memo(
  ({
    text,
    iconName = "notice",
    iconSize = defaultIconSize,
    iconColor = "blue-500"
  }) => (
    <View style={IOStyles.row}>
      <View style={styles.icon}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </View>
      <HSpacer size={8} />
      <Body>{text}</Body>
    </View>
  )
);
