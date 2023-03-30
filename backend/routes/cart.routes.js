const { cartModel } = require("../models/cart.model");

const express = reqire("express");

const cartRoutes = express.Router();

cartRoutes.get("/", (req, res) => {
    res.send("All carts");
    
})

cartRoutes.post("/add", (req, res) => {
    res.send("cart add");

})

cartRoutes.delete("/delete/:id", (req, res) => {
    res.send("cart delete");

})

cartRoutes.patch("/update/:id", (req, res) => {
    res.send("cart update");
})

module.exports = { cartRoutes };