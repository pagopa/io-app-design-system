import { ContentWrapper, IOThemeContext } from "@pagopa/io-app-design-system";
import React, { useContext } from "react";
import { ScrollView, View } from "react-native";

type Props = {
    children: React.ReactNode;
};

export const Screen = ({
    children,
}: Props) => {
    const theme = useContext(IOThemeContext);

    return (
        <ScrollView
            style={{
                backgroundColor: theme["appBackground-primary"]
            }}
        >
            <ContentWrapper>{children}</ContentWrapper>
        </ScrollView>
    );
};

export const NoMarginScreen = ({
    children,
}: Props) => {
    const theme = useContext(IOThemeContext);

    return (
        <ScrollView
            style={{
                backgroundColor: theme["appBackground-primary"]
            }}
        >
            <View>{children}</View>
        </ScrollView>
    );
};