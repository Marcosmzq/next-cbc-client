import { Text } from "@chakra-ui/react";

interface TagProps {
  tagDetail: string;
}

export const Tag: React.FC<TagProps> = ({ tagDetail }) => {
  return (
    <Text
      bg="teal"
      color="white"
      m={2}
      p={3}
      rounded="full"
      textTransform="uppercase"
      fontSize="xs"
      fontWeight="bold"
    >
      {tagDetail}
    </Text>
  );
};
