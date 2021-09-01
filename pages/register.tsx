import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Center, Box, Text, Heading, Flex } from "@chakra-ui/react";
import { RegisterForm } from "../src/components/Forms/RegisterForm";

const Register: NextPage = () => {
  return (
    <Box p={["4", "12"]}>
      <Head>
        <title>Crear una cuenta</title>
      </Head>
      <Flex px={8} mx="auto">
        <Box w="full" mx="auto">
          <Text
            mb={2}
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wide"
            color="text"
            textTransform="uppercase"
          >
            Para estudiantes.
          </Text>
          <Heading
            as="h1"
            mb={3}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            color="teal"
          >
            Concentrate en aprender.
          </Heading>
          <Text mb={5} color="text" fontSize={{ md: "lg" }}>
            Nosotros nos encargamos de reunir los examenes y armar los
            ejercicios para que vos solo tengas que ocuparte de estudiar. Crea
            una cuenta y descubri este nuevo enfoque para estudiar. Registrarse
            es seguro y gratuito.
          </Text>
        </Box>
      </Flex>
      <Flex flexDir={["column", "row"]} p={8}>
        <Center>
          <Image
            src="/images/secure_login.svg"
            alt="Mobile login"
            width="300px"
            height="400px"
          />
        </Center>

        <Box mx="auto" my="24px" width={["100%", "70%"]}>
          <RegisterForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default Register;
