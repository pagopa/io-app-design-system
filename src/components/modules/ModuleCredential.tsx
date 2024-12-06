import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageURISource,
  StyleSheet
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
import { LoadingSpinner } from "../loadingSpinner";
import { HStack } from "../stack/Stack";
import { BodySmall } from "../typography";
import { ModuleStatic } from "./ModuleStatic";
import {
  PressableModuleBase,
  PressableModuleBaseProps
} from "./PressableModuleBase";

type ImageProps =
  | { icon: IOIcons; image?: never }
  | { icon?: never; image: ImageURISource | ImageSourcePropType };

type LoadingModuleProps = {
  isLoading: true;
};

type BaseModuleProps = {
  isLoading?: false;
  label: string;
  badge?: Badge;
  isFetching?: boolean;
};

type ModuleCredentialProps =
  | BaseModuleProps & ImageProps & PressableModuleBaseProps;

const ModuleCredential = (
  props: WithTestID<LoadingModuleProps | ModuleCredentialProps>
) =>
  props.isLoading ? (
    <ModuleCredentialSkeleton />
  ) : (
    <ModuleCredentialContent {...props} />
  );

const ModuleCredentialContent = ({
  testID,
  icon,
  image,
  label,
  onPress,
  badge,
  isFetching,
  ...pressableProps
}: WithTestID<ModuleCredentialProps>) => {
  const theme = useIOTheme();

  const iconComponent = icon && (
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

  const endComponent = React.useMemo(() => {
    if (isFetching) {
      return (
        <LoadingSpinner
          testID={testID ? `${testID}_activityIndicator` : undefined}
          color={theme["interactiveElem-default"]}
        />
      );
    }
    if (badge) {
      return (
        <Badge {...badge} testID={testID ? `${testID}_badge` : undefined} />
      );
    }
    if (onPress) {
      return (
        <Icon
          testID={testID ? `${testID}_icon` : undefined}
          name="chevronRightListItem"
          color={theme["interactiveElem-default"]}
          size={IOListItemVisualParams.chevronSize}
        />
      );
    }
    return null;
  }, [testID, theme, isFetching, badge, onPress]);

  const ModuleContent = () => (
    <HStack space={8} style={{ alignItems: "center" }}>
      <HStack
        space={IOVisualCostants.iconMargin as IOSpacer}
        style={{ flexGrow: 1, flexShrink: 1, alignItems: "center" }}
      >
        {/* Graphical assets */}
        {iconComponent ?? imageComponent}

        <BodySmall
          color={theme["interactiveElem-default"]}
          weight="Semibold"
          numberOfLines={2}
          lineBreakMode="middle"
          style={{ flexShrink: 1 }}
        >
          {label}
        </BodySmall>
      </HStack>
      {endComponent}
    </HStack>
  );

  return onPress ? (
    <PressableModuleBase {...pressableProps} testID={testID} onPress={onPress}>
      <ModuleContent />
    </PressableModuleBase>
  ) : (
    <ModuleStatic>
      <ModuleContent />
    </ModuleStatic>
  );
};

const ModuleCredentialSkeleton = () => (
  <ModuleStatic
    startBlock={
      <HStack
        style={{ alignItems: "center" }}
        space={IOVisualCostants.iconMargin as IOSpacer}
      >
        <Placeholder.Box animate="fade" width={24} height={24} radius={8} />
        <Placeholder.Box animate="fade" width={96} height={16} radius={8} />
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

export { ModuleCredential };
