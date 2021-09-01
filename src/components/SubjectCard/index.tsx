import { Box, Heading, Button, Divider, Flex } from "@chakra-ui/react";

interface SubjectCardProps {
  subjectTitle: string;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subjectTitle }) => {
  return (
    <Flex p={4} flexDirection="column" border="1px" borderColor="primary">
      <Heading
        as="h3"
        color="primary"
        fontFamily="primary"
        fontSize="25px"
        textAlign="center"
        my="8px"
      >
        {subjectTitle}
      </Heading>
      <Divider orientation="horizontal" my="8px" />
      <Button colorScheme="teal">Primer cuatrimestre</Button>
      <Divider orientation="horizontal" my="8px" />
      <Button colorScheme="teal">Segundo cuatrimestre</Button>
    </Flex>
  );
};
