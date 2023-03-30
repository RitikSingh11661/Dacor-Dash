const { userModel } = require("../models/user.model");

const express = reqire("express");

const userRoutes = express.Router();

userRoutes.get("/", async (req, res) => {
    try {
        const data = await userModel.find();
        res.status(200).send({ msg: data, status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
})

userRoutes.post("/add", async (req, res) => {
    try {
        if (req.body.name && req.body.email && req.body.password && req.body.wallet) {
            const newUser = new userModel(req.body);
            await newUser.save();
            res.status(200).send({ msg: "User has been registered", status: "success" });
        } else {
            res.status(400).send({ msg: "Invalid data format" })
        }
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

userRoutes.delete("/delete/:id", async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ msg: "User has been deleted", status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

userRoutes.patch("/update/:id", async (req, res) => {
    try {
        await userModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({ msg: "User details has been updated", status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

module.exports = { userRoutes };