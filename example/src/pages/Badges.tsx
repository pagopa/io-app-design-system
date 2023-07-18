import { Badge, CustomBadge, H2, H4, HSpacer, IOColors, IOStyles, IOTagRadius, PercentageValueBox, Tag, VSpacer } from "@pagopa/io-app-design-system";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { Screen } from "../components/Screen";

const styles = StyleSheet.create({
    fakeNavItem: {
        aspectRatio: 1,
        width: 25,
        backgroundColor: IOColors.greyLight
    }
});

export const Badges = () => (
    <Screen>
        <H2 weight={"Bold"} style={{ marginBottom: 16 }}>
            Tag
        </H2>
        {renderTag()}

        <VSpacer size={16} />

        <H2 weight={"Bold"} style={{ marginVertical: 16 }}>
            Badge
        </H2>
        {renderBadge()}

        <VSpacer size={24} />

        <H4 weight="SemiBold" color="bluegreyDark">
            DiscountValueBox (CGN)
        </H4>
        <VSpacer size={16} />
        <View style={IOStyles.row}>
            <PercentageValueBox value={25} small />
            <HSpacer size={16} />
            <PercentageValueBox value={25} />
        </View>

        <VSpacer size={40} />

        <H2>Notifications</H2>
        <VSpacer size={16} />
        <H4 weight="SemiBold" color="bluegreyDark">
            CustomBadge
        </H4>
        <VSpacer size={16} />
        <View style={IOStyles.row}>
            <View style={styles.fakeNavItem}>
                <CustomBadge badgeValue={1} />
            </View>
            <HSpacer />
            <View style={styles.fakeNavItem}>
                <CustomBadge badgeValue={99} />
            </View>
        </View>
    </Screen>
);

const renderBadge = () => (
    <>
        <View style={IOStyles.row}>
            <Badge text={"Default"} variant="default" />
        </View>
        <VSpacer size={16} />
        <View style={IOStyles.row}>
            <Badge text={"Info"} variant="info" />
            <HSpacer size={16} />
            <Badge text={"Warning"} variant="warning" />
            <HSpacer size={16} />
            <Badge text={"Error"} variant="error" />
            <HSpacer size={16} />
            <Badge text={"Success"} variant="success" />
        </View>
        <VSpacer size={16} />
        <View style={IOStyles.row}>
            <Badge text={"Purple"} variant="purple" />
            <HSpacer size={16} />
            <Badge text={"Light blue"} variant="lightBlue" />
            <HSpacer size={16} />
            <Badge text={"Blue"} variant="blue" />
            <HSpacer size={16} />
            <Badge text={"Turquoise"} variant="turquoise" />
            <HSpacer size={16} />
        </View>
        <VSpacer size={16} />
        <View
            style={{
                backgroundColor: IOColors.bluegrey,
                padding: 16,
                borderRadius: 8
            }}
        >
            <View style={IOStyles.row}>
                <Badge text={"Default"} variant="default" />
                <HSpacer size={16} />
                <Badge text={"Contrast"} variant="contrast" />
            </View>
        </View>
    </>
);

const renderTag = () => (
    <View>
        <ComponentViewerBox name={"Tag, different variants"}>
            <Tag text={"Entro il 30 mag"} variant="warning" />
            <VSpacer size={8} />
            <Tag text={"Completato"} variant="success" />
            <VSpacer size={8} />
            <Tag text={"Scaduto"} variant="error" />
            <VSpacer size={8} />
            <View style={IOStyles.row}>
                <Tag text={"Certificato"} variant="qrCode" />
                <HSpacer size={8} />
                <Tag text={"Valore legale"} variant="legalMessage" />
            </View>
        </ComponentViewerBox>
        <ComponentViewerBox name={"Tag, stress test"}>
            <View
                style={{
                    backgroundColor: IOColors["error-100"],
                    padding: 8,
                    width: "60%",
                    borderRadius: IOTagRadius + 8
                }}
            >
                <Tag text={"Looooooooong string"} variant="error" />
            </View>
        </ComponentViewerBox>
    </View>
);
