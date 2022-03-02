import dotenv from 'dotenv-safe';
import { ApolloServer } from 'apollo-server';

dotenv.config();

const startServer = () => {
  const server = new ApolloServer({
    schema,
    context,
  });

  server
    .listen({
      port: 4001,
    })
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}graphql`);
    })
    .catch((error) => console.log('Error launching server', error));
};

startServer();