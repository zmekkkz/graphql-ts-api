import 'reflect-metadata';
import { AppDataSource } from './config/ormconfigs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { OperatorResolver } from './resolver/Operator';

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connection has been established successfully.');

    const schema = await buildSchema({
      resolvers: [OperatorResolver],
      validate: false,
    });

    const server = new ApolloServer({
      schema,
    });

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`🚀 Server ready at: ${url}`);

  } catch (error) {
    console.error('Unable to start server:', error);
  }
};

main();


