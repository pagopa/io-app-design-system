import React, { ReactNode } from "react";
import { GestureResponderEvent, View } from "react-native";
import {
  Body,
  HSpacer,
  IOIconSizeScale,
  IOIcons,
  IOPictogramSizeScale,
  IOPictograms,
  Icon,
  Pictogram,
  VSpacer
} from "../../components";
import { IOStyles } from "../../core";

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
  <View style={[IOStyles.flex, IOStyles.row, IOStyles.alignCenter]}>
    {iconName && (
      <Icon name={iconName} size={DEFAULT_ICON_SIZE} color="grey-300" />
    )}
    {pictogramName && (
      <Pictogram name={pictogramName} size={DEFAULT_PICTOGRAM_SIZE} />
    )}
    <HSpacer size={24} />
    <View style={{ flexShrink: 1 }}>
      {renderNode(body)}
      {action && (
        <>
          {/* Add "marginTop" equivalent if body text is present.
          This verbose code could be deleted once we got "gap"
          property support */}
          {body && <VSpacer size={4} />}
          <Body
            asLink
            onPress={action.onPress}
            accessible
            importantForAccessibility={"yes"}
            accessibilityElementsHidden={false}
          >
            {action.label}
          </Body>
        </>
      )}
    </View>
  </View>
);
