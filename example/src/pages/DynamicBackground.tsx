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
import { Dimensions } from "react-native";

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const DynamicBackground = () => {
  const screenSize = Dimensions.get("screen").width;

  const logo = useImage(
    "https://assets.cdn.io.italia.it/logos/organizations/1199250158.png"
  );

  return (
    <Canvas style={{ width: screenSize, height: 256 }}>
      <Group
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
  );
};
