import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    id: Number,
    title: String,
    desc: String,
    complete: Boolean
})

export const todo = mongoose.model("todo",todoSchema)