import Link from "next/link";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/userAuth";
import { Divider, Flex, Button, VStack, HStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { user, logout } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  return (
    <>
      <Flex
        p={4}
        direction={["column", "row"]}
        align="center"
        justify="flex-end"
        position={["relative", "sticky"]}
        w="100%"
      >
        {user ? (
          <Button
            leftIcon={<HamburgerIcon />}
            colorScheme="teal"
            onClick={() => setActive(!active)}
          >
            Menu
          </Button>
        ) : (
          <HStack spacing="8px" align="center">
            <Link href="/login" passHref>
              <Button colorScheme="teal">Iniciar sesion</Button>
            </Link>
            <Link href="/register" passHref>
              <Button colorScheme="teal">Registrarse</Button>
            </Link>
          </HStack>
        )}
      </Flex>
      {active ? (
        <VStack spacing="4px" align="center" p={4}>
          <Link href="/" passHref>
            <Button
              colorScheme="teal"
              width={["100%"]}
              onClick={() => setActive(!active)}
            >
              Inicio
            </Button>
          </Link>
          <Link href="/categories" passHref>
            <Button
              onClick={() => setActive(!active)}
              colorScheme="teal"
              width={["100%"]}
            >
              Ir a estudiar
            </Button>
          </Link>

          {
            // @ts-ignore
            user.role === "admin" && (
              <Link href="/admin" passHref>
                <Button
                  onClick={() => setActive(!active)}
                  colorScheme="green"
                  width={["100%"]}
                >
                  Panel de administración
                </Button>
              </Link>
            )
          }
          <Link href="/support" passHref>
            <Button
              onClick={() => setActive(!active)}
              colorScheme="red"
              width={["100%"]}
            >
              Reportar un error
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button
              onClick={() => {
                setActive(!active);
                logout();
              }}
              colorScheme="red"
              width={["100%"]}
            >
              Cerrar sesion
            </Button>
          </Link>
        </VStack>
      ) : (
        ""
      )}

      <Divider orientation="horizontal" my="10px" />
    </>
  );
};
