import 'reflect-metadata';
import { AppDataSource } from './config/ormconfigs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { OperatorResolver } from './resolver/Operator';

interface MyContext {
  token?: string;
}

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connection has been established successfully.');

    const schema = await buildSchema({
      resolvers: [OperatorResolver],
      validate: false,
    });

    const server = new ApolloServer<MyContext>({
      schema,
    });

    const { url }: { url: string } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`🚀 Server ready at: ${url}`);

  } catch (error) {
    console.error('Unable to start server:', error);
  }
};

main();