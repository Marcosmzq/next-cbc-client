import type { NextPage } from "next";
import Head from "next/head";
import { Flex, VStack, Heading, Divider } from "@chakra-ui/react";
import { SelectSubjectCard } from "../src/components/SelectSubjectCard";
import { SubjectList } from "../src/enums/subjectList";

const Categories: NextPage = () => {
  return (
    <>
      <Head>
        <title>Categorias</title>
      </Head>

      <Flex flexDir="column" p={8} align="center" justify="center">
        <Heading
          as="h1"
          color="teal"
          fontFamily="primary"
          textAlign="center"
          fontSize="3xl"
          fontWeight="bold"
        >
          Selecciona sobre que queres estudiar
        </Heading>
        <Divider my={8} orientation="horizontal" />
        <VStack spacing="8px">
          <SelectSubjectCard subject={SubjectList.ICSE} />
        </VStack>
      </Flex>
    </>
  );
};

export default Categories;
