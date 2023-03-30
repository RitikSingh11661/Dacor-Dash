const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.port);

module.exports = { connection };