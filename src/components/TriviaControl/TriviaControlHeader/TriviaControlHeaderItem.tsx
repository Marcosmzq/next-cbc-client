import { HStack, Text } from "@chakra-ui/react";
import { EditTrivia } from "../../EditTrivia";

interface TriviaControlHeaderItemProps {
  itemName: string;
  itemContent: string;
  itemType: "Subject" | "Exam";
  modalTitle: string;
  triviaId: number;
}

export const TriviaControlHeaderItem: React.FC<TriviaControlHeaderItemProps> =
  ({ itemName, itemContent, itemType, modalTitle, triviaId }) => {
    return (
      <HStack flexDir="row" spacing="8px" justify="space-between">
        <Text color="teal" fontFamily="primary" fontWeight="bold">
          {itemName}: <Text>{itemContent}</Text>
        </Text>
        <EditTrivia
          triviaId={triviaId}
          type={itemType}
          modalTitle={modalTitle}
        />
      </HStack>
    );
  };
