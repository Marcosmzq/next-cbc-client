import { Flex, Button } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { ReportTrivia } from "../ReportTrivia";

interface TriviaHeaderBtnsProps {
  triviaId: number;
  triviaReference: string;
}

export const TriviaHeaderBtns: React.FC<TriviaHeaderBtnsProps> = ({
  triviaId,
  triviaReference,
}) => {
  return (
    <Flex
      w="100%"
      align="center"
      justify="space-around"
      flexDir={["column", "row"]}
    >
      <Button m={2} w="100%" colorScheme="teal" rightIcon={<InfoIcon />}>
        <a href={triviaReference} target="_blank" rel="noopener noreferrer">
          Fuente del ejercicio
        </a>
      </Button>
      <ReportTrivia triviaId={triviaId} />
    </Flex>
  );
};
