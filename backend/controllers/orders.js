const Order = require('../models/Order');
const User = require('../models/User');

// Create Order
exports.createOrder = async (req, res) => {
    const { items, totalAmount } = req.body;
    try {
        const user = await User.findById(req.user.id).select('-password');
        const order = new Order({ user: user.id, items, totalAmount });
        await order.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get User Orders
exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};