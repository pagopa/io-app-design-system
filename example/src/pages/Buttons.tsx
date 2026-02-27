import {
  H2,
  H3,
  HSpacer,
  IOButton,
  IOButtonColor,
  IOButtonVariant,
  IOColors,
  IOIcons,
  IOVisualCostants,
  IconButton,
  IconButtonContained,
  IconButtonSolid,
  ListItemSwitch,
  VSpacer,
  VStack,
  hexToRgba
} from "@pagopa/io-app-design-system";
import { Fragment, useState } from "react";
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

const buttonColors: Array<IOButtonColor> = ["primary", "danger", "contrast"];

const buttonVariants: Array<Extract<IOButtonVariant, "solid" | "outline">> = [
  "solid",
  "outline"
];

const colorsIconMap: Record<IOButtonColor, IOIcons> = {
  primary: "qrCode",
  danger: "trashcan",
  contrast: "add"
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const Buttons = () => (
  <Screen>
    {/* The title should be dynamic, got from the route object */}
    <H2
      style={{
        marginBottom: 16,
        paddingTop: IOVisualCostants.appMarginDefault
      }}
    >
      IOButton
    </H2>

    {renderSolidOutlineButton()}

    <VSpacer size={48} />

    {renderLinkButton()}

    <VSpacer size={40} />

    <H2 style={{ marginBottom: 16, marginTop: 16 }}>IconButton</H2>
    <ComponentViewerBox name="IconButton · Primary variant">
      <View style={{ flexDirection: "row" }}>
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
      <View style={{ flexDirection: "row" }}>
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
        <View style={{ flexDirection: "row" }}>
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
        <View style={{ flexDirection: "row" }}>
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
      <View style={{ flexDirection: "row" }}>
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
        <View style={{ flexDirection: "row" }}>
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
      <View style={{ flexDirection: "row" }}>
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
      <View style={{ flexDirection: "row" }}>
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
        <View style={{ flexDirection: "row" }}>
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
  </Screen>
);

const renderSolidOutlineButton = () => (
  <VStack space={48}>
    {buttonVariants.map(variant => (
      <View key={`${variant}-variant`}>
        <H3 style={{ marginBottom: 16 }}>{capitalize(variant)} variant</H3>

        <VStack space={40}>
          {buttonColors.map((color, index) => {
            const isContrast = color === "contrast";

            const buttonLabel = `${capitalize(variant)} button`;
            const titleComponentViewerBox = `IOButton · ${capitalize(
              variant
            )} variant, ${color} color`;

            return (
              <Fragment key={`${color}-solid-variant-${index}`}>
                <View style={isContrast ? styles.primaryBlock : {}}>
                  <ComponentViewerBox
                    name={titleComponentViewerBox}
                    colorMode={isContrast ? "dark" : undefined}
                  >
                    <VStack space={16} style={{ alignItems: "flex-start" }}>
                      <IOButton
                        color={color}
                        variant={variant}
                        accessibilityHint="Tap to trigger test alert"
                        label={buttonLabel}
                        onPress={onButtonPress}
                      />
                      <IOButton
                        color={color}
                        variant={variant}
                        accessibilityHint="Tap to trigger test alert"
                        label={buttonLabel}
                        icon={colorsIconMap[color]}
                        onPress={onButtonPress}
                      />
                      <IOButton
                        color={color}
                        variant={variant}
                        accessibilityHint="Tap to trigger test alert"
                        label={buttonLabel}
                        icon={colorsIconMap[color]}
                        iconPosition="end"
                        onPress={onButtonPress}
                      />
                      <View style={{ alignSelf: "center" }}>
                        <IOButton
                          color={color}
                          variant={variant}
                          accessibilityHint="Tap to trigger test alert"
                          label={`${buttonLabel} (centered)`}
                          onPress={onButtonPress}
                        />
                      </View>
                    </VStack>
                  </ComponentViewerBox>
                  <ComponentViewerBox
                    name={`${titleComponentViewerBox}, full width`}
                    colorMode={isContrast ? "dark" : undefined}
                  >
                    {/* Let's force `alignItems: "flex-start"`
      to test if `fullWidth` is managed correctly */}
                    <VStack space={16} style={{ alignItems: "flex-start" }}>
                      <IOButton
                        color={color}
                        variant={variant}
                        fullWidth
                        accessibilityHint="Tap to trigger test alert"
                        label={`${buttonLabel} (full width)`}
                        onPress={onButtonPress}
                      />
                    </VStack>
                  </ComponentViewerBox>
                  <ComponentViewerBox
                    name={`${titleComponentViewerBox}, loading state`}
                    colorMode={isContrast ? "dark" : undefined}
                  >
                    {isContrast ? (
                      <IOButton
                        fullWidth
                        loading
                        variant={variant}
                        color="contrast"
                        label={`${buttonLabel} (loading state)`}
                        onPress={onButtonPress}
                        accessibilityHint="Tap to trigger test alert"
                      />
                    ) : (
                      <LoadingButtonExample variant={variant} color={color} />
                    )}
                  </ComponentViewerBox>
                  <ComponentViewerBox
                    name={`${titleComponentViewerBox}, disabled`}
                    colorMode={isContrast ? "dark" : undefined}
                    last
                  >
                    <VStack space={16} style={{ alignItems: "flex-start" }}>
                      <IOButton
                        color={color}
                        variant={variant}
                        disabled
                        accessibilityHint="Tap to trigger test alert"
                        label={`${buttonLabel} (disabled)`}
                        onPress={onButtonPress}
                      />
                      <IOButton
                        color={color}
                        variant={variant}
                        disabled
                        accessibilityHint="Tap to trigger test alert"
                        label={`${buttonLabel} (disabled)`}
                        icon={colorsIconMap[color]}
                        onPress={onButtonPress}
                      />
                    </VStack>
                  </ComponentViewerBox>
                </View>
              </Fragment>
            );
          })}
        </VStack>
      </View>
    ))}
  </VStack>
);

const renderLinkButton = () => (
  <>
    <H3 style={{ marginBottom: 16 }}>Link variant</H3>
    <VStack space={40}>
      {buttonColors.map((color, index) => {
        const isContrast = color === "contrast";

        return (
          <Fragment key={`${color}-link-variant-${index}`}>
            <View style={isContrast ? styles.primaryBlock : {}}>
              <ComponentViewerBox
                name={`IOButton · Link variant, ${color} color`}
                colorMode={isContrast ? "dark" : undefined}
              >
                <IOButton
                  color={color}
                  variant="link"
                  accessibilityHint="Tap to trigger test alert"
                  label={"Link button"}
                  onPress={onButtonPress}
                />

                <VSpacer size={16} />

                <IOButton
                  color={color}
                  variant="link"
                  accessibilityHint="Tap to trigger test alert"
                  label={"Link button"}
                  icon="starEmpty"
                  onPress={onButtonPress}
                />

                <VSpacer size={16} />

                <IOButton
                  color={color}
                  variant="link"
                  accessibilityHint="Tap to trigger test alert"
                  label={"Link button"}
                  icon="starEmpty"
                  iconPosition="end"
                  onPress={onButtonPress}
                />

                <VSpacer size={16} />

                <View style={{ alignSelf: "center" }}>
                  <IOButton
                    color={color}
                    variant="link"
                    accessibilityHint="Tap to trigger test alert"
                    label={"Link button (centered)"}
                    onPress={onButtonPress}
                  />
                </View>
              </ComponentViewerBox>
              <ComponentViewerBox
                name="IOButton · Link variant, stress test"
                colorMode={isContrast ? "dark" : undefined}
              >
                <View style={{ alignSelf: "center" }}>
                  <IOButton
                    color={color}
                    variant="link"
                    textAlign="center"
                    /* Don't set limits on maximum number of lines */
                    numberOfLines={0}
                    accessibilityHint="Tap to trigger test alert"
                    label={
                      "Link button (centered) with a very long loooooong text"
                    }
                    onPress={onButtonPress}
                  />
                </View>
              </ComponentViewerBox>
              <ComponentViewerBox
                name={`IOButton · Link variant, ${color} color, disabled`}
                colorMode={isContrast ? "dark" : undefined}
                last
              >
                <View>
                  <IOButton
                    color={color}
                    variant="link"
                    disabled
                    accessibilityHint="Tap to trigger test alert"
                    label={"Link button (disabled)"}
                    onPress={onButtonPress}
                  />

                  <VSpacer size={16} />

                  <IOButton
                    color={color}
                    variant="link"
                    disabled
                    accessibilityHint="Tap to trigger test alert"
                    label={"Link button (disabled)"}
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
  </>
);

const LoadingButtonExample = ({
  variant,
  color
}: {
  variant: Extract<IOButtonVariant, "solid" | "outline">;
  color: IOButtonColor;
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <IOButton
        variant={variant}
        color={color}
        fullWidth
        loading={isEnabled}
        accessibilityHint="Tap to trigger test alert"
        label={`${capitalize(variant)} button, loading state`}
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
