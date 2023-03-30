const { adminModel } = require("../models/admin.model");

const express = reqire("express");

const adminRoutes = express.Router();

adminRoutes.get("/", (req, res) => {
    res.send("All admins");
})

adminRoutes.post("/add", (req, res) => {
    res.send("admin add");

})

adminRoutes.delete("/delete/:id", (req, res) => {
    res.send("admin delete");

})

adminRoutes.patch("/update/:id", (req, res) => {
    res.send("admin update");
})


module.exports = { adminRoutes };