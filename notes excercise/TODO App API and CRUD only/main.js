// POST /tasks - Add a task
// GET /tasks - Retrieve all tasks
// PUT /tasks/:id - Update a task (mark as complete, etc.)
// DELETE /tasks/:id - Delete a specific task

import express from "express"
import mongoose from "mongoose"
import {todo} from "./models/todo.js"

const app =express()
const port = 3000
const conn = mongoose.connect("mongodb://localhost:27017/todo")
let count =0;

app.use(express.json());


app.post("/tasks",async (req,res)=>{
    count++;
    await todo.create({id:count,title:req.body.title,desc:req.body.desc,complete:false})
    res.send("Post the task")
})

app.get("/tasks",async (req,res)=>{
    
    const datas = await todo.find()
    res.json(datas)
})
app.put("/tasks/:slug",async (req,res)=>{
    let tid = parseInt(req.params.slug)
    const datas = await todo.findOne({id:tid})
    datas.complete = true;
    await datas.save()
    res.send("Task Complete")
})

app.delete("/tasks/:slug",async (req,res)=>{
    let tid = parseInt(req.params.slug)
    const datas = await todo.deleteOne({id:tid})

    res.send("Task Delete")
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
    
})