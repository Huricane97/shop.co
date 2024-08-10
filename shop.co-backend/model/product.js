const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true},

});

const Product = mongoose.model('Product', productsSchema);
module.exports = { Product };
