import { ButtonGroup } from "@chakra-ui/react";
import { DeleteBtn } from "../../DeleteBtn";
import { EditTriviaAnswer } from "../../EditTriviaAnswer";

interface AnswerBtnGroupProps {
  triviaId: number;
  answerId: number;
  type: "answer" | "justification";
}

export const AnswerBtnGroup: React.FC<AnswerBtnGroupProps> = ({
  triviaId,
  answerId,
  type,
}) => {
  return (
    <ButtonGroup variant="solid" spacing="4px">
      <EditTriviaAnswer type={type} triviaId={triviaId} answerId={answerId} />
      <DeleteBtn type={type} triviaId={triviaId} answerId={answerId} />
    </ButtonGroup>
  );
};
