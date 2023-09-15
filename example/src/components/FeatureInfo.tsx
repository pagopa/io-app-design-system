import {
  HSpacer,
  IOIconSizeScale,
  IOIcons,
  IOPictogramSizeScale,
  IOPictograms,
  IOStyles,
  Icon,
  LabelSmall,
  LabelLink as Link,
  Pictogram,
  VSpacer
} from "@pagopa/io-app-design-system";
import React from "react";
import { GestureResponderEvent, View } from "react-native";

type PartialFeatureInfo = {
  // Necessary to render main body with different formatting
  body?: string | React.ReactNode;
};

type FeatureInfoActionProps =
  | {
      actionLabel?: string;
      actionOnPress: (event: GestureResponderEvent) => void;
    }
  | {
      actionLabel?: never;
      actionOnPress?: never;
    };

type FeatureInfoGraphicProps =
  | { iconName?: never; pictogramName: IOPictograms }
  | { iconName: IOIcons; pictogramName?: never };

type FeatureInfo = FeatureInfoGraphicProps &
  PartialFeatureInfo &
  FeatureInfoActionProps;

const DEFAULT_ICON_SIZE: IOIconSizeScale = 24;
const DEFAULT_PICTOGRAM_SIZE: IOPictogramSizeScale = 48;

const renderNode = (body: FeatureInfo["body"]) => {
  if (typeof body === "string") {
    return (
      <LabelSmall weight="Regular" color="grey-700" testID="infoScreenBody">
        {body}
      </LabelSmall>
    );
  }

  return body;
};

export const FeatureInfo = ({
  iconName,
  pictogramName,
  body,
  actionLabel,
  actionOnPress
}: FeatureInfo) => (
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
      {actionLabel && actionOnPress && (
        <>
          {/* Add "marginTop" equivalent if body text is present.
          This verbose code could be deleted once we got "gap"
          property support */}
          {body && <VSpacer size={8} />}
          <Link fontSize="small" onPress={actionOnPress}>
            {actionLabel}
          </Link>
        </>
      )}
    </View>
  </View>
);
