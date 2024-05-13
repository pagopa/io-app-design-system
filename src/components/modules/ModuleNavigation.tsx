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
  IOModuleStyles,
  IOSelectionListItemVisualParams,
  IOStyles,
  IOVisualCostants,
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { IOIcons, Icon } from "../icons";
import { VSpacer } from "../spacer";
import { Chip, LabelSmallAlt } from "../typography";
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

  if (props.isLoading) {
    return <ModuleNavigationSkeleton />;
  }

  const { icon, image, title, subtitle, onPress, badge, ...pressableProps } =
    props;

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
          color="blueIO-500"
          numberOfLines={2}
          lineBreakMode="middle"
        >
          {title}
        </LabelSmallAlt>
        {subtitle && <Chip color="grey-700">{subtitle}</Chip>}
      </View>
      <View>
        {badge ? (
          <Badge {...badge} />
        ) : onPress ? (
          <Icon
            name="chevronRightListItem"
            color={theme["interactiveElem-default"]}
            size={IOListItemVisualParams.chevronSize}
          />
        ) : null}
      </View>
    </PressableModuleBase>
  );
};

const ModuleNavigationSkeleton = () => (
  <View style={IOModuleStyles.button}>
    <View style={[IOStyles.row, IOStyles.alignCenter]}>
      <View style={{ marginRight: IOVisualCostants.iconMargin }}>
        <Placeholder.Box animate="fade" width={24} height={24} radius={8} />
      </View>
      <View style={{ paddingRight: 8 }}>
        <Placeholder.Box animate="fade" width={96} height={19} radius={8} />
        <VSpacer size={4} />
        <Placeholder.Box animate="fade" width={180} height={16} radius={8} />
      </View>
    </View>
    <Placeholder.Box animate="fade" width={64} height={22} radius={8} />
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: IOSelectionListItemVisualParams.iconSize,
    height: IOSelectionListItemVisualParams.iconSize,
    resizeMode: "contain"
  }
});
