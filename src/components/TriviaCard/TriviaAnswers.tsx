import {
  Flex,
  Box,
  Divider,
  Text,
  Heading,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  TriviaAnswers as ITriviaAnswers,
  AnswersJustification as ITriviaAnswersJustification,
} from "../../generated/graphql";
import { Tag } from "../Tag";

interface TriviaAnswersProps {
  answerType: "answers" | "justifications";
  answers: ITriviaAnswers[] | ITriviaAnswersJustification[];
  handleAnswerSelected: () => void;
}

export const TriviaAnswers: React.FC<TriviaAnswersProps> = ({
  answers,
  answerType,
  handleAnswerSelected,
}) => {
  const [activeAnswers, setActiveAnswers] = useState(false);
  return (
    <Box p={4}>
      <Flex w="100%" justify="center" align="center">
        <Tag
          tagDetail={
            answerType === "answers"
              ? "Seleccione una respuesta"
              : "Justifique la respuesta"
          }
        />
      </Flex>
      <Divider orientation="horizontal" my="8px" />
      <VStack
        align="start"
        spacing="8px"
        divider={<Divider borderColor="gray.200" />}
      >
        {!activeAnswers
          ? answers.map((answer) => {
              return (
                <Text
                  key={answer.id}
                  onClick={() => {
                    setActiveAnswers(true);
                    handleAnswerSelected();
                  }}
                  cursor="pointer"
                  p={2}
                  fontSize="14px"
                  fontFamily="primary"
                  fontWeight="bold"
                  border="1px"
                  borderColor="gray.300"
                  w="100%"
                  my={2}
                >
                  {answer.answer}
                </Text>
              );
            })
          : answers.map((answer) => {
              return (
                <Text
                  key={answer.id}
                  bg={answer.status === true ? "green.500" : "red.500"}
                  cursor="pointer"
                  p={2}
                  fontSize="14px"
                  fontFamily="primary"
                  fontWeight="bold"
                  color="gray.100"
                  border="1px"
                  borderColor="gray.300"
                  w="100%"
                  my={2}
                >
                  {answer.answer}
                </Text>
              );
            })}
      </VStack>
    </Box>
  );
};
