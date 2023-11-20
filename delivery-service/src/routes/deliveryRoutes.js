const express = require('express');
const router = express.Router();
const DeliveryController = require('../controllers/deliveryController');

router.patch('/:deliveryId', DeliveryController.updateDeliveryStatus);

module.exports = router;
