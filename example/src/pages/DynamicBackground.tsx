import * as React from "react";

import {
  Mask,
  Blur,
  Group,
  Rect,
  LinearGradient,
  vec,
  ImageShader,
  BackdropBlur,
  Canvas,
  Fill,
  Image,
  useImage
} from "@shopify/react-native-skia";
import {
  Avatar,
  Body,
  H3,
  HStack,
  IOColors,
  IOVisualCostants,
  LabelSmall,
  VStack,
  hexToRgba
} from "@pagopa/io-app-design-system";
import { Dimensions, Platform, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets
} from "react-native-safe-area-context";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const DynamicBackground = () => {
  const insets = useSafeAreaInsets();
  const screenSize = Dimensions.get("screen").width;
  const gradientHeight: number = 350 + insets.top;
  const heroOffset: number = 50;

  const logoURL =
    "https://assets.cdn.io.italia.it/logos/organizations/1199250158.png";

  const logo = useImage(
    "https://assets.cdn.io.italia.it/logos/organizations/1199250158.png"
  );

  return (
    <>
      <Canvas style={{ width: screenSize, height: gradientHeight }}>
        <Mask
          mask={
            <Rect x={0} y={0} width={screenSize} height={gradientHeight}>
              <LinearGradient
                start={vec(0, 0)}
                end={vec(0, gradientHeight)}
                colors={["black", "black", "transparent"]}
              />
            </Rect>
          }
        >
          <Group
            opacity={Platform.OS === "android" ? 0.6 : 0.7}
            origin={{
              x: screenSize,
              y: insets.top
            }}
            transform={[{ rotate: 45 }, { scale: 2 }]}
          >
            <Image
              image={logo}
              fit="cover"
              rect={{
                x: screenSize / 2,
                y: 0,
                width: screenSize,
                height: screenSize
              }}
            >
              <Blur blur={40} />
            </Image>
          </Group>
        </Mask>
      </Canvas>
      <SafeAreaView>
        <View
          style={{
            position: "relative",
            top: -gradientHeight + heroOffset,
            marginHorizontal: IOVisualCostants.appMarginDefault
          }}
        >
          <VStack space={24}>
            <HStack space={16}>
              <Avatar size="medium" logoUri={{ uri: logoURL }} />
              <View style={{ alignSelf: "center" }}>
                <H3 color="grey-850">Service name</H3>
                <LabelSmall
                  fontSize="regular"
                  weight="Regular"
                  color="grey-850"
                  style={{ opacity: 0.8 }}
                >
                  Comune di Milano
                </LabelSmall>
              </View>
            </HStack>

            <View
              style={{
                borderRadius: 16,
                borderCurve: "continuous",
                backgroundColor: IOColors.white,
                borderWidth: 1,
                borderColor: hexToRgba(IOColors.black, 0.1),
                padding: 24
              }}
            >
              <Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                interdum fringilla ex id viverra. In fringilla, orci sed
                placerat egestas, nibh ligula pellentesque ex, ac ultrices orci
                massa efficitur neque. Nunc congue sagittis felis ut fringilla.
                Integer lacinia vehicula lacus vitae aliquam. Pellentesque
                feugiat pellentesque laoreet. Nunc congue facilisis leo, eu
                condimentum est lobortis vel.
              </Body>
            </View>
          </VStack>
        </View>
      </SafeAreaView>
    </>
  );
};
