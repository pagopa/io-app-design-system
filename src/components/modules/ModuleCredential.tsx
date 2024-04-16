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
  useIOTheme
} from "../../core";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { IOIcons, Icon } from "../icons";
import { HSpacer } from "../spacer";
import { LabelSmallAlt } from "../typography";
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
    <>
      {icon && <Icon name={icon} size={24} color="grey-300" />}
      {image && (
        <Image
          source={image}
          style={styles.image}
          accessibilityIgnoresInvertColors={true}
        />
      )}
    </>
  );

  return (
    <PressableModuleBase {...pressableProps} onPress={onPress}>
      <View>{iconComponent}</View>
      <View style={{ flexGrow: 1, flexShrink: 1, paddingHorizontal: 8 }}>
        <LabelSmallAlt
          color="blueIO-500"
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
  <View style={IOModuleStyles.button}>
    <View style={[IOStyles.row, IOStyles.alignCenter]}>
      <Placeholder.Box animate="fade" width={24} height={24} radius={8} />
      <HSpacer size={8} />
      <Placeholder.Box animate="fade" width={96} height={19} radius={8} />
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

export { ModuleCredential };
