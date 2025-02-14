# README.md

# GraphQL TypeScript Project

This project is a TypeScript application that connects to a PostgreSQL database using TypeORM. It includes an operator entity and provides a basic setup for database connection and querying.

## Project Structure

```
graphql-ts
├── src
│   ├── config
│   │   └── ormconfigs.ts        # Database configuration
│   ├── models
│   │   └── Operator.ts          # Operator entity model
│   ├── resolver
│   │   └── Operator.ts          # GraphQL resolvers
│   └── index.ts                 # Entry point of the application
├── .env                         # Environment variables
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── .gitignore                  # Git ignore file
├── nodemon.json                # Nodemon configuration
├── package.json                # NPM configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zmekkkz/graphql-ts-api.git
   cd graphql-ts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory and set the following environment variables:

```
DB_HOST=localhost
DB_PORT=5433
DB_USERNAME=airflow
DB_PASSWORD=airflow
DB_NAME=mek
```

## Scripts

- `npm run start`: Starts the application.
- `npm run dev`: Starts the application with Nodemon for automatic restarts during development.
- `npm run build`: Compiles the TypeScript code.

## Usage

Run the application to establish a connection to the database and execute a test query.

## License

This project is licensed under the MIT License.