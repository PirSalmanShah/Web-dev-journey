import mongoose from "mongoose"
import express from 'express'
import { dummy } from "./models/dummy.js"
const app = express();
const port = 3000;

const conn = await mongoose.connect('mongodb://localhost:27017/dummy')

app.use(express.static("public"))

let nam = ["Salman", "Ahmed", "Hasnain"];
let lang = ["Js", "Python", "C++"];
let city = ["Karachi", "Lahore", "New York"]

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.post('/push', async (req, res) => {
    await dummy.deleteMany();

    await dummy.create({
        name: nam[Math.floor(Math.floor(Math.random() * 3))],
        salary: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        language: lang[Math.floor(Math.floor(Math.random() * 3))],
        city: city[Math.floor(Math.floor(Math.random() * 3))],
        isManger: Math.random() < 0.5});
    
    res.send("Post is triggered")
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);

})