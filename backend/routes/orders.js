const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const orderController = require('../controllers/orders');

router.post('/', auth, orderController.createOrder);
router.get('/', auth, orderController.getUserOrders);

module.exports = router;

