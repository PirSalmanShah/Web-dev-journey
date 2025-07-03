import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  blogName: String,
  blogDesc:String,
  isLive:Boolean
});

export const Blog = mongoose.model("Blog",BlogSchema)