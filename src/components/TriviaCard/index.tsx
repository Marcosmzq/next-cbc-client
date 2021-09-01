import { VStack, Button, StackDivider } from "@chakra-ui/react";
import { Trivia } from "../../generated/graphql";
import { TriviaContent } from "./TriviaContent";
import { TriviaAnswers } from "./TriviaAnswers";
import { TriviaHeaderBtns } from "./TriviaHeaderBtns";
import { TriviaHeaderInfo } from "./TriviaHeaderInfo";

interface TriviaCardProps {
  trivia: Trivia;
  handleToggleAnswers: () => void;
  handleAnswerSelected: () => void;
  showAnswers: boolean;
  showJustifications: boolean;
  showFinalExplanation: boolean;
  showToogleAnswersButton: boolean;
}

export const TriviaCard: React.FC<TriviaCardProps> = ({
  trivia,
  handleToggleAnswers,
  handleAnswerSelected,
  showAnswers,
  showJustifications,
  showFinalExplanation,
  showToogleAnswersButton,
}) => {
  return (
    <VStack
      flexDirection="column"
      p={4}
      border="1px"
      borderColor="primary"
      my="14px"
      spacing="8px"
      divider={<StackDivider />}
    >
      <TriviaHeaderBtns
        triviaReference={trivia.reference}
        triviaId={trivia.id}
      />
      <TriviaHeaderInfo subject={trivia.subject} exam={trivia.exam} />
      {!showFinalExplanation ? (
        <TriviaContent contentTitle="Enunciado" contentText={trivia.question} />
      ) : (
        <TriviaContent
          contentTitle="Explicacion final"
          contentText={trivia.explanation}
        />
      )}
      {showAnswers ? (
        <TriviaAnswers
          handleAnswerSelected={handleAnswerSelected}
          answerType="answers"
          answers={trivia.triviaAnswers}
        />
      ) : (
        ""
      )}
      {showJustifications ? (
        <TriviaAnswers
          handleAnswerSelected={handleAnswerSelected}
          answerType="justifications"
          answers={trivia.answersJustifications}
        />
      ) : (
        ""
      )}
      {showToogleAnswersButton ? (
        <Button onClick={handleToggleAnswers} colorScheme="teal" width="100%">
          Continuar
        </Button>
      ) : (
        ""
      )}
    </VStack>
  );
};
