import { Alert, H2, VSpacer, StatusContent, statusColorMap, getStatusTextColor, LevelEnum, statusIconMap } from "@pagopa/io-app-design-system";
import React from "react";
import { View } from "react-native";
import { FullWidthComponent } from "../components/FullWidthComponent";
import { Screen } from "../components/Screen";
export const DSAlert = () => {
    const viewRef = React.createRef<View>();

    return (
        <Screen>
            {/* Content only */}
            <H2 color={"bluegrey"} weight={"SemiBold"} style={{ marginBottom: 16 }}>
                Content only
            </H2>
            <Alert
                viewRef={viewRef}
                variant="error"
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer />

            <Alert
                viewRef={viewRef}
                variant="warning"
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer />

            <Alert
                viewRef={viewRef}
                variant="info"
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer />

            <Alert
                viewRef={viewRef}
                variant="success"
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer size={40} />

            <H2 color={"bluegrey"} weight={"SemiBold"} style={{ marginBottom: 16 }}>
                Title + Content
            </H2>

            <Alert
                viewRef={viewRef}
                variant="error"
                title="Alert title"
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer />

            <Alert
                viewRef={viewRef}
                variant="warning"
                title="Alert title"
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer />

            <Alert
                viewRef={viewRef}
                variant="info"
                title="Alert title"
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer />

            <Alert
                viewRef={viewRef}
                variant="success"
                title="Alert title"
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer />

            <Alert
                viewRef={viewRef}
                variant="info"
                title="A very very very looooooooooong title"
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer size={40} />

            <H2 color={"bluegrey"} weight={"SemiBold"} style={{ marginBottom: 16 }}>
                Content + Action
            </H2>

            <Alert
                viewRef={viewRef}
                variant="error"
                action="Alert action"
                onPress={() => {
                    alert("Action triggered");
                }}
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer />

            <Alert
                viewRef={viewRef}
                variant="warning"
                action="Alert action"
                onPress={() => {
                    alert("Action triggered");
                }}
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer />

            <Alert
                viewRef={viewRef}
                variant="info"
                action="Alert action"
                onPress={() => {
                    alert("Action triggered");
                }}
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer />

            <Alert
                viewRef={viewRef}
                variant="success"
                action="Alert action"
                onPress={() => {
                    alert("Action triggered");
                }}
                content="Ut enim ad minim veniam, quis ullamco laboris nisi ut aliquid"
            />

            <VSpacer size={40} />

            {/* Full width */}
            <H2 color={"bluegrey"} weight={"SemiBold"} style={{ marginBottom: 16 }}>
                Full width
            </H2>
            <FullWidthComponent>
                <Alert
                    fullWidth
                    viewRef={viewRef}
                    variant="error"
                    content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
                />

                <VSpacer />

                <Alert
                    fullWidth
                    viewRef={viewRef}
                    variant="warning"
                    content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
                />

                <VSpacer />

                <Alert
                    fullWidth
                    viewRef={viewRef}
                    variant="info"
                    content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
                />

                <VSpacer />

                <Alert
                    fullWidth
                    viewRef={viewRef}
                    variant="success"
                    content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
                />

                <VSpacer />

                <Alert
                    fullWidth
                    viewRef={viewRef}
                    variant="info"
                    title="Alert title"
                    content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
                />

                <VSpacer />

                <Alert
                    fullWidth
                    viewRef={viewRef}
                    variant="info"
                    action="Alert action"
                    onPress={() => {
                        alert("Action triggered");
                    }}
                    content="Ut enim ad minim veniam, quis ullamco labo nisi ut aliquid ad minim veniam"
                />
            </FullWidthComponent>

            <VSpacer size={40} />

            <H2 color={"bluegrey"} weight={"SemiBold"} style={{ marginBottom: 16 }}>
                Legacy components
            </H2>
            <FullWidthComponent>
                <StatusContent
                    accessibilityLabel={`Accessibility text for the advice component`}
                    backgroundColor={statusColorMap.normal}
                    foregroundColor={getStatusTextColor(LevelEnum.normal)}
                    iconName={statusIconMap.normal}
                    testID={"SectionStatusComponentContent"}
                    viewRef={viewRef}
                >
                    {
                        "L’invio dei Certificati Verdi è in corso e potrebbe richiedere diversi giorni."
                    }
                </StatusContent>
            </FullWidthComponent>
            <VSpacer size={16} />
            <VSpacer size={16} />
            <FullWidthComponent>
                <StatusContent
                    accessibilityLabel={`Accessibility text for the advice component`}
                    backgroundColor={statusColorMap.warning}
                    foregroundColor={getStatusTextColor(LevelEnum.warning)}
                    iconName={statusIconMap.warning}
                    testID={"SectionStatusComponentContent"}
                    viewRef={viewRef}
                >
                    {"La sezione Messaggi è in manutenzione, tornerà operativa a breve"}
                </StatusContent>
            </FullWidthComponent>
            <VSpacer size={16} />
            <FullWidthComponent>
                <StatusContent
                    accessibilityLabel={`Accessibility text for the advice component`}
                    backgroundColor={statusColorMap.critical}
                    foregroundColor={getStatusTextColor(LevelEnum.critical)}
                    iconName={statusIconMap.critical}
                    testID={"SectionStatusComponentContent"}
                    viewRef={viewRef}
                >
                    {
                        "I nostri sistemi potrebbero rispondere con lentezza, ci scusiamo per il disagio."
                    }
                </StatusContent>
            </FullWidthComponent>
            <VSpacer size={16} />
            <VSpacer size={40} />
        </Screen>
    );
};
