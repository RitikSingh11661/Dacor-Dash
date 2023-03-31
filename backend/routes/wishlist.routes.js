const { wishlistModel } = require("../models/wishlist.model");

const express = require("express");

const wishlistRoutes = express.Router();

wishlistRoutes.get("/", async (req, res) => {
    try {
        const data = await wishlistModel.find({ userId: req.body.userId });
        res.status(200).send({ msg: data, status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

wishlistRoutes.post("/add", async (req, res) => {
    const { prodId, userId } = req.body;
    try {
        const preCheck = await cartModel.findOne({ prodId, userId });
        if (!preCheck) {
            if (req.body.prodId && req.body.userId && req.body.name && req.body.image && req.body.brand && req.body.originalPrice && req.body.discountPrice && req.body.category) {
                const newData = new wishlistModel(req.body);
                await newData.save();
                res.status(200).send({ msg: "Product has been added to cart", status: "success" });
            } else {
                res.status(400).send({ msg: "Invalid format" });
            }
        } else {
            res.status(400).send({ msg: "Product already present" });
        }
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

wishlistRoutes.delete("/delete/:id", async (req, res) => {
    try {
        await wishlistModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ msg: "Cart item has been deleted", status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

wishlistRoutes.patch("/update/:id", async (req, res) => {
    try {
        await wishlistModel.findByIdAndDelete(req.params.id, req.body);
        res.status(200).send({ msg: "Cart item details has been updated", status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

module.exports = { wishlistRoutes };