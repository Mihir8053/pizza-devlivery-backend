// /user-service/src/controllers/userController.js
const { User, Restaurant } = require('../models/User');

const UserController = {
    getUserProfile: async (req, res) => {
        const userId = req.params.userId;

        try {
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    updateUserProfile: async (req, res) => {
        const userId = req.params.userId;
        const { username, email } = req.body;

        try {
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { username, email },
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getUserOrderHistory: async (req, res) => {
        const userId = req.params.userId;

        try {
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(user.orderHistory);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    placeOrder: async (req, res) => {
        const userId = req.params.userId;
        const { restaurantId, items } = req.body;

        try {
            const user = await User.findById(userId);
            const restaurant = await Restaurant.findById(restaurantId);

            if (!user || !restaurant) {
                return res.status(404).json({ error: 'User or Restaurant not found' });
            }

            const totalAmount = calculateTotalAmount(items); // Implement a function to calculate the total amount
            const order = {
                restaurant: restaurantId,
                items,
                totalAmount,
            };

            user.orderHistory.push(order);
            await user.save();

            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getOnlineRestaurants: async (req, res) => {
        const userId = req.params.userId;

        try {
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const onlineRestaurants = await Restaurant.find({
                city: user.city,
                isOnline: true, // Only retrieve online restaurants
            });

            res.json(onlineRestaurants);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

function calculateTotalAmount(items) {
    let totalAmount = 0;

    items.forEach((item) => {
        // Assuming each item has a 'price' property
        totalAmount += item.price * item.quantity;
    });

    return totalAmount;
}

module.exports = UserController;
