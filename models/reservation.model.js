import mongoose from "mongoose";

const ReservationSchema = mongoose.Schema(
    {
        timeStart: {
            type: Date,
            required: true,
        },
        timeEnd: {
            type: Date,
            required: true,
        },
        status: {
            type: Number,
            required: true,
        },
        table: {
            type: mongoose.Schema.Types.ObjectId,
            rquired: true,
            ref: "Table",
        },
    },
    {
        timestamps: true,
    }
);

const Reservation = mongoose.model("Reservation", ReservationSchema);

export { ReservationSchema, Reservation };
