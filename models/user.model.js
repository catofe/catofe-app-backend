import mongoose from "mongoose";
import { CartSchema } from "./cart.model.js";
import { OrderSchema } from "./order.model.js";
import { ReservationSchema } from "./reservation.model.js";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
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
        cart: CartSchema,
        orders: [OrderSchema],
        reservations: [ReservationSchema],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

export default User;
