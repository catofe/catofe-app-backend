import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();
const connectionString = ``;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
    .connect(connectionString)
    .then(() => {
        console.log("Connected to MongoDB database successfully");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Connection to MongoDB database failed");
    });
