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
  IOStyles,
  IOVisualCostants,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { IOIcons, Icon } from "../icons";
import { LabelSmallAlt } from "../typography";
import { ModuleSkeleton } from "./ModuleSkeleton";
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
  label: string;
  badge?: Badge;
} & ImageProps &
  PressableModuleBaseProps;

type ModuleCredentialProps = LoadingProps | BaseProps;

const ModuleCredential = (props: WithTestID<ModuleCredentialProps>) => {
  const theme = useIOTheme();

  if (props.isLoading) {
    return <ModuleCredentialSkeleton />;
  }

  const { icon, image, label, onPress, badge, ...pressableProps } = props;

  const iconComponent = (
    <View style={{ marginRight: IOVisualCostants.iconMargin }}>
      {icon && <Icon name={icon} size={24} color="grey-300" />}
      {image && (
        <Image
          source={image}
          style={styles.image}
          accessibilityIgnoresInvertColors={true}
        />
      )}
    </View>
  );

  return (
    <PressableModuleBase {...pressableProps} onPress={onPress}>
      {(icon || image) && iconComponent}
      <View style={{ flexGrow: 1, flexShrink: 1, paddingRight: 8 }}>
        <LabelSmallAlt
          color={theme["interactiveElem-default"]}
          numberOfLines={2}
          lineBreakMode="middle"
        >
          {label}
        </LabelSmallAlt>
      </View>
      <View style={IOStyles.row}>
        {badge && <Badge {...badge} />}
        {onPress && (
          <Icon
            name="chevronRightListItem"
            color={theme["interactiveElem-default"]}
            size={IOListItemVisualParams.chevronSize}
          />
        )}
      </View>
    </PressableModuleBase>
  );
};

const ModuleCredentialSkeleton = () => (
  <ModuleSkeleton
    startBlock={
      <>
        {/* Rewrite it using HStack and VStack, when 0.72 will be used in the main app:
            <HStack alignItems="center" space={IOVisualCostants.iconMargin as IOSpacer}>
              <Placeholder.Box animate="fade" width={24} height={24} radius={8} />
              <Placeholder.Box animate="fade" width={96} height={16} radius={8} />
            </HStack>
      */}
        <View style={{ marginRight: IOVisualCostants.iconMargin }}>
          <Placeholder.Box animate="fade" width={24} height={24} radius={8} />
        </View>
        <Placeholder.Box animate="fade" width={96} height={16} radius={8} />
      </>
    }
    endBlock={
      <Placeholder.Box animate="fade" width={64} height={24} radius={8} />
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

export { ModuleCredential };
