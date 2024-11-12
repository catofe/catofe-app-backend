import mongoose from "mongoose";
import { ProductInstanceSchema } from "./product_instance.model";

const CartSchema = mongoose.Schema({
    prodcutInstances: [ProductInstanceSchema],
    total: {
        type: Number,
        required: true,
    },
});

const Cart = mongoose.model("Cart", CartSchema);

export { CartSchema, Cart };
