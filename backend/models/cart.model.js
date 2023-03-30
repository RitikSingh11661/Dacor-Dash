const mongoose = require("mongoose");

const schema = mongoose.Schema({
    userId:String,
    name: String,
    image: String,
    brand: String,
    originalPrice: String,
    discountPrice: String,
    category: String
})

const cartModel = mongoose.model("cart", schema);

module.exports = { cartModel };