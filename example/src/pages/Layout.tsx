import {
  Body,
  ContentWrapper,
  Divider,
  H1,
  H3,
  HStack,
  IOAppMargin,
  IOColors,
  IOSpacer,
  IOVisualCostants,
  LabelSmall,
  VDivider,
  VSpacer,
  VStack,
  useIOTheme
} from "@pagopa/io-app-design-system";
import React from "react";
import { View } from "react-native";
import { ComponentViewerBox } from "../components/ComponentViewerBox";
import { NoMarginScreen } from "../components/Screen";
import { SpacerViewerBox } from "../components/SpacerViewerBox";

export const Layout = () => {
  const theme = useIOTheme();

  return (
    <NoMarginScreen>
      <ContentWrapper>
        <H1
          color={theme["textHeading-default"]}
          style={{
            marginBottom: 16,
            paddingTop: IOVisualCostants.appMarginDefault
          }}
        >
          Grid
        </H1>
        <H3 color={theme["textHeading-default"]} style={{ marginBottom: 16 }}>
          ContentWrapper
        </H3>
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
                <LabelSmall
                  style={{ position: "absolute", right: 4, top: 4 }}
                  fontSize="small"
                  weight="Regular"
                  color={theme["textBody-tertiary"]}
                >
                  {value}
                </LabelSmall>
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
              {[...Array(3)].map((_el, i) => (
                <View
                  key={`block-${i}`}
                  style={{
                    height: 32,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: IOColors[theme["appBackground-tertiary"]]
                  }}
                >
                  <LabelSmall
                    weight="Regular"
                    color={theme["textBody-tertiary"]}
                  >{`Block n.${i + 1}`}</LabelSmall>
                </View>
              ))}
              <View
                style={{
                  height: 72,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: IOColors[theme["appBackground-tertiary"]]
                }}
              >
                <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
                  Different height
                </LabelSmall>
              </View>
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
              {[...Array(3)].map((_el, i) => (
                <View
                  key={`block-${i}`}
                  style={{
                    width: 48,
                    height: 48,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: IOColors[theme["appBackground-tertiary"]]
                  }}
                >
                  <LabelSmall
                    weight="Regular"
                    color={theme["textBody-tertiary"]}
                  >{`${i + 1}`}</LabelSmall>
                </View>
              ))}
              <View
                style={{
                  flexGrow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: IOColors[theme["appBackground-tertiary"]]
                }}
              >
                <LabelSmall weight="Regular" color={theme["textBody-tertiary"]}>
                  Growing block
                </LabelSmall>
              </View>
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

      <ContentWrapper>
        <H3 color={theme["textHeading-default"]} style={{ marginBottom: 16 }}>
          Vertical
        </H3>

        <View style={{ flexDirection: "row", height: 100 }}>
          <VDivider />
        </View>
        <VSpacer size={48} />
      </ContentWrapper>
    </NoMarginScreen>
  );
};
