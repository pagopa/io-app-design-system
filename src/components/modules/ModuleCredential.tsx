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
import { LoadingSpinner } from "../loadingSpinner";
import { LabelSmallAlt } from "../typography";
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
  | LoadingModuleProps
  | (BaseModuleProps & ImageProps & PressableModuleBaseProps);

const ModuleCredential = (props: WithTestID<ModuleCredentialProps>) => {
  const theme = useIOTheme();

  if (props.isLoading) {
    return <ModuleCredentialSkeleton />;
  }

  const {
    testID,
    icon,
    image,
    label,
    onPress,
    badge,
    isFetching,
    ...pressableProps
  } = props;

  const ModuleContent = () => (
    <>
      {icon ? (
        <View style={styles.icon}>
          <Icon name={icon} size={24} color="grey-300" />
        </View>
      ) : image ? (
        <Image
          source={image}
          style={styles.image}
          accessibilityIgnoresInvertColors={true}
        />
      ) : null}
      <View style={styles.label}>
        <LabelSmallAlt
          color={theme["interactiveElem-default"]}
          numberOfLines={2}
          lineBreakMode="middle"
        >
          {label}
        </LabelSmallAlt>
      </View>
      <View style={IOStyles.row}>
        {badge ? (
          <Badge {...badge} testID={testID ? `${testID}_badge` : undefined} />
        ) : null}
        {isFetching ? (
          <LoadingSpinner
            testID={testID ? `${testID}_activityIndicator` : undefined}
            color={theme["interactiveElem-default"]}
          />
        ) : onPress ? (
          <Icon
            testID={testID ? `${testID}_icon` : undefined}
            name="chevronRightListItem"
            color={theme["interactiveElem-default"]}
            size={IOListItemVisualParams.chevronSize}
          />
        ) : null}
      </View>
    </>
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
      <Placeholder.Box animate="fade" width={64} height={24} radius={16} />
    }
  />
);

const styles = StyleSheet.create({
  image: {
    width: IOSelectionListItemVisualParams.iconSize,
    height: IOSelectionListItemVisualParams.iconSize,
    marginRight: IOVisualCostants.iconMargin,
    resizeMode: "contain"
  },
  icon: {
    marginRight: IOVisualCostants.iconMargin
  },
  label: { flexGrow: 1, flexShrink: 1, paddingRight: 8 }
});

export { ModuleCredential };
