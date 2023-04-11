import { ApolloServer, gql } from "apollo-server-micro";
import { makeExecutableScema } from "@graphql-tools/schema";
import { readFileSync } from "fs";
import path from "path";
import resolvers from "./resolvers";

const typeDefs = gql`
  ${readFileSync(path.join(process.cwd(), "schema/schema.graphql"), "utf8")}
`;

const schema = makeExecutableScema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    //
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: "/api/graphql" });
