import * as React from "react";

import {
  Blur,
  Group,
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
  VStack,
  hexToRgba
} from "@pagopa/io-app-design-system";
import { Dimensions, View } from "react-native";
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

  const logoURL =
    "https://assets.cdn.io.italia.it/logos/organizations/1199250158.png";

  const logo = useImage(
    "https://assets.cdn.io.italia.it/logos/organizations/1199250158.png"
  );

  return (
    <>
      <Canvas style={{ width: screenSize, height: 256 }}>
        <Group
          opacity={0.5}
          origin={{ x: screenSize / 2, y: 128 }}
          transform={[{ rotate: -30 }, { scale: 1.5 }]}
        >
          <Image
            image={logo}
            fit="cover"
            rect={{ x: 0, y: 0, width: screenSize, height: screenSize }}
          >
            <Blur blur={35} />
          </Image>
        </Group>
        {/* <BackdropBlur blur={120} clip={{ x: 0, y: 128, width: 256, height: 128 }}>
        <Fill color="rgba(255, 255, 255, 0.5)" />
      </BackdropBlur> */}
      </Canvas>
      <SafeAreaView>
        <View
          style={{
            position: "relative",
            top: -150 - insets.top,
            marginHorizontal: IOVisualCostants.appMarginDefault
          }}
        >
          <VStack space={24}>
            <HStack space={16}>
              <Avatar size="medium" logoUri={{ uri: logoURL }} />
              <View style={{ alignSelf: "center" }}>
                <H3>Comune di Milano</H3>
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
