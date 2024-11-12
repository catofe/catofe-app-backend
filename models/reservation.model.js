import mongoose from "mongoose";

const ReservationSchema = mongoose.Schema({});

const Reservation = mongoose.model("Reservation", ReservationSchema);

export default Reservation;
