import { Text, Flex, VStack } from "@chakra-ui/react";
import { EditTrivia } from "../../EditTrivia";

interface TriviaControlFieldProps {
  fieldTitle: string;
  fieldContent: string;
  triviaId: number;
  type: "question" | "explanation" | "reference";
}

export const TriviaControlField: React.FC<TriviaControlFieldProps> = ({
  fieldTitle,
  fieldContent,
  triviaId,
  type,
}) => {
  return (
    <VStack flexDir="column" spacing="8px">
      <Flex align="center" justify="space-between" w="90%">
        <Text
          textAlign="center"
          color="teal"
          fontFamily="primary"
          fontWeight="bold"
        >
          {fieldTitle}
        </Text>
        <EditTrivia
          triviaId={triviaId}
          modalTitle={`Editar ${fieldTitle}`}
          type={type}
        />
      </Flex>
      <Text>{fieldContent}</Text>
    </VStack>
  );
};
