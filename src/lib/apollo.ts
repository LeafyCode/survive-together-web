import ApolloClient from "apollo-boost";
import { GRAPHQL_ENDPOINT } from "../config";

export const apolloClient = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
});
