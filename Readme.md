# Pizza Delivery Application - Backend

Welcome to the backend of our Pizza Delivery Application! This repository houses the server-side code that powers our platform. Let's take a tour of the folder structure to get you acquainted with the different components.

## Folder Structure

### `admin-service`

The `admin-service` directory contains the microservice responsible for handling admin-related functionalities. Admin users can add or remove restaurants from the platform. Here's a breakdown:

- **`/src/controllers`**: Controllers for handling admin-related logic.
- **`/src/models`**: Mongoose models defining the structure of data (e.g., Restaurant).
- **`/src/routes`**: Express.js routes for handling admin-related API endpoints.

### `delivery-service`

The `delivery-service` directory hosts the microservice that facilitates order deliveries. Restaurant owners can update the status of pizza deliveries. Here's what you'll find:

- **`/src/controllers`**: Controllers for managing delivery-related logic.
- **`/src/models`**: Mongoose models defining the structure of data (e.g., Delivery).
- **`/src/routes`**: Express.js routes for handling delivery-related API endpoints.

### `restaurant-service`

In the `restaurant-service` directory, we handle restaurant-related functionalities, allowing owners to manage their menus and online/offline status. Let's break it down:

- **`/src/controllers`**: Controllers for handling restaurant-related logic.
- **`/src/models`**: Mongoose models defining the structure of data (e.g., Restaurant, MenuItem).
- **`/src/routes`**: Express.js routes for handling restaurant-related API endpoints.

### `user-service`

The `user-service` directory contains the microservice responsible for user-related operations, such as checking out restaurants, placing orders, and maintaining order history. Dive into:

- **`/src/controllers`**: Controllers for handling user-related logic.
- **`/src/models`**: Mongoose models defining the structure of data (e.g., User, Order).
- **`/src/routes`**: Express.js routes for handling user-related API endpoints.

### Global Files

- **`.gitignore`**: Specifies files and directories that should be ignored by version control.
- **`package.json`**: Node.js package configuration file.
- **`README.md`**: The file you're currently reading! It provides an overview of the project structure.

## Getting Started

To run the backend services, navigate to each service's directory and follow the instructions in their respective README files.

## The mongoDBURI are not defined currently
