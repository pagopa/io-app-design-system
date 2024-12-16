import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageURISource,
  StyleSheet,
  View
} from "react-native";
import Placeholder from "rn-placeholder";
import {
  IOListItemVisualParams,
  IOSelectionListItemVisualParams,
  IOSpacer,
  IOVisualCostants,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { IOIcons, Icon } from "../icons";
import { HStack, VStack } from "../stack";
import { LabelMini, BodySmall } from "../typography";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { ModuleStatic } from "./ModuleStatic";
import {
  PressableModuleBase,
  PressableModuleBaseProps
} from "./PressableModuleBase";

type LoadingProps = {
  isLoading: true;
};

type ImageProps =
  | { icon: IOIcons; image?: never }
  | { icon?: never; image: ImageURISource | ImageSourcePropType };

type BaseProps = {
  isLoading?: false;
  title: string;
  subtitle?: string;
  badge?: Badge;
} & ImageProps &
  PressableModuleBaseProps;

type ModuleNavigationProps = LoadingProps | BaseProps;

export const ModuleNavigation = (props: WithTestID<ModuleNavigationProps>) => {
  const theme = useIOTheme();
  const { hugeFontEnabled } = useIOFontDynamicScale();

  if (props.isLoading) {
    return <ModuleNavigationSkeleton />;
  }

  const { icon, image, title, subtitle, onPress, badge, ...pressableProps } =
    props;

  const iconComponent = icon && !hugeFontEnabled && (
    <Icon
      name={icon}
      size={IOSelectionListItemVisualParams.iconSize}
      color="grey-300"
    />
  );

  const imageComponent = image && (
    <Image
      source={image}
      style={styles.image}
      accessibilityIgnoresInvertColors={true}
    />
  );

  return (
    <PressableModuleBase {...pressableProps} onPress={onPress}>
      <HStack space={8} style={{ alignItems: "center" }}>
        <HStack
          space={IOVisualCostants.iconMargin as IOSpacer}
          style={{ alignItems: "center", flexGrow: 1, flexShrink: 1 }}
        >
          {iconComponent ?? imageComponent}

          <View style={{ flexShrink: 1 }}>
            <BodySmall
              color={theme["interactiveElem-default"]}
              weight="Semibold"
              numberOfLines={2}
              lineBreakMode="middle"
              style={{ flexShrink: 1 }}
            >
              {title}
            </BodySmall>
            {subtitle && (
              <LabelMini weight="Regular" color={theme["textBody-tertiary"]}>
                {subtitle}
              </LabelMini>
            )}
          </View>
        </HStack>
        {badge ? (
          <Badge {...badge} />
        ) : onPress ? (
          <Icon
            name="chevronRightListItem"
            color={theme["interactiveElem-default"]}
            size={IOListItemVisualParams.chevronSize}
          />
        ) : null}
      </HStack>
    </PressableModuleBase>
  );
};

const ModuleNavigationSkeleton = () => (
  <ModuleStatic
    startBlock={
      <HStack
        style={{ alignItems: "center" }}
        space={IOVisualCostants.iconMargin as IOSpacer}
      >
        <Placeholder.Box animate="fade" width={24} height={24} radius={8} />
        <VStack space={4}>
          <Placeholder.Box animate="fade" width={96} height={16} radius={8} />
          <Placeholder.Box animate="fade" width={160} height={12} radius={8} />
        </VStack>
      </HStack>
    }
    endBlock={
      <Placeholder.Box animate="fade" width={64} height={24} radius={16} />
    }
  />
);

const styles = StyleSheet.create({
  image: {
    width: IOSelectionListItemVisualParams.iconSize,
    height: IOSelectionListItemVisualParams.iconSize,
    resizeMode: "contain"
  }
});
