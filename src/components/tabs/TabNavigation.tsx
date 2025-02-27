import React from "react";
import { FlexStyle, LayoutChangeEvent, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IOVisualCostants } from "src/core";
import { TabItem } from "./TabItem";

export type TabNavigationItem = Omit<
  TabItem,
  "onPress" | "color" | "selected" | "accessibilityLabel" | "accessibilityHint"
>;

type TabNavigationChildren =
  | React.ReactElement<TabItem>
  | Array<React.ReactElement<TabItem>>;

type TabAlignment = "start" | "center" | "end" | "stretch";

type TabNavigation = {
  // Configuration
  color?: TabItem["color"];
  selectedIndex?: number;
  tabAlignment?: TabAlignment;
  // Events
  onItemPress?: (index: number) => void;
  // Tabs
  children: TabNavigationChildren;
  includeContentMargins?: boolean;
};

const itemsJustify: Record<TabAlignment, FlexStyle["justifyContent"]> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "space-between"
};

const TabNavigation = ({
  color = "light",
  selectedIndex,
  tabAlignment = "center",
  onItemPress,
  children,
  includeContentMargins = true
}: TabNavigation) => {
  const [itemMinWidth, setItemMinWidth] = React.useState<number>(0);

  const handleItemOnLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setItemMinWidth(current => Math.max(current, width));
  };

  const stretchItems = tabAlignment === "stretch";

  const wrapChild = (child: React.ReactElement<TabItem>, index: number = 0) => (
    <View
      key={index}
      style={[
        styles.item,
        {
          marginEnd: index === React.Children.count(children) - 1 ? 0 : 8
        },
        stretchItems && {
          minWidth: itemMinWidth
        }
      ]}
      onLayout={handleItemOnLayout}
    >
      {React.cloneElement<TabItem>(child, {
        onPress: event => {
          child.props.onPress?.(event);
          onItemPress?.(index);
        },
        selected: selectedIndex === index,
        color
      })}
    </View>
  );

  return (
    <ScrollView
      horizontal={true}
      centerContent={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        includeContentMargins
          ? { paddingHorizontal: IOVisualCostants.appMarginDefault }
          : {},
        {
          flexGrow: 1,
          justifyContent: itemsJustify[tabAlignment]
        }
      ]}
    >
      {Array.isArray(children) ? children.map(wrapChild) : wrapChild(children)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 100,
    alignItems: "center"
  }
});

export { TabNavigation };
