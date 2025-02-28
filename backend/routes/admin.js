const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const adminController = require("../controllers/admin");

router.get("/orders", auth, adminController.getAllOrders);
router.put("/orders/status", auth, adminController.updateOrderStatus);

module.exports = router;
