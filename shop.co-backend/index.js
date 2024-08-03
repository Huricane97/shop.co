const fs = require('fs');
const express = require('express');
const cors = require('cors');

const data = JSON.parse(fs.readFileSync("./data.json", 'utf-8'));
const server = express();
server.use(cors());

// Root route
server.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Products route
server.get('/products', (req, res) => {
  res.json(data.products);
});

// Single product route
server.get('/products/:id', (req, res) => {
  const product = data.products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Start server
server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
