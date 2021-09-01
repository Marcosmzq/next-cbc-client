import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  useDisclosure,
  Button,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
  useCreateTriviaAnswerMutation,
  useCreateTriviaAnswerJustificationMutation,
} from "../../generated/graphql";

interface CreateAnswerBtnProps {
  triviaId: number;
}

export const CreateAnswerBtn: React.FC<CreateAnswerBtnProps> = ({
  triviaId,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [values, setValues] = useState({
    type: "",
    status: "",
    answer: "",
  });

  const handleOnChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const [createTriviaAnswerMutation] = useCreateTriviaAnswerMutation({
    variables: {
      triviaId,
      answer: values.answer,
      status: values.status === "true" ? true : false,
    },
  });
  const [createTriviaAnswerJustificationMutation] =
    useCreateTriviaAnswerJustificationMutation({
      variables: {
        triviaId,
        answer: values.answer,
        status: values.status === "true" ? true : false,
      },
    });
  const handleSubmit = async (e: any) => {
    if (values.type === "answer") {
      await createTriviaAnswerMutation();
      onClose();
    }
    if (values.type === "justification") {
      await createTriviaAnswerJustificationMutation();
      onClose();
    }
  };
  return (
    <>
      <Button colorScheme="green" rightIcon={<AddIcon />} onClick={onOpen}>
        Crear nueva respuesta
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear nueva respuesta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select
              name="type"
              placeholder="Seleccionar un tipo"
              onChange={handleOnChange}
            >
              <option value="answer">Respuesta</option>
              <option value="justification">Justificacion</option>
            </Select>
            <Select
              name="status"
              placeholder="Seleccionar si la respuesta es verdadera o es falsa"
              onChange={handleOnChange}
            >
              <option value="true">Verdadera</option>
              <option value="false">Falsa</option>
            </Select>
            <Textarea
              placeholder="Escribi el cuerpo respuesta"
              name="answer"
              onChange={handleOnChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={handleSubmit}>
              Guardar cambios
            </Button>
            <Button onClick={onClose} colorScheme="red">
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
