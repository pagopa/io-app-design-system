import React, { useMemo } from "react";
import { View } from "react-native";
import { IOColors } from "../../core";
import { IOFontWeight } from "../../utils/fonts";
import { XOR } from "../../utils/types";
import { BaseTypography } from "./BaseTypography";
import {
  calculateWeightColor,
  RequiredTypographyProps,
  TypographyProps
} from "./common";

/**
 * Using the DefaultArgumentProps is possible to define a default fallback value for  weight and color
 * that will be used when the fields weight and color will be undefined.
 */
type DefaultArgumentProps<WeightPropsType, ColorsPropsType> = {
  defaultWeight: WeightPropsType;
  defaultColor: ColorsPropsType;
};

/**
 * Using the DefaultFactoryProps is possible to define a custom factory to calculate the default value for
 * weight and color, thus allowing to implement more sophisticated strategies.
 */
type DefaultFactoryProps<WeightPropsType, ColorsPropsType> = {
  weightColorFactory: (
    weight?: WeightPropsType,
    color?: ColorsPropsType
  ) => RequiredTypographyProps<WeightPropsType, ColorsPropsType>;
};

/**
 * Only one type of default props strategy is allowed
 */
type DefaultProps<WeightPropsType, ColorsPropsType> = XOR<
  DefaultArgumentProps<WeightPropsType, ColorsPropsType>,
  DefaultFactoryProps<WeightPropsType, ColorsPropsType>
>;

/**
 * The factory props will include:
 * - One of the two DefaultProps
 * - The props of {@link BaseTypographyProps} without weight and color
 * - The default {@link TypographyProps}
 */
type FactoryProps<WeightPropsType, ColorsPropsType> = TypographyProps<
  WeightPropsType,
  ColorsPropsType
> &
  DefaultProps<WeightPropsType, ColorsPropsType> &
  Omit<React.ComponentProps<typeof BaseTypography>, "weight" | "color">;

/**
 * Calculate if the props is of type {@link DefaultFactoryProps}
 * @param props
 */
function isDefaultFactoryProps<WeightPropsType, ColorsPropsType>(
  props:
    | DefaultFactoryProps<WeightPropsType, ColorsPropsType>
    | DefaultArgumentProps<WeightPropsType, ColorsPropsType>
): props is DefaultFactoryProps<WeightPropsType, ColorsPropsType> {
  return (
    (props as DefaultFactoryProps<WeightPropsType, ColorsPropsType>)
      .weightColorFactory !== undefined
  );
}

/**
 * Build a {@link BaseTypography} component, calculating the default values for weight and color if undefined.
 * The default values can be calculated specifying some fallback values using {@link DefaultArgumentProps}
 * or with a factory function to define some custom behaviour using {@link DefaultFactoryProps}
 * @param props
 * @deprecated Use `IOText` instead. Or use the new typographic styles that use it.
 */
export function useTypographyFactory<
  WeightPropsType extends IOFontWeight,
  ColorsPropsType extends IOColors
>(
  props: FactoryProps<WeightPropsType, ColorsPropsType>,
  ref?: React.ForwardedRef<View>
) {
  // Use different strategy to calculate the default values, based on DefaultProps
  const { weight, color } = useMemo(
    () =>
      isDefaultFactoryProps(props)
        ? props.weightColorFactory(props.weight, props.color)
        : calculateWeightColor(
            props.defaultWeight,
            props.defaultColor,
            props.weight,
            props.color
          ),
    [props]
  );

  return <BaseTypography weight={weight} color={color} {...props} ref={ref} />;
}
