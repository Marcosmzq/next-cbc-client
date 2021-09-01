import { Box, VStack, Button, Textarea } from "@chakra-ui/react";
import { FormItem } from "../FormItem";
import {
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { AuthContext } from "../../../context/userAuth";
import { useCreateTicketMutation } from "../../../generated/graphql";

interface SupportFormProps {
  setSuccessfullyCreated: Dispatch<SetStateAction<boolean>>;
  setNotSuccessfullyCreated: Dispatch<SetStateAction<boolean>>;
}

export const SupportForm: React.FC<SupportFormProps> = ({
  setSuccessfullyCreated,
  setNotSuccessfullyCreated,
}) => {
  const { user } = useContext(AuthContext);
  const [values, setValues] = useState({
    title: "",
    message: "",
  });
  const [userId, setUserId] = useState(Number);
  const [createTicketMutation, { data, loading, error }] =
    useCreateTicketMutation({
      variables: {
        userId,
        message: values.message,
        title: values.title,
      },
      onCompleted(data) {
        if (data) {
          setSuccessfullyCreated(true);
        }
      },
      onError(err) {
        setNotSuccessfullyCreated(true);
      },
    });
  const handleOnChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValues({
      title: "",
      message: "",
    });
    createTicketMutation();
  };

  useEffect(() => {
    if (user !== null) {
      // @ts-ignore
      setUserId(user.id);
    }
  }, [user]);
  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <VStack spacing="8px">
          <FormItem
            formControlId="title"
            inputType="text"
            handleOnChange={handleOnChange}
            formLabel="Titulo del reporte"
            value={values.title}
          />
          <Textarea
            isRequired
            value={values.message}
            onChange={handleOnChange}
            placeholder="¿Qué ha ocurrido?"
            name="message"
          />
          <Button
            variant="solid"
            colorScheme="teal"
            width="100%"
            isLoading={loading}
            type="submit"
          >
            Enviar reporte
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
