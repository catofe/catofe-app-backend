import mongoose from "mongoose";
import { ProductInstanceSchema } from "./product_instance.model";

const OrderSchema = mongoose.Schema({
    prodcutInstances: [ProductInstanceSchema],
    total: {
        type: Number,
        required: true,
    },
});

const Order = mongoose.model("Order", OrderSchema);

export { OrderSchema, Order };
