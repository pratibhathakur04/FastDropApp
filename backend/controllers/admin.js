const Order = require('../models/Order');

// Get All Orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update Order Status
exports.updateOrderStatus = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        const order = await Order.findById(orderId);
        if (!order) return res.status(404).json({ msg: 'Order not found' });

        order.status = status;
        await order.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};