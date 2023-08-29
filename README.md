# Organ Rebate System

A simple organ rebate system to provide additional free organs based upon the customer's order by using rebate logic.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Code Organization](#code-organization)

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository to your local machine by running the command `git clone https://github.com/m-ata/organ-rebate-system.git`.
2. Navigate to the project directory using your terminal.
3. Run `npm install` to install all the dependencies.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`
Runs the development server using Nodemon, which auto-reloads on code changes.

### `npm run build`
Builds the project using TypeScript compiler (tsc) based on tsconfig.json.

### `npm run start`
Runs the built production server. Make sure to build the project first in order to run the production server.

### `npm run lint`
Runs ESLint to analyze and detect coding style issues.

### `npm run lint:fix`
Runs ESLint with auto-fix enabled to automatically fix coding style issues.

### `npm run lint`
Formats code files using Prettier to maintain consistent code style.

### `npm run test`
Run Jest tests from __tests__ folder.

### `npm run test:coverage`
Runs Jest tests and generates 100% coverage reports.


## Code Organization

- Readability Focus: The project is structured to enhance code readability. Logic is divided into distinct segments such as routes, controllers, and utility functions, contributing to a clear and organized codebase.
- Routing Mechanism: Upon server startup, the routing mechanism is invoked. If a requested route doesn't match any predefined routes, a "NOT_FOUND" response is generated.
- /organOrders Route: This route is designed to process incoming organ orders.
- Controller organOrderController: This controller is responsible for managing incoming requests related to order processing. It validates request methods and CSV data, ensuring error handling.
- CSV Parsing: I avoid using third-party library by implementing a custom CSV-to-JSON parser. The parseCSVToJson utility function takes care of this task.
- Order Calculation: The calculateOrgans function calculates orders based on received data. For each order detail, it computes the purchased ratio and calls the generateOrder(organ, purchasedRatio) to format the order in the required format.
- Response Handling: The sendResponse utility function is developed to send responses from the API.
- Unit Test Coverage: Each utility function and the main controller are tested using unit tests and the test is employed in separate folders.
