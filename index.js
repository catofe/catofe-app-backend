import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import CartRouter from "./routes/cart.route.js";
import OrderRouter from "./routes/order.route.js";
import ProductRouter from "./routes/product.route.js";
import ReservationRouter from "./routes/reservation.route.js";
import SeatRouter from "./routes/seat.route.js";
import UserRouter from "./routes/user.route.js";

const app = express();
const connectionString = ``;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/cart/", CartRouter);
app.use("/api/order/", OrderRouter);
app.use("/api/product/", ProductRouter);
app.use("/api/reservation/", ReservationRouter);
app.use("/api/seat/", SeatRouter);
app.use("/api/user/", UserRouter);

mongoose
    .connect(connectionString)
    .then(() => {
        console.log("Connected to MongoDB database successfully");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Connection to MongoDB database failed");
    });
