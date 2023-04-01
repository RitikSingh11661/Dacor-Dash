const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:String,
    image: Object,
    brand: String,
    originalPrice: String,
    discountPrice: String,
    category: String
})

const prodModel = mongoose.model("product", schema);

module.exports = { prodModel };