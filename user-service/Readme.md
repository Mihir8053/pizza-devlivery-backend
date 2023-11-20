# User Service

The `user-service` microservice handles user-related operations for our Pizza Delivery Application backend. Users can check out restaurants, place orders, and maintain order history.

## Folder Structure

### `/src/controllers`

This directory contains controllers responsible for handling user-related logic. Each controller file is designed to manage specific functionalities related to users, orders, and more.

### `/src/models`

Mongoose models defining the structure of data for the `user-service`. Key models include:

- **`User.js`**: Defines the schema for user data.
- **`Order.js`**: Defines the schema for order data.

### `/src/routes`

Express.js routes for handling user-related API endpoints. The routes are organized to provide a clear structure for handling different user functionalities.

#### Example API Routes:

- `POST /api/users`: Create a new user.
- `GET /api/restaurants/:city`: Get online restaurants in a specific city.
- `POST /api/orders`: Place a new pizza order.

### Global Files

- **`.gitignore`**: Specifies files and directories that should be ignored by version control.
- **`package.json`**: Node.js package configuration file.

## Getting Started

To run the `user-service`, type `npm start` and the server will start running
