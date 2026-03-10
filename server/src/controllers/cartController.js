const Cart = require('../models/cartModel');

// Get cart
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.find({ userId: req.user.id });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving cart', error });
    }
};

// Add to cart
exports.addToCart = async (req, res) => {
    try {
        const item = req.body;
        await Cart.create({ userId: req.user.id, ...item });
        res.status(200).json({ message: 'Item added to cart' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding item to cart', error });
    }
};

// Remove from cart
exports.removeFromCart = async (req, res) => {
    try {
        const { itemId } = req.params;
        await Cart.deleteOne({ userId: req.user.id, _id: itemId });
        res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing item from cart', error });
    }
};

// Update quantity
exports.updateQuantity = async (req, res) => {
    try {
        const { itemId, quantity } = req.body;
        await Cart.updateOne({ userId: req.user.id, _id: itemId }, { quantity });
        res.status(200).json({ message: 'Quantity updated' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating quantity', error });
    }
};

// Clear cart
exports.clearCart = async (req, res) => {
    try {
        await Cart.deleteMany({ userId: req.user.id });
        res.status(200).json({ message: 'Cart cleared' });
    } catch (error) {
        res.status(500).json({ message: 'Error clearing cart', error });
    }
};