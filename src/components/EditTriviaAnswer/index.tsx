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
  VStack,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
  useUpdateTriviaAnswerMutation,
  useUpdateTriviaAnswerJustificationMutation,
} from "../../generated/graphql";

interface EditTriviaAnswerProps {
  triviaId: number;
  answerId: number;
  type: "answer" | "justification";
}

export const EditTriviaAnswer: React.FC<EditTriviaAnswerProps> = ({
  triviaId,
  answerId,
  type,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [values, setValues] = useState({
    status: "",
    answer: "",
  });
  const [updateTriviaAnswerMutation] = useUpdateTriviaAnswerMutation({
    variables: {
      answerId,
      triviaId,
      updatedAnswer: values.answer,
      updatedStatus: values.status === "true" ? true : false,
    },
  });
  const [updateTriviaAnswerJustificationMutation] =
    useUpdateTriviaAnswerJustificationMutation({
      variables: {
        answerId,
        triviaId,
        answer: values.answer,
        status: values.status === "true" ? true : false,
      },
    });
  const handleOnChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    if (type === "answer") {
      updateTriviaAnswerMutation();
    }
    if (type === "justification") {
      updateTriviaAnswerJustificationMutation();
    }
    onClose();
  };
  return (
    <>
      <IconButton
        colorScheme="green"
        aria-label="Edit"
        icon={<EditIcon />}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar respuesta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="8px">
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
            </VStack>
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
