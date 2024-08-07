require('dotenv').config();

const express = require('express');
const cors = require('cors');


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://mabdullahkhan13:LfvQTsWQiwnTOE52@cluster0.cys5sko.mongodb.net/shop');
  console.log("db connected")
}

const server = express();
server.use(cors());

const productRouter = require('./routes/products.js')
const userRouter = require('./routes/users.js')

server.use('/products', productRouter.routes)
server.use('/users', userRouter.routes)

// Start server
server.listen(process.env.PORT, () => {
  console.log('Server is running on port 4000');
  console.log(process.env);
});
