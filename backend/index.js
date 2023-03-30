const express = require("express");
const cors = require("cors");
const { adminRoutes } = require("./routes/admin.routes");
const { cartRoutes } = require("./routes/cart.routes");
const { orderRoutes } = require("./routes/order.routes");
const { prodRoutes } = require("./routes/prod.routes");
const { userRoutes } = require("./routes/user.routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/products", prodRoutes)
app.use("/admin", adminRoutes)
app.use("/cart", cartRoutes)
app.use("/order", orderRoutes)
app.use("/user", userRoutes)

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("DB connection established");
    } catch (e) {
        console.log(e.message);
    }
    console.log(`Server is live at port ${process.env.port}`);
})