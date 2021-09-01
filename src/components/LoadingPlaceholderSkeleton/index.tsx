import { Flex, Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

interface LoadingPlaceholderSkeletonProps {}

export const LoadingPlaceholderSkeleton: React.FC<LoadingPlaceholderSkeletonProps> =
  ({}) => {
    return (
      <Flex h="50vh" align="center" justify="center">
        <Box w="100%" padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </Flex>
    );
  };
