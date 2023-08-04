import { ContentWrapper } from "@pagopa/io-app-design-system";
import React from "react";
import { ScrollView, View } from "react-native";

type Props = {
  children: React.ReactNode;
};

export const Screen = ({ children }: Props) => (
  <ScrollView>
    <ContentWrapper>{children}</ContentWrapper>
  </ScrollView>
);

export const NoMarginScreen = ({ children }: Props) => (
  <ScrollView>
    <View>{children}</View>
  </ScrollView>
);
