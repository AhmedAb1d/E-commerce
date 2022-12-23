const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl:String,
    price: Number
});

module.exports = mongoose.model("Product", productSchema);