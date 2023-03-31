const express = require("express");
const cors = require("cors");
const { adminRoutes } = require("./routes/admin.routes");
const { cartRoutes } = require("./routes/cart.routes");
const { orderRoutes } = require("./routes/order.routes");
const { prodRoutes } = require("./routes/prod.routes");
const { userRoutes } = require("./routes/user.routes");
const { connection } = require("./configs/db");
const { verifyToken } = require("./middlewares/auth.middleware");
const { wishlistRoutes } = require("./routes/wishlist.routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.use("/product", prodRoutes);

app.use(verifyToken);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);
app.use("/wishlist", wishlistRoutes);
app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Database connection established");
    } catch (e) {
        console.log(e.message);
    }
    console.log(`Server is live at port ${process.env.port}`);
})