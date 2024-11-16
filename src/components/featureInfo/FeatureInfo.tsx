import React, { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";
import {
  Body,
  HStack,
  IOIconSizeScale,
  IOIcons,
  IOPictogramSizeScale,
  IOPictograms,
  Icon,
  Label,
  Pictogram,
  VStack
} from "../../components";

type PartialFeatureInfo = {
  // Necessary to render main body with different formatting
  body?: string | ReactNode;
};

type FeatureInfoActionProps =
  | {
      action: {
        label: string;
        onPress: (event: GestureResponderEvent) => void;
      };
    }
  | {
      action?: never;
    };

type FeatureInfoGraphicProps =
  | { iconName?: never; pictogramName: IOPictograms }
  | { iconName: IOIcons; pictogramName?: never };

type FeatureInfoProps = FeatureInfoGraphicProps &
  PartialFeatureInfo &
  FeatureInfoActionProps;

const DEFAULT_ICON_SIZE: IOIconSizeScale = 24;
const DEFAULT_PICTOGRAM_SIZE: IOPictogramSizeScale = 48;

const renderNode = (body: FeatureInfoProps["body"]) => {
  if (typeof body === "string") {
    return (
      <Body color="grey-700" testID="infoScreenBody">
        {body}
      </Body>
    );
  }

  return body;
};

export const FeatureInfo = ({
  iconName,
  pictogramName,
  body,
  action
}: FeatureInfoProps) => (
  <HStack style={{ alignItems: "center" }} space={24}>
    {iconName && (
      <Icon
        allowFontScaling
        name={iconName}
        size={DEFAULT_ICON_SIZE}
        color="grey-300"
      />
    )}
    {pictogramName && (
      <Pictogram
        allowFontScaling
        name={pictogramName}
        size={DEFAULT_PICTOGRAM_SIZE}
      />
    )}
    <VStack allowScaleSpacing space={4} style={{ flexShrink: 1 }}>
      {renderNode(body)}
      {action && (
        <Label
          asLink
          onPress={action.onPress}
          accessible
          importantForAccessibility={"yes"}
          accessibilityElementsHidden={false}
        >
          {action.label}
        </Label>
      )}
    </VStack>
  </HStack>
);
