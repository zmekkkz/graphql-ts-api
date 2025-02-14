# README.md

# GraphQL TypeScript Project

This project is a TypeScript application that implements a GraphQL API using Apollo Server and TypeORM for PostgreSQL database connectivity. It provides endpoints for querying operator data with TypeScript type safety.

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

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

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

1. Create a `.env` file in the root directory:
   ```properties
   DB_HOST=localhost
   DB_PORT=5433
   DB_USERNAME=airflow
   DB_PASSWORD=airflow
   DB_NAME=mek
   ```

2. Update database settings in `src/config/ormconfigs.ts` if needed.

## Available Scripts

- **Development**
  ```bash
  npm run dev          # Start development server with hot reload
  ```

- **Production**
  ```bash
  npm run build       # Build the project
  npm start          # Start production server
  ```

- **Code Quality**
  ```bash
  npm run lint       # Check for linting errors
  npm run lint:fix   # Fix linting errors automatically
  npm run format     # Format code using Prettier
  ```

- **Maintenance**
  ```bash
  npm run clean      # Remove build artifacts
  ```

## GraphQL API

The API is available at `http://localhost:4000` with these endpoints:

### Queries

1. Get all operators:
   ```graphql
   query {
     operators {
       id
       operatorName
       healthZone
     }
   }
   ```

2. Get operator by ID:
   ```graphql
   query {
     operatorById(id: "your-id") {
       id
       operatorName
     }
   }
   ```

3. Get operators by health zone:
   ```graphql
   query {
     operatorsByHealthZone(health_zone: "ZONE1") {
       id
       operatorName
       healthZone
     }
   }
   ```

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open GraphQL Playground:
   - Visit `http://localhost:4000` in your browser
   - Use the playground to test queries

## Code Quality

- ESLint is configured for TypeScript
- Prettier ensures consistent code formatting
- Pre-commit hooks check code quality before commits

## Error Handling

The API includes:
- Type-safe error responses
- Proper error formatting
- Database connection error handling

## License

This project is licensed under the MIT License.