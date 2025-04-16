import {
  Button,
  ButtonColor,
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
  VStack,
  hexToRgba
} from "@pagopa/io-app-design-system";
import React, { Fragment, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";

const styles = StyleSheet.create({
  primaryBlock: {
    backgroundColor: IOColors["blueIO-500"],
    padding: 16,
    borderRadius: 16
  },
  neutralBlock: {
    borderWidth: 1,
    borderColor: hexToRgba(IOColors.black, 0.1),
    backgroundColor: IOColors.white,
    padding: 16,
    borderRadius: 16
  }
});

const onButtonPress = () => {
  Alert.alert("Alert", "Action triggered");
};

const buttonColors: Array<ButtonColor> = ["primary", "danger", "contrast"];

// sonarjs/cognitive-complexity
export const Buttons = () => (
  <Screen>
    {/* The title should be dynamic, got from the route object */}
    <H2
      style={{
        marginBottom: 16,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      ButtonSolid
    </H2>
    <ComponentViewerBox name="ButtonSolid · Primary Variant (using Pressable API)">
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <Button
          variant="solid"
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          onPress={onButtonPress}
        />
        <Button
          variant="solid"
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          icon="qrCode"
          onPress={onButtonPress}
        />
        <Button
          variant="solid"
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          icon="qrCode"
          iconPosition="end"
          onPress={onButtonPress}
        />
        <View style={{ alignSelf: "center" }}>
          <Button
            variant="solid"
            accessibilityHint="Tap to trigger test alert"
            label={"Primary button (centered)"}
            onPress={onButtonPress}
          />
        </View>
      </VStack>
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Primary, Full width">
      {/* Let's force `alignItems: "flex-start"`
      to test if `fullWidth` is managed correctly */}
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <Button
          variant="solid"
          fullWidth
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button (full width)"}
          onPress={onButtonPress}
        />
      </VStack>
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Primary · Full width, loading state">
      <LoadingSolidButtonExample />
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Primary, disabled">
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <Button
          variant="solid"
          disabled
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button (disabled)"}
          onPress={onButtonPress}
        />
        <Button
          variant="solid"
          disabled
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button (disabled)"}
          icon="qrCode"
          onPress={onButtonPress}
        />
      </VStack>
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Danger variant">
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <Button
          variant="solid"
          color="danger"
          label={"Danger button"}
          onPress={onButtonPress}
          accessibilityHint="Tap to trigger test alert"
        />
        <Button
          variant="solid"
          color="danger"
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          icon="trashcan"
          onPress={onButtonPress}
        />
        <Button
          variant="solid"
          color="danger"
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          icon="trashcan"
          iconPosition="end"
          onPress={onButtonPress}
        />
      </VStack>
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Danger, full width">
      <Button
        variant="solid"
        fullWidth
        color="danger"
        accessibilityHint="Tap to trigger test alert"
        label={"Danger button (full width)"}
        onPress={onButtonPress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Danger, disabled">
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <Button
          variant="solid"
          color="danger"
          disabled
          accessibilityHint="Tap to trigger test alert"
          label={"Danger button (disabled)"}
          onPress={onButtonPress}
        />
        <Button
          variant="solid"
          color="danger"
          disabled
          accessibilityHint="Tap to trigger test alert"
          label={"Danger button (disabled)"}
          icon="trashcan"
          onPress={onButtonPress}
        />
      </VStack>
    </ComponentViewerBox>
    <View style={styles.primaryBlock}>
      <ComponentViewerBox
        name="ButtonSolid · Contrast variant"
        colorMode="dark"
      >
        <VStack space={16} style={{ alignItems: "flex-start" }}>
          <Button
            variant="solid"
            color="contrast"
            label={"Contrast button"}
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />

          <Button
            variant="solid"
            color="contrast"
            label={"Contrast button"}
            icon="add"
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />

          <Button
            variant="solid"
            color="contrast"
            label={"Contrast button"}
            icon="add"
            iconPosition="end"
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />
        </VStack>
      </ComponentViewerBox>

      <ComponentViewerBox
        name="ButtonSolid · Contrast, full width"
        colorMode="dark"
      >
        <Button
          variant="solid"
          fullWidth
          color="contrast"
          label={"Contrast button"}
          onPress={onButtonPress}
          accessibilityHint="Tap to trigger test alert"
        />
      </ComponentViewerBox>

      <ComponentViewerBox
        name="ButtonSolid · Contrast, full width, loading state"
        colorMode="dark"
      >
        <Button
          variant="solid"
          fullWidth
          loading
          color="contrast"
          label={"Contrast button"}
          onPress={onButtonPress}
          accessibilityHint="Tap to trigger test alert"
        />
      </ComponentViewerBox>

      <ComponentViewerBox
        name="ButtonSolid · Contrast, disabled"
        colorMode="dark"
        last
      >
        <VStack space={16} style={{ alignItems: "flex-start" }}>
          <Button
            variant="solid"
            disabled
            color="contrast"
            label={"Contrast button (disabled)"}
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />

          <Button
            variant="solid"
            disabled
            color="contrast"
            label={"Contrast button (disabled)"}
            icon="add"
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />
        </VStack>
      </ComponentViewerBox>
    </View>
    <H2
      style={{
        marginBottom: 16,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      Button (Outline variant)
    </H2>
    <ComponentViewerBox name="ButtonSolid · Primary Variant (using Pressable API)">
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <Button
          variant="outline"
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          onPress={onButtonPress}
        />
        <Button
          variant="outline"
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          icon="qrCode"
          onPress={onButtonPress}
        />
        <Button
          variant="outline"
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          icon="qrCode"
          iconPosition="end"
          onPress={onButtonPress}
        />
        <View style={{ alignSelf: "center" }}>
          <Button
            variant="outline"
            accessibilityHint="Tap to trigger test alert"
            label={"Primary button (centered)"}
            onPress={onButtonPress}
          />
        </View>
      </VStack>
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Primary, Full width">
      {/* Let's force `alignItems: "flex-start"`
      to test if `fullWidth` is managed correctly */}
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <Button
          variant="outline"
          fullWidth
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button (full width) with a loong looong label"}
          onPress={onButtonPress}
        />
      </VStack>
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Primary · Full width, loading state">
      <LoadingOutlineButtonExample />
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Primary, disabled">
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <Button
          variant="outline"
          disabled
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button (disabled)"}
          onPress={onButtonPress}
        />
        <Button
          variant="outline"
          disabled
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button (disabled)"}
          icon="qrCode"
          onPress={onButtonPress}
        />
      </VStack>
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Danger variant">
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <Button
          variant="outline"
          color="danger"
          label={"Danger button"}
          onPress={onButtonPress}
          accessibilityHint="Tap to trigger test alert"
        />
        <Button
          variant="outline"
          color="danger"
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          icon="trashcan"
          onPress={onButtonPress}
        />
        <Button
          variant="outline"
          color="danger"
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          icon="trashcan"
          iconPosition="end"
          onPress={onButtonPress}
        />
      </VStack>
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Danger, full width">
      <Button
        variant="outline"
        fullWidth
        color="danger"
        accessibilityHint="Tap to trigger test alert"
        label={"Danger button (full width)"}
        onPress={onButtonPress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonSolid · Danger, disabled">
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <Button
          variant="outline"
          color="danger"
          disabled
          accessibilityHint="Tap to trigger test alert"
          label={"Danger button (disabled)"}
          onPress={onButtonPress}
        />
        <Button
          variant="outline"
          color="danger"
          disabled
          accessibilityHint="Tap to trigger test alert"
          label={"Danger button (disabled)"}
          icon="trashcan"
          onPress={onButtonPress}
        />
      </VStack>
    </ComponentViewerBox>
    <View style={styles.primaryBlock}>
      <ComponentViewerBox
        name="ButtonSolid · Contrast variant"
        colorMode="dark"
      >
        <VStack space={16} style={{ alignItems: "flex-start" }}>
          <Button
            variant="outline"
            color="contrast"
            label={"Contrast button"}
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />

          <Button
            variant="outline"
            color="contrast"
            label={"Contrast button"}
            icon="add"
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />

          <Button
            variant="outline"
            color="contrast"
            label={"Contrast button"}
            icon="add"
            iconPosition="end"
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />
        </VStack>
      </ComponentViewerBox>

      <ComponentViewerBox
        name="ButtonSolid · Contrast, full width"
        colorMode="dark"
      >
        <Button
          variant="outline"
          fullWidth
          color="contrast"
          label={"Contrast button"}
          onPress={onButtonPress}
          accessibilityHint="Tap to trigger test alert"
        />
      </ComponentViewerBox>

      <ComponentViewerBox
        name="ButtonSolid · Contrast, full width, loading state"
        colorMode="dark"
      >
        <Button
          variant="outline"
          fullWidth
          loading
          color="contrast"
          label={"Contrast button"}
          onPress={onButtonPress}
          accessibilityHint="Tap to trigger test alert"
        />
      </ComponentViewerBox>

      <ComponentViewerBox
        name="ButtonSolid · Contrast, disabled"
        colorMode="dark"
        last
      >
        <VStack space={16} style={{ alignItems: "flex-start" }}>
          <Button
            variant="outline"
            disabled
            color="contrast"
            label={"Contrast button (disabled)"}
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />

          <Button
            variant="outline"
            disabled
            color="contrast"
            label={"Contrast button (disabled)"}
            icon="add"
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />
        </VStack>
      </ComponentViewerBox>
    </View>
    <VSpacer size={40} />
    <H2 style={{ marginBottom: 16, marginTop: 16 }}>ButtonOutline</H2>
    <ComponentViewerBox name="ButtonOutline · Primary variant (using Pressable API)">
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <ButtonOutline
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          onPress={onButtonPress}
        />

        <ButtonOutline
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          icon="arrowLeft"
          onPress={onButtonPress}
        />

        <ButtonOutline
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button"}
          icon="arrowRight"
          iconPosition="end"
          onPress={onButtonPress}
        />

        <View style={{ alignSelf: "center" }}>
          <ButtonOutline
            accessibilityHint="Tap to trigger test alert"
            label={"Primary button (centered)"}
            onPress={onButtonPress}
          />
        </View>
      </VStack>
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonOutline · Primary, full width">
      <ButtonOutline
        fullWidth
        accessibilityHint="Tap to trigger test alert"
        label={"Primary button (full width)"}
        onPress={onButtonPress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ButtonOutline · Primary, disabled">
      <VStack space={16} style={{ alignItems: "flex-start" }}>
        <ButtonOutline
          disabled
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button (disabled)"}
          onPress={onButtonPress}
        />

        <ButtonOutline
          disabled
          accessibilityHint="Tap to trigger test alert"
          label={"Primary button (disabled)"}
          icon="arrowRight"
          iconPosition="end"
          onPress={onButtonPress}
        />
      </VStack>
    </ComponentViewerBox>
    <View style={styles.primaryBlock}>
      <ComponentViewerBox
        name="ButtonOutline · Contrast variant"
        colorMode="dark"
      >
        <VStack space={16} style={{ alignItems: "flex-start" }}>
          <ButtonOutline
            color="contrast"
            label={"Contrast button"}
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />
          <ButtonOutline
            color="contrast"
            label={"Contrast button"}
            icon="arrowLeft"
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />
          <ButtonOutline
            color="contrast"
            label={"Contrast button"}
            icon="arrowRight"
            iconPosition="end"
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />
        </VStack>
      </ComponentViewerBox>

      <ComponentViewerBox
        name="ButtonOutline · Contrast, full width"
        colorMode="dark"
      >
        <ButtonOutline
          fullWidth
          color="contrast"
          label={"Contrast button"}
          onPress={onButtonPress}
          accessibilityHint="Tap to trigger test alert"
        />
      </ComponentViewerBox>

      <ComponentViewerBox
        name="ButtonOutline · Contrast, disabled"
        colorMode="dark"
        last
      >
        <VStack space={16} style={{ alignItems: "flex-start" }}>
          <ButtonOutline
            disabled
            color="contrast"
            label={"Contrast button (disabled)"}
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />

          <ButtonOutline
            disabled
            color="contrast"
            label={"Contrast button (disabled)"}
            icon="arrowRight"
            iconPosition="end"
            onPress={onButtonPress}
            accessibilityHint="Tap to trigger test alert"
          />
        </VStack>
      </ComponentViewerBox>
    </View>
    <VSpacer size={40} />
    <H2 style={{ marginBottom: 16, marginTop: 16 }}>Button (link variant)</H2>
    <VStack space={32}>
      {buttonColors.map((color, index) => {
        const isContrast = color === "contrast";

        return (
          <Fragment key={`${color}-link-variant-${index}`}>
            <View style={isContrast ? styles.primaryBlock : {}}>
              <ComponentViewerBox
                name={`Button · Link variant, ${color} color`}
                colorMode={isContrast ? "dark" : undefined}
              >
                <Button
                  color={color}
                  variant="link"
                  accessibilityHint="Tap to trigger test alert"
                  label={"Primary button"}
                  onPress={onButtonPress}
                />

                <VSpacer size={16} />

                <Button
                  color={color}
                  variant="link"
                  accessibilityHint="Tap to trigger test alert"
                  label={"Primary button"}
                  icon="starEmpty"
                  onPress={onButtonPress}
                />

                <VSpacer size={16} />

                <Button
                  color={color}
                  variant="link"
                  accessibilityHint="Tap to trigger test alert"
                  label={"Primary button"}
                  icon="starEmpty"
                  iconPosition="end"
                  onPress={onButtonPress}
                />

                <VSpacer size={16} />

                <View style={{ alignSelf: "center" }}>
                  <Button
                    color={color}
                    variant="link"
                    accessibilityHint="Tap to trigger test alert"
                    label={"Primary button (centered)"}
                    onPress={onButtonPress}
                  />
                </View>
              </ComponentViewerBox>
              <ComponentViewerBox
                name="ButtonLink · Stress test"
                colorMode={isContrast ? "dark" : undefined}
              >
                <View style={{ alignSelf: "center" }}>
                  <Button
                    color={color}
                    variant="link"
                    textAlign="center"
                    /* Don't set limits on maximum number of lines */
                    numberOfLines={0}
                    accessibilityHint="Tap to trigger test alert"
                    label={"Primary button (centered) with a very looong text"}
                    onPress={onButtonPress}
                  />
                </View>
              </ComponentViewerBox>
              <ComponentViewerBox
                name={`Button · Link variant, ${color} color, disabled`}
                colorMode={isContrast ? "dark" : undefined}
                last
              >
                <View>
                  <Button
                    color={color}
                    variant="link"
                    disabled
                    accessibilityHint="Tap to trigger test alert"
                    label={"Primary button (disabled)"}
                    onPress={onButtonPress}
                  />

                  <VSpacer size={16} />

                  <Button
                    color={color}
                    variant="link"
                    disabled
                    accessibilityHint="Tap to trigger test alert"
                    label={"Primary button (disabled)"}
                    icon="starEmpty"
                    iconPosition="end"
                    onPress={onButtonPress}
                  />
                </View>
              </ComponentViewerBox>
            </View>
          </Fragment>
        );
      })}
    </VStack>

    <VSpacer size={40} />

    <H2 style={{ marginBottom: 16, marginTop: 16 }}>IconButton</H2>
    <ComponentViewerBox name="IconButton · Primary variant">
      <View style={IOStyles.row}>
        <IconButton
          accessibilityHint="Tap to trigger test alert"
          accessibilityLabel="Search"
          icon="search"
          onPress={onButtonPress}
        />

        <HSpacer size={16} />

        <IconButton
          accessibilityHint="Tap to trigger test alert"
          accessibilityLabel="Help"
          icon="help"
          onPress={onButtonPress}
        />

        <HSpacer size={16} />

        <IconButton
          accessibilityHint="Tap to trigger test alert"
          accessibilityLabel="Help"
          icon="help"
          disabled
          onPress={onButtonPress}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="IconButton · Neutral variant">
      <View style={IOStyles.row}>
        <IconButton
          accessibilityLabel="Search"
          color="neutral"
          accessibilityHint="Tap to trigger test alert"
          icon="search"
          onPress={onButtonPress}
        />

        <HSpacer size={16} />

        <IconButton
          accessibilityLabel="Help"
          color="neutral"
          accessibilityHint="Tap to trigger test alert"
          icon="help"
          onPress={onButtonPress}
        />

        <HSpacer size={16} />

        <IconButton
          accessibilityLabel="Help"
          color="neutral"
          accessibilityHint="Tap to trigger test alert"
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
            accessibilityLabel="Search"
            accessibilityHint="Tap to trigger test alert"
            icon="search"
            onPress={onButtonPress}
          />

          <HSpacer size={16} />

          <IconButton
            color="contrast"
            accessibilityLabel="Help"
            accessibilityHint="Tap to trigger test alert"
            icon="help"
            onPress={onButtonPress}
          />

          <HSpacer size={16} />

          <IconButton
            color="contrast"
            accessibilityLabel="Help"
            accessibilityHint="Tap to trigger test alert"
            icon="help"
            disabled
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>
    </View>
    <VSpacer />
    <View style={styles.neutralBlock}>
      <ComponentViewerBox
        name="IconButton · Neutral variant, persistent color mode"
        last
      >
        <View style={IOStyles.row}>
          <IconButton
            persistentColorMode
            color="neutral"
            accessibilityLabel="Search"
            accessibilityHint="Tap to trigger test alert"
            icon="search"
            onPress={onButtonPress}
          />

          <HSpacer size={16} />

          <IconButton
            persistentColorMode
            color="neutral"
            accessibilityLabel="Help"
            accessibilityHint="Tap to trigger test alert"
            icon="help"
            onPress={onButtonPress}
          />

          <HSpacer size={16} />

          <IconButton
            persistentColorMode
            color="neutral"
            accessibilityLabel="Help"
            accessibilityHint="Tap to trigger test alert"
            icon="help"
            disabled
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>
    </View>
    <VSpacer size={40} />
    <H2 style={{ marginBottom: 16, marginTop: 16 }}>IconButtonSolid</H2>
    <ComponentViewerBox name="IconButtonSolid · Primary variant, large">
      <View style={IOStyles.row}>
        <IconButtonSolid
          color="primary"
          accessibilityLabel="Go down"
          accessibilityHint="Tap to trigger test alert"
          icon="arrowBottom"
          onPress={onButtonPress}
        />

        <HSpacer size={16} />

        <IconButtonSolid
          color="primary"
          accessibilityLabel="Go down"
          accessibilityHint="Tap to trigger test alert"
          icon="arrowBottom"
          disabled
          onPress={onButtonPress}
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
            accessibilityLabel="Go down"
            accessibilityHint="Tap to trigger test alert"
            icon="arrowBottom"
            onPress={onButtonPress}
          />

          <HSpacer size={16} />

          <IconButtonSolid
            color="contrast"
            accessibilityLabel="Go down"
            accessibilityHint="Tap to trigger test alert"
            icon="arrowBottom"
            disabled
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>
    </View>
    <VSpacer size={40} />
    <H2 style={{ marginBottom: 16, marginTop: 16 }}>
      IconButtonContained (Icebox)
    </H2>
    <ComponentViewerBox name="IconButtonContained · Primary variant">
      <View style={IOStyles.row}>
        <IconButtonContained
          accessibilityLabel="Help"
          accessibilityHint="Tap to trigger test alert"
          icon="help"
          onPress={onButtonPress}
        />

        <IconButtonContained
          accessibilityLabel="Help"
          accessibilityHint="Tap to trigger test alert"
          icon="help"
          disabled
          onPress={onButtonPress}
        />
      </View>
    </ComponentViewerBox>
    <ComponentViewerBox name="IconButtonContained · Neutral variant">
      <View style={IOStyles.row}>
        <IconButtonContained
          color="neutral"
          accessibilityLabel="Help"
          accessibilityHint="Tap to trigger test alert"
          icon="help"
          onPress={onButtonPress}
        />

        <IconButtonContained
          color="neutral"
          accessibilityLabel="Help"
          accessibilityHint="Tap to trigger test alert"
          icon="help"
          disabled
          onPress={onButtonPress}
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
            accessibilityLabel="Help"
            accessibilityHint="Tap to trigger test alert"
            icon="help"
            onPress={onButtonPress}
          />

          <IconButtonContained
            color="contrast"
            accessibilityLabel="Help"
            accessibilityHint="Tap to trigger test alert"
            icon="help"
            disabled
            onPress={onButtonPress}
          />
        </View>
      </ComponentViewerBox>
    </View>
    <VSpacer size={40} />
    <H2 style={{ marginBottom: 16, marginTop: 16 }}>Specific buttons</H2>
    <ComponentViewerBox name="CalendarEventButton (using new ButtonOutline)">
      <ButtonOutline
        accessibilityHint="Tap to trigger test alert"
        label={"Aggiungi promemoria"}
        icon="add"
        onPress={onButtonPress}
      />

      <VSpacer size={16} />

      <ButtonOutline
        accessibilityHint="Tap to trigger test alert"
        label={"Aggiunto"}
        icon="checkTickBig"
        onPress={onButtonPress}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="Login buttons">
      <ButtonSolid
        fullWidth
        accessibilityHint="Tap to trigger test alert"
        label={"Entra con SPID"}
        icon="profile"
        onPress={onButtonPress}
      />
      <VSpacer size={8} />
      <ButtonSolid
        fullWidth
        accessibilityHint="Tap to trigger test alert"
        label={"Entra con CIE"}
        icon="cie"
        onPress={onButtonPress}
      />
    </ComponentViewerBox>
  </Screen>
);

const LoadingSolidButtonExample = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <ButtonSolid
        fullWidth
        loading={isEnabled}
        accessibilityHint="Tap to trigger test alert"
        label={"Primary button"}
        onPress={() => setIsEnabled(true)}
      />
      <ListItemSwitch
        label="Abilita lo stato di caricamento"
        onSwitchValueChange={toggleSwitch}
        value={isEnabled}
      />
    </>
  );
};

const LoadingOutlineButtonExample = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <Button
        color="primary"
        variant="outline"
        fullWidth
        loading={isEnabled}
        accessibilityHint="Tap to trigger test alert"
        label={"Primary button"}
        onPress={() => setIsEnabled(true)}
      />
      <ListItemSwitch
        label="Abilita lo stato di caricamento"
        onSwitchValueChange={toggleSwitch}
        value={isEnabled}
      />
    </>
  );
};
