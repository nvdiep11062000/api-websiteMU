const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'Please enter a product name'],
        },
        quantity: {
            type: Number,
            require: true,
            default: 0,
        },
        price: {
            type: Number,
            require: true,
        },
        image: {
            type: String,
            require: false,
        },
        category: {
            type: String,
        },
        kitType: {
            type: String,
        },
    },
    { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
