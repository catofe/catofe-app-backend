import mongoose from "mongoose";

const CartSchema = mongoose.Schema({});

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
