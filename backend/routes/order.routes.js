const { orderModel } = require("../models/order.model");

const express = require("express");

const orderRoutes = express.Router();

orderRoutes.get("/", async (req, res) => {
    try {
        const data = await orderModel.find({ userId: req.body.userId });
        res.status(200).send({ msg: data, status: "success" })
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

orderRoutes.get("/allorders", async (req, res) => {
    try {
        const data = await orderModel.find();
        res.status(200).send({data,status:"success"})
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

orderRoutes.post("/add", async (req, res) => {
    try {
        if (req.body.userId && req.body.status && req.body.name && req.body.image && req.body.brand && req.body.originalPrice && req.body.discountPrice && req.body.category) {
            const newData = new orderModel(req.body);
            await newData.save();
            res.status(200).send({ msg: "Order has been added", status: "success" });
        } else {
            res.status(400).send({ msg: "Invalid format" });
        }
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

orderRoutes.delete("/delete/:id", async (req, res) => {
    try {
        await orderModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ msg: "Order has been deleted", status: "success" })
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

orderRoutes.patch("/update/:id", async (req, res) => {
    try {
        await orderModel.findByIdAndDelete(req.params.id, req.body);
        res.status(200).send({ msg: "Order details has been updated", status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

module.exports = { orderRoutes };