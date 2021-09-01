import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AnswersJustification = {
  __typename?: 'AnswersJustification';
  id: Scalars['Float'];
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
  status: Scalars['Boolean'];
  answer: Scalars['String'];
};

export type CreateTicketInput = {
  userId: Scalars['Int'];
  title: Scalars['String'];
  message: Scalars['String'];
};

export type CreateTriviaAnswerInput = {
  triviaId: Scalars['Int'];
  answer: Scalars['String'];
  status: Scalars['Boolean'];
};

export type CreateTriviaInput = {
  exam: Scalars['String'];
  subject: Scalars['String'];
  question: Scalars['String'];
  explanation: Scalars['String'];
  reference: Scalars['String'];
};

export type CreateUserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: Scalars['String'];
  deleteUser: Scalars['String'];
  loginUser: Scalars['String'];
  createTrivia: Trivia;
  updateTrivia: Trivia;
  removeTrivia: Scalars['Boolean'];
  createTriviaAnswer: TriviaAnswers;
  updateTriviaAnswer: TriviaAnswers;
  removeTriviaAnswer: Scalars['Boolean'];
  createTriviaAnswerJustification: AnswersJustification;
  updateTriviaAnswerJustification: AnswersJustification;
  removeTriviaAnswerJustification: Scalars['Boolean'];
  createTicket: Ticket;
  toggleTikectStatus: Ticket;
  ticketResponse: Ticket;
  removeTicket: Scalars['String'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateTriviaArgs = {
  createTriviaInput: CreateTriviaInput;
};


export type MutationUpdateTriviaArgs = {
  updateTriviaInput: UpdateTriviaInput;
};


export type MutationRemoveTriviaArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTriviaAnswerArgs = {
  createTriviaAnswerInput: CreateTriviaAnswerInput;
};


export type MutationUpdateTriviaAnswerArgs = {
  updateTriviaAnswerInput: UpdateTriviaAnswerInput;
};


export type MutationRemoveTriviaAnswerArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTriviaAnswerJustificationArgs = {
  createTriviaAnswerJustificationInput: CreateTriviaAnswerInput;
};


export type MutationUpdateTriviaAnswerJustificationArgs = {
  updateTriviaAnswerJustificationInput: UpdateTriviaAnswerInput;
};


export type MutationRemoveTriviaAnswerJustificationArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTicketArgs = {
  createTicketInput: CreateTicketInput;
};


export type MutationToggleTikectStatusArgs = {
  id: Scalars['Int'];
};


export type MutationTicketResponseArgs = {
  responseMessage: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationRemoveTicketArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  findAllUsers: Array<User>;
  findUserById: User;
  findAllTrivias: Array<Trivia>;
  findOneTrivia: Trivia;
  findBySubject: Array<Trivia>;
  findBySubjectAndExam: Array<Trivia>;
  findRandomTriviaBySubjectAndExam: Trivia;
  findTriviaAnswerById: TriviaAnswers;
  findAllTriviaAnswers: Array<TriviaAnswers>;
  findTriviaAnswerJustificationById: AnswersJustification;
  findAllTriviaAnswersJustifications: Array<AnswersJustification>;
  findAllTickets: Array<Ticket>;
  findTicketsByUser: Array<Ticket>;
  findTicketById: Ticket;
};


export type QueryFindUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindOneTriviaArgs = {
  id: Scalars['Int'];
};


export type QueryFindBySubjectArgs = {
  subject: Scalars['String'];
};


export type QueryFindBySubjectAndExamArgs = {
  exam: Scalars['String'];
  subject: Scalars['String'];
};


export type QueryFindRandomTriviaBySubjectAndExamArgs = {
  exam: Scalars['String'];
  subject: Scalars['String'];
};


export type QueryFindTriviaAnswerByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindTriviaAnswerJustificationByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindTicketsByUserArgs = {
  userId: Scalars['Int'];
};


export type QueryFindTicketByIdArgs = {
  id: Scalars['Int'];
};

export type Ticket = {
  __typename?: 'Ticket';
  id: Scalars['Float'];
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
  title: Scalars['String'];
  message: Scalars['String'];
  active: Scalars['Boolean'];
  response: Scalars['String'];
  user: User;
};

export type Trivia = {
  __typename?: 'Trivia';
  id: Scalars['Float'];
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
  exam: Scalars['String'];
  subject: Scalars['String'];
  question: Scalars['String'];
  explanation: Scalars['String'];
  reference: Scalars['String'];
  triviaAnswers: Array<TriviaAnswers>;
  answersJustifications: Array<AnswersJustification>;
};

export type TriviaAnswers = {
  __typename?: 'TriviaAnswers';
  id: Scalars['Float'];
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
  status: Scalars['Boolean'];
  answer: Scalars['String'];
};

export type UpdateTriviaAnswerInput = {
  triviaId?: Maybe<Scalars['Int']>;
  answer?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  answerId: Scalars['Int'];
};

export type UpdateTriviaInput = {
  exam?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
  explanation?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
  role: Scalars['String'];
  tickets: Array<Ticket>;
};

export type AnswerJustificationSnippetFragment = { __typename?: 'AnswersJustification', id: number, created_at: string, updated_at: string, status: boolean, answer: string };

export type AnswerSnippetFragment = { __typename?: 'TriviaAnswers', id: number, created_at: string, updated_at: string, status: boolean, answer: string };

export type TicketSnippetFragment = { __typename?: 'Ticket', id: number, created_at: string, updated_at: string, title: string, message: string, active: boolean, response: string };

export type TriviaSnippetFragment = { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, exam: string, subject: string, question: string, explanation: string, reference: string };

export type UserSnippetFragment = { __typename?: 'User', id: number, username: string, email: string, created_at: string, updated_at: string, role: string };

export type CreateTicketMutationVariables = Exact<{
  userId: Scalars['Int'];
  title: Scalars['String'];
  message: Scalars['String'];
}>;


export type CreateTicketMutation = { __typename?: 'Mutation', createTicket: { __typename?: 'Ticket', id: number, created_at: string, updated_at: string, title: string, message: string, active: boolean, response: string, user: { __typename?: 'User', id: number, username: string, email: string, created_at: string, updated_at: string, role: string } } };

export type CreateTriviaMutationVariables = Exact<{
  exam: Scalars['String'];
  subject: Scalars['String'];
  question: Scalars['String'];
  explanation: Scalars['String'];
  reference: Scalars['String'];
}>;


export type CreateTriviaMutation = { __typename?: 'Mutation', createTrivia: { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, exam: string, subject: string, question: string, explanation: string, reference: string } };

export type CreateTriviaAnswerMutationVariables = Exact<{
  triviaId: Scalars['Int'];
  answer: Scalars['String'];
  status: Scalars['Boolean'];
}>;


export type CreateTriviaAnswerMutation = { __typename?: 'Mutation', createTriviaAnswer: { __typename?: 'TriviaAnswers', id: number, created_at: string, updated_at: string, status: boolean, answer: string } };

export type CreateTriviaAnswerJustificationMutationVariables = Exact<{
  triviaId: Scalars['Int'];
  answer: Scalars['String'];
  status: Scalars['Boolean'];
}>;


export type CreateTriviaAnswerJustificationMutation = { __typename?: 'Mutation', createTriviaAnswerJustification: { __typename?: 'AnswersJustification', id: number, created_at: string, updated_at: string, status: boolean, answer: string } };

export type DeleteTicketMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTicketMutation = { __typename?: 'Mutation', removeTicket: string };

export type DeleteTriviaMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTriviaMutation = { __typename?: 'Mutation', removeTrivia: boolean };

export type DeleteTriviaAnswerMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTriviaAnswerMutation = { __typename?: 'Mutation', removeTriviaAnswer: boolean };

export type DeleteTriviaAnswerJustificationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTriviaAnswerJustificationMutation = { __typename?: 'Mutation', removeTriviaAnswerJustification: boolean };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: string };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser: string };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', createUser: string };

