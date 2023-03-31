const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    contact: String,
    role: String,
    image: String
})

const adminModel = mongoose.model("admin", schema);

module.exports = { adminModel };

const obj = {
    "name": "Test user 1",
    "email": "testuser@gmail.com",
    "password": "testuser",
    "contact": 1234567890,
    "image": "http://url.com"
}