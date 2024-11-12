import mongoose from "mongoose";

const SeatSchema = mongoose.Schema({});

const Seat = mongoose.model("Seat", SeatSchema);

export default Seat;
