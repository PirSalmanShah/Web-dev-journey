import express from "express"
import mongoose from "mongoose"
import {Data} from "./models/jsondata.js"
const app =express()
const port= 3000;
const connn = await mongoose.connect("mongodb://localhost:27017/exdummy")

app.get('/',async (req, res) => {
    let a = await fetch('https://dummyjson.com/users')
    let b = await a.json();

    b.users.forEach(async user => {
        await Data.create({name:user.firstName,birthday:user.birthDate,city:user.address.city})
    });
    console.log(b);
    
  res.send('Hello World!')
})

app.delete('/delete',async (req, res) => {
   await Data.deleteMany()

  res.send('Hello Delete!')
})

app.get('/fetch',async (req, res) => {
   await Data.find()

  res.send('Hello Delete!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// GPT Correction
// import express from "express";
// import mongoose from "mongoose";
// import { Data } from "./models/jsondata.js";

// const app = express();
// const port = 3000;

// // DB Connection
// await mongoose.connect("mongodb://localhost:27017/exdummy");

// // Dummy data insert
// app.get('/', async (req, res) => {
//   const response = await fetch('https://dummyjson.com/users');
//   const data = await response.json();

//   await Data.deleteMany(); // clear old first

//   await Promise.all(
//     data.users.map(user =>
//       Data.create({
//         name: user.firstName,
//         birthday: user.birthDate,
//         city: user.address.city
//       })
//     )
//   );

//   res.send('Dummy data inserted!');
// });

// // Delete all data
// app.delete('/delete', async (req, res) => {
//   await Data.deleteMany();
//   res.send('All data deleted!');
// });

// // Fetch all data
// app.get('/fetch', async (req, res) => {
//   const data = await Data.find();
//   res.json(data);
// });

// // Listen
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
