import { Box, Button, VStack } from "@chakra-ui/react";
import { FormItem } from "../FormItem";
import { useState, useContext } from "react";
import { useRegisterMutation } from "../../../generated/graphql";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/userAuth";
import { DisplayErrors } from "../../DisplayErrors";

interface RegisterFormProps {}

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const { user, login } = useContext(AuthContext);
  const router = useRouter();
  const [errors, setErrors] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleOnChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [registerMutation, { data, loading, error }] = useRegisterMutation({
    variables: values,
    onCompleted(data) {
      if (data) {
        const token = data.createUser;
        login(token);
        router.push("/categories");
      }
    },
    onError(err) {
      setErrors(err?.graphQLErrors[0]?.extensions?.errors);
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    registerMutation();
  };
  if (data || user) {
    router.push("/categories");
  }
  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <VStack spacing="8px">
          <FormItem
            formControlId="username"
            inputType="text"
            handleOnChange={handleOnChange}
            formLabel="Nombre de usuario"
            value={values.username}
          />
          <FormItem
            formControlId="email"
            inputType="email"
            handleOnChange={handleOnChange}
            formLabel="Correo electrónico"
            value={values.email}
          />
          <FormItem
            formControlId="password"
            inputType="password"
            formLabel="Contraseña"
            handleOnChange={handleOnChange}
            value={values.password}
          />
          <FormItem
            formControlId="confirmPassword"
            inputType="password"
            handleOnChange={handleOnChange}
            formLabel="Confirmar contraseña"
            value={values.confirmPassword}
          />
          <Button
            variant="solid"
            type="submit"
            colorScheme="teal"
            width="100%"
            isLoading={loading}
          >
            Registrarse
          </Button>
          {errors && Object.keys(errors).length > 0 && (
            <DisplayErrors errors={errors} />
          )}
        </VStack>
      </form>
    </Box>
  );
};
