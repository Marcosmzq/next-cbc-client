import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { useCreateTicketMutation } from "../../generated/graphql";
import { AuthContext } from "../../context/userAuth";
import { useState, useContext } from "react";

interface ReportTriviaProps {
  triviaId: number;
}

export const ReportTrivia: React.FC<ReportTriviaProps> = ({ triviaId }) => {
  const { user } = useContext(AuthContext);
  const [reportMessage, setReportMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [reportTrivia, { data, loading }] = useCreateTicketMutation({
    variables: {
      message: reportMessage,
      title: `Se ha reportado un erro en el ejercico de trivia con id ${triviaId}`,
      // @ts-ignore
      userId: user.id,
    },
  });

  return (
    <>
      <Button
        w="100%"
        m={2}
        colorScheme="red"
        onClick={onOpen}
        rightIcon={<WarningTwoIcon />}
      >
        Reportar ejercicio
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reportar trivia</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              name="message"
              value={reportMessage}
              onChange={(e) => setReportMessage(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loading}
              colorScheme="red"
              mr={3}
              onClick={async () => {
                await reportTrivia();
                onClose();
              }}
              rightIcon={<WarningTwoIcon />}
            >
              Reportar
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
