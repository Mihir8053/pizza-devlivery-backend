const Delivery = require('../models/Delivery');

const DeliveryController = {
    updateDeliveryStatus: async (req, res) => {
        const deliveryId = req.params.deliveryId;
        const { status } = req.body;

        try {
            const updatedDelivery = await Delivery.findByIdAndUpdate(
                deliveryId,
                { status },
                { new: true }
            );

            if (!updatedDelivery) {
                return res.status(404).json({ error: 'Delivery not found' });
            }

            res.json(updatedDelivery);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = DeliveryController;
