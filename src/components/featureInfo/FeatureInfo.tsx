import React, { ReactNode } from "react";
import { AccessibilityRole, GestureResponderEvent } from "react-native";
import {
  BodySmall,
  HStack,
  IOIconSizeScale,
  IOIcons,
  IOPictogramSizeScale,
  IOPictograms,
  Icon,
  Pictogram,
  VStack
} from "../../components";
import { useIOTheme } from "../../core";

type PartialFeatureInfo = {
  // Necessary to render main body with different formatting
  body?: string | ReactNode;
};

type FeatureInfoActionProps =
  | {
      action: {
        label: string;
        onPress: (event: GestureResponderEvent) => void;
        accessibilityRole?: Extract<AccessibilityRole, "button" | "link">;
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
    <HStack style={{ alignItems: "center" }} space={24}>
      {iconName && (
        <Icon
          allowFontScaling
          name={iconName}
          size={DEFAULT_ICON_SIZE}
          color={theme["icon-decorative"]}
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
          <BodySmall
            asLink
            weight="Semibold"
            onPress={action.onPress}
            accessible
            importantForAccessibility={"yes"}
            accessibilityElementsHidden={false}
            accessibilityRole={action.accessibilityRole}
          >
            {action.label}
          </BodySmall>
        )}
      </VStack>
    </HStack>
  );
};
