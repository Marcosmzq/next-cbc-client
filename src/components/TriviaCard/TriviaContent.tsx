import { Flex, Text, Box } from "@chakra-ui/react";
import { Tag } from "../Tag";

interface TriviaContentProps {
  contentTitle: string;
  contentText: string;
}

export const TriviaContent: React.FC<TriviaContentProps> = ({
  contentTitle,
  contentText,
}) => {
  return (
    <Box>
      <Flex w="100%" justify="center" align="center">
        <Tag tagDetail={contentTitle} />
      </Flex>
      <Text fontWeight="black" fontFamily="primary" p={2} fontSize="16px">
        {contentText}
      </Text>
    </Box>
  );
};
