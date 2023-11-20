// /user-service/src/models/User.js
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    isOnline: {
        type: Boolean,
        default: true,
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    city: {
        type: String,
        required: true,
    },

    // Order history
    orderHistory: [
        {
            restaurant: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Restaurant',
                required: true,
            },
            items: [
                {
                    itemName: {
                        type: String,
                        required: true,
                    },
                    quantity: {
                        type: Number,
                        required: true,
                    },
                },
            ],
            totalAmount: {
                type: Number,
                required: true,
            },
            orderDate: {
                type: Date,
                default: Date.now,
            },
        },
    ],

    // Other fields related to user preferences, authentication, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = { User, Restaurant };
