const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters long"]
    },
    price: {
        type: Number,
        require: [true, "Price is required"],
        min: [0.01, "Price must be greater than 0"]
    },
    description: {
        type: String,
        require: [true, "Description is required"],
        minlength: [5, "Description must be at least 5 characters"]
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;