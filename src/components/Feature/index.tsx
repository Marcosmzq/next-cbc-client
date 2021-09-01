import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

interface FeatureProps {
  imgSrc: string;
  imgAlt: string;
  featureTitle: string;
  featureText: string;
}

export const Feature: React.FC<FeatureProps> = ({
  imgSrc,
  imgAlt,
  featureTitle,
  featureText,
}) => {
  return (
    <Flex
      p={4}
      direction={["column", "row"]}
      align="center"
      justify="space-around"
    >
      <Image src={imgSrc} width="300px" height="175px" alt={imgAlt} />
      <Box width={["100%", "50%"]}>
        <Heading
          my={["16px", "8px"]}
          as="h1"
          color="primary"
          fontFamily="primary"
          fontSize="25px"
          textAlign={["center", "start"]}
        >
          {featureTitle}
        </Heading>
        <Text color="text" fontSize="16px">
          {featureText}
        </Text>
      </Box>
    </Flex>
  );
};
