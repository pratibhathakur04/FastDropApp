const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    scheduledDate: { type: Date, required: true },
    status: { type: String, enum: ['scheduled', 'out-for-delivery', 'delivered'], default: 'scheduled' },
});

module.exports = mongoose.model('Delivery', deliverySchema);