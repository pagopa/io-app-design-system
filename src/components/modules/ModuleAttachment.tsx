import React, { useCallback } from "react";
import { GestureResponderEvent, PressableProps } from "react-native";
import { IOListItemVisualParams, useIOTheme } from "../../core";
import { WithTestID } from "../../utils/types";
import { Badge } from "../badge";
import { Icon } from "../icons";
import { LoadingSpinner } from "../loadingSpinner";
import { IOSkeleton } from "../skeleton";
import { HStack, VStack } from "../stack";
import { Body } from "../typography";
import { ModuleStatic } from "./ModuleStatic";
import { PressableModuleBase } from "./PressableModuleBase";

type PartialProps = WithTestID<{
  title: string;
  format: "doc" | "pdf";
  isLoading?: boolean;
  isFetching?: boolean;
  loadingAccessibilityLabel?: string;
  fetchingAccessibilityLabel?: string;
  onPress: (event: GestureResponderEvent) => void;
}>;

export type ModuleAttachmentProps = PartialProps &
  Pick<
    PressableProps,
    "onPress" | "accessibilityLabel" | "disabled" | "testID"
  >;

const ModuleAttachmentContent = ({
  isFetching,
  format,
  title,
  testID
}: Pick<
  ModuleAttachmentProps,
  "isFetching" | "format" | "title" | "testID"
>) => {
  const theme = useIOTheme();

  const IconOrActivityIndicatorComponent = () => {
    if (isFetching) {
      const activityIndicatorTestId = testID
        ? `${testID}_activityIndicator`
        : undefined;

      return (
        <LoadingSpinner
          testID={activityIndicatorTestId}
          color={theme["interactiveElem-default"]}
        />
      );
    }

    return (
      <Icon
        name="chevronRightListItem"
        color={theme["interactiveElem-default"]}
        size={IOListItemVisualParams.chevronSize}
      />
    );
  };

  return (
    <HStack space={8} style={{ alignItems: "center" }}>
      <VStack
        space={4}
        style={{ alignItems: "flex-start", flexShrink: 1, flexGrow: 1 }}
      >
        <Body
          weight="Semibold"
          numberOfLines={2}
          color={theme["interactiveElem-default"]}
        >
          {title}
        </Body>
        <Badge text={format.toUpperCase()} variant="default" />
      </VStack>
      <IconOrActivityIndicatorComponent />
    </HStack>
  );
};

/**
 * The `ModuleAttachment` component is a custom button component with an extended outline style.
 * It provides an animated scaling effect when pressed.
 *
 * @param {string}   accessibilityLabel - Optional accessibility label.
 * @param {boolean}  disabled - If true, the button is disabled.
 * @param {string}   fetchingAccessibilityLabel - Optional accessibility label to use during fetching.
 * @param {string}   loadingAccessibilityLabel - Optional accessibility label to use during loading.
 * @param {string}   format - Badge content. PDF or DOC.
 * @param {boolean}  isLoading - If true, displays a skeleton loading component.
 * @param {boolean}  isFetching - If true, displays an activity indicator.
 * @param {function} onPress - The function to be executed when the item is pressed.
 * @param {string}   testID - The test ID for testing purposes.
 * @param {string}   title - The title text to display.
 *
 */
export const ModuleAttachment = ({
  accessibilityLabel,
  disabled = false,
  fetchingAccessibilityLabel,
  loadingAccessibilityLabel,
  format,
  isLoading = false,
  isFetching = false,
  onPress,
  testID,
  title
}: ModuleAttachmentProps) => {
  const handleOnPress = useCallback(
    (event: GestureResponderEvent) => {
      if (isFetching) {
        return;
      }
      onPress(event);
    },
    [isFetching, onPress]
  );

  if (isLoading) {
    return (
      <ModuleAttachmentSkeleton
        loadingAccessibilityLabel={loadingAccessibilityLabel}
      />
    );
  }

  const pressableAccessibilityLabel =
    (isFetching && !!fetchingAccessibilityLabel
      ? fetchingAccessibilityLabel
      : accessibilityLabel) ?? title;

  return disabled || isFetching ? (
    <ModuleStatic disabled={disabled}>
      <ModuleAttachmentContent
        isFetching={isFetching}
        title={title}
        format={format}
      />
    </ModuleStatic>
  ) : (
    <PressableModuleBase
      testID={testID}
      onPress={handleOnPress}
      accessibilityHint={format}
      accessibilityLabel={pressableAccessibilityLabel}
    >
      <ModuleAttachmentContent
        isFetching={isFetching}
        title={title}
        format={format}
      />
    </PressableModuleBase>
  );
};

const ModuleAttachmentSkeleton = ({
  loadingAccessibilityLabel
}: Pick<ModuleAttachmentProps, "loadingAccessibilityLabel">) => (
  <ModuleStatic
    accessible={true}
    accessibilityLabel={loadingAccessibilityLabel}
    accessibilityState={{ busy: true }}
    startBlock={
      <VStack space={4}>
        <IOSkeleton shape="rectangle" radius={8} width={114} height={16} />
        <IOSkeleton shape="rectangle" radius={16} width={42} height={20} />
      </VStack>
    }
  />
);
