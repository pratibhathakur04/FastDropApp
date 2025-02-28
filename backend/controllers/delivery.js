const Delivery = require('../models/Delivery');
const Order = require('../models/Order');

// Schedule Delivery
exports.scheduleDelivery = async (req, res) => {
    const { orderId, scheduledDate } = req.body;
    try {
        const order = await Order.findById(orderId);
        if (!order) return res.status(404).json({ msg: 'Order not found' });

        const delivery = new Delivery({ order: orderId, scheduledDate });
        await delivery.save();
        res.json(delivery);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update Delivery Status
exports.updateDeliveryStatus = async (req, res) => {
    const { deliveryId, status } = req.body;
    try {
        const delivery = await Delivery.findById(deliveryId);
        if (!delivery) return res.status(404).json({ msg: 'Delivery not found' });

        delivery.status = status;
        await delivery.save();
        res.json(delivery);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};