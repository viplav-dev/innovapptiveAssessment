"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const noteSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: [true, "A title is required to create a note"],
    },
    description: {
        type: String,
        required: [true, "Note should have a content"],
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});
exports.Note = mongoose.model("Note", noteSchema);
