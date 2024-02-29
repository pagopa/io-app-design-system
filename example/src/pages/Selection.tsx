import {
  CheckboxLabel,
  Divider,
  H2,
  IOColors,
  IOVisualCostants,
  LabelSmall,
  ListItemCheckbox,
  ListItemSwitch,
  NativeSwitch,
  RadioButtonLabel,
  RadioGroup,
  RadioItem,
  RadioItemWithAmount,
  SwitchLabel,
  VSpacer,
  useIOExperimentalDesign
} from "@pagopa/io-app-design-system";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";

export const Selection = () => {
  const { isExperimental, setExperimental } = useIOExperimentalDesign();
  return (
    <Screen>
      <H2
        style={{
          marginVertical: 16,
          paddingTop: IOVisualCostants.appMarginDefault
        }}
      >
        Checkbox
      </H2>
      <ListItemSwitch
        label="Abilita Design Sperimentale"
        value={isExperimental}
        onSwitchValueChange={setExperimental}
      />
      {/* CheckboxLabel */}
      {renderCheckboxLabel()}
      {/* ListItemCheckbox */}
      {renderListItemCheckbox()}
      <H2 style={{ marginVertical: 16 }}>Radio</H2>
      {/* RadioButtonLabel */}
      {renderRadioButtonLabel()}
      {/* RadioListItem */}
      <RadioListItemsShowroom />
      {/* RadioListItemWithAmount */}
      <RadioListItemsWithAmountShowroom />
      <H2 style={{ marginVertical: 16 }}>Switch</H2>
      {/* Native Switch */}
      <NativeSwitchShowroom />
      {/* ListItemSwitch */}
      <ListItemSwitchShowroom />
      {/* SwitchLabel */}
      {renderAnimatedSwitch()}
    </Screen>
  );
};

const renderCheckboxLabel = () => (
  <>
    <ComponentViewerBox name="CheckboxLabel">
      <CheckboxLabel label="This is a test" />
      <VSpacer size={16} />
      <CheckboxLabel label="This is a test with a very loooong looooooooong loooooooong text" />
    </ComponentViewerBox>
    <ComponentViewerBox name="CheckboxLabel (disabled)">
      <CheckboxLabel disabled checked={true} label="This is a test" />
      <VSpacer size={16} />
      <CheckboxLabel disabled label="This is a test" />
    </ComponentViewerBox>
  </>
);

const renderListItemCheckbox = () => (
  <>
    <ComponentViewerBox name="ListItemCheckbox">
      <ListItemCheckbox
        value="Usa configurazione rapida"
        accessibilityLabel={""}
      />
      <Divider />
      <ListItemCheckbox
        icon="coggle"
        value="Usa configurazione rapida"
        accessibilityLabel={""}
      />
      <Divider />
      <ListItemCheckbox
        value="Usa configurazione rapida"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
        accessibilityLabel={""}
      />
      <Divider />
      <ListItemCheckbox
        value="Questa è un'altra prova ancora più lunga per andare su due righe"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
        accessibilityLabel={""}
      />
      <Divider />
      <ListItemCheckbox
        icon="bonus"
        value="Let's try with a loooong loooooong looooooong title + icon"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
        accessibilityLabel={""}
      />
      <Divider />
      <ListItemCheckbox
        icon="coggle"
        value="Usa configurazione rapida"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti."
        }
        accessibilityLabel={""}
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ListItemCheckbox (disabled)">
      <ListItemCheckbox
        disabled
        value="Usa configurazione rapida"
        accessibilityLabel={""}
      />
      <Divider />
      <ListItemCheckbox
        disabled
        icon="coggle"
        value="Usa configurazione rapida"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti."
        }
        accessibilityLabel={""}
      />
      <Divider />
      <ListItemCheckbox
        disabled
        selected={true}
        icon="coggle"
        value="Usa configurazione rapida"
        accessibilityLabel={""}
      />
    </ComponentViewerBox>
  </>
);

// RADIO ITEMS

const mockRadioItems = (): ReadonlyArray<RadioItem<string>> => [
  {
    startImage: { icon: "coggle" },
    value: "Let's try with a basic title",
    description:
      "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano.",
    id: "example-icon"
  },
  {
    value: "Let's try with JSX description",
    description: (
      <LabelSmall color="grey-700" weight="Regular">
        Ti contatteranno solo i servizi che hanno qualcosa di importante da
        dirti.{" "}
        <Text style={{ color: IOColors["grey-700"], fontWeight: "600" }}>
          Potrai sempre disattivare le comunicazioni che non ti interessano.
        </Text>
      </LabelSmall>
    ),
    id: "example-jsx-element"
  },
  {
    value: "Let's try with a basic title",
    description:
      "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti.",
    id: "example-2"
  },
  {
    value: "Let's try with a very looong loooooong title instead",
    id: "example-3"
  },
  {
    value: "Let's try with a disabled item",
    description:
      "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti.",
    id: "example-disabled",
    disabled: true
  },
  {
    value: "Let's try with a disabled item",
    description:
      "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti.",
    id: "example-loading",
    disabled: true,
    loadingProps: {
      state: true,
      skeletonIcon: false
    }
  },
  {
    value: "Let's try with a disabled item",
    description:
      "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti.",
    id: "example-loading-withIcon",
    disabled: true,
    loadingProps: {
      state: true,
      skeletonIcon: true
    }
  },
  {
    value: "Let's try with a disabled item",
    description:
      "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti.",
    id: "example-loading-withDescription",
    disabled: true,
    loadingProps: {
      state: true,
      skeletonDescription: true
    }
  },
  {
    value: "Let's try with a disabled item",
    description:
      "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti.",
    id: "example-loading-withIcon-withDescription",
    disabled: true,
    loadingProps: {
      state: true,
      skeletonDescription: true,
      skeletonIcon: true
    }
  }
];

