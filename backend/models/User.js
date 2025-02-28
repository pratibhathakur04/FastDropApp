const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
});

module.exports = mongoose.model('User', userSchema);