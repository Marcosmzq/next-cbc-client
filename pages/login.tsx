import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LoginForm } from "../src/components/Forms/LoginForm";
import { Center, Box, Heading, Text, Flex } from "@chakra-ui/react";

const Login: NextPage = () => {
  return (
    <Box p={["4", "12"]}>
      <Head>
        <title>Iniciar sesion</title>
      </Head>
      <Box p={8}>
        <Heading
          as="h1"
          mb={4}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight={{ base: "shorter", md: "none" }}
          color="teal"
          letterSpacing={{ base: "normal", md: "tight" }}
          textAlign="center"
        >
          ¿Listo para empezar a estudiar?
        </Heading>
        <Text
          color="text"
          mb={{ base: 10, md: 4 }}
          fontSize={{ base: "lg", md: "xl" }}
        >
          Inicia sesion y comenza a jugar y divertirte mientras vas estudiando.
          Tenemos variedad de materias y proximamente estaremos agregando más.
          Esperamos que te guste esta nueva herramienta y disfrutes tu estadia
          aca.
        </Text>
      </Box>

      <Flex flexDir={["column", "row"]} p={8}>
        <Center>
          <Image
            src="/images/mobile_login.svg"
            alt="Mobile login"
            width="300px"
            height="200px"
          />
        </Center>

        <Box mx="auto" my="24px" width={["100%", "75%"]}>
          <LoginForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
