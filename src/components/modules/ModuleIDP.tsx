import * as React from "react";
import { useCallback } from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
  Text
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import {
  IOColors,
  IOModuleIDPHSpacing,
  IOModuleIDPRadius,
  IOModuleIDPSavedVSpacing,
  IOModuleIDPVSpacing,
  IOListItemLogoMargin,
  IOScaleValues,
  IOSpringValues,
  useIOExperimentalDesign
} from "../../core";
import { toAndroidCacheTimestamp } from "../../utils/dates";
import { makeFontStyleObject } from "../../utils/fonts";
import { WithTestID } from "../../utils/types";

type ModuleIDP = WithTestID<{
  name: string;
  localLogo: ImageSourcePropType;
  logo: ImageSourcePropType;
  saved?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}>;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: IOColors["grey-100"],
    borderRadius: IOModuleIDPRadius,
    backgroundColor: IOColors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: IOModuleIDPVSpacing,
    paddingHorizontal: IOModuleIDPHSpacing
  },
  idpName: {
    color: IOColors["grey-700"],
    fontSize: 12,
    lineHeight: 16,
    alignSelf: "center",
    textTransform: "uppercase",
    flexShrink: 1
  },
  idpNameFont: {
    ...makeFontStyleObject("Regular", false, "ReadexPro")
  },
  idpLegacyNameFont: {
    ...makeFontStyleObject("SemiBold", false, "TitilliumWeb")
  },
  idpLogo: {
    marginStart: IOListItemLogoMargin,
    width: 120,
    height: 30,
    resizeMode: "contain"
  }
});

// https://github.com/facebook/react-native/issues/12606
// Image cache forced refresh for Android by appending
// the `ts` query parameter as DDMMYYYY to simulate a 24h TTL.
const androidIdpLogoForcedRefreshed = () =>
  Platform.OS === "android" ? `?ts=${toAndroidCacheTimestamp()}` : "";

export const ModuleIDP = ({
  name,
  localLogo,
  logo,
  saved,
  onPress,
  testID
}: ModuleIDP) => {
  const isPressed = useSharedValue(0);
  const { isExperimental } = useIOExperimentalDesign();
  // Scaling transformation applied when the button is pressed
  const animationScaleValue = IOScaleValues?.magnifiedButton?.pressedState;

  const scaleTraversed = useDerivedValue(() =>
    withSpring(isPressed.value, IOSpringValues.button)
  );

  // Interpolate animation values from `isPressed` values
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scaleTraversed.value,
      [0, 1],
      [1, animationScaleValue],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }]
    };
  });

  const handlePressIn = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 1;
  }, [isPressed]);
  const handlePressOut = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    isPressed.value = 0;
  }, [isPressed]);

  // eslint-disable-next-line no-console
  const urlLogoIDP = localLogo
    ? localLogo
    : {
        uri: `${logo}${androidIdpLogoForcedRefreshed()}`
      };
  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onTouchEnd={handlePressOut}
      accessible={true}
      accessibilityRole={"button"}
      accessibilityLabel={name}
      testID={testID}
    >
      <Animated.View
        style={[
          styles.button,
          saved && { paddingVertical: IOModuleIDPSavedVSpacing },
          animatedStyle
        ]}
      >
        <Text
          style={[
            styles.idpName,
            isExperimental ? styles.idpNameFont : styles.idpLegacyNameFont
          ]}
        >
          {name}
        </Text>
        <Image source={urlLogoIDP} style={styles.idpLogo} />
      </Animated.View>
    </Pressable>
  );
};

export default ModuleIDP;
