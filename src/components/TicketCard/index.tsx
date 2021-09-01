import { Flex, VStack, Text, Heading } from "@chakra-ui/react";

interface TicketCardProps {
  id: number;
  active: boolean;
  title: string;
  message: string;
}

export const TicketCard: React.FC<TicketCardProps> = ({
  active,
  id,
  message,
  title,
}) => {
  return (
    <Flex flexDir="column" border="1px">
      <VStack spacing="8px">
        <Flex flexDir="column">
          <Text>Ticket id: {id} </Text>
          <Text>
            Estado:
            {active === true ? "ACTIVO" : active === false ? "NO ACTIVO" : ""}
          </Text>
        </Flex>
        <Text>Titulo: {title} </Text>
        <Text>Mensaje: {message} </Text>
      </VStack>
    </Flex>
  );
};
