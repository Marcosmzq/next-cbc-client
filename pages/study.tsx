import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { NetworkStatus } from "@apollo/client";
import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { TriviaCard } from "../src/components/TriviaCard";
import { LoadingPlaceholderSkeleton } from "../src/components/LoadingPlaceholderSkeleton";
import { useFindRandomTriviaBySubjectAndExamLazyQuery } from "../src/generated/graphql";

const Study: NextPage = () => {
  const router = useRouter();
  const [handleNextTrivia, setHandleNextTrivia] = useState(false);
  const [showAnswers, setShowAnswers] = useState(true);
  const [showJustifications, setShowJustifications] = useState(false);
  const [showFinalExplanation, setShowFinalExplanation] = useState(false);
  const [showToogleAnswersButton, setShowToogleAnswersButton] = useState(false);
  const { subject, exam } = router.query;
  const [getTrivia, { data, loading, refetch, networkStatus }] =
    useFindRandomTriviaBySubjectAndExamLazyQuery({
      variables: {
        //@ts-ignore
        exam,
        //@ts-ignore
        subject,
      },
      notifyOnNetworkStatusChange: true,
    });

  const handleToggleAnswers = () => {
    setShowAnswers(false);
    setShowToogleAnswersButton(false);
    if (showJustifications === false) {
      if (
        data &&
        data.findRandomTriviaBySubjectAndExam.answersJustifications.length > 1
      ) {
        setShowJustifications(true);
      } else {
        setShowFinalExplanation(true);
        setHandleNextTrivia(true);
      }
    }
    if (showJustifications === true) {
      setShowJustifications(false);
      setShowFinalExplanation(true);
      setHandleNextTrivia(true);
    }
  };

  const handleAnswerSelected = () => {
    setShowToogleAnswersButton(true);
  };

  useEffect(() => {
    if (subject && exam) {
      getTrivia();
    }
  }, [subject, exam, getTrivia]);
  return (
    <>
      <Head>
        <title>Estudiar</title>
      </Head>

      {data && !loading && (
        <TriviaCard
          showAnswers={showAnswers}
          showJustifications={showJustifications}
          showFinalExplanation={showFinalExplanation}
          showToogleAnswersButton={showToogleAnswersButton}
          handleToggleAnswers={handleToggleAnswers}
          handleAnswerSelected={handleAnswerSelected}
          trivia={data.findRandomTriviaBySubjectAndExam}
        />
      )}
      {loading && <LoadingPlaceholderSkeleton />}

      {handleNextTrivia && networkStatus !== NetworkStatus.refetch && (
        <Button
          w="100%"
          colorScheme="teal"
          onClick={async () => {
            if (refetch) await refetch();
            setShowAnswers(true);
            setShowJustifications(false);
            setShowFinalExplanation(false);
            setHandleNextTrivia(false);
          }}
        >
          Siguiente ejercicio
        </Button>
      )}
    </>
  );
};

export default Study;
