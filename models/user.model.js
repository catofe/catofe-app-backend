import mongoose from "mongoose";
import { CartSchema } from "./cart.model.js";
import { OrderSchema } from "./order.model.js";
import { ReservationSchema } from "./reservation.model.js";
import { ProductInstanceSchema } from "./product_instance.model.js";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        contact_no: {
            type: String,
            required: false,
        },
        cart: [ProductInstanceSchema],
        orders: [OrderSchema],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

export default User;
