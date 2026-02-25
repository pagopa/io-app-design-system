import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  children: ReactNode;
};
const contentPadding = 24;
const styles = StyleSheet.create({
  container: {
    marginLeft: contentPadding * -1,
    marginRight: contentPadding * -1
  }
});

export const FullWidthComponent = ({ children }: Props) => (
  <View style={styles.container}>{children}</View>
);
