import * as React from "react";
import { View, StyleSheet } from "react-native";
import { HSpacer } from "../spacer/Spacer";
import { ButtonOutline, ButtonSolid, ButtonSolidProps } from "../buttons";
import { IOStyles } from "../../core";

const styles = StyleSheet.create({
  button: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1
  },
  buttonTwoThirds: {
    alignContent: "center",
    flex: 2
  }
});

type CommonProps = Readonly<{
  primary: BlockButtonProps;
  accessible?: boolean;
}>;

export type BlockButtonProps = {
  type: "Solid" | "Outline";
  buttonProps: Omit<ButtonSolidProps, "fullWidth">;
};

/**
 * | single button |
 */
export interface SingleButton extends CommonProps {
  type: "SingleButton";
}

/**
 * | left | right |
 */
export interface TwoButtonsInlineHalf extends CommonProps {
  type: "TwoButtonsInlineHalf";
  secondary: BlockButtonProps;
}

/**
 * | left  |       right        |
 */
interface TwoButtonsInlineThird extends CommonProps {
  type: "TwoButtonsInlineThird";
  secondary: BlockButtonProps;
}

/**
 * |      left       |  right  |
 */
interface TwoButtonsInlineThirdInverted extends CommonProps {
  type: "TwoButtonsInlineThirdInverted";
  secondary: BlockButtonProps;
}

/**
 * |  left |  mid  | right |
 */
interface ThreeButtonsInLine extends CommonProps {
  type: "ThreeButtonsInLine";
  secondary: BlockButtonProps;
  third: BlockButtonProps;
}

type Props =
  | SingleButton
  | TwoButtonsInlineHalf
  | TwoButtonsInlineThird
  | TwoButtonsInlineThirdInverted
  | ThreeButtonsInLine;

export type BlockButtonsProps = Props;

/**
 * Implements a component that show buttons on a line on 1, 2 or 3 buttons
 */
export const BlockButtons = (props: Props) => {
  const renderRightButton = () => {
    if (props.type === "SingleButton") {
      return null;
    }

    const secondaryButtonStyle =
      props.type === "TwoButtonsInlineThird"
        ? styles.buttonTwoThirds
        : styles.button;

    return (
      <React.Fragment>
        <HSpacer size={16} />
        {renderButton(props.secondary, secondaryButtonStyle)}
      </React.Fragment>
    );
  };

  const renderMidButton = () => {
    if (props.type !== "ThreeButtonsInLine") {
      return null;
    }

    return (
      <React.Fragment>
        <HSpacer size={16} />
        {renderButton(props.third, styles.button)}
      </React.Fragment>
    );
  };

  const renderLeftButton = () => {
    const primaryButtonStyle =
      props.type === "TwoButtonsInlineThirdInverted"
        ? styles.buttonTwoThirds
        : styles.button;

    return renderButton(props.primary, primaryButtonStyle);
  };

  const renderButton = (
    props: BlockButtonProps,
    style: React.ComponentProps<typeof View>["style"]
  ) => (
    <View style={style}>
      {props.type === "Solid" ? (
        <ButtonSolid fullWidth {...props.buttonProps} />
      ) : (
        <ButtonOutline fullWidth {...props.buttonProps} />
      )}
    </View>
  );

  return (
    <View style={IOStyles.row}>
      {renderLeftButton()}
      {renderMidButton()}
      {renderRightButton()}
    </View>
  );
};
