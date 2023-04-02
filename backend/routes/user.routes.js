const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");

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
    const { email } = req.body;
    try {
        if (req.body.name && req.body.email && req.body.password && req.body.wallet) {
            const preCheck = await userModel.findOne({ email });
            if (!preCheck) {
                const hashedPassword = await bcrypt.hash(req.body.password, 7);
                const newUser = new userModel({ ...req.body, password: hashedPassword });
                await newUser.save();
                res.status(200).send({ msg: "User has been registered", status: "success" });
            } else {
                res.status(400).send({ msg: "User already registered" })
            }
        } else {
            res.status(400).send({ msg: "Invalid data format" })
        }
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

userRoutes.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        if (email && password) {
            const preCheck = await userModel.findOne({ email });
            if (preCheck) {
                const hashCheck = await bcrypt.compare(password, preCheck.password);
                const token = jwt.sign({ "userId": preCheck._id }, "decordash", { expiresIn: "1h" });
                if (hashCheck) {
                    res.status(200).send({ msg: "User logged in", status: "success", token });
                } else {
                    res.status(400).send({ msg: "Invalid password" });
                }
            } else {
                res.status(400).send({ msg: "User not found" });
            }
        } else {
            res.status(400).send({ msg: "Invalid data format" });
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