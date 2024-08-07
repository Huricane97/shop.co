const { Product } = require('../Model/product.js');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.singleProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ id: parseInt(req.params.id) });
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};
