import mongoose from "mongoose";

const TableSchema = mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
        },
        vacant: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Table = mongoose.model("Table", TableSchema);

export { TableSchema, Table };
