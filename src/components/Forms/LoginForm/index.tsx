import { Box, Button, VStack } from "@chakra-ui/react";
import { FormItem } from "../FormItem";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/userAuth";
import { DisplayErrors } from "../../DisplayErrors";
import { useLoginMutation } from "../../../generated/graphql";

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const { user, login } = useContext(AuthContext);
  const router = useRouter();
  const [errors, setErrors] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [loginMutation, { data, loading, error }] = useLoginMutation({
    variables: values,
    onCompleted(data) {
      if (data) {
        const token = data.loginUser;
        login(token);
        router.push("/categories");
      }
    },
    onError(err) {
      setErrors(err?.graphQLErrors[0]?.extensions?.errors);
    },
  });

  const handleOnChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    loginMutation();
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
            formControlId="password"
            inputType="password"
            formLabel="Contraseña"
            handleOnChange={handleOnChange}
            value={values.password}
          />
          <Button
            variant="solid"
            colorScheme="teal"
            width="100%"
            isLoading={loading}
            type="submit"
          >
            Iniciar sesion
          </Button>
          {errors && Object.keys(errors).length > 0 && (
            <DisplayErrors errors={errors} />
          )}
        </VStack>
      </form>
    </Box>
  );
};