const RadioListItemsShowroom = () => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    "example-1"
  );

  return (
    <ComponentViewerBox name="RadioListItem">
      <RadioGroup<string>
        type="radioListItem"
        key="check_income"
        items={mockRadioItems()}
        selectedItem={selectedItem}
        onPress={setSelectedItem}
      />
    </ComponentViewerBox>
  );
};
// RADIO ITEMS WITH AMOUNT

const mockRadioItemsWithAmount = (): ReadonlyArray<
  RadioItemWithAmount<string>
> => [
  {
    id: "example-1",
    label: "Banca Intesa",
    formattedAmountString: "2,50 €",
    suggestReason: "Perché costa meno",
    isSuggested: true
  },
  {
    id: "example-2",
    label: "Banca Unicredit",
    formattedAmountString: "4,50 €"
  }
];

const RadioListItemsWithAmountShowroom = () => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    "example-1"
  );

  return (
    <ComponentViewerBox name="RadioListItemWithAmount">
      <RadioGroup<string>
        type="radioListItemWithAmount"
        // key="check_income"
        items={mockRadioItemsWithAmount()}
        selectedItem={selectedItem}
        onPress={setSelectedItem}
      />
    </ComponentViewerBox>
  );
};
// SWITCH

const renderAnimatedSwitch = () => (
  <ComponentViewerBox name="AnimatedSwitch, dismissed in favor of the native one">
    <SwitchLabel label="This is a test" />
    <VSpacer size={16} />
    <SwitchLabel label="This is a test with a very loooong looooooong loooooooong text" />
  </ComponentViewerBox>
);

// RADIO BUTTON LABEL

const renderRadioButtonLabel = () => (
  <ComponentViewerBox name="RadioButtonLabel">
    <RadioButtonLabel label="This is a test" />
    <VSpacer size={16} />
    <RadioButtonLabel label="This is a test with a very loooong looooooong loooooooong text" />
  </ComponentViewerBox>
);
const NativeSwitchShowroom = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ComponentViewerBox name="NativeSwitch">
      <View style={{ alignSelf: "flex-start" }}>
        <NativeSwitch value={isEnabled} onValueChange={toggleSwitch} />
      </View>
    </ComponentViewerBox>
  );
};

type ListItemSwitchSampleProps = Pick<
  React.ComponentProps<typeof ListItemSwitch>,
  "label" | "description" | "value" | "icon" | "paymentLogo"
>;

const ListItemSwitchSample = ({
  value,
  label,
  description,
  icon,
  paymentLogo
}: ListItemSwitchSampleProps) => {
  const [isEnabled, setIsEnabled] = useState(value);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      {icon ? (
        <ListItemSwitch
          icon={icon}
          label={label}
          description={description}
          value={isEnabled}
          onSwitchValueChange={toggleSwitch}
        />
      ) : paymentLogo ? (
        <ListItemSwitch
          paymentLogo={paymentLogo}
          label={label}
          description={description}
          value={isEnabled}
          onSwitchValueChange={toggleSwitch}
        />
      ) : (
        <ListItemSwitch
          label={label}
          description={description}
          value={isEnabled}
          onSwitchValueChange={toggleSwitch}
        />
      )}
    </>
  );
};

const ListItemSwitchShowroom = () => (
  <>
    <ComponentViewerBox name="ListItemSwitch">
      <ListItemSwitchSample label="Testo molto breve" value={true} />
      <Divider />
      <ListItemSwitchSample
        label="Testo molto breve"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
      />
      <Divider />
      <ListItemSwitchSample
        label="Questa è un'altra prova ancora più lunga per andare su due righe"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
      />
      <Divider />
      <ListItemSwitchSample
        icon="bonus"
        label="Let's try with a loooong loooooong looooooong title + icon"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
      />
      <Divider />
      <ListItemSwitchSample
        paymentLogo="mastercard"
        label="5354 **** **** 0000"
      />
      <Divider />
      <ListItemSwitchSample paymentLogo="applePay" label="Apple Pay" />
    </ComponentViewerBox>
    <ComponentViewerBox name="ListItemSwitch, disabled">
      <ListItemSwitch disabled label="Testo molto breve" value={true} />
      <Divider />
      <ListItemSwitch
        disabled
        label="Testo molto breve"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
      />
      <Divider />
      <ListItemSwitch
        disabled
        icon="bonus"
        label="Let's try with a loooong loooooong title + icon"
        description={
          "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
        }
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ListItemSwitch, loading status">
      <ListItemSwitch
        icon="device"
        label="Label"
        value={false}
        isLoading
        description="Loading list item switch"
      />
      <Divider />
      <ListItemSwitch
        icon="device"
        label="Loong loooooong looooooooong loooong title"
        value={false}
        isLoading
        description="Loading list item switch"
      />
    </ComponentViewerBox>
    <ComponentViewerBox name="ListItemSwitch with badge">
      <ListItemSwitch
        icon="device"
        label="Usa l'app IO"
        value={false}
        badge={{
          text: "Attivo",
          variant: "info"
        }}
        description="Inquadra il codice QR mostrato dall’esercente e segui le istruzioni in app per autorizzare la spesa."
      />
      <ListItemSwitch
        icon="coggle"
        label="Loong loooooong loooooooooong loooong title"
        value={false}
        badge={{
          text: "Attivo",
          variant: "info"
        }}
      />
    </ComponentViewerBox>
  </>
);
