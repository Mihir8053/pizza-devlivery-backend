// /user-service/src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Define routes
router.get('/:userId', UserController.getUserProfile);
router.put('/:userId', UserController.updateUserProfile);
router.get('/:userId/orders', UserController.getUserOrderHistory);
router.post('/:userId/orders', UserController.placeOrder);
router.get('/:userId/restaurants', UserController.getOnlineRestaurants);

module.exports = router;
