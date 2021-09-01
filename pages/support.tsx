import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Text,
  Heading,
  Button,
  Box,
  Flex,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { SupportForm } from "../src/components/Forms/SupportForm";

const Support: NextPage = () => {
  const [successfullyCreated, setSuccessfullyCreated] = useState(false);
  const [notSuccessfullyCreated, setNotSuccessfullyCreated] = useState(false);

  return (
    <div>
      <Head>
        <title>Soporte</title>
      </Head>
      <Box px={8} py={24} mx="auto">
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          textAlign={{ base: "left", md: "center" }}
        >
          <Heading
            as="h1"
            mb={6}
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{ base: "normal", md: "tight" }}
            color={useColorModeValue("gray.900", "gray.100")}
            fontFamily="primary"
          >
            Estamos para{" "}
            <Text
              display={{ base: "block", lg: "inline" }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
              fontFamily="primary"
            >
              solucionar tus problemas,
            </Text>{" "}
            contanos que falló.
          </Heading>
          <Text
            px={{ base: 0, lg: 24 }}
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.600", "gray.300")}
            fontFamily="primary"
          >
            Completa el formulario de abajo detallando cual fue el error que
            encontraste, vamos a intentar contestar y solucionar tus problemas a
            la brevedad.
          </Text>
        </Box>
        <Box
          w={{ base: "full", md: 10 / 12 }}
          mx="auto"
          mt={20}
          textAlign="center"
        >
          <Flex
            align="center"
            justify="space-between"
            flexDir={["column", "row"]}
          >
            <Image
              width="300px"
              height="200px"
              src="/images/QA_engineers.svg"
              alt="Tell us your problem"
            />
            <Box mx="auto" my="24px" width={["100%", "75%"]}>
              <SupportForm
                setSuccessfullyCreated={setSuccessfullyCreated}
                setNotSuccessfullyCreated={setNotSuccessfullyCreated}
              />
            </Box>
          </Flex>
          {notSuccessfullyCreated ? (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>No se ha enviado el reporte</AlertTitle>
              <AlertDescription>
                Asegurate de llenar los campos y estar logeado antes de
                enviarlo.
              </AlertDescription>
              <CloseButton
                onClick={() => setNotSuccessfullyCreated(false)}
                position="absolute"
                right="8px"
                top="8px"
              />
            </Alert>
          ) : (
            ""
          )}
          {successfullyCreated ? (
            <>
              <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                minHeight="230px"
                rounded="md"
                shadow="2xl"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle fontFamily="primary" mt={4} mb={1} fontSize="lg">
                  Reporte enviado!
                </AlertTitle>
                <AlertDescription maxWidth="sm" fontFamily="primary">
                  Gracias por enviarnos el reporte y ayudarnos a mejorar tu
                  experiencia de usuario. Intentaremos solucionarlo y
                  responderte a la brevedad.
                </AlertDescription>
              </Alert>
              <Link href="/" passHref>
                <Button my="8px" w="100%" colorScheme="teal">
                  Volver al inicio
                </Button>
              </Link>
            </>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Support;
