import { DataSource } from 'typeorm';
import { Operator } from '../models/Operator';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'airflow',
  password: process.env.DB_PASSWORD || 'airflow',
  database: process.env.DB_NAME || 'mek',
  synchronize: false, // Set to false in production
  logging: true,
  entities: [Operator],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
});
