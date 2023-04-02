// const { verifyToken } = require("../middlewares/auth.middleware");
const { verifyToken } = require("../middlewares/auth.middleware");
const { prodModel } = require("../models/product.model");

const express = require("express");

const prodRoutes = express.Router();

prodRoutes.get("/", async (req, res) => {
    try {
        const query = req.query;
        let queryToSend = {};
        let sortQuery = {};
        let limit = query.limit || 10;
        let skip;
        let sort = [];
        let orderBy = [];
        if (sort[0] !== undefined) {
            sort = query.sort.split(",");
            orderBy = query.orderBy.split(",");
        }
        let toSort;
        let toOrder;
        const n = Math.min(sort.length, orderBy.length);
        console.log(sort, orderBy);
        if (query.brand) {
            queryToSend = { ...queryToSend, brand: query.brand };
        }
        if (query.category) {
            queryToSend = { ...queryToSend, category: query.category };
        }
        for (let i = 0; i < n; i++) {
            if (orderBy[i] === "asc" && sort[i]) {
                toSort = sort[i];
                toOrder = 1;
                sortQuery[toSort] = toOrder;
            } else if (orderBy[i] === "desc" && sort[i]) {
                toSort = sort[i];
                toOrder = -1;
                sortQuery[toSort] = toOrder;
            }
        }
        if (query.category) {
            queryToSend = { ...queryToSend, category: query.category };
        }
        if (query.page) {
            if (query.limit) {
                limit = +query.limit;
            }
            skip = (+query.page - 1) * limit;
        }
        const data = await prodModel.find(queryToSend).limit(limit).skip(skip * limit).sort(sortQuery);
        res.status(200).send({ msg: data, status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
})

prodRoutes.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await prodModel.find({ _id: id });
        res.status(200).send({ msg: [data], status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message })
    }
})

// Below's for admin only
prodRoutes.use(verifyToken);

prodRoutes.post("/add", async (req, res) => {
    const { name, images, brand, originalPrice, discountPrice, category } = req.body;
    console.log('req.body',req.body);
    console.log(name, images, brand, originalPrice, discountPrice, category)
    try {
        if (name && images && brand && originalPrice && discountPrice && category) {
            const newUser = new prodModel(req.body);
            await newUser.save();
            res.status(200).send({ msg: "Product has been added", status: "success" });
        } else {
            res.status(400).send({ msg: "Invalid data format" })
        }
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

prodRoutes.delete("/delete/:id", async (req, res) => {
    try {
        await prodModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ msg: "Product has been deleted", status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

prodRoutes.patch("/update/:id", async (req, res) => {
    try {
        await prodModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({ msg: "Product details has been updated", status: "success" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
})

module.exports = { prodRoutes };

// {
//     "name":"test1",
//     "images":["images.link1"],
//     "brand": "test",
//     "originalPrice":1000,
//     "discountPrice":500,
//     "category":"test"
// }