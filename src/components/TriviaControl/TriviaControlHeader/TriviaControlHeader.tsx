import { Stack } from "@chakra-ui/react";
import { TriviaControlHeaderItem } from "./TriviaControlHeaderItem";

interface TriviaControlHeaderProps {
  subject: string;
  exam: string;
  triviaId: number;
}

export const TriviaControlHeader: React.FC<TriviaControlHeaderProps> = ({
  subject,
  exam,
  triviaId,
}) => {
  return (
    <Stack
      w="100%"
      justify="space-between"
      flexDir={["column", "row"]}
      spacing="6px"
    >
      <TriviaControlHeaderItem
        modalTitle="Editar la materia a la que pertenece"
        itemName="Materia"
        itemContent={subject}
        itemType="Subject"
        triviaId={triviaId}
      />
      <TriviaControlHeaderItem
        modalTitle="Editar parcial al que pertenece"
        itemType="Exam"
        itemName="Parcial"
        itemContent={exam}
        triviaId={triviaId}
      />
    </Stack>
  );
};
