import * as React from "react";
import { useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  findNodeHandle,
  AccessibilityInfo
} from "react-native";
import {
  IOColors,
  IOVisualCostants,
  useIOExperimentalDesign,
  IOStyles
} from "../../core";
import { H4 } from "../typography";
import { IconButton } from "../buttons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: IOVisualCostants.appMarginDefault,
    paddingTop: IOVisualCostants.appMarginDefault,
    paddingBottom: IOVisualCostants.appMarginDefault,
    backgroundColor: IOColors.white
  }
});

type Props = {
  title: string | React.ReactNode;
  onClose: () => void;
  closeAccessibilityLabel: string;
};

/**
 * A header for a modals and bottom sheet.
 * @param title - The title of the modal.
 * @param onClose - The function to call when the close button is pressed.
 * @param closeAccessibilityLabel - The accessibility label for the close button.
 *
 */
export const ModalBSHeader = ({
  title,
  onClose,
  closeAccessibilityLabel
}: Props) => {
  const { isExperimental } = useIOExperimentalDesign();
  const headerRef = React.createRef<View>();

  useLayoutEffect(() => {
    const reactNode = findNodeHandle(headerRef.current);
    if (reactNode !== null) {
      AccessibilityInfo.setAccessibilityFocus(reactNode);
    }
  });

  return (
    <View style={styles.container} ref={headerRef}>
      {React.isValidElement(title) ? (
        title
      ) : (
        <View
          style={IOStyles.flex}
          accessible={true}
          accessibilityRole={"header"}
          accessibilityLabel={typeof title === "string" ? title : undefined}
        >
          <H4>{title}</H4>
        </View>
      )}
      {/* ◀ REMOVE_LEGACY_COMPONENT: Remove the following condition */}
      {isExperimental ? (
        <IconButton
          color="neutral"
          onPress={onClose}
          icon="closeMedium"
          accessibilityLabel={closeAccessibilityLabel}
        />
      ) : (
        <View style={{ opacity: 0.5 }}>
          <IconButton
            color="neutral"
            onPress={onClose}
            icon="closeMedium"
            accessibilityLabel={closeAccessibilityLabel}
          />
        </View>
      )}
    </View>
  );
};
