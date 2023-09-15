import * as React from "react";
import {
  useIOExperimentalDesign,
  IOThemeContext,
  ListItemSwitch,
  H2,
  ModuleIDP
} from "@pagopa/io-app-design-system";
import { Alert, ImageSourcePropType, View } from "react-native";
import { Screen } from "../components/Screen";
import { ComponentViewerBox } from "../components/ComponentViewerBox";

const mockIDPProviderItem = {
  id: "posteid",
  name: "Poste ID",
  logo: "",
  localLogo: require("../../assets/images/spid-idp-posteid.png"),
  profileUrl: "https://posteid.poste.it/private/cruscotto.shtml"
};

const renderModuleIDP = () => (
  <>
    <ComponentViewerBox name="ModuleIDP, default variant">
      <View>
        <ModuleIDP
          name={mockIDPProviderItem.name}
          logo={mockIDPProviderItem.logo as ImageSourcePropType}
          localLogo={mockIDPProviderItem.localLogo as ImageSourcePropType}
          onPress={() => {
            Alert.alert("Action triggered");
          }}
          testID={`idp-${mockIDPProviderItem.id}-button`}
          urlLogoIDP={""}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleIDP, saved variant">
      <View>
        <ModuleIDP
          saved
          name={mockIDPProviderItem.name}
          logo={mockIDPProviderItem.logo as ImageSourcePropType}
          localLogo={mockIDPProviderItem.localLogo as ImageSourcePropType}
          onPress={() => {
            Alert.alert("Action triggered");
          }}
          testID={`idp-${mockIDPProviderItem.id}-button`}
          urlLogoIDP={""}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="ModuleIDP, default variant, stress test">
      <View>
        <ModuleIDP
          name={"This is a very loooooong IDP provider name"}
          logo={mockIDPProviderItem.logo as ImageSourcePropType}
          localLogo={mockIDPProviderItem.localLogo as ImageSourcePropType}
          onPress={() => {
            Alert.alert("Action triggered");
          }}
          testID={`idp-${mockIDPProviderItem.id}-button`}
          urlLogoIDP={""}
        />
      </View>
    </ComponentViewerBox>
  </>
);

const Modules = () => {
  const { isExperimental, setExperimental } = useIOExperimentalDesign();
  return (
    <IOThemeContext.Consumer>
      {theme => (
        <Screen>
          <ListItemSwitch
            label="Abilita Design Sperimentale"
            value={isExperimental}
            onSwitchValueChange={setExperimental}
          />
          <H2
            color={theme["textHeading-default"]}
            weight={"SemiBold"}
            style={{ marginBottom: 16, marginTop: 16 }}
          >
            ListItemIDP
          </H2>
          {renderModuleIDP()}
        </Screen>
      )}
    </IOThemeContext.Consumer>
  );
};

export default Modules;
