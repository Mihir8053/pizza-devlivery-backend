# Admin Service

The `admin-service` microservice handles admin-related functionalities for our Pizza Delivery Application backend. Admin users can add or remove restaurants from the platform.

## Folder Structure

### `/src/controllers`

This directory contains controllers responsible for handling admin-related logic. Each controller file is designed to manage specific functionalities related to adding or removing restaurants.

### `/src/models`

Mongoose models defining the structure of data for the `admin-service`. Key models include:

- **`Restaurant.js`**: Defines the schema for restaurant data.

### `/src/routes`

Express.js routes for handling admin-related API endpoints. The routes are organized to provide a clear structure for handling different functionalities related to managing restaurants.

#### Example API Routes:

- `POST /api/admin/restaurants`: Add a new restaurant to the platform.
- `DELETE /api/admin/restaurants/:restaurantId`: Remove a restaurant from the platform.

### Global Files

- **`.gitignore`**: Specifies files and directories that should be ignored by version control.
- **`package.json`**: Node.js package configuration file.structure.

## Getting Started

To run the `admin-service`, type `npm start` and the server will start running
