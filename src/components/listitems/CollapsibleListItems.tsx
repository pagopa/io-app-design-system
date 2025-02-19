import React, { Fragment } from "react";
import { View } from "react-native";
import {
  IOSelectionListItemStyles,
  IOSelectionListItemVisualParams,
  useIOTheme
} from "../../core";
import { AccordionItem } from "../accordion";
import { Divider } from "../divider";
import { BodySmall, H6 } from "../typography";
import { VSpacer } from "../spacer";
import { ListItemCheckbox } from "./ListItemCheckbox";

type Props = {
  /**
   * The accordion title.
   */
  title: string;
  /**
   * The list of items to display within the accordion.
   */
  items: Array<Item>;
  /**
   * Enable the selection of items with a checkbox.
   * @default true
   */
  selectionEnabled?: boolean;
  /**
   * The IDs of the selected items, when the component is controlled.
   */
  selectedItemIds?: Array<string>;
  /**
   * Whether the accordion starts expanded.
   * @default false
   */
  defaultExpanded?: boolean;
  /**
   * Function called when a item is selected.
   */
  onItemSelected?: (item: Item, selected: boolean) => void;
  /**
   * Function called when the accordion is toggled to collapsed or expanded state.
   */
  onToggle?: (expanded: boolean) => void;
};

type Item = {
  id: string;
  title: string;
  description?: string;
};

export const CollapsibleListItems = ({
  title,
  items,
  defaultExpanded,
  onItemSelected,
  onToggle,
  selectedItemIds,
  selectionEnabled = true
}: Props) => {
  const body = items.map((item, index) => (
    <Fragment key={item.id}>
      {index !== 0 && <Divider />}
      {selectionEnabled ? (
        <ListItemCheckbox
          value={item.title}
          description={item.description}
          selected={selectedItemIds?.includes(item.id)}
          onValueChange={
            onItemSelected
              ? selected => onItemSelected(item, selected)
              : undefined
          }
        />
      ) : (
        <SimpleListItem value={item.title} description={item.description} />
      )}
    </Fragment>
  ));

  return (
    <AccordionItem
      onPress={onToggle}
      title={title}
      body={body}
      defaultExpanded={defaultExpanded}
      backgroundVariant="secondary"
    />
  );
};

type SimpleListItemProps = {
  value: string;
  description?: string;
};

const SimpleListItem = ({ value, description }: SimpleListItemProps) => {
  const theme = useIOTheme();

  return (
    <View style={IOSelectionListItemStyles.listItem}>
      <H6 color={theme["textBody-default"]}>{value}</H6>
      {description && (
        <View>
          <VSpacer size={IOSelectionListItemVisualParams.descriptionMargin} />
          <BodySmall weight="Regular" color={theme["textBody-tertiary"]}>
            {description}
          </BodySmall>
        </View>
      )}
    </View>
  );
};
