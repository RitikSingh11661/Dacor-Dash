const mongoose = require("mongoose");

const schema = mongoose.Schema({
    userId: String,
    status: String,
    name: String,
    image: String,
    brand: String,
    originalPrice: String,
    discountPrice: String,
    category: String
})

const orderModel = mongoose.model("order", schema);

module.exports = { orderModel };