export type UpdateTriviaMutationVariables = Exact<{
  id: Scalars['Int'];
  exam?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
  explanation?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
}>;


export type UpdateTriviaMutation = { __typename?: 'Mutation', updateTrivia: { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, exam: string, subject: string, question: string, explanation: string, reference: string } };

export type UpdateTriviaAnswerMutationVariables = Exact<{
  answerId: Scalars['Int'];
  triviaId: Scalars['Int'];
  updatedAnswer?: Maybe<Scalars['String']>;
  updatedStatus?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateTriviaAnswerMutation = { __typename?: 'Mutation', updateTriviaAnswer: { __typename?: 'TriviaAnswers', id: number, created_at: string, updated_at: string, status: boolean, answer: string } };

export type UpdateTriviaAnswerJustificationMutationVariables = Exact<{
  answerId: Scalars['Int'];
  triviaId: Scalars['Int'];
  answer?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateTriviaAnswerJustificationMutation = { __typename?: 'Mutation', updateTriviaAnswerJustification: { __typename?: 'AnswersJustification', id: number, created_at: string, updated_at: string, status: boolean, answer: string } };

export type FindAllTicketsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTicketsQuery = { __typename?: 'Query', findAllTickets: Array<{ __typename?: 'Ticket', id: number, created_at: string, updated_at: string, title: string, message: string, active: boolean, response: string }> };

export type FindAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllUsersQuery = { __typename?: 'Query', findAllUsers: Array<{ __typename?: 'User', id: number, username: string, email: string, created_at: string, updated_at: string, role: string }> };

export type FindTicketByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindTicketByIdQuery = { __typename?: 'Query', findTicketById: { __typename?: 'Ticket', id: number, created_at: string, updated_at: string, title: string, message: string, active: boolean, response: string, user: { __typename?: 'User', id: number, username: string, email: string, created_at: string, updated_at: string, role: string } } };

export type FindTicketsByUserQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type FindTicketsByUserQuery = { __typename?: 'Query', findTicketsByUser: Array<{ __typename?: 'Ticket', id: number, created_at: string, updated_at: string, title: string, message: string, active: boolean, response: string }> };

export type FindTriviaByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindTriviaByIdQuery = { __typename?: 'Query', findOneTrivia: { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, exam: string, subject: string, question: string, explanation: string, reference: string, triviaAnswers: Array<{ __typename?: 'TriviaAnswers', id: number, created_at: string, updated_at: string, status: boolean, answer: string }>, answersJustifications: Array<{ __typename?: 'AnswersJustification', id: number, created_at: string, updated_at: string, status: boolean, answer: string }> } };

export type FindRandomTriviaBySubjectAndExamQueryVariables = Exact<{
  exam: Scalars['String'];
  subject: Scalars['String'];
}>;


export type FindRandomTriviaBySubjectAndExamQuery = { __typename?: 'Query', findRandomTriviaBySubjectAndExam: { __typename?: 'Trivia', id: number, created_at: string, updated_at: string, exam: string, subject: string, question: string, explanation: string, reference: string, triviaAnswers: Array<{ __typename?: 'TriviaAnswers', id: number, created_at: string, updated_at: string, status: boolean, answer: string }>, answersJustifications: Array<{ __typename?: 'AnswersJustification', id: number, created_at: string, updated_at: string, status: boolean, answer: string }> } };

export type FindTriviasBySubjectQueryVariables = Exact<{
  subject: Scalars['String'];
}>;


export type FindTriviasBySubjectQuery = { __typename?: 'Query', findBySubject: Array<{ __typename?: 'Trivia', id: number, created_at: string, updated_at: string, exam: string, subject: string, question: string, explanation: string, reference: string, triviaAnswers: Array<{ __typename?: 'TriviaAnswers', id: number, created_at: string, updated_at: string, status: boolean, answer: string }>, answersJustifications: Array<{ __typename?: 'AnswersJustification', id: number, created_at: string, updated_at: string, status: boolean, answer: string }> }> };

export type FindTriviasBySubjectAndSemesterQueryVariables = Exact<{
  subject: Scalars['String'];
  exam: Scalars['String'];
}>;


export type FindTriviasBySubjectAndSemesterQuery = { __typename?: 'Query', findBySubjectAndExam: Array<{ __typename?: 'Trivia', id: number, created_at: string, updated_at: string, exam: string, subject: string, question: string, explanation: string, reference: string, triviaAnswers: Array<{ __typename?: 'TriviaAnswers', id: number, created_at: string, updated_at: string, status: boolean, answer: string }>, answersJustifications: Array<{ __typename?: 'AnswersJustification', id: number, created_at: string, updated_at: string, status: boolean, answer: string }> }> };

export type FindUserByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindUserByIdQuery = { __typename?: 'Query', findUserById: { __typename?: 'User', id: number, username: string, email: string, created_at: string, updated_at: string, role: string } };

export const AnswerJustificationSnippetFragmentDoc = gql`
    fragment AnswerJustificationSnippet on AnswersJustification {
  id
  created_at
  updated_at
  status
  answer
}
    `;
export const AnswerSnippetFragmentDoc = gql`
    fragment AnswerSnippet on TriviaAnswers {
  id
  created_at
  updated_at
  status
  answer
}
    `;
export const TicketSnippetFragmentDoc = gql`
    fragment TicketSnippet on Ticket {
  id
  created_at
  updated_at
  title
  message
  active
  response
}
    `;
export const TriviaSnippetFragmentDoc = gql`
    fragment TriviaSnippet on Trivia {
  id
  created_at
  updated_at
  exam
  subject
  question
  explanation
  reference
}
    `;
export const UserSnippetFragmentDoc = gql`
    fragment UserSnippet on User {
  id
  username
  email
  created_at
  updated_at
  role
}
    `;
export const CreateTicketDocument = gql`
    mutation CreateTicket($userId: Int!, $title: String!, $message: String!) {
  createTicket(
    createTicketInput: {userId: $userId, title: $title, message: $message}
  ) {
    ...TicketSnippet
    user {
      ...UserSnippet
    }
  }
}
    ${TicketSnippetFragmentDoc}
${UserSnippetFragmentDoc}`;
export type CreateTicketMutationFn = Apollo.MutationFunction<CreateTicketMutation, CreateTicketMutationVariables>;

/**
 * __useCreateTicketMutation__
 *
 * To run a mutation, you first call `useCreateTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTicketMutation, { data, loading, error }] = useCreateTicketMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      title: // value for 'title'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useCreateTicketMutation(baseOptions?: Apollo.MutationHookOptions<CreateTicketMutation, CreateTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTicketMutation, CreateTicketMutationVariables>(CreateTicketDocument, options);
      }
export type CreateTicketMutationHookResult = ReturnType<typeof useCreateTicketMutation>;
export type CreateTicketMutationResult = Apollo.MutationResult<CreateTicketMutation>;
export type CreateTicketMutationOptions = Apollo.BaseMutationOptions<CreateTicketMutation, CreateTicketMutationVariables>;
export const CreateTriviaDocument = gql`
    mutation CreateTrivia($exam: String!, $subject: String!, $question: String!, $explanation: String!, $reference: String!) {
  createTrivia(
    createTriviaInput: {exam: $exam, subject: $subject, question: $question, explanation: $explanation, reference: $reference}
  ) {
    ...TriviaSnippet
  }
}
    ${TriviaSnippetFragmentDoc}`;
export type CreateTriviaMutationFn = Apollo.MutationFunction<CreateTriviaMutation, CreateTriviaMutationVariables>;

/**
 * __useCreateTriviaMutation__
 *
 * To run a mutation, you first call `useCreateTriviaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTriviaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTriviaMutation, { data, loading, error }] = useCreateTriviaMutation({
 *   variables: {
 *      exam: // value for 'exam'
 *      subject: // value for 'subject'
 *      question: // value for 'question'
 *      explanation: // value for 'explanation'
 *      reference: // value for 'reference'
 *   },
 * });
 */
export function useCreateTriviaMutation(baseOptions?: Apollo.MutationHookOptions<CreateTriviaMutation, CreateTriviaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTriviaMutation, CreateTriviaMutationVariables>(CreateTriviaDocument, options);
      }
export type CreateTriviaMutationHookResult = ReturnType<typeof useCreateTriviaMutation>;
export type CreateTriviaMutationResult = Apollo.MutationResult<CreateTriviaMutation>;
export type CreateTriviaMutationOptions = Apollo.BaseMutationOptions<CreateTriviaMutation, CreateTriviaMutationVariables>;
export const CreateTriviaAnswerDocument = gql`
    mutation CreateTriviaAnswer($triviaId: Int!, $answer: String!, $status: Boolean!) {
  createTriviaAnswer(
    createTriviaAnswerInput: {triviaId: $triviaId, answer: $answer, status: $status}
  ) {
    ...AnswerSnippet
  }
}
    ${AnswerSnippetFragmentDoc}`;
export type CreateTriviaAnswerMutationFn = Apollo.MutationFunction<CreateTriviaAnswerMutation, CreateTriviaAnswerMutationVariables>;

/**
 * __useCreateTriviaAnswerMutation__
 *
 * To run a mutation, you first call `useCreateTriviaAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTriviaAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTriviaAnswerMutation, { data, loading, error }] = useCreateTriviaAnswerMutation({
 *   variables: {
 *      triviaId: // value for 'triviaId'
 *      answer: // value for 'answer'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useCreateTriviaAnswerMutation(baseOptions?: Apollo.MutationHookOptions<CreateTriviaAnswerMutation, CreateTriviaAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTriviaAnswerMutation, CreateTriviaAnswerMutationVariables>(CreateTriviaAnswerDocument, options);
      }
export type CreateTriviaAnswerMutationHookResult = ReturnType<typeof useCreateTriviaAnswerMutation>;
export type CreateTriviaAnswerMutationResult = Apollo.MutationResult<CreateTriviaAnswerMutation>;
export type CreateTriviaAnswerMutationOptions = Apollo.BaseMutationOptions<CreateTriviaAnswerMutation, CreateTriviaAnswerMutationVariables>;
export const CreateTriviaAnswerJustificationDocument = gql`
    mutation CreateTriviaAnswerJustification($triviaId: Int!, $answer: String!, $status: Boolean!) {
  createTriviaAnswerJustification(
    createTriviaAnswerJustificationInput: {triviaId: $triviaId, answer: $answer, status: $status}
  ) {
    ...AnswerJustificationSnippet
  }
}
    ${AnswerJustificationSnippetFragmentDoc}`;
export type CreateTriviaAnswerJustificationMutationFn = Apollo.MutationFunction<CreateTriviaAnswerJustificationMutation, CreateTriviaAnswerJustificationMutationVariables>;

/**
 * __useCreateTriviaAnswerJustificationMutation__
 *
 * To run a mutation, you first call `useCreateTriviaAnswerJustificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTriviaAnswerJustificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTriviaAnswerJustificationMutation, { data, loading, error }] = useCreateTriviaAnswerJustificationMutation({
 *   variables: {
 *      triviaId: // value for 'triviaId'
 *      answer: // value for 'answer'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useCreateTriviaAnswerJustificationMutation(baseOptions?: Apollo.MutationHookOptions<CreateTriviaAnswerJustificationMutation, CreateTriviaAnswerJustificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTriviaAnswerJustificationMutation, CreateTriviaAnswerJustificationMutationVariables>(CreateTriviaAnswerJustificationDocument, options);
      }
export type CreateTriviaAnswerJustificationMutationHookResult = ReturnType<typeof useCreateTriviaAnswerJustificationMutation>;
export type CreateTriviaAnswerJustificationMutationResult = Apollo.MutationResult<CreateTriviaAnswerJustificationMutation>;
export type CreateTriviaAnswerJustificationMutationOptions = Apollo.BaseMutationOptions<CreateTriviaAnswerJustificationMutation, CreateTriviaAnswerJustificationMutationVariables>;
export const DeleteTicketDocument = gql`
    mutation DeleteTicket($id: Int!) {
  removeTicket(id: $id)
}
    `;
export type DeleteTicketMutationFn = Apollo.MutationFunction<DeleteTicketMutation, DeleteTicketMutationVariables>;

/**
 * __useDeleteTicketMutation__
 *
 * To run a mutation, you first call `useDeleteTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTicketMutation, { data, loading, error }] = useDeleteTicketMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTicketMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTicketMutation, DeleteTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTicketMutation, DeleteTicketMutationVariables>(DeleteTicketDocument, options);
      }
export type DeleteTicketMutationHookResult = ReturnType<typeof useDeleteTicketMutation>;
export type DeleteTicketMutationResult = Apollo.MutationResult<DeleteTicketMutation>;
export type DeleteTicketMutationOptions = Apollo.BaseMutationOptions<DeleteTicketMutation, DeleteTicketMutationVariables>;
export const DeleteTriviaDocument = gql`
    mutation DeleteTrivia($id: Int!) {
  removeTrivia(id: $id)
}
    `;
export type DeleteTriviaMutationFn = Apollo.MutationFunction<DeleteTriviaMutation, DeleteTriviaMutationVariables>;

/**
 * __useDeleteTriviaMutation__
 *
 * To run a mutation, you first call `useDeleteTriviaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTriviaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTriviaMutation, { data, loading, error }] = useDeleteTriviaMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTriviaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTriviaMutation, DeleteTriviaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTriviaMutation, DeleteTriviaMutationVariables>(DeleteTriviaDocument, options);
      }
export type DeleteTriviaMutationHookResult = ReturnType<typeof useDeleteTriviaMutation>;
export type DeleteTriviaMutationResult = Apollo.MutationResult<DeleteTriviaMutation>;
export type DeleteTriviaMutationOptions = Apollo.BaseMutationOptions<DeleteTriviaMutation, DeleteTriviaMutationVariables>;
export const DeleteTriviaAnswerDocument = gql`
    mutation DeleteTriviaAnswer($id: Int!) {
  removeTriviaAnswer(id: $id)
}
    `;
export type DeleteTriviaAnswerMutationFn = Apollo.MutationFunction<DeleteTriviaAnswerMutation, DeleteTriviaAnswerMutationVariables>;

/**
 * __useDeleteTriviaAnswerMutation__
 *
 * To run a mutation, you first call `useDeleteTriviaAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTriviaAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTriviaAnswerMutation, { data, loading, error }] = useDeleteTriviaAnswerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTriviaAnswerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTriviaAnswerMutation, DeleteTriviaAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTriviaAnswerMutation, DeleteTriviaAnswerMutationVariables>(DeleteTriviaAnswerDocument, options);
      }
export type DeleteTriviaAnswerMutationHookResult = ReturnType<typeof useDeleteTriviaAnswerMutation>;
export type DeleteTriviaAnswerMutationResult = Apollo.MutationResult<DeleteTriviaAnswerMutation>;
export type DeleteTriviaAnswerMutationOptions = Apollo.BaseMutationOptions<DeleteTriviaAnswerMutation, DeleteTriviaAnswerMutationVariables>;
export const DeleteTriviaAnswerJustificationDocument = gql`
    mutation deleteTriviaAnswerJustification($id: Int!) {
  removeTriviaAnswerJustification(id: $id)
}
    `;
export type DeleteTriviaAnswerJustificationMutationFn = Apollo.MutationFunction<DeleteTriviaAnswerJustificationMutation, DeleteTriviaAnswerJustificationMutationVariables>;

/**
 * __useDeleteTriviaAnswerJustificationMutation__
 *
 * To run a mutation, you first call `useDeleteTriviaAnswerJustificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTriviaAnswerJustificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTriviaAnswerJustificationMutation, { data, loading, error }] = useDeleteTriviaAnswerJustificationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTriviaAnswerJustificationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTriviaAnswerJustificationMutation, DeleteTriviaAnswerJustificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTriviaAnswerJustificationMutation, DeleteTriviaAnswerJustificationMutationVariables>(DeleteTriviaAnswerJustificationDocument, options);
      }
export type DeleteTriviaAnswerJustificationMutationHookResult = ReturnType<typeof useDeleteTriviaAnswerJustificationMutation>;
export type DeleteTriviaAnswerJustificationMutationResult = Apollo.MutationResult<DeleteTriviaAnswerJustificationMutation>;
export type DeleteTriviaAnswerJustificationMutationOptions = Apollo.BaseMutationOptions<DeleteTriviaAnswerJustificationMutation, DeleteTriviaAnswerJustificationMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: Int!) {
  deleteUser(id: $id)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  loginUser(username: $username, password: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!, $confirmPassword: String!) {
  createUser(
    createUserInput: {username: $username, email: $email, password: $password, confirmPassword: $confirmPassword}
  )
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateTriviaDocument = gql`
    mutation UpdateTrivia($id: Int!, $exam: String, $subject: String, $question: String, $explanation: String, $reference: String) {
  updateTrivia(
    updateTriviaInput: {id: $id, exam: $exam, subject: $subject, question: $question, explanation: $explanation, reference: $reference}
  ) {
    ...TriviaSnippet
  }
}
    ${TriviaSnippetFragmentDoc}`;
export type UpdateTriviaMutationFn = Apollo.MutationFunction<UpdateTriviaMutation, UpdateTriviaMutationVariables>;

/**
 * __useUpdateTriviaMutation__
 *
 * To run a mutation, you first call `useUpdateTriviaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTriviaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTriviaMutation, { data, loading, error }] = useUpdateTriviaMutation({
 *   variables: {
 *      id: // value for 'id'
 *      exam: // value for 'exam'
 *      subject: // value for 'subject'
 *      question: // value for 'question'
 *      explanation: // value for 'explanation'
 *      reference: // value for 'reference'
 *   },
 * });
 */
export function useUpdateTriviaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTriviaMutation, UpdateTriviaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTriviaMutation, UpdateTriviaMutationVariables>(UpdateTriviaDocument, options);
      }
export type UpdateTriviaMutationHookResult = ReturnType<typeof useUpdateTriviaMutation>;
export type UpdateTriviaMutationResult = Apollo.MutationResult<UpdateTriviaMutation>;
export type UpdateTriviaMutationOptions = Apollo.BaseMutationOptions<UpdateTriviaMutation, UpdateTriviaMutationVariables>;
export const UpdateTriviaAnswerDocument = gql`
    mutation UpdateTriviaAnswer($answerId: Int!, $triviaId: Int!, $updatedAnswer: String, $updatedStatus: Boolean) {
  updateTriviaAnswer(
    updateTriviaAnswerInput: {answerId: $answerId, triviaId: $triviaId, answer: $updatedAnswer, status: $updatedStatus}
  ) {
    ...AnswerSnippet
  }
}
    ${AnswerSnippetFragmentDoc}`;
export type UpdateTriviaAnswerMutationFn = Apollo.MutationFunction<UpdateTriviaAnswerMutation, UpdateTriviaAnswerMutationVariables>;

/**
 * __useUpdateTriviaAnswerMutation__
 *
 * To run a mutation, you first call `useUpdateTriviaAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTriviaAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTriviaAnswerMutation, { data, loading, error }] = useUpdateTriviaAnswerMutation({
 *   variables: {
 *      answerId: // value for 'answerId'
 *      triviaId: // value for 'triviaId'
 *      updatedAnswer: // value for 'updatedAnswer'
 *      updatedStatus: // value for 'updatedStatus'
 *   },
 * });
 */
export function useUpdateTriviaAnswerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTriviaAnswerMutation, UpdateTriviaAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTriviaAnswerMutation, UpdateTriviaAnswerMutationVariables>(UpdateTriviaAnswerDocument, options);
      }
