import { Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { AnswersControl } from "./AnswersControl";
import {
  TriviaAnswers,
  AnswersJustification,
} from "../../../generated/graphql";

interface TriviaAnswersControlProps {
  triviaId: number;
  answers: TriviaAnswers[];
  justifications: AnswersJustification[];
}

export const TriviaAnswersControl: React.FC<TriviaAnswersControlProps> = ({
  triviaId,
  answers,
  justifications,
}) => {
  const [toggleAnswers, setToggleAnswers] = useState(false);

  return (
    <VStack flexDir="column" spacing="8px">
      <Button
        onClick={() => setToggleAnswers(!toggleAnswers)}
        colorScheme="teal"
      >
        {toggleAnswers ? "Justificaciones" : "Respuestas"}
      </Button>

      {toggleAnswers ? (
        <AnswersControl
          type="justification"
          answers={answers}
          justifications={justifications}
          triviaId={triviaId}
          title="Lista de justificaciones"
        />
      ) : (
        <AnswersControl
          type="answer"
          answers={answers}
          justifications={justifications}
          triviaId={triviaId}
          title="Lista de respuestas"
        />
      )}
    </VStack>
  );
};
