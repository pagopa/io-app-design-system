import {
  ContentWrapper,
  H1,
  H6,
  IOImage,
  VSpacer
} from "@pagopa/io-app-design-system";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ImageScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <VSpacer />
      <ContentWrapper>
        <H1>Image screen</H1>
      </ContentWrapper>
      <VSpacer />
      <IOImage
        imageProps={{
          source: {
            uri: "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
          }
        }}
        alt="Some alt text"
        aspectRatio="1:1"
      />
      <VSpacer />
      <ContentWrapper>
        <H6>{"This is a 16:9"}</H6>
        <VSpacer size={4} />
        <IOImage
          imageProps={{
            source: {
              uri: "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-16x9-1.png"
            }
          }}
          alt="Some alt text"
          aspectRatio="16:9"
        />
        <VSpacer size={16} />
        <H6>{"This is a 4:3"}</H6>
        <VSpacer size={4} />
        <IOImage
          imageProps={{
            source: {
              uri: "https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-4x3-1.png"
            }
          }}
          alt="Some alt text"
          aspectRatio="4:3"
        />
      </ContentWrapper>
    </ScrollView>
  </SafeAreaView>
);
