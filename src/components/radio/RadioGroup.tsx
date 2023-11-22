import React, { ComponentProps } from "react";
import { View } from "react-native";
import { Divider } from "../divider";
import { ListItemRadio } from "../listitems/ListItemRadio";

export type RadioItem<T> = {
  id: T;
  value: string;
  description?: string;
  disabled?: boolean;
  startImage?: ComponentProps<typeof ListItemRadio>["startImage"];
  loadingProps?: ComponentProps<typeof ListItemRadio>["loadingProps"];
};

type Props<T> = {
  items: ReadonlyArray<RadioItem<T>>;
  selectedItem?: T;
  onPress: (selected: T) => void;
};

/**
 * A list of radio buttons.
 * The management of the selection is demanded and derived by the `selectedItem` prop.
 * The item with the `id` equal to the `selectedItem` is the active one.
 */
export const RadioGroup = <T,>({ items, selectedItem, onPress }: Props<T>) => (
  <View>
    {items.map((item, index) => (
      <React.Fragment key={`radio_item_${item.id}`}>
        <ListItemRadio
          testID={`RadioItemTestID_${item.id}`}
          value={item.value}
          description={item.description}
          startImage={item.startImage}
          disabled={item.disabled}
          loadingProps={item.loadingProps}
          onValueChange={() => onPress(item.id)}
          selected={selectedItem === item.id}
        />
        {index < items.length - 1 && <Divider />}
      </React.Fragment>
    ))}
  </View>
);
