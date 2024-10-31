import React, {
  useState,
  useRef,
  PropsWithChildren,
  useEffect,
  useCallback,
  JSXElementConstructor
} from "react";
import { View, Modal, Dimensions, LayoutChangeEvent } from "react-native";
import { IOColors, IOVisualCostants } from '../../core';
import { Body, H6 } from '../typography';
import { IconButton } from '../buttons';
import { BottomArrow, LeftArrow, RightArrow, TopArrow } from './Arrows';
import { getArrowBoxByPlacement, getArrowCoords, getTooltipCoords } from './utils';
import { getChildrenPosition, tooltipStyles } from './styles';
import { ChildrenCoords, DisplayInsets, Placement, TooltipLayout } from './utils/types';


const screenDimensions = Dimensions.get("screen");
const DEFAULT_INSETS: DisplayInsets = {
  top: 0,
  bottom: 0,
  left: IOVisualCostants.appMarginDefault,
  right: IOVisualCostants.appMarginDefault,
};
const ARROWS_BY_PLACEMENT: Record<Placement, JSXElementConstructor<{ color: string }>> = {
  top: TopArrow,
  bottom: BottomArrow,
  left: LeftArrow,
  right: RightArrow
};

type Props = {
  title: string;
  content: string;
  placement?: Placement;
  closeIconAccessibilityLabel: string;
  isVisible: boolean;
  displayInsets?: Partial<DisplayInsets>;
  onClose: () => void;
};

export const Tooltip = ({
  children,
  title,
  content,
  placement = "top",
  closeIconAccessibilityLabel,
  isVisible,
  displayInsets = {},
  onClose
}: PropsWithChildren<Props>) => {
  const [childrenCoords, setChildrenCoords] = useState<ChildrenCoords>();
  const [tooltipLayout, setTooltipLayout] = useState<TooltipLayout>();
  const childRef = useRef<View>(null);
  const Arrow = ARROWS_BY_PLACEMENT[placement];

  useEffect(() => {
    if (childRef.current) {
      childRef.current.measure((_, __, width, height, px, py) => {
        setChildrenCoords({
          x: px,
          y: py,
          width,
          height
        });
      });
    }
  }, []);

  const handleTooltipOnLayout = useCallback(({ nativeEvent }: LayoutChangeEvent) => {
    setTooltipLayout(nativeEvent.layout);
  }, []);

  return (
    <View>
      <View ref={childRef}>{children}</View>
      {childrenCoords && (
        <Modal
          transparent
          visible={isVisible}
        >
          <View
            
            pointerEvents="none"
            style={[tooltipStyles.childrenContainer, getChildrenPosition(childrenCoords)]}
          >
            {children}
          </View>
          <View style={tooltipStyles.overlay} />
          <View
            onLayout={handleTooltipOnLayout}
            style={[
              tooltipStyles.tooltipContainer,
              getTooltipCoords(placement, childrenCoords, { ...DEFAULT_INSETS, ...displayInsets }, screenDimensions),
              ...((placement === "left" || placement === "right") && tooltipLayout
                ? [
                  {
                    transform: [
                      {
                        translateY:
                          -tooltipLayout.height / 2 + childrenCoords.height / 2
                      }
                    ]
                  }
                ]
                : [])
            ]}
          >
            <View
              style={tooltipStyles.tooltipHeader}
            >
              <H6>{title}</H6>
              <IconButton
                color="neutral"
                icon="closeSmall"
                accessibilityLabel={closeIconAccessibilityLabel}
                onPress={onClose}
              />
            </View>
            <Body>{content}</Body>
          </View>
          <View
            style={[
              tooltipStyles.arrowContainer,
              getArrowBoxByPlacement(placement),
              getArrowCoords(placement, childrenCoords, screenDimensions)
            ]}
          >
            <Arrow color={IOColors.white} />
          </View>
        </Modal>
      )}
    </View>
  );
};

