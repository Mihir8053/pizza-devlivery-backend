// /restaurant-service/src/routes/restaurantRoutes.js
const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/restaurantController');

// Define routes
router.post('/:restaurantId/menu', RestaurantController.addMenuItem);
router.put('/menu/:menuItemId', RestaurantController.updateMenuItem);
router.delete('/menu/:menuItemId', RestaurantController.removeMenuItem);
router.patch('/:restaurantId/toggle-status', RestaurantController.toggleRestaurantStatus);

module.exports = router;
