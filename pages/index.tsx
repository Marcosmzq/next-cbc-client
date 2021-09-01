import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Feature } from "../src/components/Feature";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next CBC</title>
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
          >
            Todos los{" "}
            <Text
              display={{ base: "block", lg: "inline" }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, green.400,purple.500)"
              fontWeight="extrabold"
            >
              parciales de UBA XXI
            </Text>{" "}
            en un solo lugar.
          </Heading>
          <Text
            px={{ base: 0, lg: 24 }}
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            Next CBC es una plataforma en la que se encuentran los parciales de
            UBA XXI, usando esos parciales se crean ejercicios de trivia para
            que estudies de una forma más eficiente, rápida, dinámica y sin
            descargar nada.
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mb={{ base: 4, md: 8 }}
            spacing={2}
            justifyContent={{ sm: "left", md: "center" }}
          >
            <Link href="/register" passHref>
              <Button
                as="a"
                variant="solid"
                colorScheme="teal"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: "full", sm: "auto" }}
                mb={{ base: 2, sm: 0 }}
                size="lg"
                leftIcon={<ArrowForwardIcon />}
              >
                Empezar gratis
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
      <VStack spacing="16px">
        <Feature
          imgAlt="Study chilling"
          imgSrc="/images/chilling.svg"
          featureTitle="Relajate mientras aprendes"
          featureText="¿Tuviste un día ocupado y no te sentis con muchos animos de estudiar?, ahora podes aprender haciendo juegos de trivia mientras estas acostado."
        />
        <Feature
          imgAlt="Growth curve"
          imgSrc="/images/growth_curve.svg"
          featureTitle="Aprendé más en menos tiempo"
          featureText="Haciendo los ejercicios habituales de los parciales en forma de juego, vas a aprender más de una forma más divertida y dinámica. Asi en menos tiempo podes estudiar más cosas."
        />
        <Feature
          imgAlt="Selected options"
          imgSrc="/images/selected_options.svg"
          featureTitle="Ejercicios seleccionados"
          featureText="Los ejercicios que hagas en esta página son obtenidos de parciales que fueron tomados en UBA XXI."
        />
        <Feature
          imgAlt="Active support"
          imgSrc="/images/active_support.svg"
          featureTitle="Soporte activo"
          featureText="Si encontras un error, nececitas ayuda con algo o crees que un ejercicio está mal podés crear un ticket de soporte e intentaremos solucionar tus problemas lo antes posible."
        />
        <Feature
          imgAlt="New entries"
          imgSrc="/images/new_entries.svg"
          featureTitle="Más ejercicios"
          featureText="Este proyecto esta en su etapa inicial, vamos a estar subiendo más parciales y otro tipo de ejercicios ademas de las trivias proximamente."
        />
      </VStack>
    </div>
  );
};

export default Home;
