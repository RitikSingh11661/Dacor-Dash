const { prodModel } = require("../models/product.model");

const express = reqire("express");

const prodRoutes = express.Router();

prodRoutes.get("/", (req, res) => {
    res.send("All products");

})

prodRoutes.post("/add", (req, res) => {
    res.send("product add");

})

prodRoutes.delete("/delete/:id", (req, res) => {
    res.send("Product delete");

})

prodRoutes.patch("/update/:id", (req, res) => {
    res.send("Product update");
})


module.exports = { prodRoutes };