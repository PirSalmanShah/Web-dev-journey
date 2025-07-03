import mongoose from "mongoose"
import express from 'express'
import {Blog} from "./models/Blog.js"
let conn = await mongoose.connect('mongodb://localhost:27017/Blog')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const blog = new Blog({ blogName: "My first Blog", blogDesc: "Hello Im writing description for my first blog", isLive: true });
    blog.save();
    res.send('Hello World!')
})

app.get('/find',async (req, res) => {
    let blog = await Blog.findOne({}) 
    console.log(blog);
    
    res.json({Name:blog.blogName,Desc:blog.blogDesc})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})