import * as pot from "@pagopa/ts-commons/lib/pot";
import I18n from "i18n-js";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { IOStyleVariables } from "../../core";
import { TestID } from "../../utils/types";
import { calculateSlop } from "../checkbox";
import { Icon } from "../icons/Icon";
import TouchableDefaultOpacity from "../touchable/TouchableDefaultOpacity";
import Switch from "./Switch";

type Props<E> = {
    value: pot.Pot<boolean, E>;
    onRetry?: () => void;
} & TestID &
    Pick<
        React.ComponentProps<typeof Switch>,
        "onValueChange" | "accessibilityLabel"
    >;

const iconSize = 24;
const slop = calculateSlop(iconSize);

const LoadingVersion = React.memo((props: TestID) => (
    <View style={{ width: IOStyleVariables.switchWidth }}>
        <ActivityIndicator
            testID={props.testID}
            color={"black"}
            accessibilityLabel={I18n.t("global.remoteStates.loading")}
        />
    </View>
));

type SwitchProps = Pick<
    React.ComponentProps<typeof Switch>,
    "testID" | "value" | "disabled" | "onValueChange" | "accessibilityLabel"
>;

const SwitchVersion = React.memo((props: SwitchProps) => (
    <Switch
        testID={props.testID}
        value={props.value}
        disabled={props.disabled}
        onValueChange={props.onValueChange}
        accessibilityLabel={props.accessibilityLabel}
    />
));

type NoneErrorProps<E> = TestID & Pick<Props<E>, "onRetry">;

const NoneErrorVersion = React.memo(<E, _>(props: NoneErrorProps<E>) => (
    <TouchableDefaultOpacity
        accessibilityRole={"button"}
        accessibilityLabel={I18n.t("global.genericRetry")}
        hitSlop={{ bottom: slop, left: slop, right: slop, top: slop }}
        onPress={props.onRetry}
        style={{ width: IOStyleVariables.switchWidth, alignItems: "center" }}
    >
        <Icon testID={props.testID} name="reload" size={iconSize} color="blue" />
    </TouchableDefaultOpacity>
));

/**
 * A Switch that handles the graphical states of a pot, used to represent a remote information.
 * none or some loading -> loading spinner
 * noneError -> no value to display -> show a reload icon
 * some, some error -> the switch with the value
 * someUpdating -> the switch with the new value, disabled (cannot change value during the upsert)
 * @param props
 * @constructor
 */
export const RemoteSwitch = <E, _>(props: Props<E>): React.ReactElement => {
    const loadingComponent = <LoadingVersion testID={props.testID} />;
    const switchComponent = (value: boolean) => (
        <SwitchVersion
            testID={props.testID}
            value={value}
            onValueChange={props.onValueChange}
            accessibilityLabel={props.accessibilityLabel} disabled={false} />
    );

    return pot.fold(
        props.value,
        () => loadingComponent,
        () => loadingComponent,
        _ => loadingComponent,
        _ => <NoneErrorVersion testID={props.testID} onRetry={props.onRetry} />,
        value => switchComponent(value),
        _ => loadingComponent,
        (_, newValue) => (
            <SwitchVersion testID={props.testID} value={newValue} disabled={true} />
        ),
        value => switchComponent(value)
    );
};
