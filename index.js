import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import CartRouter from "./routes/cart.route";
import OrderRouter from "./routes/order.route";
import ProductRouter from "./routes/product.route";
import ReservationRouter from "./routes/reservation.route";
import SeatRouter from "./routes/seat.route";
import UserRouter from "./routes/user.route";

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
