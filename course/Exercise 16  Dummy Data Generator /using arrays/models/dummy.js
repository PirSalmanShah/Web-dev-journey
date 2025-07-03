import mongoose from "mongoose";

//  name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
const dummySchema = new mongoose.Schema({
  name: String,
  salary:Number,
  language: String,
  city : String,
  isManger: Boolean
});

export const dummy = mongoose.model("dummy",dummySchema)