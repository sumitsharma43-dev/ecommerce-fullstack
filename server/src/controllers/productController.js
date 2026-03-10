// productController.js

const products = [];

// Get all products
const getAllProducts = (req, res) => {
    res.status(200).json(products);
};

// Get product by ID
const getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.status(200).json(product);
};

// Create product
const createProduct = (req, res) => {
    const product = {
        id: products.length + 1,
        ...req.body
    };
    products.push(product);
    res.status(201).json(product);
};

// Update product
const updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    Object.assign(product, req.body);
    res.status(200).json(product);
};

// Delete product
const deleteProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found');
    products.splice(productIndex, 1);
    res.status(204).send();
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };