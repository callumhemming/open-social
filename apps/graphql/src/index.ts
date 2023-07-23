import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

(async () => {
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;
  const resolvers = {
    Query: {
      hello: () => "HelloWorld",
    },
  };

  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(5000, () => {
    console.log("listening on 5000");
  });
})();
