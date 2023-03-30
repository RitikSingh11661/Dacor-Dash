const { orderModel } = require("../models/order.model");

const express = reqire("express");

const orderRoutes = express.Router();

orderRoutes.get("/", async (req, res) => {
    try {
        const data = await orderModel.find();
        res.status(200).send({ msg: data, status: success })
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

orderRoutes.post("/add", async (req, res) => {
    // try {
    //     if (req.body.userId && status && name && image && brand && originalPrice && discountPrice && category)
    //         const newData = await orderModel({})
    // } catch (e) {

    // }
})

orderRoutes.delete("/delete/:id", (req, res) => {
    res.send("Order delete");

})

orderRoutes.patch("/update/:id", (req, res) => {
    res.send("Order update");
})

module.exports = { orderRoutes };