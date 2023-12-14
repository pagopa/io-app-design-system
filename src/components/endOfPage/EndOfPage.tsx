import React from "react";
import { View } from "react-native";
import { VSpacer } from "../spacer";
import {
  ButtonLink,
  ButtonLinkProps,
  ButtonSolid,
  ButtonSolidProps
} from "../buttons";

type PrimaryActionProp = {
  type: "Solid";
  props: Omit<ButtonSolidProps, "fullWidth">;
};

type SecondaryActionProp = {
  type: "Link";
  props: ButtonLinkProps;
};

type Props =
  | {
      primaryAction?: never;
      secondaryAction?: never;
    }
  | {
      primaryAction: PrimaryActionProp;
      secondaryAction?: never;
    }
  | {
      primaryAction: PrimaryActionProp;
      secondaryAction: SecondaryActionProp;
    };

export const EndOfPage = ({ primaryAction, secondaryAction }: Props) => (
  <>
    <VSpacer size={32} />
    {primaryAction ? (
      <>
        <ButtonSolid {...primaryAction.props} fullWidth />
        {secondaryAction && (
          <>
            <VSpacer size={16} />
            <VSpacer size={4} />
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
              <ButtonLink {...secondaryAction.props} />
            </View>
          </>
        )}
      </>
    ) : (
      <VSpacer size={32} />
    )}
  </>
);
