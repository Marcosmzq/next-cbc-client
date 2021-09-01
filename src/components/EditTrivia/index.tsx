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
import { EditIcon } from "@chakra-ui/icons";
import { SubjectList } from "../../enums/subjectList";
import { useState } from "react";
import { ExamList } from "../../enums/examList";
import { useUpdateTriviaMutation } from "../../generated/graphql";

interface EditTriviaProps {
  modalTitle: string;
  type: "Subject" | "Exam" | "question" | "explanation" | "reference";
  triviaId: number;
}

export const EditTrivia: React.FC<EditTriviaProps> = ({
  modalTitle,
  type,
  triviaId,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [values, setValues] = useState({
    subject: "",
    exam: "",
    question: "",
    explanation: "",
    reference: "",
  });
  const [updateTriviaMutation, { data, loading, error }] =
    useUpdateTriviaMutation({
      variables: {
        id: triviaId,
        exam: values.exam,
        subject: values.subject,
        question: values.question,
        explanation: values.explanation,
        reference: values.reference,
      },
    });

  const handleOnChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    await updateTriviaMutation();
    onClose();
  };
  return (
    <>
      <IconButton
        onClick={onOpen}
        colorScheme="green"
        aria-label="Edit"
        icon={<EditIcon />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {type === "Subject" && (
              <Select
                name="subject"
                placeholder="Seleccionar una materia"
                onChange={handleOnChange}
              >
                <option>{SubjectList.ICSE}</option>
                <option>{SubjectList.IPC}</option>
              </Select>
            )}
            {type === "Exam" && (
              <Select
                name="exam"
                placeholder="Seleccionar a que parcial pertenece"
                onChange={handleOnChange}
              >
                <option value={ExamList["Primer parcial"]}>
                  Primer parcial
                </option>
                <option value={ExamList["Segundo parcial"]}>
                  Segundo parcial
                </option>
              </Select>
            )}
            {type !== "Exam" && type !== "Subject" && (
              <Textarea
                placeholder={`Escribi una nueva ${type}`}
                name={type}
                onChange={handleOnChange}
              />
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loading}
              colorScheme="green"
              mr={3}
              onClick={handleSubmit}
            >
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
