import { CheckBox, CheckboxLabel, CheckboxListItem, Divider, H2, H4, NativeSwitch, NewRadioItem, RadioGroup, RemoteSwitch, SwitchLabel, SwitchListItem, VSpacer } from "@pagopa/io-app-design-system";
import * as pot from "@pagopa/ts-commons/lib/pot";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";
const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingVertical: 16
    }
});

export const Selection = () => (
    <Screen>
        <H2 weight={"Bold"} style={{ marginVertical: 16 }}>
            Checkbox
        </H2>
        {/* CheckboxLabel */}
        {renderCheckboxLabel()}
        {/* CheckboxListItem */}
        {renderCheckboxListItem()}
        <H2 weight={"Bold"} style={{ marginVertical: 16 }}>
            Radio
        </H2>
        {/* RadioListItem */}
        <RadioListItemsShowroom />
        <H2 weight={"Bold"} style={{ marginVertical: 16 }}>
            Switch
        </H2>
        {/* Native Switch */}
        <NativeSwitchShowroom />
        {/* SwitchListItem */}
        <SwitchListItemShowroom />
        {/* SwitchLabel */}
        {renderAnimatedSwitch()}
        {/* Legacy components */}
        <H2 weight={"SemiBold"} style={{ marginBottom: 16, marginTop: 16 }}>
            Legacy components
        </H2>
        <H4>{"<CheckBox />"}</H4>
        <View style={styles.content}>
            <CheckBox />
            <CheckBox checked={true} />
        </View>
        <H4>{"<RemoteSwitch />"}</H4>
        <View style={styles.content}>
            <RemoteSwitch value={pot.none} />
            <RemoteSwitch
                value={pot.noneError(new Error())}
                onRetry={() => Alert.alert("Retry!")}
            />
            <RemoteSwitch value={pot.some(true)} />
            <RemoteSwitch value={pot.someUpdating(false, true)} />
            <RemoteSwitch value={pot.some(false)} />
            <RemoteSwitch value={pot.someUpdating(true, false)} />
            <VSpacer size={48} />
        </View>
    </Screen>
);

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

const renderCheckboxListItem = () => (
    <>
        <ComponentViewerBox name="CheckboxListItem">
            <CheckboxListItem
                value="Usa configurazione rapida"
                accessibilityLabel={""}
            />
            <Divider />
            <CheckboxListItem
                icon="coggle"
                value="Usa configurazione rapida"
                accessibilityLabel={""}
            />
            <Divider />
            <CheckboxListItem
                value="Usa configurazione rapida"
                description={
                    "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
                }
                accessibilityLabel={""}
            />
            <Divider />
            <CheckboxListItem
                value="Questa è un'altra prova ancora più lunga per andare su due righe"
                description={
                    "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
                }
                accessibilityLabel={""}
            />
            <Divider />
            <CheckboxListItem
                icon="bonus"
                value="Let's try with a loooong loooooong looooooong title + icon"
                description={
                    "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
                }
                accessibilityLabel={""}
            />
            <Divider />
            <CheckboxListItem
                icon="coggle"
                value="Usa configurazione rapida"
                description={
                    "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti."
                }
                accessibilityLabel={""}
            />
        </ComponentViewerBox>
        <ComponentViewerBox name="CheckBoxListItem (disabled)">
            <CheckboxListItem
                disabled
                value="Usa configurazione rapida"
                accessibilityLabel={""}
            />
            <Divider />
            <CheckboxListItem
                disabled
                icon="coggle"
                value="Usa configurazione rapida"
                description={
                    "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti."
                }
                accessibilityLabel={""}
            />
            <Divider />
            <CheckboxListItem
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

const mockRadioItems = (): ReadonlyArray<NewRadioItem<string>> => [
    {
        icon: "coggle",
        value: "Let's try with a basic title",
        description:
            "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano.",
        id: "example-1"
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
    }
];

const RadioListItemsShowroom = () => {
    const [selectedItem, setSelectedItem] = useState<string | undefined>(
        "example-1"
    );

    return (
        <ComponentViewerBox name="RadioListItem">
            <RadioGroup<string>
                key="check_income"
                items={mockRadioItems()}
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

type SwitchListItemSampleProps = Pick<
    React.ComponentProps<typeof SwitchListItem>,
    "label" | "description" | "value"
>;

const SwitchListItemSample = ({
    value,
    label,
    description
}: SwitchListItemSampleProps) => {
    const [isEnabled, setIsEnabled] = useState(value);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SwitchListItem
            label={label}
            description={description}
            value={isEnabled}
            onSwitchValueChange={toggleSwitch}
        />
    );
};

const SwitchListItemShowroom = () => (
    <>
        <ComponentViewerBox name="SwitchListItem">
            <SwitchListItemSample label="Testo molto breve" value={true} />
            <Divider />
            <SwitchListItemSample
                label="Testo molto breve"
                description={
                    "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
                }
            />
            <Divider />
            <SwitchListItemSample
                label="Questa è un'altra prova ancora più lunga per andare su due righe"
                description={
                    "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
                }
            />
            <Divider />
            <SwitchListItemSample
                label="Let's try with a loooong loooooong looooooong title + icon"
                description={
                    "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
                }
            />
        </ComponentViewerBox>
        <ComponentViewerBox name="SwitchListItem, disabled">
            <SwitchListItem disabled label="Testo molto breve" value={true} />
            <Divider />
            <SwitchListItem
                disabled
                label="Testo molto breve"
                description={
                    "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
                }
            />
            <Divider />
            <SwitchListItem
                disabled
                icon="bonus"
                label="Let's try with a loooong loooooong title + icon"
                description={
                    "Ti contatteranno solo i servizi che hanno qualcosa di importante da dirti. Potrai sempre disattivare le comunicazioni che non ti interessano."
                }
            />
        </ComponentViewerBox>
    </>
);
