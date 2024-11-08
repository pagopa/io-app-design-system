import React, {
  useState,
  useRef,
  PropsWithChildren,
  useEffect,
  useCallback,
  JSXElementConstructor,
  useMemo
} from "react";
import { View, Modal, Dimensions, LayoutChangeEvent, TouchableWithoutFeedback } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IOColors } from '../../core';
import { Body, H6 } from '../typography';
import { IconButton } from '../buttons';
import { BottomArrow, LeftArrow, RightArrow, TopArrow } from './Arrows';
import { ARROW_HEIGHT, EMPTY_SPACE, getArrowBoxByPlacement, getArrowCoords, getArrowVerticalAlignment, getDisplayInsets, getTooltipCoords, getTooltipVerticalAlignment } from './utils';
import { getChildrenPosition, tooltipStyles } from './styles';
import { ChildrenCoords, DisplayInsets, Placement, TooltipLayout } from './utils/types';


const screenDimensions = Dimensions.get("screen");

const ARROWS_BY_PLACEMENT: Record<Placement, JSXElementConstructor<{ color: string }>> = {
  top: TopArrow,
  bottom: BottomArrow,
  left: LeftArrow,
  right: RightArrow
};

type Props = {
  title: string;
  content: string;
  isVisible: boolean;
  placement?: Placement;
  displayInsets?: Partial<DisplayInsets>;
  closeIconAccessibilityLabel: string;
  onClose: () => void;
  allowCloseOnBackgroundTap?: boolean;
};

/**
 * This component prompts a tooltip around its children in relation to the given `placement`.
 * When `isVisible` is `true` 
 */
export const Tooltip = ({
  children,
  title,
  content,
  placement = "top",
  closeIconAccessibilityLabel,
  isVisible,
  displayInsets = {},
  allowCloseOnBackgroundTap,
  onClose
}: PropsWithChildren<Props>) => {
  const insets = useSafeAreaInsets();
  const [currentPlacement, setCurrentPlacement] = useState<Placement>(placement);
  const [childrenCoords, setChildrenCoords] = useState<ChildrenCoords>();
  const [tooltipLayout, setTooltipLayout] = useState<TooltipLayout>();
  const childRef = useRef<View>(null);
  const Arrow = useMemo(() => ARROWS_BY_PLACEMENT[currentPlacement], [currentPlacement]);

  /**
   * This function sets the `Tooltip` children coordinates
   */
  const measureChildrenCoords = useCallback(() => {
    childRef.current?.measure((_, __, width, height, px, py) => {
      setChildrenCoords({
        x: px,
        y: py,
        width,
        height
      });
    });
  }, []);

  useEffect(() => {
    if (childRef.current && isVisible) {
      // A new measure is executed every time the `Tooltip` is visible
      // This is required for use within ScrollView components.
      measureChildrenCoords();
    } else {
      setChildrenCoords(undefined);
      setTooltipLayout(undefined);
      setCurrentPlacement(placement);
    }
  }, [isVisible, placement, measureChildrenCoords]);

  /**
   * This function works with `top` and `bottom` placement and sets the current placement to their opposite value 
   * if in the selected one there is no space to prompt the tooltip
   */
  const invertPlacementIfNeeded = useCallback((nativeEvent: LayoutChangeEvent['nativeEvent']) => {
    if (placement === "top") {
      const hasSpace = nativeEvent.layout.y >= insets.top;

      if (!hasSpace) {
        setCurrentPlacement("bottom");
      }
    }
    if (placement === 'bottom') {
      const remainingSpace = screenDimensions.height - nativeEvent.layout.y - insets.bottom;
      const tooltipMinHeight = nativeEvent.layout.height + ARROW_HEIGHT + EMPTY_SPACE;
      const hasSpace = remainingSpace >= tooltipMinHeight;

      if (!hasSpace) {
        setCurrentPlacement("top");
      }
    }
  }, [insets.bottom, insets.top, placement]);

  const handleTooltipOnLayout = useCallback(({ nativeEvent }: LayoutChangeEvent) => {
    invertPlacementIfNeeded(nativeEvent);
    setTooltipLayout(nativeEvent.layout);
  }, [invertPlacementIfNeeded]);

  const handleTapOnBackground = useCallback(
    () => {
      if (allowCloseOnBackgroundTap) {
        onClose();
      }
    },
    [allowCloseOnBackgroundTap, onClose],
  );



  return (
    <>
      <View ref={childRef}>{children}</View>
      {childrenCoords && (
        <Modal
          transparent
          visible={isVisible}
        >
          <View
            pointerEvents="box-only"
            style={[tooltipStyles.childrenContainer, getChildrenPosition(childrenCoords)]}
          >
            {children}
          </View>
          <TouchableWithoutFeedback
            accessible={allowCloseOnBackgroundTap}
            accessibilityRole="button"
            onPress={handleTapOnBackground}
          >
            <View style={tooltipStyles.overlay} />
          </TouchableWithoutFeedback>
          <View
            onLayout={handleTooltipOnLayout}
            style={[
              tooltipStyles.tooltipContainer,
              getTooltipCoords(currentPlacement, childrenCoords, getDisplayInsets(displayInsets), screenDimensions),
              getTooltipVerticalAlignment(currentPlacement, childrenCoords.height, tooltipLayout?.height)
            ]}
          >
            <View style={tooltipStyles.closeIcon}>
              <IconButton
                color="neutral"
                icon="closeSmall"
                accessibilityLabel={closeIconAccessibilityLabel}
                onPress={onClose}
              />
            </View>
            <View
              style={tooltipStyles.tooltipHeader}
            >
              <H6>{title}</H6>
            </View>
            <Body>{content}</Body>
          </View>
          <View
            style={[
              tooltipStyles.arrowContainer,
              getArrowBoxByPlacement(currentPlacement),
              getArrowCoords(currentPlacement, childrenCoords, screenDimensions),
              getArrowVerticalAlignment(currentPlacement, childrenCoords.height)
            ]}
          >
            <Arrow color={IOColors.white} />
          </View>
        </Modal>
      )}
    </>
  );
};