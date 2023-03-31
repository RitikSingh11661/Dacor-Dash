const { adminModel } = require("../models/admin.model");

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminRoutes = express.Router();

adminRoutes.get("/", async (req, res) => {
    try {
        const data = await adminModel.find();
        res.status(200).send({ msg: data, status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
})

adminRoutes.post("/add", async (req, res) => {
    const { email } = req.body;
    try {
        if (req.body.name && req.body.email && req.body.password && req.body.contact && req.body.role && req.body.image) {
            const preCheck = await adminModel.findOne({ email });
            if (!preCheck) {
                const hashedPassword = await bcrypt.hash(req.body.password, 7);
                const newUser = new adminModel({ ...req.body, password: hashedPassword });
                await newUser.save();
                res.status(200).send({ msg: "Admin has been registered", status: "success" });
            } else {
                res.status(400).send({ msg: "Admin already registered" });
            }
        } else {
            res.status(400).send({ msg: "Invalid data format" });
        }
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

adminRoutes.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        if (email && password) {
            const preCheck = await adminModel.findOne({ email });
            if (preCheck) {
                const hashCheck = await bcrypt.compare(password, preCheck.password);
                const token = jwt.sign({ userId: preCheck._id }, "decordash", { expiresIn: "1h" });
                if (hashCheck) {
                    res.status(200).send({ msg: "Admin logged in", status: "success", token });
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

adminRoutes.delete("/delete/:id", async (req, res) => {
    try {
        await adminModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ msg: "Admin data has been deleted", status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

adminRoutes.patch("/update/:id", async (req, res) => {
    try {
        await adminModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({ msg: "Admin details has been updated", status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})


module.exports = { adminRoutes };