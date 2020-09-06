import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
};

export type Todo = Node & {
  __typename?: 'Todo';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = (
  { __typename?: 'Query' }
  & { todos: Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'name'>
  )> }
);

export type TodosIncludeIdQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosIncludeIdQuery = (
  { __typename?: 'Query' }
  & { todos: Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'name'>
  )> }
);


export const TodosDocument = gql`
    query todos {
  todos {
    name
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;
export const TodosIncludeIdDocument = gql`
    query todosIncludeId {
  todos {
    id
    name
  }
}
    `;

/**
 * __useTodosIncludeIdQuery__
 *
 * To run a query within a React component, call `useTodosIncludeIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosIncludeIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosIncludeIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosIncludeIdQuery(baseOptions?: Apollo.QueryHookOptions<TodosIncludeIdQuery, TodosIncludeIdQueryVariables>) {
        return Apollo.useQuery<TodosIncludeIdQuery, TodosIncludeIdQueryVariables>(TodosIncludeIdDocument, baseOptions);
      }
export function useTodosIncludeIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosIncludeIdQuery, TodosIncludeIdQueryVariables>) {
          return Apollo.useLazyQuery<TodosIncludeIdQuery, TodosIncludeIdQueryVariables>(TodosIncludeIdDocument, baseOptions);
        }
export type TodosIncludeIdQueryHookResult = ReturnType<typeof useTodosIncludeIdQuery>;
export type TodosIncludeIdLazyQueryHookResult = ReturnType<typeof useTodosIncludeIdLazyQuery>;
export type TodosIncludeIdQueryResult = Apollo.QueryResult<TodosIncludeIdQuery, TodosIncludeIdQueryVariables>;