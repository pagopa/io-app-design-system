import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageURISource,
  StyleSheet
} from "react-native";
import {
  IOListItemVisualParams,
  IOSelectionListItemVisualParams,
  IOSpacer,
  IOVisualCostants
} from "../../core";
import { useIOTheme } from "../../context";
import { useIOFontDynamicScale } from "../../utils/accessibility";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { IOIcons, Icon } from "../icons";
import { LoadingSpinner } from "../loadingSpinner";
import { IOSkeleton } from "../skeleton";
import { HStack } from "../layout/Stack";
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
  loadingAccessibilityLabel?: string;
};

type BaseModuleProps = {
  isLoading?: false;
  label: string;
  badge?: Badge;
  isFetching?: boolean;
  showChevronWithBadge?: boolean;
};

type ModuleCredentialProps =
  | BaseModuleProps & ImageProps & PressableModuleBaseProps;

const ModuleCredential = (
  props: WithTestID<LoadingModuleProps | ModuleCredentialProps>
) =>
  props.isLoading ? (
    <ModuleCredentialSkeleton
      loadingAccessibilityLabel={props.loadingAccessibilityLabel}
    />
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
  showChevronWithBadge = false,
  ...pressableProps
}: WithTestID<ModuleCredentialProps>) => {
  const theme = useIOTheme();
  const { hugeFontEnabled } = useIOFontDynamicScale();

  const iconComponent = icon && !hugeFontEnabled && (
    <Icon
      allowFontScaling
      name={icon}
      size={IOSelectionListItemVisualParams.iconSize}
      color={theme["icon-decorative"]}
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
    const activityIndicatorTestID = testID ? `${testID}_activityIndicator` : undefined;
    const chevronTestID = testID ? `${testID}_icon` : undefined;
    const badgeTestID = testID ? `${testID}_badge` : undefined;

    if (isFetching) {
      return (
        <LoadingSpinner
          testID={activityIndicatorTestID}
        />
      );
    }

    const chevronIcon = (
      <Icon
        testID={chevronTestID}
        name="chevronRightListItem"
        color={theme["interactiveElem-default"]}
        size={IOListItemVisualParams.chevronSize}
      />
    );

    if (badge) {
      return (
        <HStack style={{ alignItems: "center" }}>
          <Badge {...badge} testID={badgeTestID} />
          {showChevronWithBadge && onPress && chevronIcon}
        </HStack>
      );
    }

    if (onPress) {
      return chevronIcon;
    }
    return null;
  }, [testID, theme, isFetching, badge, onPress, showChevronWithBadge]);

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

const ModuleCredentialSkeleton = ({
  loadingAccessibilityLabel
}: Pick<LoadingModuleProps, "loadingAccessibilityLabel">) => (
  <ModuleStatic
    accessible={true}
    accessibilityLabel={loadingAccessibilityLabel}
    accessibilityState={{ busy: true }}
    startBlock={
      <HStack
        style={{ alignItems: "center" }}
        space={IOVisualCostants.iconMargin as IOSpacer}
      >
        <IOSkeleton shape="square" size={24} radius={8} />
        <IOSkeleton shape="rectangle" width={96} height={16} radius={8} />
      </HStack>
    }
    endBlock={
      <IOSkeleton shape="rectangle" width={64} height={24} radius={16} />
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
