import * as O from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";
import I18n from "i18n-js";
import React from "react";
import { Switch as NBSwitch, Platform } from "react-native";
import { IOColors } from "../../core";

const maybeDisabled = O.fromPredicate(
    (isDisabled: boolean | undefined = undefined) => isDisabled === true
);
const contentPrimaryBackground = IOColors.blue;

type Props = {
    disabled: boolean;
    accessibilityLabel?: string;
    value: boolean;
};

type OwnProps = Props &
    React.ComponentProps<typeof NBSwitch>;

/**
 * NativeBase Switch component styled with the app's brand primary color
 */
const Switch = (props: OwnProps) => {
    const thumbColor: string = pipe(
        maybeDisabled(props.disabled),
        O.map(_ => IOColors.blueUltraLight),
        O.getOrElse(() => contentPrimaryBackground)
    );

    return (
        <NBSwitch
            accessible={true}
            accessibilityLabel={
                props.accessibilityLabel ??
                I18n.t("global.accessibility.switchLabel")
            }
            // Stick
            trackColor={{
                false: "default",
                true:
                    Platform.OS === "android"
                        ? IOColors.greyLight
                        : contentPrimaryBackground
            }}
            // Circle
            thumbColor={
                Platform.OS === "android"
                    ? props.value
                        ? thumbColor
                        : IOColors.greyLight
                    : "default"
            }
            {...props}
        />
    );
};

export default Switch;
