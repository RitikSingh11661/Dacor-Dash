const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    wallet: Number
})

const userModel = mongoose.model("user", schema);

module.exports = { userModel };

const obj = {
    "name": "test user 1",
    "email": "testuser1@gmail.com",
    "password": "testuser",
    "wallet": "100"
}