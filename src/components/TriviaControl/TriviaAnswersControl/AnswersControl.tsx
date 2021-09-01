import { VStack, Heading, Flex, Box, Divider } from "@chakra-ui/react";
import { CreateAnswerBtn } from "../../CreateAnswerBtn";
import {
  TriviaAnswers,
  AnswersJustification,
} from "../../../generated/graphql";
import { Answer } from "./Answer";

interface AnswersControlProps {
  title: string;
  triviaId: number;
  type: "answer" | "justification";
  answers: TriviaAnswers[];
  justifications: AnswersJustification[];
}

export const AnswersControl: React.FC<AnswersControlProps> = ({
  title,
  triviaId,
  type,
  answers,
  justifications,
}) => {
  return (
    <Box width="100%">
      <Flex align="center" justify="space-between">
        <Heading fontFamily="primary" color="teal" fontSize="2xl">
          {title}
        </Heading>
        <CreateAnswerBtn triviaId={triviaId} />
      </Flex>
      <VStack spacing="8px" divider={<Divider orientation="horizontal" />}>
        {type === "answer"
          ? answers.map((answer) => {
              return (
                <Answer
                  type="answer"
                  triviaId={triviaId}
                  answerStatus={answer.status}
                  answerText={answer.answer}
                  answerId={answer.id}
                  key={answer.id}
                />
              );
            })
          : justifications.map((justification) => {
              return (
                <Answer
                  type="justification"
                  triviaId={triviaId}
                  answerStatus={justification.status}
                  answerText={justification.answer}
                  answerId={justification.id}
                  key={justification.id}
                />
              );
            })}
      </VStack>
    </Box>
  );
};