export type UpdateTriviaAnswerMutationHookResult = ReturnType<typeof useUpdateTriviaAnswerMutation>;
export type UpdateTriviaAnswerMutationResult = Apollo.MutationResult<UpdateTriviaAnswerMutation>;
export type UpdateTriviaAnswerMutationOptions = Apollo.BaseMutationOptions<UpdateTriviaAnswerMutation, UpdateTriviaAnswerMutationVariables>;
export const UpdateTriviaAnswerJustificationDocument = gql`
    mutation UpdateTriviaAnswerJustification($answerId: Int!, $triviaId: Int!, $answer: String, $status: Boolean) {
  updateTriviaAnswerJustification(
    updateTriviaAnswerJustificationInput: {answerId: $answerId, triviaId: $triviaId, answer: $answer, status: $status}
  ) {
    ...AnswerJustificationSnippet
  }
}
    ${AnswerJustificationSnippetFragmentDoc}`;
export type UpdateTriviaAnswerJustificationMutationFn = Apollo.MutationFunction<UpdateTriviaAnswerJustificationMutation, UpdateTriviaAnswerJustificationMutationVariables>;

/**
 * __useUpdateTriviaAnswerJustificationMutation__
 *
 * To run a mutation, you first call `useUpdateTriviaAnswerJustificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTriviaAnswerJustificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTriviaAnswerJustificationMutation, { data, loading, error }] = useUpdateTriviaAnswerJustificationMutation({
 *   variables: {
 *      answerId: // value for 'answerId'
 *      triviaId: // value for 'triviaId'
 *      answer: // value for 'answer'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateTriviaAnswerJustificationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTriviaAnswerJustificationMutation, UpdateTriviaAnswerJustificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTriviaAnswerJustificationMutation, UpdateTriviaAnswerJustificationMutationVariables>(UpdateTriviaAnswerJustificationDocument, options);
      }
export type UpdateTriviaAnswerJustificationMutationHookResult = ReturnType<typeof useUpdateTriviaAnswerJustificationMutation>;
export type UpdateTriviaAnswerJustificationMutationResult = Apollo.MutationResult<UpdateTriviaAnswerJustificationMutation>;
export type UpdateTriviaAnswerJustificationMutationOptions = Apollo.BaseMutationOptions<UpdateTriviaAnswerJustificationMutation, UpdateTriviaAnswerJustificationMutationVariables>;
export const FindAllTicketsDocument = gql`
    query FindAllTickets {
  findAllTickets {
    ...TicketSnippet
  }
}
    ${TicketSnippetFragmentDoc}`;

/**
 * __useFindAllTicketsQuery__
 *
 * To run a query within a React component, call `useFindAllTicketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllTicketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllTicketsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllTicketsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllTicketsQuery, FindAllTicketsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllTicketsQuery, FindAllTicketsQueryVariables>(FindAllTicketsDocument, options);
      }
export function useFindAllTicketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllTicketsQuery, FindAllTicketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllTicketsQuery, FindAllTicketsQueryVariables>(FindAllTicketsDocument, options);
        }
export type FindAllTicketsQueryHookResult = ReturnType<typeof useFindAllTicketsQuery>;
export type FindAllTicketsLazyQueryHookResult = ReturnType<typeof useFindAllTicketsLazyQuery>;
export type FindAllTicketsQueryResult = Apollo.QueryResult<FindAllTicketsQuery, FindAllTicketsQueryVariables>;
export const FindAllUsersDocument = gql`
    query FindAllUsers {
  findAllUsers {
    ...UserSnippet
  }
}
    ${UserSnippetFragmentDoc}`;

/**
 * __useFindAllUsersQuery__
 *
 * To run a query within a React component, call `useFindAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
      }
export function useFindAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
        }
export type FindAllUsersQueryHookResult = ReturnType<typeof useFindAllUsersQuery>;
export type FindAllUsersLazyQueryHookResult = ReturnType<typeof useFindAllUsersLazyQuery>;
export type FindAllUsersQueryResult = Apollo.QueryResult<FindAllUsersQuery, FindAllUsersQueryVariables>;
export const FindTicketByIdDocument = gql`
    query FindTicketById($id: Int!) {
  findTicketById(id: $id) {
    ...TicketSnippet
    user {
      ...UserSnippet
    }
  }
}
    ${TicketSnippetFragmentDoc}
${UserSnippetFragmentDoc}`;

/**
 * __useFindTicketByIdQuery__
 *
 * To run a query within a React component, call `useFindTicketByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTicketByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTicketByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindTicketByIdQuery(baseOptions: Apollo.QueryHookOptions<FindTicketByIdQuery, FindTicketByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTicketByIdQuery, FindTicketByIdQueryVariables>(FindTicketByIdDocument, options);
      }
export function useFindTicketByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTicketByIdQuery, FindTicketByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTicketByIdQuery, FindTicketByIdQueryVariables>(FindTicketByIdDocument, options);
        }
export type FindTicketByIdQueryHookResult = ReturnType<typeof useFindTicketByIdQuery>;
export type FindTicketByIdLazyQueryHookResult = ReturnType<typeof useFindTicketByIdLazyQuery>;
export type FindTicketByIdQueryResult = Apollo.QueryResult<FindTicketByIdQuery, FindTicketByIdQueryVariables>;
export const FindTicketsByUserDocument = gql`
    query FindTicketsByUser($userId: Int!) {
  findTicketsByUser(userId: $userId) {
    ...TicketSnippet
  }
}
    ${TicketSnippetFragmentDoc}`;

/**
 * __useFindTicketsByUserQuery__
 *
 * To run a query within a React component, call `useFindTicketsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTicketsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTicketsByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFindTicketsByUserQuery(baseOptions: Apollo.QueryHookOptions<FindTicketsByUserQuery, FindTicketsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTicketsByUserQuery, FindTicketsByUserQueryVariables>(FindTicketsByUserDocument, options);
      }
export function useFindTicketsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTicketsByUserQuery, FindTicketsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTicketsByUserQuery, FindTicketsByUserQueryVariables>(FindTicketsByUserDocument, options);
        }
export type FindTicketsByUserQueryHookResult = ReturnType<typeof useFindTicketsByUserQuery>;
export type FindTicketsByUserLazyQueryHookResult = ReturnType<typeof useFindTicketsByUserLazyQuery>;
export type FindTicketsByUserQueryResult = Apollo.QueryResult<FindTicketsByUserQuery, FindTicketsByUserQueryVariables>;
export const FindTriviaByIdDocument = gql`
    query FindTriviaById($id: Int!) {
  findOneTrivia(id: $id) {
    ...TriviaSnippet
    triviaAnswers {
      ...AnswerSnippet
    }
    answersJustifications {
      ...AnswerJustificationSnippet
    }
  }
}
    ${TriviaSnippetFragmentDoc}
${AnswerSnippetFragmentDoc}
${AnswerJustificationSnippetFragmentDoc}`;

/**
 * __useFindTriviaByIdQuery__
 *
 * To run a query within a React component, call `useFindTriviaByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTriviaByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTriviaByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindTriviaByIdQuery(baseOptions: Apollo.QueryHookOptions<FindTriviaByIdQuery, FindTriviaByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTriviaByIdQuery, FindTriviaByIdQueryVariables>(FindTriviaByIdDocument, options);
      }
export function useFindTriviaByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTriviaByIdQuery, FindTriviaByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTriviaByIdQuery, FindTriviaByIdQueryVariables>(FindTriviaByIdDocument, options);
        }
export type FindTriviaByIdQueryHookResult = ReturnType<typeof useFindTriviaByIdQuery>;
export type FindTriviaByIdLazyQueryHookResult = ReturnType<typeof useFindTriviaByIdLazyQuery>;
export type FindTriviaByIdQueryResult = Apollo.QueryResult<FindTriviaByIdQuery, FindTriviaByIdQueryVariables>;
export const FindRandomTriviaBySubjectAndExamDocument = gql`
    query findRandomTriviaBySubjectAndExam($exam: String!, $subject: String!) {
  findRandomTriviaBySubjectAndExam(exam: $exam, subject: $subject) {
    ...TriviaSnippet
    triviaAnswers {
      ...AnswerSnippet
    }
    answersJustifications {
      ...AnswerJustificationSnippet
    }
  }
}
    ${TriviaSnippetFragmentDoc}
${AnswerSnippetFragmentDoc}
${AnswerJustificationSnippetFragmentDoc}`;

/**
 * __useFindRandomTriviaBySubjectAndExamQuery__
 *
 * To run a query within a React component, call `useFindRandomTriviaBySubjectAndExamQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRandomTriviaBySubjectAndExamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRandomTriviaBySubjectAndExamQuery({
 *   variables: {
 *      exam: // value for 'exam'
 *      subject: // value for 'subject'
 *   },
 * });
 */
