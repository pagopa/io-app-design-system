import { SectionList, View } from "react-native";
import * as React from "react";
import {
  IOStyles,
  Divider,
  H1,
  LabelSmall,
  VSpacer,
  ListItemNav,
  useIOExperimentalDesign,
  ListItemSwitch,
  useIOThemeContext,
  IOText
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
  const { setTheme, themeType, theme } = useIOThemeContext();
  const { isExperimental, setExperimental } = useIOExperimentalDesign();
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
      {/* <H1
        style={{
          marginBottom: 16
        }}
        color={theme["textBody-tertiary"]}
      >
        {title}
      </H1> */}
      <H1>{title}</H1>
      <IOText
        size={20}
        lineHeight={26}
        weight="Light"
        color={theme["textBody-tertiary"]}
        style={{ marginBottom: 16 }}
      >
        {
          "Bla Bla bla, bla bla bla, bla bla bla, bla bla bla, bla bla bla, bla bla bla"
        }
      </IOText>
      {description && (
        <LabelSmall weight={"Regular"} color={theme["textBody-tertiary"]}>
          {description}
        </LabelSmall>
      )}
    </View>
  );

  const renderDSSectionFooter = () => <VSpacer size={24} />;

  return (
    <>
      <View style={IOStyles.horizontalContentPadding}>
        <ListItemSwitch
          label="Abilita Design Sperimentale"
          value={isExperimental}
          onSwitchValueChange={setExperimental}
        />
        <VSpacer size={4} />
        <ListItemSwitch
          label="Abilita Dark Mode"
          value={themeType === "dark"}
          onSwitchValueChange={() =>
            setTheme(themeType === "dark" ? "light" : "dark")
          }
        />
        <VSpacer size={4} />
      </View>
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
    </>
  );
};

export default MainScreen;
