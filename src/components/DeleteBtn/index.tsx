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
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  useDeleteTriviaAnswerMutation,
  useDeleteTriviaMutation,
  useDeleteTriviaAnswerJustificationMutation,
} from "../../generated/graphql";

interface DeleteBtnProps {
  type: "trivia" | "answer" | "justification";
  triviaId: number;
  answerId: number;
}

export const DeleteBtn: React.FC<DeleteBtnProps> = ({
  type,
  triviaId,
  answerId,
}) => {
  //TODO: Añadir alerta de exito o de fracaso según el resultado de la operacion.
  const [deleteTrivia] = useDeleteTriviaMutation({
    variables: {
      id: triviaId,
    },
  });
  const [deleteTriviaAnswer] = useDeleteTriviaAnswerMutation({
    variables: {
      id: answerId,
    },
  });
  const [deleteTriviaAnswerJustification] =
    useDeleteTriviaAnswerJustificationMutation({
      variables: {
        id: answerId,
      },
    });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    if (type === "trivia") {
      deleteTrivia();
    }
    if (type === "answer") {
      deleteTriviaAnswer();
    }
    if (type === "justification") {
      deleteTriviaAnswerJustification();
    }
    onClose();
  };
  return (
    <>
      <IconButton
        onClick={onOpen}
        colorScheme="red"
        aria-label="Delete"
        icon={<DeleteIcon />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmacion de borrado</ModalHeader>
          <ModalCloseButton />
          <ModalBody>¿Estás seguro que queres borrar este elemento?</ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleDelete}>
              Borrar
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
