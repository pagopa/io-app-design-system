import {
  ContentWrapper,
  H3,
  ModuleCheckout,
  VStack,
  useIOTheme
} from "@pagopa/io-app-design-system";
import React from "react";
import { NoMarginScreen } from "../components/Screen";

export const SkeletonLegacy = () => {
  const theme = useIOTheme();

  return (
    <NoMarginScreen>
      <ContentWrapper>
        <H3 color={theme["textHeading-default"]} style={{ marginBottom: 16 }}>
          Skeleton (legacy)
        </H3>
      </ContentWrapper>

      <ContentWrapper>
        <VStack space={16}>
          {[...Array(20)].map((_el, i) => (
            <ModuleCheckout key={`skeleton-legacy-${i}`} isLoading />
          ))}
        </VStack>
      </ContentWrapper>
    </NoMarginScreen>
  );
};
