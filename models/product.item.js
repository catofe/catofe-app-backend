import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
