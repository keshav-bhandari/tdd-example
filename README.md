# TDD Example Project

This document provides instructions on how to set up and run this project.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installing

To install the project dependencies, run the following command in your terminal:

```sh
npm install
```

## Available Scripts

### Running the Application

To start the development server, use:

```sh
npm run dev
```

### Running Tests

You can run the test suite in several ways:

- **Run all tests once:**
  ```sh
  npm run test
  ```

- **Run tests in watch mode:**
  This will re-run tests whenever a file is changed.
  ```sh
  npm run test:watch
  ```

- **Run tests for a specific file:**
  Replace `path/to/your/test/file.ts` with the actual file path.
  ```sh
  npm run test path/to/your/test/file.ts
  ```
  For example:
  ```sh
  npm run test ./src/__tests__/lifecycleHooks.test.ts
  ```