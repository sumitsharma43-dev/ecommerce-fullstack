const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Payment Schema
const PaymentSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
        default: 'usd'
    },
    stripePaymentIntentId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Payment', PaymentSchema);