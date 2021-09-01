import { useRouter } from "next/router";
import { Flex, VStack, Button, Heading, Text, Divider } from "@chakra-ui/react";
import { ExamList } from "../../enums/examList";

interface SelectSubjectCardProps {
  subject: string;
}

export const SelectSubjectCard: React.FC<SelectSubjectCardProps> = ({
  subject,
}) => {
  const router = useRouter();
  const handleClick = (exam: string) => {
    router.push(`/study?subject=${subject}&&exam=${exam}`);
  };
  return (
    <>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        border="1px"
        borderColor="gray.200"
        p={4}
      >
        <VStack spacing="8px">
          <Heading
            as="h3"
            color="teal"
            fontFamily="primary"
            textAlign="center"
            fontSize="2xl"
            fontWeight="bold"
          >
            {subject}
          </Heading>
          <Text
            textAlign="center"
            fontFamily="primary"
            color="teal"
            fontSize="xl"
          >
            ¿Para que parcial de la materia queres estudiar?
          </Text>
          <Divider my={4} orientation="horizontal" />
          <Flex
            w="100%"
            justify="space-around"
            align="center"
            flexDir={["column", "row"]}
          >
            <Button
              m={2}
              w="100%"
              colorScheme="teal"
              onClick={() => handleClick(ExamList["Primer parcial"])}
            >
              Primer parcial
            </Button>
            <Button
              m={2}
              w="100%"
              colorScheme="teal"
              onClick={() => handleClick(ExamList["Segundo parcial"])}
            >
              Segundo parcial
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};
