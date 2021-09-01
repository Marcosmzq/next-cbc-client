import { VStack, Stack, Text } from "@chakra-ui/react";
import { AnswerBtnGroup } from "./AnswerBtnGroup";

interface AnswerProps {
  answerStatus: boolean;
  answerText: string;
  answerId: number;
  triviaId: number;
  type: "answer" | "justification";
}

export const Answer: React.FC<AnswerProps> = ({
  answerStatus,
  answerText,
  answerId,
  triviaId,
  type,
}) => {
  return (
    <VStack flexDir="column" spacing="8px">
      <Stack
        w="90%"
        justify="space-between"
        flexDir={["column", "row"]}
        spacing="6px"
      >
        <Text color="teal" fontFamily="primary" fontWeight="bold">
          La respuesta es:{" "}
          <Text color="red">{answerStatus === true ? "TRUE" : "FALSE"}</Text>
        </Text>
        <AnswerBtnGroup type={type} answerId={answerId} triviaId={triviaId} />
      </Stack>
      <Text>{answerText}</Text>
    </VStack>
  );
};
