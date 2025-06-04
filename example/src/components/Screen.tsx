import { ContentWrapper } from "@pagopa/io-app-design-system";
import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";

type Props = {
  children: ReactNode;
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
