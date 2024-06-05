import * as React from "react";

import {
  Avatar,
  Body,
  ContentWrapper,
  H3,
  HStack,
  IOColors,
  IOVisualCostants,
  LabelSmall,
  RadioGroup,
  VStack,
  hexToRgba
} from "@pagopa/io-app-design-system";
import {
  Blur,
  Canvas,
  Group,
  Image,
  LinearGradient,
  Mask,
  Rect,
  useImage,
  vec
} from "@shopify/react-native-skia";
import { useCallback, useMemo, useState } from "react";
import { Dimensions, Platform, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const cdnPath = "https://assets.cdn.io.italia.it/logos/organizations/";

const organizationsURIs = [
  {
    imageSource: `${cdnPath}1199250158.png`,
    name: "Comune di Milano"
  },
  {
    imageSource: `${cdnPath}82003830161.png`,
    name: "Comune di Sotto il Monte Giovanni XXIII"
  },
  {
    imageSource: `${cdnPath}82001760675.png`,
    name: "Comune di Controguerra"
  },
  {
    imageSource: `${cdnPath}80078750587.png`,
    name: "INPS"
  },
  {
    imageSource: `${cdnPath}5779711000.png`,
    name: "e-distribuzione"
  },
  {
    imageSource: `${cdnPath}97254170588.png`,
    name: "Agenzia della Difesa"
  },
  {
    imageSource: `${cdnPath}80215430580.png`,
    name: "Ministero dell'Interno"
  }
];

/**
 * This Screen is used to test components in isolation while developing.
 * @returns a screen with a flexed view where you can test components
 */
export const DynamicBackground = () => {
  const insets = useSafeAreaInsets();
  const screenSize = Dimensions.get("screen").width;
  const gradientHeight: number = 350 + insets.top;
  // const heroOffset: number = 50;

  const renderedOrganizationsURIs: Array<{
    value: string;
    id: string;
  }> = organizationsURIs.map(item => ({
    value: item.name,
    id: item.name
  }));

  const [selectedItem, setSelectedItem] = useState(organizationsURIs[0].name);

  const onEntitySelected = useCallback(
    (item: any) => setSelectedItem(item),
    [setSelectedItem]
  );

  const entityData = useMemo(
    () => organizationsURIs.find(item => item.name === selectedItem),
    [selectedItem]
  );

  return (
    <>
      <Canvas
        style={{
          width: screenSize,
          height: gradientHeight,
          position: "absolute",
          top: 0
        }}
      >
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
              image={useImage(entityData?.imageSource)}
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
      <ScrollView
        contentInsetAdjustmentBehavior="always"
        contentOffset={{ x: 0, y: 300 }}
      >
        <View
          style={{
            position: "relative",
            top: 30,
            marginHorizontal: IOVisualCostants.appMarginDefault
          }}
        >
          <VStack space={24}>
            <HStack space={16}>
              <Avatar
                key={entityData?.name}
                size="medium"
                logoUri={{ uri: entityData?.imageSource }}
              />
              <View style={{ alignSelf: "center" }}>
                <H3 color="grey-850">{entityData?.name}</H3>
                <LabelSmall
                  fontSize="regular"
                  weight="Regular"
                  color="grey-850"
                  style={{ opacity: 0.8 }}
                >
                  {entityData?.name}
                </LabelSmall>
              </View>
            </HStack>

            <View
              style={{
                borderRadius: IOVisualCostants.avatarRadiusSizeMedium,
                borderCurve: "continuous",
                backgroundColor: IOColors.white,
                borderWidth: 1,
                borderColor: hexToRgba(IOColors["grey-850"], 0.1),
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
        <ContentWrapper>
          <RadioGroup<string>
            type="radioListItem"
            items={renderedOrganizationsURIs}
            selectedItem={selectedItem}
            onPress={onEntitySelected}
          />
        </ContentWrapper>
        {/* <FlatList
          scrollEnabled={false}
          data={organizationsURIs}
          contentContainerStyle={{
            paddingHorizontal: IOVisualCostants.appMarginDefault
          }}
          renderItem={({ item }) => (
            <ListItemNav
              hideChevron
              value={item.name}
              onPress={() => setSelectedItem(item)}
            />
          )}
        /> */}
      </ScrollView>
    </>
  );
};
