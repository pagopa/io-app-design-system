import {
  Body,
  BodySmall,
  ContentWrapper,
  Divider,
  H1,
  H3,
  HStack,
  IOAppMargin,
  IOColors,
  IOModuleIDPVSpacing,
  IOSkeleton,
  IOSpacer,
  LabelMini,
  ModuleCheckout,
  VSpacer,
  VStack,
  useIOTheme
} from "@pagopa/io-app-design-system";
import React from "react";
import { View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { NoMarginScreen } from "../components/Screen";
import { SpacerViewerBox } from "../components/SpacerViewerBox";

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

      <VStack space={16}>
        {IOAppMargin.map((value, i) => (
          <View
            key={`${value}-${i}`}
            style={{
              backgroundColor: IOColors[theme["appBackground-tertiary"]]
            }}
          >
            <ContentWrapper margin={value}>
              <View
                style={{
                  paddingVertical: 16,
                  backgroundColor: IOColors[theme["appBackground-secondary"]]
                }}
              >
                <Body color={theme["textBody-secondary"]}>Content example</Body>
                <LabelMini
                  style={{ position: "absolute", right: 4, top: 4 }}
                  weight="Regular"
                  color={theme["textBody-tertiary"]}
                >
                  {value}
                </LabelMini>
              </View>
            </ContentWrapper>
          </View>
        ))}
      </VStack>

      <VSpacer size={40} />

      <ContentWrapper>
        <H1 color={theme["textHeading-default"]} style={{ marginBottom: 16 }}>
          Spacing
        </H1>

        <H3 color={theme["textHeading-default"]} style={{ marginBottom: 16 }}>
          VSpacer
        </H3>

        {/* Vertical */}
        <VStack space={16}>
          {IOSpacer.map((spacerEntry, i) => (
            <SpacerViewerBox
              key={`${spacerEntry}-${i}-vertical`}
              orientation="vertical"
              size={spacerEntry}
            />
          ))}
        </VStack>

        <VSpacer size={24} />

        <H3 color={theme["textHeading-default"]} style={{ marginBottom: 16 }}>
          HSpacer
        </H3>

        {/* Horizontal */}
        <HStack space={8}>
          {IOSpacer.map((spacerEntry, i) => (
            <SpacerViewerBox
              key={`${spacerEntry}-${i}-horizontal`}
              orientation="horizontal"
              size={spacerEntry}
            />
          ))}
        </HStack>

        <VSpacer size={48} />

        <H3 color={theme["textHeading-default"]} style={{ marginBottom: 16 }}>
          Stack
        </H3>

        <ComponentViewerBox name="VStack, space 16">
          <View
            style={{
              backgroundColor: IOColors[theme["appBackground-secondary"]]
            }}
          >
            <VStack space={16}>
              <VStackBlocks />
            </VStack>
          </View>
        </ComponentViewerBox>

        <ComponentViewerBox name="VStack, space 16, centered">
          <View
            style={{
              alignSelf: "flex-start",
              backgroundColor: IOColors[theme["appBackground-secondary"]]
            }}
          >
            <VStack space={16} style={{ alignItems: "center" }}>
              <VStackBlocks />
            </VStack>
          </View>
        </ComponentViewerBox>

        <ComponentViewerBox name="HStack, space 16">
          <View
            style={{
              backgroundColor: IOColors[theme["appBackground-secondary"]]
            }}
          >
            <HStack space={16}>
              <HStackBlocks />
            </HStack>
          </View>
        </ComponentViewerBox>

        <ComponentViewerBox name="HStack, space 16, centered">
          <View
            style={{
              backgroundColor: IOColors[theme["appBackground-secondary"]]
            }}
          >
            <HStack space={16} style={{ alignItems: "center" }}>
              <HStackBlocks />
            </HStack>
          </View>
        </ComponentViewerBox>
      </ContentWrapper>

      <VSpacer size={24} />

      <ContentWrapper>
        <H1 color={theme["textHeading-default"]} style={{ marginBottom: 16 }}>
          Divider
        </H1>

        <H3 color={theme["textHeading-default"]} style={{ marginBottom: 16 }}>
          Default (Horizontal)
        </H3>

        <Divider />
        <VSpacer size={48} />
      </ContentWrapper>
      <Divider />
      <VSpacer size={48} />
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

const HStackBlocks = () => {
  const theme = useIOTheme();

  return (
    <>
      {[...Array(3)].map((_el, i) => (
        <View
          key={`block-${i}`}
          style={{
            width: 48,
            paddingVertical: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: IOColors[theme["appBackground-tertiary"]]
          }}
        >
          <BodySmall weight="Regular" color={theme["textBody-tertiary"]}>{`${
            i + 1
          }`}</BodySmall>
        </View>
      ))}
      <View
        style={{
          flexGrow: 1,
          paddingVertical: 16,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: IOColors[theme["appBackground-tertiary"]]
        }}
      >
        <BodySmall weight="Regular" color={theme["textBody-tertiary"]}>
          Growing block
        </BodySmall>
      </View>
    </>
  );
};
