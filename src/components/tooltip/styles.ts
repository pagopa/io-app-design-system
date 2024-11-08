import { StyleSheet } from 'react-native';
import { IOColors } from '../../core';
import { ChildrenCoords } from './utils/types';

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
  tooltipHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tooltipContainer: {
    position: "absolute",
    padding: 16,
    backgroundColor: IOColors.white,
    borderRadius: 8,
    zIndex: 2000,
    overflow: "visible"
  },
  arrowContainer: {
    position: "absolute",
    display: 'flex',
    zIndex: 3000
  },
  closeIcon: {
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 2001
  }
});

export const getChildrenPosition = (childrenCoords: ChildrenCoords) => ({
  top: childrenCoords.y,
  left: childrenCoords.x,
  width: childrenCoords.width,
  height: childrenCoords.height
});