/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable arrow-body-style */
import * as React from "react";

import {
  BodyMonospace,
  ContentWrapper,
  H2,
  H3,
  HSpacer,
  IOColors,
  TabItem,
  TabNavigation,
  VSpacer
} from "@pagopa/io-app-design-system";
import { StyleSheet, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { NoMarginScreen } from "../components/Screen";

export const TabNavigationScreen = () => {
  const handlePress = () => {};

  return (
    <NoMarginScreen>
      <ContentWrapper>
        <H2>Tab Item</H2>
        <VSpacer size={24} />
        <H3>Light</H3>
        <VSpacer size={16} />
        <View>
          <ComponentViewerBox name="Light">
            <View style={{ flexDirection: "row" }}>
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                onPress={handlePress}
              />
              <HSpacer size={8} />
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                icon={"starEmpty"}
                onPress={handlePress}
              />
            </View>
          </ComponentViewerBox>

          <ComponentViewerBox name="Light Selected">
            <View style={{ flexDirection: "row" }}>
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                selected={true}
                onPress={handlePress}
              />
              <HSpacer size={8} />
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                icon={"starEmpty"}
                selected={true}
                onPress={handlePress}
              />
            </View>
          </ComponentViewerBox>

          <ComponentViewerBox name="Light Disabled" last={true}>
            <View style={{ flexDirection: "row" }}>
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                disabled
                onPress={handlePress}
              />
              <HSpacer size={8} />
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                disabled
                icon={"starEmpty"}
                onPress={handlePress}
              />
            </View>
          </ComponentViewerBox>
        </View>
        <VSpacer size={24} />
        <H3>Dark</H3>
        <VSpacer size={16} />
        <View style={[styles.dark, { borderRadius: 16, padding: 16 }]}>
          <ComponentViewerBox name="Dark" colorMode="dark">
            <View style={{ flexDirection: "row" }}>
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                color="dark"
                onPress={handlePress}
              />
              <HSpacer size={8} />
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                icon={"starEmpty"}
                color="dark"
                onPress={handlePress}
              />
            </View>
          </ComponentViewerBox>

          <ComponentViewerBox name="Dark Selected" colorMode="dark">
            <View style={{ flexDirection: "row" }}>
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                color="dark"
                selected={true}
                onPress={handlePress}
              />
              <HSpacer size={8} />
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                icon={"starEmpty"}
                color="dark"
                selected={true}
                onPress={handlePress}
              />
            </View>
          </ComponentViewerBox>
          <ComponentViewerBox name="Dark Disabled" colorMode="dark" last={true}>
            <View style={{ flexDirection: "row" }}>
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                color="dark"
                disabled={true}
                onPress={handlePress}
              />
              <HSpacer size={8} />
              <TabItem
                label="Label tab"
                accessibilityLabel="Label tab"
                icon={"starEmpty"}
                color="dark"
                disabled={true}
                onPress={handlePress}
              />
            </View>
          </ComponentViewerBox>
        </View>
        <VSpacer size={32} />
      </ContentWrapper>
      <ContentWrapper>
        <H2>Tab Navigation</H2>
        <VSpacer size={24} />
        <H3>Light</H3>
        <VSpacer size={16} />
      </ContentWrapper>
      <View>
        <TabNavigationWithState>
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
        </TabNavigationWithState>

        <VSpacer size={24} />

        <TabNavigationWithState>
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
        </TabNavigationWithState>

        <VSpacer size={24} />

        <TabNavigationWithState>
          <TabItem
            label="Label tab"
            accessibilityLabel="Label tab"
            icon="starEmpty"
            iconSelected="starFilled"
          />
          <TabItem
            label="Label tab"
            accessibilityLabel="Label tab"
            icon="starEmpty"
            iconSelected="starFilled"
          />
          <TabItem
            label="Label tab"
            accessibilityLabel="Label tab"
            icon="starEmpty"
            iconSelected="starFilled"
          />
          <TabItem
            label="Label tab"
            accessibilityLabel="Label tab"
            icon="starEmpty"
            iconSelected="starFilled"
          />
          <TabItem
            label="Label tab"
            accessibilityLabel="Label tab"
            icon="starEmpty"
            iconSelected="starFilled"
          />
        </TabNavigationWithState>
      </View>

      <ContentWrapper>
        <VSpacer size={32} />
        <H3>Dark</H3>
        <VSpacer size={16} />
      </ContentWrapper>

      <View style={[styles.dark, { paddingVertical: 24 }]}>
        <TabNavigationWithState color="dark">
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
        </TabNavigationWithState>

        <VSpacer size={24} />

        <TabNavigationWithState color="dark">
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
        </TabNavigationWithState>

        <VSpacer size={24} />

        <TabNavigationWithState color="dark">
          <TabItem
            label="Label tab"
            accessibilityLabel="Label tab"
            icon="starEmpty"
          />
          <TabItem
            label="Label tab"
            accessibilityLabel="Label tab"
            icon="starEmpty"
          />
          <TabItem
            label="Label tab"
            accessibilityLabel="Label tab"
            icon="starEmpty"
          />
          <TabItem
            label="Label tab"
            accessibilityLabel="Label tab"
            icon="starEmpty"
          />
          <TabItem
            label="Label tab"
            accessibilityLabel="Label tab"
            icon="starEmpty"
          />
        </TabNavigationWithState>
      </View>

      <ContentWrapper>
        <VSpacer size={24} />
        <H3>Tab alignment</H3>
        <VSpacer size={16} />
      </ContentWrapper>

      <View>
        <ContentWrapper>
          <BodyMonospace>{`center (default)`}</BodyMonospace>
        </ContentWrapper>

        <VSpacer size={16} />

        <TabNavigationWithState>
          <TabItem label="Long label" accessibilityLabel="Long label" />
          <TabItem label="Label" accessibilityLabel="Label" />
          <TabItem label="Label" accessibilityLabel="Label" />
        </TabNavigationWithState>

        <VSpacer size={24} />

        <ContentWrapper>
          <BodyMonospace>{`start`}</BodyMonospace>
        </ContentWrapper>

        <VSpacer size={16} />

        <TabNavigationWithState tabAlignment="start">
          <TabItem label="Long label" accessibilityLabel="Long label" />
          <TabItem label="Label" accessibilityLabel="Label" />
          <TabItem label="Label" accessibilityLabel="Label" />
        </TabNavigationWithState>

        <VSpacer size={24} />

        <ContentWrapper>
          <BodyMonospace>{`end`}</BodyMonospace>
        </ContentWrapper>

        <VSpacer size={16} />

        <TabNavigationWithState tabAlignment="end">
          <TabItem label="Long label" accessibilityLabel="Long label" />
          <TabItem label="Label" accessibilityLabel="Label" />
          <TabItem label="Label" accessibilityLabel="Label" />
        </TabNavigationWithState>

        <VSpacer size={24} />

        <ContentWrapper>
          <BodyMonospace>{`stretch`}</BodyMonospace>
        </ContentWrapper>

        <VSpacer size={16} />

        <TabNavigationWithState tabAlignment="stretch">
          <TabItem label="Long label" accessibilityLabel="Long label" />
          <TabItem label="Label" accessibilityLabel="Label" />
          <TabItem label="Label" accessibilityLabel="Label" />
        </TabNavigationWithState>
      </View>
      <VSpacer size={40} />
    </NoMarginScreen>
  );
};

const TabNavigationWithState = (props: TabNavigation) => {
  const [index, setIndex] = React.useState(0);

  return (
    <TabNavigation {...props} selectedIndex={index} onItemPress={setIndex}>
      {props.children}
    </TabNavigation>
  );
};

const styles = StyleSheet.create({
  dark: {
    backgroundColor: IOColors["blueIO-850"]
  }
});
