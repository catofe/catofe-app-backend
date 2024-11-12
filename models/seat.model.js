import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const TableSchema = mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    vacant: {
        type: Boolean,
        required: true,
    },
});

const Table = mongoose.model("Table", TableSchema);

export default Table;
