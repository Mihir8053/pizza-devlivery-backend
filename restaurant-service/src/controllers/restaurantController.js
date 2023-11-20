// /restaurant-service/src/controllers/restaurantController.js
const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');

const RestaurantController = {
    addMenuItem: async (req, res) => {
        const restaurantId = req.params.restaurantId;
        const { name, price } = req.body;

        try {
            const restaurant = await Restaurant.findById(restaurantId);
            if (!restaurant) {
                return res.status(404).json({ error: 'Restaurant not found' });
            }

            const newMenuItem = new MenuItem({ name, price });
            await newMenuItem.save();

            restaurant.menu.push(newMenuItem._id);
            await restaurant.save();

            res.status(201).json(newMenuItem);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    updateMenuItem: async (req, res) => {
        const menuItemId = req.params.menuItemId;
        const { name, price } = req.body;

        try {
            const updatedMenuItem = await MenuItem.findByIdAndUpdate(
                menuItemId,
                { name, price },
                { new: true }
            );

            if (!updatedMenuItem) {
                return res.status(404).json({ error: 'Menu Item not found' });
            }

            res.json(updatedMenuItem);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    removeMenuItem: async (req, res) => {
        const menuItemId = req.params.menuItemId;

        try {
            const removedMenuItem = await MenuItem.findByIdAndRemove(menuItemId);

            if (!removedMenuItem) {
                return res.status(404).json({ error: 'Menu Item not found' });
            }

            res.json({ message: 'Menu Item removed successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    toggleRestaurantStatus: async (req, res) => {
        const restaurantId = req.params.restaurantId;

        try {
            const restaurant = await Restaurant.findById(restaurantId);

            if (!restaurant) {
                return res.status(404).json({ error: 'Restaurant not found' });
            }

            restaurant.isOnline = !restaurant.isOnline;
            await restaurant.save();

            res.json({ isOnline: restaurant.isOnline });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = RestaurantController;
