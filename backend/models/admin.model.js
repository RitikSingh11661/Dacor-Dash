const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    contact: String,
    image: String
})

const adminModel = mongoose.model("admin", schema);

module.exports = { adminModel };