export function useFindRandomTriviaBySubjectAndExamQuery(baseOptions: Apollo.QueryHookOptions<FindRandomTriviaBySubjectAndExamQuery, FindRandomTriviaBySubjectAndExamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRandomTriviaBySubjectAndExamQuery, FindRandomTriviaBySubjectAndExamQueryVariables>(FindRandomTriviaBySubjectAndExamDocument, options);
      }
export function useFindRandomTriviaBySubjectAndExamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRandomTriviaBySubjectAndExamQuery, FindRandomTriviaBySubjectAndExamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRandomTriviaBySubjectAndExamQuery, FindRandomTriviaBySubjectAndExamQueryVariables>(FindRandomTriviaBySubjectAndExamDocument, options);
        }
export type FindRandomTriviaBySubjectAndExamQueryHookResult = ReturnType<typeof useFindRandomTriviaBySubjectAndExamQuery>;
export type FindRandomTriviaBySubjectAndExamLazyQueryHookResult = ReturnType<typeof useFindRandomTriviaBySubjectAndExamLazyQuery>;
export type FindRandomTriviaBySubjectAndExamQueryResult = Apollo.QueryResult<FindRandomTriviaBySubjectAndExamQuery, FindRandomTriviaBySubjectAndExamQueryVariables>;
export const FindTriviasBySubjectDocument = gql`
    query FindTriviasBySubject($subject: String!) {
  findBySubject(subject: $subject) {
    ...TriviaSnippet
    triviaAnswers {
      ...AnswerSnippet
    }
    answersJustifications {
      ...AnswerJustificationSnippet
    }
  }
}
    ${TriviaSnippetFragmentDoc}
${AnswerSnippetFragmentDoc}
${AnswerJustificationSnippetFragmentDoc}`;

