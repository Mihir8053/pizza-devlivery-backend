const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Out for Delivery', 'Delivered'],
        default: 'Pending',
    },
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;
