import {
  ButtonExtendedOutline,
  ButtonLink,
  ButtonOutline,
  ButtonSolid,
  H2,
  HSpacer,
  IOColors,
  IOStyles,
  IOVisualCostants,
  IconButton,
  IconButtonContained,
  IconButtonSolid,
  ListItemSwitch,
  VSpacer,
  useIOExperimentalDesign
} from "@pagopa/io-app-design-system";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";

const styles = StyleSheet.create({
  primaryBlock: {
    backgroundColor: IOColors["blueIO-500"],
    padding: 16,
    borderRadius: 16
  }
});

const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

// sonarjs/cognitive-complexity
export const Buttons = () => {
  const { isExperimental, setExperimental } = useIOExperimentalDesign();
  return (
    <Screen>
      {/* The title should be dynamic, got from the route object */}
      <H2
        color={"bluegrey"}
        weight={"SemiBold"}
        style={{
          marginBottom: 16,
          paddingTop: IOVisualCostants.appMarginDefault
        }}
      >
        ButtonSolid
      </H2>
      <ListItemSwitch
        label="Abilita Design Sperimentale"
        value={isExperimental}
        onSwitchValueChange={setExperimental}
      />
      <ComponentViewerBox name="ButtonSolid · Primary Variant (using Pressable API)">
        <ButtonSolid
          accessibilityLabel="Tap to trigger test alert"
          label={"Primary button"}
          onPress={onButtonPress}
        />

        <VSpacer size={16} />

        <ButtonSolid
          accessibilityLabel="Tap to trigger test alert"
          label={"Primary button"}
          icon="qrCode"
          onPress={onButtonPress}
        />

        <VSpacer size={16} />

        <ButtonSolid
          accessibilityLabel="Tap to trigger test alert"
          label={"Primary button"}
          icon="qrCode"
          iconPosition="end"
          onPress={onButtonPress}
        />

        <VSpacer size={16} />

        <View style={{ alignSelf: "center" }}>
          <ButtonSolid
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button (centered)"}
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>
      <ComponentViewerBox name="ButtonSolid · Primary, Full width">
        <View>
          <ButtonSolid
            fullWidth
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button (full width)"}
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>
      <ComponentViewerBox name="ButtonSolid · Primary, disabled">
        <View>
          <ButtonSolid
            disabled
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button (disabled)"}
            onPress={onButtonPress}
          />

          <VSpacer size={16} />

          <ButtonSolid
            disabled
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button (disabled)"}
            icon="qrCode"
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>

      <ComponentViewerBox name="ButtonSolid · Danger variant">
        <View>
          <ButtonSolid
            color="danger"
            label={"Danger button"}
            onPress={onButtonPress}
            accessibilityLabel="Tap to trigger test alert"
          />

          <VSpacer size={16} />

          <ButtonSolid
            color="danger"
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button"}
            icon="trashcan"
            onPress={onButtonPress}
          />

          <VSpacer size={16} />

          <ButtonSolid
            color="danger"
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button"}
            icon="trashcan"
            iconPosition="end"
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>
      <ComponentViewerBox name="ButtonSolid · Danger, full width">
        <View>
          <ButtonSolid
            fullWidth
            color="danger"
            accessibilityLabel="Tap to trigger test alert"
            label={"Danger button (full width)"}
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>

      <ComponentViewerBox name="ButtonSolid · Danger, disabled">
        <View>
          <ButtonSolid
            color="danger"
            disabled
            accessibilityLabel="Tap to trigger test alert"
            label={"Danger button (disabled)"}
            onPress={onButtonPress}
          />

          <VSpacer size={16} />

          <ButtonSolid
            color="danger"
            disabled
            accessibilityLabel="Tap to trigger test alert"
            label={"Danger button (disabled)"}
            icon="trashcan"
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>

      <View style={styles.primaryBlock}>
        <ComponentViewerBox
          name="ButtonSolid · Contrast variant"
          colorMode="dark"
        >
          <View>
            <ButtonSolid
              color="contrast"
              label={"Contrast button"}
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />

            <VSpacer size={16} />

            <ButtonSolid
              color="contrast"
              label={"Contrast button"}
              icon="add"
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />

            <VSpacer size={16} />

            <ButtonSolid
              color="contrast"
              label={"Contrast button"}
              icon="add"
              iconPosition="end"
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />
          </View>
        </ComponentViewerBox>

        <ComponentViewerBox
          name="ButtonSolid · Contrast, full width"
          colorMode="dark"
        >
          <View>
            <ButtonSolid
              fullWidth
              color="contrast"
              label={"Contrast button"}
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />
          </View>
        </ComponentViewerBox>

        <ComponentViewerBox
          name="ButtonSolid · Contrast, disabled"
          colorMode="dark"
          last
        >
          <View>
            <ButtonSolid
              disabled
              color="contrast"
              label={"Contrast button (disabled)"}
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />

            <VSpacer size={16} />

            <ButtonSolid
              disabled
              color="contrast"
              label={"Contrast button (disabled)"}
              icon="add"
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />
          </View>
        </ComponentViewerBox>
      </View>

      <VSpacer size={40} />

      <H2
        color={"bluegrey"}
        weight={"SemiBold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        ButtonOutline
      </H2>
      <ComponentViewerBox name="ButtonOutline · Primary variant (using Pressable API)">
        <ButtonOutline
          accessibilityLabel="Tap to trigger test alert"
          label={"Primary button"}
          onPress={onButtonPress}
        />

        <VSpacer size={16} />

        <ButtonOutline
          accessibilityLabel="Tap to trigger test alert"
          label={"Primary button"}
          icon="arrowLeft"
          onPress={onButtonPress}
        />

        <VSpacer size={16} />

        <ButtonOutline
          accessibilityLabel="Tap to trigger test alert"
          label={"Primary button"}
          icon="arrowRight"
          iconPosition="end"
          onPress={onButtonPress}
        />

        <VSpacer size={16} />

        <View style={{ alignSelf: "center" }}>
          <ButtonOutline
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button (centered)"}
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>
      <ComponentViewerBox name="ButtonOutline · Primary, full width">
        <View>
          <ButtonOutline
            fullWidth
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button (full width)"}
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>
      <ComponentViewerBox name="ButtonOutline · Primary, disabled">
        <View>
          <ButtonOutline
            disabled
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button (disabled)"}
            onPress={onButtonPress}
          />

          <VSpacer size={16} />

          <ButtonOutline
            disabled
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button (disabled)"}
            icon="arrowRight"
            iconPosition="end"
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>

      <View style={styles.primaryBlock}>
        <ComponentViewerBox
          name="ButtonOutline · Contrast variant"
          colorMode="dark"
        >
          <View>
            <ButtonOutline
              color="contrast"
              label={"Contrast button"}
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />

            <VSpacer size={16} />

            <ButtonOutline
              color="contrast"
              label={"Contrast button"}
              icon="arrowLeft"
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />

            <VSpacer size={16} />

            <ButtonOutline
              color="contrast"
              label={"Contrast button"}
              icon="arrowRight"
              iconPosition="end"
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />
          </View>
        </ComponentViewerBox>

        <ComponentViewerBox
          name="ButtonOutline · Contrast, full width"
          colorMode="dark"
        >
          <View>
            <ButtonOutline
              fullWidth
              color="contrast"
              label={"Contrast button"}
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />
          </View>
        </ComponentViewerBox>

        <ComponentViewerBox
          name="ButtonOutline · Contrast, disabled"
          colorMode="dark"
          last
        >
          <View>
            <ButtonOutline
              disabled
              color="contrast"
              label={"Contrast button (disabled)"}
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />

            <VSpacer size={16} />

            <ButtonOutline
              disabled
              color="contrast"
              label={"Contrast button (disabled)"}
              icon="arrowRight"
              iconPosition="end"
              onPress={onButtonPress}
              accessibilityLabel="Tap to trigger test alert"
            />
          </View>
        </ComponentViewerBox>
      </View>

      <VSpacer size={40} />

      <H2
        color={"bluegrey"}
        weight={"SemiBold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        ButtonLink
      </H2>
      <ComponentViewerBox name="ButtonLink · Primary variant (using Pressable API)">
        <ButtonLink
          accessibilityLabel="Tap to trigger test alert"
          label={"Primary button"}
          onPress={onButtonPress}
        />

        <VSpacer size={16} />

        <ButtonLink
          accessibilityLabel="Tap to trigger test alert"
          label={"Primary button"}
          icon="starEmpty"
          onPress={onButtonPress}
        />

        <VSpacer size={16} />

        <ButtonLink
          accessibilityLabel="Tap to trigger test alert"
          label={"Primary button"}
          icon="starEmpty"
          iconPosition="end"
          onPress={onButtonPress}
        />

        <VSpacer size={16} />

        <View style={{ alignSelf: "center" }}>
          <ButtonLink
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button (centered)"}
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>
      <ComponentViewerBox name="ButtonLink · Primary, disabled">
        <View>
          <ButtonLink
            disabled
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button (disabled)"}
            onPress={onButtonPress}
          />

          <VSpacer size={16} />

          <ButtonLink
            disabled
            accessibilityLabel="Tap to trigger test alert"
            label={"Primary button (disabled)"}
            icon="starEmpty"
            iconPosition="end"
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>

      <VSpacer size={40} />

      <H2
        color={"bluegrey"}
        weight={"SemiBold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        IconButton
      </H2>
      <ComponentViewerBox name="IconButton · Primary variant">
        <View style={IOStyles.row}>
          <IconButton
            accessibilityLabel="Tap to trigger test alert"
            icon="search"
            onPress={onButtonPress}
          />

          <HSpacer size={16} />

          <IconButton
            accessibilityLabel="Tap to trigger test alert"
            icon="help"
            onPress={onButtonPress}
          />

          <HSpacer size={16} />

          <IconButton
            accessibilityLabel="Tap to trigger test alert"
            icon="help"
            disabled
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>

      <ComponentViewerBox name="IconButton · Neutral variant">
        <View style={IOStyles.row}>
          <IconButton
            color="neutral"
            accessibilityLabel="Tap to trigger test alert"
            icon="search"
            onPress={onButtonPress}
          />

          <HSpacer size={16} />

          <IconButton
            color="neutral"
            accessibilityLabel="Tap to trigger test alert"
            icon="help"
            onPress={onButtonPress}
          />

          <HSpacer size={16} />

          <IconButton
            color="neutral"
            accessibilityLabel="Tap to trigger test alert"
            icon="help"
            disabled
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>

      <View style={styles.primaryBlock}>
        <ComponentViewerBox
          name="IconButton · Contrast variant"
          colorMode="dark"
          last
        >
          <View style={IOStyles.row}>
            <IconButton
              color="contrast"
              accessibilityLabel="Tap to trigger test alert"
              icon="search"
              onPress={onButtonPress}
            />

            <HSpacer size={16} />

            <IconButton
              color="contrast"
              accessibilityLabel="Tap to trigger test alert"
              icon="help"
              onPress={onButtonPress}
            />

            <HSpacer size={16} />

            <IconButton
              color="contrast"
              accessibilityLabel="Tap to trigger test alert"
              icon="help"
              disabled
              onPress={onButtonPress}
            />
          </View>
        </ComponentViewerBox>
      </View>

      <VSpacer size={40} />

      <H2
        color={"bluegrey"}
        weight={"SemiBold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        IconButtonSolid
      </H2>

      <ComponentViewerBox name="IconButtonSolid · Primary variant, large">
        <View style={IOStyles.row}>
          <IconButtonSolid
            color="primary"
            accessibilityLabel="Tap to trigger test alert"
            icon="arrowBottom"
            onPress={() => {
              alert("Action triggered");
            }}
          />

          <HSpacer size={16} />

          <IconButtonSolid
            color="primary"
            accessibilityLabel="Tap to trigger test alert"
            icon="arrowBottom"
            disabled
            onPress={() => {
              alert("Action triggered");
            }}
          />
        </View>
      </ComponentViewerBox>

      <View style={styles.primaryBlock}>
        <ComponentViewerBox
          name="IconButtonSolid · Contrast variant, large"
          colorMode="dark"
          last
        >
          <View style={IOStyles.row}>
            <IconButtonSolid
              color="contrast"
              accessibilityLabel="Tap to trigger test alert"
              icon="arrowBottom"
              onPress={onButtonPress}
            />

            <HSpacer size={16} />

            <IconButtonSolid
              color="contrast"
              accessibilityLabel="Tap to trigger test alert"
              icon="arrowBottom"
              disabled
              onPress={onButtonPress}
            />
          </View>
        </ComponentViewerBox>
      </View>

      <VSpacer size={40} />

      <H2
        color={"bluegrey"}
        weight={"SemiBold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        IconButtonContained (Icebox)
      </H2>
      <ComponentViewerBox name="IconButtonContained · Primary variant">
        <View style={IOStyles.row}>
          <IconButtonContained
            accessibilityLabel="Tap to trigger test alert"
            icon="help"
            onPress={() => {
              alert("Action triggered");
            }}
          />

          <IconButtonContained
            accessibilityLabel="Tap to trigger test alert"
            icon="help"
            disabled
            onPress={() => {
              alert("Action triggered");
            }}
          />
        </View>
      </ComponentViewerBox>

      <ComponentViewerBox name="IconButtonContained · Neutral variant">
        <View style={IOStyles.row}>
          <IconButtonContained
            color="neutral"
            accessibilityLabel="Tap to trigger test alert"
            icon="help"
            onPress={() => {
              alert("Action triggered");
            }}
          />

          <IconButtonContained
            color="neutral"
            accessibilityLabel="Tap to trigger test alert"
            icon="help"
            disabled
            onPress={() => {
              alert("Action triggered");
            }}
          />
        </View>
      </ComponentViewerBox>

      <View style={styles.primaryBlock}>
        <ComponentViewerBox
          name="IconButtonContained · Contrast variant"
          colorMode="dark"
          last
        >
          <View style={IOStyles.row}>
            <IconButtonContained
              color="contrast"
              accessibilityLabel="Tap to trigger test alert"
              icon="help"
              onPress={onButtonPress}
            />

            <IconButtonContained
              color="contrast"
              accessibilityLabel="Tap to trigger test alert"
              icon="help"
              disabled
              onPress={onButtonPress}
            />
          </View>
        </ComponentViewerBox>
      </View>

      <VSpacer size={40} />

      <H2
        color={"bluegrey"}
        weight={"SemiBold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        ButtonExtendedOutline
      </H2>
      <ComponentViewerBox name="ButtonExtendedOutline (using Pressable API)">
        <View>
          <ButtonExtendedOutline
            label={"Label name"}
            description={"This is a description of the element"}
            onPress={() => {
              alert("Action triggered");
            }}
          />
        </View>
        <VSpacer size={16} />
        <View>
          <ButtonExtendedOutline
            icon="chevronRight"
            label={"Label only"}
            onPress={() => {
              alert("Action triggered");
            }}
          />
        </View>
      </ComponentViewerBox>

      <VSpacer size={24} />

      <H2
        color={"bluegrey"}
        weight={"SemiBold"}
        style={{ marginBottom: 16, marginTop: 16 }}
      >
        Specific buttons
      </H2>

      <ComponentViewerBox name="CalendarEventButton (using new ButtonOutline)">
        <ButtonOutline
          small
          accessibilityLabel="Tap to trigger test alert"
          label={"Aggiungi promemoria"}
          icon="add"
          onPress={onButtonPress}
        />

        <VSpacer size={16} />

        <ButtonOutline
          small
          accessibilityLabel="Tap to trigger test alert"
          label={"Aggiunto"}
          icon="checkTickBig"
          onPress={onButtonPress}
        />
      </ComponentViewerBox>

      <ComponentViewerBox name="Login buttons">
        <ButtonSolid
          fullWidth
          accessibilityLabel="Tap to trigger test alert"
          label={"Entra con SPID"}
          icon="profile"
          onPress={onButtonPress}
        />
        <VSpacer size={8} />
        <ButtonSolid
          fullWidth
          accessibilityLabel="Tap to trigger test alert"
          label={"Entra con CIE"}
          icon="cie"
          onPress={onButtonPress}
        />
      </ComponentViewerBox>
    </Screen>
  );
};
