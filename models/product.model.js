import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        available: {
            type: Boolean,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            default: "",
            required: true,
        },
        frequency: {
            type: Number,
            default: 0,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);

export { ProductSchema, Product };
