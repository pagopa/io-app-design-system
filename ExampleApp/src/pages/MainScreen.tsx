import { SectionList, View } from "react-native";
import * as React from "react";
import {
  IOStyles,
  IOColors,
  useIOTheme,
  Divider,
  H1,
  LabelSmall,
  VSpacer,
  ListItemNav
} from "@pagopa/io-app-design-system";
import APP_ROUTES from "../navigation/routes";
import { AppParamsList } from "../navigation/params";
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
const DATA_ROUTES_HEADERS: RoutesProps = Object.values(APP_ROUTES.HEADERS);
const DATA_ROUTES_DEBUG: RoutesProps = Object.values(APP_ROUTES.DEBUG);

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
    title: "Headers",
    data: DATA_ROUTES_HEADERS
  },
  {
    title: "Debug",
    data: DATA_ROUTES_DEBUG
  }
];

const MainScreen = (props: Props) => {
  const theme = useIOTheme();

  const renderDSNavItem = ({
    item: { title, route }
  }: {
    item: { title: string; route: string };
  }) => (
    <ListItemNav
      accessibilityLabel={`Go to the ${title} page`}
      value={title}
      onPress={() => props.navigation.navigate(route as keyof AppParamsList)}
    />
  );

  const renderDSSection = ({
    section: { title, description }
  }: {
    section: { title: string; description?: string };
  }) => (
    <View style={{ marginBottom: 8 }}>
      <H1 color={theme["textHeading-default"]}>{title}</H1>
      {description && (
        <LabelSmall weight={"Regular"} color={theme["textBody-tertiary"]}>
          {description}
        </LabelSmall>
      )}
    </View>
  );

  const renderDSSectionFooter = () => <VSpacer size={40} />;

  return (
    <View
      style={{
        backgroundColor: IOColors[theme["appBackground-primary"]]
      }}
    >
      <SectionList
        keyExtractor={(item, index) => `${item.route}-${index}`}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={IOStyles.horizontalContentPadding}
        renderSectionHeader={renderDSSection}
        renderSectionFooter={renderDSSectionFooter}
        renderItem={renderDSNavItem}
        ItemSeparatorComponent={() => <Divider />}
        sections={DESIGN_SYSTEM_SECTION_DATA}
      />
    </View>
  );
};

export default MainScreen;
