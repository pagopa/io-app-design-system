import { StyleSheet } from "react-native";
import { IOColors } from "../../core";
import { ChildrenCoords } from "./utils/types";

export const tooltipStyles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: IOColors["grey-850"],
    opacity: 0.6,
    zIndex: 997
  },
  childrenContainer: {
    position: "absolute",
    zIndex: 1000
  },
  tooltipContainer: {
    position: "absolute",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: IOColors.white,
    borderRadius: 8,
    zIndex: 2000,
    overflow: "visible"
  },
  arrowContainer: {
    position: "absolute",
    display: "flex",
    zIndex: 3000
  },
  closeIcon: {
    position: "absolute",
    right: 8,
    top: 9 // It's been used `9` instead of `8` to fix accessibility focus order. In this way title is read before close icon.
  }
});

export const getChildrenPosition = (childrenCoords: ChildrenCoords) => ({
  top: childrenCoords.y,
  left: childrenCoords.x,
  width: childrenCoords.width,
  height: childrenCoords.height
});
