import mongoose from "mongoose";

const jsondata = new mongoose.Schema({
    name: String,
    birthday: String,
    city: String
})

export const Data = mongoose.model("Data",jsondata)