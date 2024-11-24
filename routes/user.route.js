import express from "express";
import User from "../models/user.model.js";
import { ProductInstance } from "../models/product_instance.model.js";

const UserRouter = express.Router();

UserRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).send(JSON.stringify(user, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

UserRouter.get("/:id/non_sensitive", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).select({ password: 0 });
        res.status(200).send(JSON.stringify(user, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

UserRouter.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(JSON.stringify(users, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

UserRouter.get("/auth/:email/:password", async (req, res) => {
    try {
        const { email, password } = req.params;
        const user = await User.findOne({ email: email, password: password });

        res.status(200).send(JSON.stringify(user._id, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

UserRouter.post("/register", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).send(JSON.stringify(user, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

UserRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const updated = await User.findById(id);
        res.status(200).send(JSON.stringify(updated, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

UserRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).send(JSON.stringify(user, null, 2));
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

export default UserRouter;
