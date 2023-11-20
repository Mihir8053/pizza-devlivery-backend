const Restaurant = require('../models/Restaurant');

const AdminController = {
    addRestaurant: async (req, res) => {
        const { name, city } = req.body;

        try {
            const newRestaurant = new Restaurant({ name, city });
            await newRestaurant.save();

            res.status(201).json(newRestaurant);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    removeRestaurant: async (req, res) => {
        const restaurantId = req.params.restaurantId;

        try {
            const removedRestaurant = await Restaurant.findByIdAndRemove(restaurantId);

            if (!removedRestaurant) {
                return res.status(404).json({ error: 'Restaurant not found' });
            }

            res.json({ message: 'Restaurant removed successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = AdminController;
