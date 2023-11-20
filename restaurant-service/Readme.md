# Restaurant Service

The `restaurant-service` microservice handles restaurant-related functionalities for our Pizza Delivery Application backend. Restaurant owners can manage their menus, add/update/remove items, and control the online/offline status of their establishments.

## Folder Structure

### `/src/controllers`

This directory contains controllers responsible for handling restaurant-related logic. Each controller file is designed to manage specific functionalities related to managing menus, updating items, and controlling restaurant status.

### `/src/models`

Mongoose models defining the structure of data for the `restaurant-service`. Key models include:

- **`Restaurant.js`**: Defines the schema for restaurant data.
- **`MenuItem.js`**: Defines the schema for menu item data.

### `/src/routes`

Express.js routes for handling restaurant-related API endpoints. The routes are organized to provide a clear structure for handling different functionalities related to managing menus and controlling restaurant status.

#### Example API Routes:

- `POST /api/restaurants/:restaurantId/menu`: Add a new menu item to a restaurant.
- `PUT /api/menu/:menuItemId`: Update details of a menu item.
- `DELETE /api/menu/:menuItemId`: Remove a menu item.
- `PATCH /api/restaurants/:restaurantId/toggle-status`: Toggle the online/offline status of a restaurant.

### Global Files

- **`.gitignore`**: Specifies files and directories that should be ignored by version control.
- **`package.json`**: Node.js package configuration file.

## Getting Started

To run the `restaurant-service`, type `npm start` and the server will start running
