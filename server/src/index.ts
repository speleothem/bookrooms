import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { createStore } from './createStore';
import Api from './api';
import { resolvers } from './resolvers';

const store = createStore();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    api: new Api({ store }),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
