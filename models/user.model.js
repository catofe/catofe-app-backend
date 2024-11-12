import mongoose from "mongoose";
import { CartSchema } from "./cart.mode";
import { OrderSchema } from "./order.model";

const UserSchema = mongoose.Schema({
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
    orders: [OrderSchema],
    cart: CartSchema,
});

const User = mongoose.model("User", UserSchema);

export default User;
