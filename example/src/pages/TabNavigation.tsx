/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable arrow-body-style */
import * as React from "react";

import { StyleSheet, View } from "react-native";
import {
  ContentWrapper,
  TabNavigation,
  TabItem,
  IOColors,
  BodyMonospace,
  H3,
  H2,
  HSpacer,
  VSpacer
} from "@pagopa/io-app-design-system";
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
        <View style={[styles.default, { borderRadius: 16, padding: 16 }]}>
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
                iconSelected={"starFilled"}
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
                iconSelected={"starFilled"}
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
                iconSelected={"starFilled"}
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
                iconSelected={"starFilled"}
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
                iconSelected={"starFilled"}
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
                iconSelected={"starFilled"}
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
      <View style={[styles.default, { paddingVertical: 24 }]}>
        <TabNavigation>
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
        </TabNavigation>

        <VSpacer size={24} />

        <TabNavigation>
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
        </TabNavigation>

        <VSpacer size={24} />

        <TabNavigation>
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
        </TabNavigation>
      </View>

      <ContentWrapper>
        <VSpacer size={24} />
        <H3>Dark</H3>
        <VSpacer size={16} />
      </ContentWrapper>

      <View style={[styles.dark, { paddingVertical: 24 }]}>
        <TabNavigation color="dark">
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
        </TabNavigation>

        <VSpacer size={24} />

        <TabNavigation color="dark">
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
          <TabItem label="Label tab" accessibilityLabel="Label tab" />
        </TabNavigation>

        <VSpacer size={24} />

        <TabNavigation color="dark">
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
        </TabNavigation>
      </View>

      <ContentWrapper>
        <VSpacer size={24} />
        <H3>Tab alignment</H3>
        <VSpacer size={16} />
      </ContentWrapper>

      <View style={[styles.default, { paddingVertical: 24 }]}>
        <ContentWrapper>
          <BodyMonospace>{`center (default)`}</BodyMonospace>
        </ContentWrapper>

        <VSpacer size={16} />

        <TabNavigation>
          <TabItem label="Long label" accessibilityLabel="Long label" />
          <TabItem label="Label" accessibilityLabel="Label" />
          <TabItem label="Label" accessibilityLabel="Label" />
        </TabNavigation>

        <VSpacer size={24} />

        <ContentWrapper>
          <BodyMonospace>{`start`}</BodyMonospace>
        </ContentWrapper>

        <VSpacer size={16} />

        <TabNavigation tabAlignment="start">
          <TabItem label="Long label" accessibilityLabel="Long label" />
          <TabItem label="Label" accessibilityLabel="Label" />
          <TabItem label="Label" accessibilityLabel="Label" />
        </TabNavigation>

        <VSpacer size={24} />

        <ContentWrapper>
          <BodyMonospace>{`end`}</BodyMonospace>
        </ContentWrapper>

        <VSpacer size={16} />

        <TabNavigation tabAlignment="end">
          <TabItem label="Long label" accessibilityLabel="Long label" />
          <TabItem label="Label" accessibilityLabel="Label" />
          <TabItem label="Label" accessibilityLabel="Label" />
        </TabNavigation>

        <VSpacer size={24} />

        <ContentWrapper>
          <BodyMonospace>{`stretch`}</BodyMonospace>
        </ContentWrapper>

        <VSpacer size={16} />

        <TabNavigation tabAlignment="stretch">
          <TabItem label="Long label" accessibilityLabel="Long label" />
          <TabItem label="Label" accessibilityLabel="Label" />
          <TabItem label="Label" accessibilityLabel="Label" />
        </TabNavigation>
      </View>
    </NoMarginScreen>
  );
};

const styles = StyleSheet.create({
  default: {
    backgroundColor: IOColors["blueIO-100"]
  },
  dark: {
    backgroundColor: IOColors["blueIO-850"]
  }
});
