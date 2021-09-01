import { Flex } from "@chakra-ui/react";
import { Tag } from "../Tag";

interface TriviaHeaderInfoProps {
  exam: string;
  subject: string;
}

export const TriviaHeaderInfo: React.FC<TriviaHeaderInfoProps> = ({
  subject,
  exam,
}) => {
  return (
    <Flex w="100%" align="center" flexDir={["column", "row"]}>
      <Tag tagDetail={subject} />
      <Tag tagDetail={exam} />
    </Flex>
  );
};
