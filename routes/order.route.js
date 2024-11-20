import express from "express";
import User from "../models/user.model.js";
import { Product } from "../models/product.model.js";

const OrderRouter = express.Router();

OrderRouter.get("/:uid/", async (req, res) => {
    try {
        const { uid, order_id } = req.params;
        const user = await User.findById(uid);
        res.status(200).send(JSON.stringify(user.orders, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

OrderRouter.put("/:uid/generate_order", async (req, res) => {
    try {
        const { uid } = req.params;
        const user = await User.findById(uid);

        const cart = user.cart;

        let total = 0;
        let order = {
            prodcutInstances: [],
            total: 0,
        };

        for (let product_instance of cart) {
            let product_id = product_instance.product.toHexString();
            const product = await Product.findById(product_id);

            total = total + product.price * product_instance.quantity;
            total = parseFloat(total.toFixed(2));
        }

        order.prodcutInstances = cart;
        order.total = total;

        try {
            user.cart = [];
            user.orders.push(order);
            await user.save();
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
            return;
        }

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const updated = await User.findById(uid);
        res.status(200).send(JSON.stringify(updated, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

OrderRouter.delete("/:uid/delete_order/:order_id", async (req, res) => {
    try {
        const { uid, order_id } = req.params;
        const user = await User.findById(uid);

        await User.updateOne(
            { _id: uid },
            { $pull: { orders: { _id: order_id } } }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const updated = await User.findById(uid);
        res.status(200).send(JSON.stringify(updated, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

export default OrderRouter;
