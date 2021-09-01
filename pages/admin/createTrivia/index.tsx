import type { NextPage } from "next";
import Head from "next/head";
import { CreateTriviaForm } from "../../../src/components/Forms/CreateTriviaForm";
import { useState } from "react";
import { TriviaControl } from "../../../src/components/TriviaControl";

const CreateTrivia: NextPage = () => {
  const [triviaId, setTriviaId] = useState(Number);

  return (
    <>
      <Head>
        <title>Crear ejercicio de trivia</title>
      </Head>
      {triviaId ? (
        <TriviaControl triviaId={triviaId} />
      ) : (
        <CreateTriviaForm setTriviaId={setTriviaId} />
      )}
    </>
  );
};

export default CreateTrivia;