/**
 * __useFindTriviasBySubjectQuery__
 *
 * To run a query within a React component, call `useFindTriviasBySubjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTriviasBySubjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTriviasBySubjectQuery({
 *   variables: {
 *      subject: // value for 'subject'
 *   },
 * });
 */
export function useFindTriviasBySubjectQuery(baseOptions: Apollo.QueryHookOptions<FindTriviasBySubjectQuery, FindTriviasBySubjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTriviasBySubjectQuery, FindTriviasBySubjectQueryVariables>(FindTriviasBySubjectDocument, options);
      }
export function useFindTriviasBySubjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTriviasBySubjectQuery, FindTriviasBySubjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTriviasBySubjectQuery, FindTriviasBySubjectQueryVariables>(FindTriviasBySubjectDocument, options);
        }
export type FindTriviasBySubjectQueryHookResult = ReturnType<typeof useFindTriviasBySubjectQuery>;
export type FindTriviasBySubjectLazyQueryHookResult = ReturnType<typeof useFindTriviasBySubjectLazyQuery>;
export type FindTriviasBySubjectQueryResult = Apollo.QueryResult<FindTriviasBySubjectQuery, FindTriviasBySubjectQueryVariables>;
export const FindTriviasBySubjectAndSemesterDocument = gql`
    query FindTriviasBySubjectAndSemester($subject: String!, $exam: String!) {
  findBySubjectAndExam(subject: $subject, exam: $exam) {
    ...TriviaSnippet
    triviaAnswers {
      ...AnswerSnippet
    }
    answersJustifications {
      ...AnswerJustificationSnippet
    }
  }
}
    ${TriviaSnippetFragmentDoc}
${AnswerSnippetFragmentDoc}
${AnswerJustificationSnippetFragmentDoc}`;

