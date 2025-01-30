import {
  AccordionItem,
  Body,
  H3,
  H5,
  IOColors,
  IOStyles,
  IOVisualCostants,
  Icon,
  RawAccordion,
  VSpacer
} from "@pagopa/io-app-design-system";
import * as React from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { Screen } from "../components/Screen";

const assistanceData: Array<AccordionItem> = [
  {
    title: "Come posso pagare su IO?",
    body: "Puoi pagare con carte di debito, credito e prepagate, con PayPal o BANCOMAT Pay."
  },
  {
    title: "Come posso eliminare un metodo di pagamento?",
    body: "I tuoi metodi di pagamento sono visualizzati come card nella parte alta dello schermo del Portafoglio. Seleziona la card del metodo che vuoi eliminare e poi premi 'Elimina questo metodo!"
  },
  {
    title:
      "Nel 2021 ho maturato degli importi che non mi sono ancora stati rimborsati. Cosa posso fare?",
    body: "Probabilmente non hai indicato l'IBAN del conto su cui desideri ricevere l'accredito, oppure quello che hai indicato non è valido.Per inserire l'IBAN o verificarne la correttezza, apri l'app, vai al Portafoglio e premi sulla card del Cashback. Poi, inseriscilo o modificalo e seleziona 'Continua'. Entro 90 giorni riceverai tramite l'app 10 un messaggio sullo stato del rimborso. Le attività tra PagoPA S.p.A. e Consap S.p.A. per i pagamenti dei rimborsi sono in corso di dismissione, quindi, se non inserisci o non correggi l'IBAN entro il 31/07/2022, potrebbe non essere più possibile effettuare il bonifico per il rimborso."
  },
  {
    title: "Come posso eliminare un metodo di pagamento?",
    body: (
      <Body>
        I tuoi metodi di pagamento sono visualizzati come card nella parte alta
        dello schermo del Portafoglio. Seleziona la card del metodo che vuoi
        eliminare e poi premi Elimina questo metodo!
      </Body>
    )
  },
  {
    title:
      "Nel 2021 ho maturato degli importi che non mi sono ancora stati rimborsati. Cosa posso fare?",
    body: "Probabilmente non hai indicato l'IBAN del conto su cui desideri ricevere l'accredito, oppure quello che hai indicato non è valido.Per inserire l'IBAN o verificarne la correttezza, apri l'app, vai al Portafoglio e premi sulla card del Cashback. Poi, inseriscilo o modificalo e seleziona 'Continua'. Entro 90 giorni riceverai tramite l'app 10 un messaggio sullo stato del rimborso. Le attività tra PagoPA S.p.A. e Consap S.p.A. per i pagamenti dei rimborsi sono in corso di dismissione, quindi, se non inserisci o non correggi l'IBAN entro il 31/07/2022, potrebbe non essere più possibile effettuare il bonifico per il rimborso."
  },
  {
    title: "Come posso pagare su IO?",
    body: "Puoi pagare con carte di debito, credito e prepagate, con PayPal o BANCOMAT Pay.",
    icon: "bell"
  },
  {
    title:
      "Nel 2021 ho maturato degli importi che non mi sono ancora stati rimborsati. Cosa posso fare?",
    body: "Probabilmente non hai indicato l'IBAN del conto su cui desideri ricevere l'accredito, oppure quello che hai indicato non è valido.Per inserire l'IBAN o verificarne la correttezza, apri l'app, vai al Portafoglio e premi sulla card del Cashback. Poi, inseriscilo o modificalo e seleziona 'Continua'. Entro 90 giorni riceverai tramite l'app 10 un messaggio sullo stato del rimborso. Le attività tra PagoPA S.p.A. e Consap S.p.A. per i pagamenti dei rimborsi sono in corso di dismissione, quindi, se non inserisci o non correggi l'IBAN entro il 31/07/2022, potrebbe non essere più possibile effettuare il bonifico per il rimborso.",
    icon: "bell"
  }
];

export const Accordion = () => {
  // const renderAccordionHeader = () => (
  //   <View style={{ marginTop: 16, marginBottom: 24 }}>
  //     <H1 color={theme["textHeading-default"]}>Accordion</H1>
  //   </View>
  // );

  const renderItem = ({ item }: ListRenderItemInfo<AccordionItem>) => (
    <AccordionItem title={item.title} body={item.body} icon={item.icon} />
  );

  return (
    <Screen>
      <FlatList
        scrollEnabled={false}
        data={assistanceData}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: IOVisualCostants.appMarginDefault
        }}
        // ListHeaderComponent={renderAccordionHeader}
        ItemSeparatorComponent={() => <VSpacer size={8} />}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={renderItem}
      />

      {renderRawAccordion()}
    </Screen>
  );
};

const renderRawAccordion = () => (
  <>
    <VSpacer size={40} />
    <H3>RawAccordion</H3>
    <VSpacer size={16} />
    <View style={[IOStyles.flex, { width: "100%" }]}>
      <RawAccordion
        headerStyle={{
          paddingVertical: 16,
          backgroundColor: IOColors["grey-200"]
        }}
        header={
          <View style={IOStyles.row}>
            <Icon name="productIOApp" size={24} color="grey-650" />
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
  </>
);
