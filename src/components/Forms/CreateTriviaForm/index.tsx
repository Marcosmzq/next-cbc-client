import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { FormItem } from "../FormItem";
import { useState, useContext, SetStateAction, Dispatch } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/userAuth";
import { SubjectList } from "../../../enums/subjectList";
import { ExamList } from "../../../enums/examList";
import { useCreateTriviaMutation } from "../../../generated/graphql";

interface CreateTriviaFormProps {
  setTriviaId: Dispatch<SetStateAction<number>>;
}

export const CreateTriviaForm: React.FC<CreateTriviaFormProps> = ({
  setTriviaId,
}) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [values, setValues] = useState({
    subject: "",
    exam: "",
    question: "",
    explanation: "",
    reference: "",
  });
  const [createTriviaMutation, { data, loading, error }] =
    useCreateTriviaMutation({
      variables: values,
      onError(err) {
        console.log(err);
      },
      onCompleted(data) {
        if (data) {
          const triviaId = data.createTrivia.id;
          setTriviaId(triviaId);
        }
      },
    });

  const handleOnChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTriviaMutation();
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <VStack spacing="8px">
          <FormControl id="subject">
            <FormLabel>Seleccionar una materia</FormLabel>
            <Select
              name="subject"
              placeholder="Seleccionar una materia"
              onChange={handleOnChange}
            >
              <option>{SubjectList.ICSE}</option>
            </Select>
          </FormControl>
          <FormControl id="exam">
            <FormLabel>Seleccionar a que parcial pertenece</FormLabel>
            <Select
              name="exam"
              placeholder="Seleccionar a que parcial pertenece"
              onChange={handleOnChange}
            >
              <option value={ExamList["Primer parcial"]}>Primer parcial</option>
              <option value={ExamList["Segundo parcial"]}>
                Segundo parcial
              </option>
            </Select>
          </FormControl>

          <FormItem
            formControlId="question"
            inputType="text"
            handleOnChange={handleOnChange}
            formLabel="Pregunta de la trivia"
            value={values.question}
          />
          <FormItem
            formControlId="explanation"
            inputType="text"
            formLabel="Explicacion del ejercicio"
            handleOnChange={handleOnChange}
            value={values.explanation}
          />
          <FormItem
            formControlId="reference"
            inputType="text"
            formLabel="Fuente de donde se ha obtenido el ejercicio"
            handleOnChange={handleOnChange}
            value={values.reference}
          />
          <Button
            variant="solid"
            colorScheme="teal"
            width="100%"
            isLoading={loading}
            type="submit"
          >
            Crear trivia
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
