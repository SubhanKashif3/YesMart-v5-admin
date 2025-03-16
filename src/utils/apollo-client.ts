import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://your-graphql-server.com/graphql", // Replace with your GraphQL API
    credentials: "include", // Include cookies if needed
  }),
  cache: new InMemoryCache(),
});

export default client;
