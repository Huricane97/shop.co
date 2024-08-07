const fs = require('fs');

const data = JSON.parse(fs.readFileSync("./data.json", 'utf-8'));

exports.getProducts = (req, res) => {
    res.json(data.products);
  
};


exports.singleProduct = (req, res) => {
    const product = data.products.find(p => p.id === parseInt(req.params.id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
};