/**
 * __useFindTriviasBySubjectAndSemesterQuery__
 *
 * To run a query within a React component, call `useFindTriviasBySubjectAndSemesterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTriviasBySubjectAndSemesterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTriviasBySubjectAndSemesterQuery({
 *   variables: {
 *      subject: // value for 'subject'
 *      exam: // value for 'exam'
 *   },
 * });
 */
export function useFindTriviasBySubjectAndSemesterQuery(baseOptions: Apollo.QueryHookOptions<FindTriviasBySubjectAndSemesterQuery, FindTriviasBySubjectAndSemesterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTriviasBySubjectAndSemesterQuery, FindTriviasBySubjectAndSemesterQueryVariables>(FindTriviasBySubjectAndSemesterDocument, options);
      }
export function useFindTriviasBySubjectAndSemesterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTriviasBySubjectAndSemesterQuery, FindTriviasBySubjectAndSemesterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTriviasBySubjectAndSemesterQuery, FindTriviasBySubjectAndSemesterQueryVariables>(FindTriviasBySubjectAndSemesterDocument, options);
        }
export type FindTriviasBySubjectAndSemesterQueryHookResult = ReturnType<typeof useFindTriviasBySubjectAndSemesterQuery>;
export type FindTriviasBySubjectAndSemesterLazyQueryHookResult = ReturnType<typeof useFindTriviasBySubjectAndSemesterLazyQuery>;
export type FindTriviasBySubjectAndSemesterQueryResult = Apollo.QueryResult<FindTriviasBySubjectAndSemesterQuery, FindTriviasBySubjectAndSemesterQueryVariables>;
export const FindUserByIdDocument = gql`
    query FindUserById($id: Int!) {
  findUserById(id: $id) {
    ...UserSnippet
  }
}
    ${UserSnippetFragmentDoc}`;

/**
 * __useFindUserByIdQuery__
 *
 * To run a query within a React component, call `useFindUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindUserByIdQuery(baseOptions: Apollo.QueryHookOptions<FindUserByIdQuery, FindUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, options);
      }
export function useFindUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserByIdQuery, FindUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, options);
        }
export type FindUserByIdQueryHookResult = ReturnType<typeof useFindUserByIdQuery>;
export type FindUserByIdLazyQueryHookResult = ReturnType<typeof useFindUserByIdLazyQuery>;
export type FindUserByIdQueryResult = Apollo.QueryResult<FindUserByIdQuery, FindUserByIdQueryVariables>;