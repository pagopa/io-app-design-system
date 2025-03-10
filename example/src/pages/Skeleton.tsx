import {
  BodySmall,
  ContentWrapper,
  H3,
  HStack,
  IOColors,
  IOModuleIDPVSpacing,
  IOSkeleton,
  ModuleCheckout,
  VStack,
  useIOTheme
} from "@pagopa/io-app-design-system";
import React from "react";
import { View } from "react-native";
import { NoMarginScreen } from "../components/Screen";

export const Skeleton = () => {
  const theme = useIOTheme();

  return (
    <NoMarginScreen>
      <ContentWrapper>
        <H3 color={theme["textHeading-default"]} style={{ marginBottom: 16 }}>
          IOSkeleton
        </H3>
      </ContentWrapper>

      <HStack>
        <IOSkeleton shape="square" size={100} />
        <IOSkeleton shape="rectangle" width={150} height={120} />
      </HStack>

      <ContentWrapper>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: IOModuleIDPVSpacing
          }}
        >
          <HStack space={8} style={{ alignItems: "center" }}>
            <IOSkeleton shape="square" size={24} radius={8} />
            <VStack space={8}>
              <IOSkeleton
                shape="rectangle"
                width={170}
                height={20}
                radius={8}
              />
              <IOSkeleton
                shape="rectangle"
                width={110}
                height={16}
                radius={8}
              />
            </VStack>
          </HStack>
          <IOSkeleton shape="rectangle" width={64} height={16} radius={8} />
        </View>

        <VStack space={4}>
          <ModuleCheckout isLoading />
        </VStack>
      </ContentWrapper>
    </NoMarginScreen>
  );
};

const VStackBlocks = () => {
  const theme = useIOTheme();

  return (
    <>
      {[...Array(3)].map((_el, i) => (
        <View
          key={`block-${i}`}
          style={{
            height: 32,
            paddingHorizontal: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: IOColors[theme["appBackground-tertiary"]]
          }}
        >
          <BodySmall
            weight="Regular"
            color={theme["textBody-tertiary"]}
          >{`Block n.${i + 1}`}</BodySmall>
        </View>
      ))}
      <View
        style={{
          height: 72,
          paddingHorizontal: 16,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: IOColors[theme["appBackground-tertiary"]]
        }}
      >
        <BodySmall weight="Regular" color={theme["textBody-tertiary"]}>
          Different height
        </BodySmall>
      </View>
    </>
  );
};
