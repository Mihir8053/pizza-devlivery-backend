const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');

router.post('/restaurants', AdminController.addRestaurant);
router.delete('/restaurants/:restaurantId', AdminController.removeRestaurant);

module.exports = router;
