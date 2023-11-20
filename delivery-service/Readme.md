# Delivery Service

The `delivery-service` microservice facilitates order deliveries for our Pizza Delivery Application backend. Restaurant owners can update the status of pizza deliveries, allowing for efficient tracking and communication with users.

## Folder Structure

### `/src/controllers`

This directory contains controllers responsible for handling delivery-related logic. Each controller file is designed to manage specific functionalities related to updating the status of pizza deliveries.

### `/src/models`

Mongoose models defining the structure of data for the `delivery-service`. Key models include:

- **`Delivery.js`**: Defines the schema for delivery data.

### `/src/routes`

Express.js routes for handling delivery-related API endpoints. The routes are organized to provide a clear structure for handling different functionalities related to managing the status of pizza deliveries.

#### Example API Routes:

- `PUT /api/deliveries/:deliveryId`: Update the status of a pizza delivery.

### Global Files

- **`.gitignore`**: Specifies files and directories that should be ignored by version control.
- **`package.json`**: Node.js package configuration file. structure.

## Getting Started

To run the `delivery-service`, type `npm start` and the server will start running
