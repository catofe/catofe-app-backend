import mongoose from "mongoose";
import { ProductInstanceSchema } from "./product_instance.model.js";

const OrderSchema = mongoose.Schema(
    {
        prodcutInstances: [ProductInstanceSchema],
        total: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", OrderSchema);

export { OrderSchema, Order };
