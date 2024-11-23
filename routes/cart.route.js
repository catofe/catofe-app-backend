import express from "express";
import User from "../models/user.model.js";

const CartRouter = express.Router();

CartRouter.get("/:uid/", async (req, res) => {
    try {
        const { uid } = req.params;
        const user = await User.findById(uid);
        res.status(200).send(JSON.stringify(user.cart, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

CartRouter.get("/:uid/detailed", async (req, res) => {
    try {
        const { uid } = req.params;
        const user = await User.findById(uid).populate({
            path: "cart",
            populate: {
                path: "product",
                model: "Product",
            },
        });

        res.status(200).send(JSON.stringify(user.cart, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

CartRouter.put("/:uid/update_cart", async (req, res) => {
    try {
        const { uid } = req.params;
        const user = await User.findById(uid);
        const cart = req.body;
        console.log(req.body);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        try {
            user.cart = cart;
            await user.save();
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
            return;
        }

        const updated = await User.findById(uid);
        res.status(200).send(JSON.stringify(updated.cart, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

CartRouter.put("/:uid/update_cart/detailed", async (req, res) => {
    try {
        const { uid } = req.params;
        const user = await User.findById(uid);
        const cart = req.body;
        console.log(req.body);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        try {
            user.cart = cart;
            await user.save();
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
            return;
        }

        const updated = await User.findById(uid).populate({
            path: "cart",
            populate: {
                path: "product",
                model: "Product",
            },
        });
        res.status(200).send(JSON.stringify(updated.cart, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

CartRouter.put("/:uid/add_to_cart", async (req, res) => {
    try {
        const { uid } = req.params;
        const user = await User.findById(uid);

        try {
            user.cart.push(req.body);
            console.log(req.body);
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
        res.status(200).send(JSON.stringify(updated.cart, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

CartRouter.delete(
    "/:uid/remove_from_cart/:product_instance_id",
    async (req, res) => {
        try {
            const { uid, product_instance_id } = req.params;
            const user = await User.findById(uid);

            await User.updateOne(
                { _id: uid },
                { $pull: { cart: { _id: product_instance_id } } }
            );

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            const updated = await User.findById(uid);
            res.status(200).send(JSON.stringify(updated.cart, null, 2));
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }
    }
);

CartRouter.delete(
    "/:uid/remove_from_cart/:product_instance_id/detailed",
    async (req, res) => {
        try {
            const { uid, product_instance_id } = req.params;
            const user = await User.findById(uid);

            await User.updateOne(
                { _id: uid },
                { $pull: { cart: { _id: product_instance_id } } }
            );

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            const updated = await User.findById(uid).populate({
                path: "cart",
                populate: {
                    path: "product",
                    model: "Product",
                },
            });

            res.status(200).send(JSON.stringify(updated.cart, null, 2));
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }
    }
);

export default CartRouter;
