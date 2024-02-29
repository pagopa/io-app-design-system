import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import {
  H1,
  H6,
  IOImage,
  IOStyles,
  VSpacer
} from "@pagopa/io-app-design-system";

export const ImageScreen = () => (
  <SafeAreaView style={IOStyles.flex}>
    <ScrollView style={IOStyles.flex}>
      <VSpacer />
      <View style={IOStyles.horizontalContentPadding}>
        <H1>Image screen</H1>
      </View>
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
      <View style={IOStyles.horizontalContentPadding}>
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
      </View>
    </ScrollView>
  </SafeAreaView>
);
