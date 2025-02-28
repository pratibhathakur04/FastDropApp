const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const deliveryController = require('../controllers/delivery');

router.post('/schedule', auth, deliveryController.scheduleDelivery);
router.put('/status', auth, deliveryController.updateDeliveryStatus);

module.exports = router;