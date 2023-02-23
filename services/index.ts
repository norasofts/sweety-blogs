import { request, gql, Variables } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;

export default async function getFromApi<T>(
  query: string,
  variables?: Variables
): Promise<T> {
  if (!graphqlAPI) {
    throw new Error('GraphQL endpoint is not defined');
  }

  const q = gql`
    ${query}
  `;

  const data = await request<T>(graphqlAPI, q, variables);
  return data;
}
