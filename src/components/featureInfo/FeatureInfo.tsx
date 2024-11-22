import React, { ReactNode } from "react";
import { GestureResponderEvent, View } from "react-native";
import {
  BodySmall,
  HSpacer,
  IOIconSizeScale,
  IOIcons,
  IOPictogramSizeScale,
  IOPictograms,
  Icon,
  Pictogram,
  VStack
} from "../../components";
import { IOStyles, useIOTheme } from "../../core";

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
    return <BodySmall testID="infoScreenBody">{body}</BodySmall>;
  }

  return body;
};

export const FeatureInfo = ({
  iconName,
  pictogramName,
  body,
  action
}: FeatureInfoProps) => {
  const theme = useIOTheme();

  return (
    <View style={[IOStyles.flex, IOStyles.row, IOStyles.alignCenter]}>
      {iconName && (
        <Icon
          name={iconName}
          size={DEFAULT_ICON_SIZE}
          color={theme["icon-decorative"]}
        />
      )}
      {pictogramName && (
        <Pictogram name={pictogramName} size={DEFAULT_PICTOGRAM_SIZE} />
      )}
      <HSpacer size={24} />
      <VStack space={4} style={{ flexShrink: 1 }}>
        {renderNode(body)}
        {action && (
          <BodySmall
            weight="Semibold"
            asLink
            onPress={action.onPress}
            accessible
            importantForAccessibility={"yes"}
            accessibilityElementsHidden={false}
          >
            {action.label}
          </BodySmall>
        )}
      </VStack>
    </View>
  );
};
