import {
  BodySmall,
  ContentWrapper,
  Divider,
  H1,
  IOVisualCostants,
  ListItemNav,
  ListItemSwitch,
  VSpacer,
  useIOExperimentalDesign,
  useIONewTypeface,
  useIOThemeContext
} from "@pagopa/io-app-design-system";

import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { SectionList, View, useColorScheme } from "react-native";
import { AppParamsList } from "../navigation/params";
import APP_ROUTES from "../navigation/routes";
import { IOStackNavigationRouteProps } from "../utils/types";

type Props = IOStackNavigationRouteProps<AppParamsList, "DESIGN_SYSTEM_MAIN">;

type SingleSectionProps = {
  title: string;
  description?: string;
  route: string;
};

type RoutesProps = Array<SingleSectionProps>;

const DATA_ROUTES_FOUNDATION: RoutesProps = Object.values(
  APP_ROUTES.FOUNDATION
);
const DATA_ROUTES_COMPONENTS: RoutesProps = Object.values(
  APP_ROUTES.COMPONENTS
);
const DATA_ROUTES_SCREENS: RoutesProps = Object.values(APP_ROUTES.SCREENS);

const DATA_ROUTES_SANDBOX: RoutesProps = Object.values(APP_ROUTES.SANDBOX);

const DESIGN_SYSTEM_SECTION_DATA = [
  {
    title: "Foundation",
    data: DATA_ROUTES_FOUNDATION
  },
  {
    title: "Components",
    data: DATA_ROUTES_COMPONENTS
  },
  {
    title: "Screens",
    data: DATA_ROUTES_SCREENS
  },
  {
    title: "Sandbox",
    data: DATA_ROUTES_SANDBOX
  }
];

const MainScreen = (props: Props) => {
  const colorScheme = useColorScheme();
  const { theme, setTheme } = useIOThemeContext();
  const { isExperimental, setExperimental } = useIOExperimentalDesign();
  const { newTypefaceEnabled, setNewTypefaceEnabled } = useIONewTypeface();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme, setTheme]);

  // Configure native header search bar
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search components...",
        onChangeText: (event: { nativeEvent: { text: string } }) => {
          setSearchQuery(event.nativeEvent.text);
        }
      }
    });
  }, [props.navigation]);

  // Filter items based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return DESIGN_SYSTEM_SECTION_DATA;
    }

    const lowerQuery = searchQuery.toLowerCase();
    return DESIGN_SYSTEM_SECTION_DATA.map(section => ({
      ...section,
      data: section.data.filter(item =>
        item.title.toLowerCase().includes(lowerQuery)
      )
    })).filter(section => section.data.length > 0);
  }, [searchQuery]);

  const renderDSNavItem = ({
    item: { title, route }
  }: {
    item: { title: string; route: string };
  }) => (
    <ListItemNav
      accessibilityLabel={`Go to the ${title} page`}
      value={title}
      // we're using as any cause of compilation error
      onPress={() => props.navigation.navigate(route as any)}
    />
  );

  const renderDSSection = ({
    section: { title, description }
  }: {
    section: { title: string; description?: string };
  }) => (
    <View style={{ marginTop: 24, marginBottom: 8 }}>
      <H1>{title}</H1>
      {description && (
        <BodySmall weight={"Regular"} color={theme["textBody-tertiary"]}>
          {description}
        </BodySmall>
      )}
    </View>
  );

  const renderDSSectionFooter = () => <VSpacer size={24} />;

  return (
    <>
      <ContentWrapper>
        <ListItemSwitch
          label="Abilita Design Sperimentale"
          value={isExperimental}
          onSwitchValueChange={setExperimental}
        />
        <ListItemSwitch
          label="Abilita nuovo carattere"
          value={newTypefaceEnabled}
          onSwitchValueChange={setNewTypefaceEnabled}
        />
        <VSpacer size={4} />
      </ContentWrapper>
      <SectionList
        keyExtractor={(item, index) => `${item.route}-${index}`}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{
          paddingHorizontal: IOVisualCostants.appMarginDefault
        }}
        renderSectionHeader={renderDSSection}
        renderSectionFooter={renderDSSectionFooter}
        renderItem={renderDSNavItem}
        ItemSeparatorComponent={() => <Divider />}
        sections={filteredSections}
        ListEmptyComponent={
          searchQuery.trim() ? (
            <View style={{ paddingVertical: 24 }}>
              <BodySmall color={theme["textBody-tertiary"]}>
                No components found matching {searchQuery}
              </BodySmall>
            </View>
          ) : null
        }
      />
    </>
  );
};

export default MainScreen;
