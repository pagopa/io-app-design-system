/* eslint-disable functional/immutable-data */
import {
  H6,
  IOColors,
  IORadiusScale,
  VSpacer,
  hexToRgba
} from "@pagopa/io-app-design-system";
import MaskedView from "@react-native-masked-view/masked-view";
import {
  Canvas,
  Color,
  DiffRect,
  LinearGradient,
  Mask,
  RoundedRect,
  Circle as SkiaCircle,
  Group as SkiaGroup,
  Image as SkiaImage,
  ImageSVG as SkiaImageSVG,
  RadialGradient as SkiaRadialGradient,
  rect,
  rrect,
  useImage,
  useSVG,
  vec
} from "@shopify/react-native-skia";
import * as React from "react";
import { useState } from "react";
import {
  ColorValue,
  LayoutChangeEvent,
  LayoutRectangle,
  StyleSheet,
  Text,
  View,
  ViewStyle
} from "react-native";
import Animated, {
  Extrapolate,
  SensorType,
  interpolate,
  useAnimatedReaction,
  useAnimatedSensor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";

type CardSize = {
  width: LayoutRectangle["width"];
  height: LayoutRectangle["height"];
};

type LightSize = {
  value: LayoutRectangle["width"];
};

/* LIGHT
   Visual parameters */
const lightSizePercentage: ViewStyle["width"] = "90%";
const lightScaleMultiplier: number = 1;
const lightOpacity: ViewStyle["opacity"] = 0.9;
const lightSkiaOpacity: number = 0.4;
/* Percentage of visible light when it's near
card boundaries */
const visibleLightPercentage: number = 0.25;

/* CARD
   Visual parameters */
const cardAspectRatio: ViewStyle["aspectRatio"] = 7 / 4;
const cardBorderRadius: IORadiusScale = 24;
const cardBorderWidth: number = 1;
const cardBorderColor: ColorValue = IOColors["hanPurple-500"];
const cardBorderHighlighted: ColorValue = IOColors.white;
const cardBorderOpacity: number = 0.65;
// Drivers' License
const cardGradient: Array<Color> = ["#F4ACD5", "#FCE6F2"];
// Flag
const flagDistanceFromEdge: number = 16;
const flagSize: number = 32;

/* MOVEMENT
   Spring config for the light movement */
const springConfig = {
  mass: 1,
  damping: 50,
  stiffness: 200,
  overshootClamping: false
};

const DynamicCardRotation = () => {
  /* On first render, store the current device orientation
  using quaternions */
  const rotationSensor = useAnimatedSensor(SensorType.ROTATION);
  const { qx, qy } = rotationSensor.sensor.value;
  const initialQx = useSharedValue(0);
  const initialQy = useSharedValue(0);

  const skiaTranslateX = useSharedValue(0);
  const skiaTranslateY = useSharedValue(0);

  useAnimatedReaction(
    () => rotationSensor.sensor.value,
    s => {
      initialQx.value = s.qx;
      initialQy.value = s.qy;
    },
    []
  );

  /* Not all devices are in an initial flat position on a surface 
    (e.g. a table) then we use relative rotation values,
    not absolute ones  */
  const relativeQx = useDerivedValue(() => qx - initialQx.value);
  const relativeQy = useDerivedValue(() => qy - initialQy.value);

  // eslint-disable-next-line no-console
  console.log(
    "Sensor values:",
    `qx: ${initialQx.value}, qy: ${initialQy.value}`
  );

  /* Get both card and light sizes to set the basic boundaries */
  const [cardSize, setCardSize] = useState<CardSize>();
  const [lightSize, setLightSize] = useState<LightSize>();

  const getCardSize = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setCardSize({ width, height });
  };

  const getLightSize = (event: LayoutChangeEvent) => {
    const { width: lightSize } = event.nativeEvent.layout;
    setLightSize({ value: lightSize });
  };

  /* Set translate boundaries */
  const maxTranslateX =
    ((cardSize?.width ?? 0) -
      (lightSize?.value ?? 0) * visibleLightPercentage) /
    2;

  const maxTranslateY =
    ((cardSize?.height ?? 0) -
      (lightSize?.value ?? 0) * visibleLightPercentage) /
    2;

  /* We don't need to consider the whole
    quaternion range, just the 1/10 */
  const quaternionRange: number = 0.1;

  /* Calculate the light position using quaternions */
  const lightAnimatedStyle = useAnimatedStyle(() => {
    const maxTranslateX =
      ((cardSize?.width ?? 0) -
        (lightSize?.value ?? 0) * visibleLightPercentage) /
      2;

    const maxTranslateY =
      ((cardSize?.height ?? 0) -
        (lightSize?.value ?? 0) * visibleLightPercentage) /
      2;

    const translateX = interpolate(
      relativeQx.value,
      [-quaternionRange, quaternionRange],
      [maxTranslateX, -maxTranslateX],
      Extrapolate.CLAMP
    );

    const translateY = interpolate(
      relativeQy.value,
      [-quaternionRange, quaternionRange],
      [-maxTranslateY, maxTranslateY],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateX: withSpring(translateX, springConfig) },
        { translateY: withSpring(translateY, springConfig) },
        { scale: lightScaleMultiplier }
      ]
    };
  });

  const skiaLightTranslateValues = useDerivedValue(() => {
    skiaTranslateX.value = withSpring(
      interpolate(
        relativeQx.value,
        [-quaternionRange, quaternionRange],
        [maxTranslateX, -maxTranslateX],
        Extrapolate.CLAMP
      ),
      springConfig
    );

    skiaTranslateY.value = withSpring(
      interpolate(
        relativeQy.value,
        [-quaternionRange, quaternionRange],
        [-maxTranslateY, maxTranslateY],
        Extrapolate.CLAMP
      ),
      springConfig
    );

    return [
      { translateX: skiaTranslateX.value },
      { translateY: skiaTranslateY.value },
      { scale: lightScaleMultiplier }
    ];
  });

  // Total card (border included)
  const CardMask = () => (
    <RoundedRect
      x={0}
      y={0}
      width={cardSize?.width ?? 0}
      height={cardSize?.height ?? 0}
      r={cardBorderRadius}
      color={IOColors.black}
    />
  );

  // Inner card (border excluded)
  const CardInnerMask = () => (
    <RoundedRect
      x={cardBorderWidth}
      y={cardBorderWidth}
      width={(cardSize?.width ?? 0) - cardBorderWidth * 2}
      height={(cardSize?.height ?? 0) - cardBorderWidth * 2}
      r={cardBorderRadius - cardBorderWidth}
      color={IOColors.black}
    />
  );

  const CardLight = () => (
    <SkiaGroup
      opacity={lightSkiaOpacity}
      blendMode={"colorDodge"}
      origin={vec((cardSize?.width ?? 0) / 2, (cardSize?.height ?? 0) / 2)}
    >
      <SkiaCircle
        cx={(cardSize?.width ?? 0) / 2}
        cy={(cardSize?.height ?? 0) / 2}
        r={(lightSize?.value ?? 0) / 2}
        color="lightblue"
        transform={skiaLightTranslateValues}
      >
        <SkiaRadialGradient
          c={vec((cardSize?.width ?? 0) / 2, (cardSize?.height ?? 0) / 2)}
          r={(lightSize?.value ?? 0) / 2}
          /* There are many stops because it's an easing gradient. */
          positions={[
            0, 0.081, 0.155, 0.225, 0.29, 0.353, 0.412, 0.471, 0.529, 0.588,
            0.647, 0.71, 0.775, 0.845, 0.919, 1
          ]}
          colors={[
            "rgba(255,255,255,1)",
            "rgba(255,255,255,0.987)",
            "rgba(255,255,255,0.95)",
            "rgba(255,255,255,0.89)",
            "rgba(255,255,255,0.825)",
            "rgba(255,255,255,0.74)",
            "rgba(255,255,255,0.65)",
            "rgba(255,255,255,0.55)",
            "rgba(255,255,255,0.45)",
            "rgba(255,255,255,0.35)",
            "rgba(255,255,255,0.26)",
            "rgba(255,255,255,0.175)",
            "rgba(255,255,255,0.1)",
            "rgba(255,255,255,0.05)",
            "rgba(255,255,255,0.01)",
            "rgba(255,255,255,0)"
          ]}
        />
      </SkiaCircle>
    </SkiaGroup>
  );

  const CardBorder = ({
    color = cardBorderColor,
    opacity = cardBorderOpacity
  }: {
    color?: Color;
    opacity?: number;
  }) => {
    const outerRect = rrect(
      rect(0, 0, cardSize?.width ?? 0, cardSize?.height ?? 0),
      cardBorderRadius,
      cardBorderRadius
    );

    const innerRect = rrect(
      rect(
        cardBorderWidth,
        cardBorderWidth,
        (cardSize?.width ?? 0) - cardBorderWidth * 2,
        (cardSize?.height ?? 0) - cardBorderWidth * 2
      ),
      cardBorderRadius - cardBorderWidth,
      cardBorderRadius - cardBorderWidth
    );

    return (
      <DiffRect
        inner={innerRect}
        outer={outerRect}
        color={color}
        opacity={opacity}
      />
    );
  };

  const CardPatternMask = () => {
    const cardPattern = useImage(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("../../assets/images/driver-license-background.png")
    );

    return (
      <Mask mask={<CardInnerMask />}>
        <SkiaImage
          x={0}
          y={0}
          fit="cover"
          image={cardPattern}
          width={cardSize?.width ?? 0}
          height={cardSize?.height ?? 0}
        />
      </Mask>
    );
  };

  const CardEUCountry = () => {
    const countryFlag = useSVG(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("../../assets/images/driver-license-it-flag.svg")
    );

    return (
      <SkiaImageSVG
        x={(cardSize?.width ?? 0) - flagDistanceFromEdge - flagSize}
        y={flagDistanceFromEdge}
        svg={countryFlag}
        width={flagSize}
        height={flagSize}
      />
    );
  };

  const CardBorderMask = () => (
    <Mask mode="alpha" mask={<CardLight />}>
      <CardBorder color={cardBorderHighlighted} opacity={0.8} />
    </Mask>
  );

  return (
    <View style={styles.container}>
      <MaskedView maskElement={<View style={styles.mask} />}>
        <View style={styles.box} onLayout={getCardSize}>
          <Animated.View
            style={[styles.light, lightAnimatedStyle]}
            onLayout={getLightSize}
          >
            <Svg height={"100%"} width={"100%"}>
              <Defs>
                <RadialGradient
                  id="grad"
                  cx="50%"
                  cy="50%"
                  rx="50%"
                  ry="50%"
                  fx="50%"
                  fy="50%"
                >
                  {/* There are many stops because it's an easing gradient.
                  To learn more: https://larsenwork.com/easing-gradients/ */}
                  <Stop stopColor="#ffffff" offset="0%" stopOpacity={1} />
                  <Stop stopColor="#ffffff" offset="8.1%" stopOpacity={0.987} />
                  <Stop stopColor="#ffffff" offset="15.5%" stopOpacity={0.95} />
                  <Stop stopColor="#ffffff" offset="22.5%" stopOpacity={0.89} />
                  <Stop stopColor="#ffffff" offset="29%" stopOpacity={0.825} />
                  <Stop stopColor="#ffffff" offset="35.3%" stopOpacity={0.74} />
                  <Stop stopColor="#ffffff" offset="41.2%" stopOpacity={0.65} />
                  <Stop stopColor="#ffffff" offset="47.1%" stopOpacity={0.55} />
                  <Stop stopColor="#ffffff" offset="52.9%" stopOpacity={0.45} />
                  <Stop stopColor="#ffffff" offset="58.8%" stopOpacity={0.35} />
                  <Stop stopColor="#ffffff" offset="64.7%" stopOpacity={0.26} />
                  <Stop stopColor="#ffffff" offset="71%" stopOpacity={0.175} />
                  <Stop stopColor="#ffffff" offset="77.5%" stopOpacity={0.1} />
                  <Stop stopColor="#ffffff" offset="84.5%" stopOpacity={0.05} />
                  <Stop stopColor="#ffffff" offset="91.9%" stopOpacity={0.01} />
                  <Stop stopColor="#ffffff" offset="100%" stopOpacity={0} />
                </RadialGradient>
              </Defs>
              <Circle cx={"50%"} cy={"50%"} r={"50%"} fill="url(#grad)" />
            </Svg>
          </Animated.View>
        </View>
      </MaskedView>
      <Text style={styles.cardDebugLabel}>Using React Native engine</Text>

      <VSpacer />

      <Canvas
        style={{
          width: "100%",
          aspectRatio: cardAspectRatio
        }}
      >
        <RoundedRect
          x={0}
          y={0}
          width={cardSize?.width ?? 0}
          height={cardSize?.height ?? 0}
          r={cardBorderRadius}
          color={hexToRgba(IOColors["hanPurple-250"], 1)}
        >
          <LinearGradient
            start={vec(0, cardSize?.height ?? 0)}
            end={vec(cardSize?.width ?? 0, 0)}
            colors={cardGradient}
          />
        </RoundedRect>
        <CardBorder color={"#D279AC"} />
        <CardLight />
        <CardPatternMask />
        <CardEUCountry />

        <CardBorderMask />
      </Canvas>
      <Text style={styles.cardDebugLabel}>Using Skia engine</Text>

      <View style={styles.debugInfo}>
        <H6>Card</H6>
        <Text>{`Size: ${cardSize?.width} × ${cardSize?.height}`}</Text>
        <VSpacer size={8} />
        <H6>Light (Circle)</H6>
        <Text>{`Size: ${lightSize?.value}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 24,
    paddingHorizontal: 24
  },
  // eslint-disable-next-line react-native/no-color-literals
  light: {
    alignSelf: "center",
    width: lightSizePercentage,
    aspectRatio: 1,
    opacity: lightOpacity,
    borderRadius: 400
  },
  cardDebugLabel: {
    fontSize: 11,
    marginTop: 4
  },
  mask: {
    width: "100%",
    aspectRatio: cardAspectRatio,
    backgroundColor: IOColors.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: cardBorderRadius
  },
  box: {
    justifyContent: "center",
    width: "100%",
    aspectRatio: cardAspectRatio,
    backgroundColor: IOColors["hanPurple-250"]
  },
  debugInfo: {
    alignSelf: "flex-start",
    position: "relative",
    top: 16
  }
});

export { DynamicCardRotation };