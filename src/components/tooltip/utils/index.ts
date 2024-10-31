import { ScaledSize } from 'react-native';
import { ChildrenCoords, DisplayInsets, Placement } from './types';

const ARROW_WIDTH = 24;
const ARROW_HEIGHT = 14;

export const getArrowBoxByPlacement = (placement: Placement) => {
  switch (placement) {
    case 'left':
    case 'right':
      return {
        width: ARROW_HEIGHT,
        height: ARROW_WIDTH,
      };
    default:
      return {
        height: ARROW_HEIGHT,
        width: ARROW_WIDTH,
      };
  }
};

export const getTooltipCoords = (
  placement: Placement,
  childrenCoords: ChildrenCoords,
  displayInsets: DisplayInsets,
  screenDimensions: ScaledSize
) => {
  const { width: screenWidth, height: screenHeight } = screenDimensions;

  switch (placement) {
    case "top":
      return {
        bottom: screenHeight - childrenCoords.y + ARROW_HEIGHT,
        left: displayInsets.left,
        width: screenWidth - displayInsets.left - displayInsets.right
      };
    case "bottom":
      return {
        top: childrenCoords.y + childrenCoords.height + ARROW_HEIGHT,
        left: displayInsets.left,
        width: screenWidth - displayInsets.left - displayInsets.right
      };
    case "left":
      return {
        top: childrenCoords.y,
        left: displayInsets.left,
        width:
          screenWidth - (screenWidth - childrenCoords.x) - ARROW_HEIGHT - displayInsets.left
      };
    case "right":
      const elementSize = childrenCoords.width + childrenCoords.x + ARROW_HEIGHT;

      return {
        top: childrenCoords.y,
        left: elementSize,
        width:
          screenWidth -
          (elementSize + displayInsets.right)
      };
    default:
      return {};
  }
};

export const getArrowCoords = (
  placement: Placement,
  childrenCoords: ChildrenCoords,
  screenDimensions: ScaledSize
) => {
  const { width: screenWidth, height: screenHeight } = screenDimensions;

  switch (placement) {
    case "top":
      return {
        bottom: screenHeight - childrenCoords.y,
        left: childrenCoords.x + childrenCoords.width / 2 - ARROW_WIDTH / 2
      };
    case "bottom":
      return {
        top: childrenCoords.y + childrenCoords.height,
        left: childrenCoords.x + childrenCoords.width / 2 - ARROW_WIDTH / 2
      };
    case "left":
      return {
        top: childrenCoords.y,
        left: screenWidth - (screenWidth - childrenCoords.x) - ARROW_HEIGHT,
        transform: [{ translateY: ARROW_WIDTH / 2 }]
      };
    case "right":
      return {
        top: childrenCoords.y,
        left: childrenCoords.width + childrenCoords.x,
        transform: [{ translateY: ARROW_WIDTH / 2 }]
      };
    default:
      return {};
  }
};