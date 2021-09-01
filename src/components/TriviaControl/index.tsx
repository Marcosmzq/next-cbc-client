import { VStack, Divider, Box, Flex, Button } from "@chakra-ui/react";
import { TriviaControlHeader } from "./TriviaControlHeader/TriviaControlHeader";
import { TriviaControlField } from "./TriviaControlField";
import { TriviaAnswersControl } from "./TriviaAnswersControl";
import { useFindTriviaByIdQuery } from "../../generated/graphql";
import { DeleteBtn } from "../DeleteBtn";
import { FindTriviaByIdQuery } from "../../generated/graphql";
interface TriviaControlProps {
  triviaId: number;
}

export const TriviaControl: React.FC<TriviaControlProps> = ({ triviaId }) => {
  const { data, loading, error, refetch } = useFindTriviaByIdQuery({
    variables: {
      id: triviaId,
    },
  });
  return (
    <>
      {data ? (
        <Box p={4}>
          <VStack
            flexDir="column"
            spacing="8px"
            divider={<Divider orientation="horizontal" />}
          >
            <Flex w="90%" justify="flex-end" align="center">
              {/* AnswerId = 0 por que en este caso se va a borrar una trivia y no es necesario saber esa id, es pasada como prop ya que typescript lo necesita. TODO: Hacer que la propiedad sea opcional, ya que lo mismo va a ocurrir cuando se quiera borrar una respuesta de la trivia. */}
              <Button onClick={() => refetch()} colorScheme="twitter">
                Refrescar
              </Button>
              <DeleteBtn
                type="trivia"
                triviaId={data.findOneTrivia.id}
                answerId={0}
              />
            </Flex>
            <TriviaControlHeader
              subject={data.findOneTrivia.subject}
              exam={data.findOneTrivia.exam}
              triviaId={data.findOneTrivia.id}
            />
            <TriviaControlField
              fieldTitle="Pregunta"
              fieldContent={data.findOneTrivia.question}
              triviaId={data.findOneTrivia.id}
              type="question"
            />
            <TriviaControlField
              fieldTitle="Explicacion correctiva de la pregunta"
              fieldContent={data.findOneTrivia.explanation}
              triviaId={data.findOneTrivia.id}
              type="explanation"
            />
            <TriviaControlField
              fieldTitle="Fuente"
              fieldContent={data.findOneTrivia.reference}
              triviaId={data.findOneTrivia.id}
              type="reference"
            />
            <TriviaAnswersControl
              answers={data.findOneTrivia.triviaAnswers}
              justifications={data.findOneTrivia.answersJustifications}
              triviaId={data.findOneTrivia.id}
            />
          </VStack>
        </Box>
      ) : (
        "Cargando..."
      )}
    </>
  );
};
