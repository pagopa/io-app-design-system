import { Body, H3, H5, IOAccordion, IOColors, IOStyles, Label, RawAccordion, VSpacer } from "@pagopa/io-app-design-system";
import * as React from "react";
import { View } from "react-native";
import AlphaChannel from "../../assets/alphaChannel.svg";
import Analytics from "../../assets/analytics.svg";
import { Screen } from "../components/Screen";

export const Accordion = () => (
    <Screen>
        <Label>{"<IOAccordion />"}</Label>
        <View style={[IOStyles.flex, { width: "100%" }]}>
            <IOAccordion title={"Animated Accordion"}>
                <AlphaChannel width={128} height={128} />
            </IOAccordion>
            <IOAccordion title={"Accordion without animation"} animated={false}>
                <Analytics width={128} height={128} fill={IOColors.orange} />
            </IOAccordion>
            <IOAccordion title={"Accordion with a very very very very long text"}>
                <>
                    <Analytics width={128} height={128} fill={IOColors.orange} />
                    <Analytics width={128} height={128} fill={IOColors.orange} />
                </>
            </IOAccordion>
        </View>
        <VSpacer size={40} />
        <Label>{"<RawAccordion />"}</Label>
        <VSpacer size={16} />
        <View style={[IOStyles.flex, { width: "100%" }]}>
            <RawAccordion
                headerStyle={{
                    paddingVertical: 16,
                    backgroundColor: IOColors.greyLight
                }}
                header={
                    <View style={IOStyles.row}>
                        {/* <Fingerprint width={32} height={32} /> */}
                        <H3 style={{ alignSelf: "center" }}>{"Custom header "}</H3>
                        <H5 style={{ alignSelf: "center" }}>{"Purgatorio, Canto VI"}</H5>
                    </View>
                }
            >
                <Body>
                    {"Ahi serva Italia, di dolore ostello, \n" +
                        "nave sanza nocchiere in gran tempesta, \n" +
                        "non donna di province, ma bordello!" +
                        "\n\n" +
                        "Quell’anima gentil fu così presta, \n" +
                        "sol per lo dolce suon de la sua terra, \n" +
                        "di fare al cittadin suo quivi festa;" +
                        "\n\n" +
                        "e ora in te non stanno sanza guerra \n" +
                        "li vivi tuoi, e l’un l’altro si rode \n" +
                        "di quei ch’un muro e una fossa serra." +
                        "\n\n" +
                        "Cerca, misera, intorno da le prode \n" +
                        "le tue marine, e poi ti guarda in seno, \n" +
                        "s’alcuna parte in te di pace gode." +
                        "\n\n" +
                        "Che val perché ti racconciasse il freno \n" +
                        "Iustiniano, se la sella è vota? \n" +
                        "Sanz’esso fora la vergogna meno."}
                </Body>
            </RawAccordion>
        </View>
    </Screen>
);
