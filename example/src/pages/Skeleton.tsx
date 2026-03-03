import {
  ContentWrapper,
  H3,
  HStack,
  IOColors,
  IOModuleIDPVSpacing,
  IOSkeleton,
  VStack,
  useIOTheme
} from "@pagopa/io-app-design-system";
import { FlatList, View } from "react-native";
import { NoMarginScreen } from "../components/Screen";

export const Skeleton = () => {
  const theme = useIOTheme();

  const skeletonItems = Array.from({ length: 20 }, (_, i) => ({
    id: `skeleton-${i}`
  }));

  const renderSkeletonItem = ({ item }: { item: { id: string } }) => (
    <View
      key={item.id}
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
          <IOSkeleton shape="rectangle" width={170} height={20} radius={8} />
          <IOSkeleton
            testID="skeleton-rectangle-2"
            shape="rectangle"
            width={110}
            height={16}
            radius={8}
          />
        </VStack>
      </HStack>
      <IOSkeleton shape="rectangle" width={64} height={16} radius={8} />
    </View>
  );

  return (
    <NoMarginScreen>
      <ContentWrapper>
        <H3 color={theme["textHeading-default"]} style={{ marginBottom: 16 }}>
          IOSkeleton
        </H3>
      </ContentWrapper>

      <ContentWrapper>
        <FlatList
          scrollEnabled={false}
          data={skeletonItems}
          renderItem={renderSkeletonItem}
          keyExtractor={item => item.id}
        />

        {/* Custom color */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: IOModuleIDPVSpacing
          }}
        >
          <HStack space={8} style={{ alignItems: "center" }}>
            <IOSkeleton
              shape="square"
              size={24}
              radius={8}
              color={IOColors["blueIO-150"]}
            />
            <VStack space={8}>
              <IOSkeleton
                color={IOColors["blueIO-150"]}
                shape="rectangle"
                width={170}
                height={20}
                radius={8}
              />
              <IOSkeleton
                color={IOColors["blueIO-150"]}
                shape="rectangle"
                width={110}
                height={16}
                radius={8}
              />
            </VStack>
          </HStack>
          <IOSkeleton
            shape="rectangle"
            width={64}
            height={16}
            radius={8}
            color={IOColors["blueIO-150"]}
          />
        </View>
      </ContentWrapper>
    </NoMarginScreen>
  );
};
