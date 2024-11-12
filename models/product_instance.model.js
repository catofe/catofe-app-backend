import mongoose from "mongoose";

const ProductInstanceSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const ProductInstance = mongoose.model(
    "ProductInstance",
    ProductInstanceSchema
);

export { ProductInstanceSchema, ProductInstance };
