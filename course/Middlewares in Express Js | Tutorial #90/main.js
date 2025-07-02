const express =require('express')
const app = express()
const port =3000
const fs = require('fs')

const blog = require('./routes/blog')



app.use('/blog', blog)
// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

// or
// This is middleware 1 is a logger for app
app.use((req,res,next)=>{
    let date = new Date;
    fs.appendFileSync("log.txt",`This is a ${req.method} method on time ${date.toUTCString()}\n`)
    // console.log("This is a middleware 1");
    console.log(`This is a ${req.method} method on time ${Date.now()}`);
    // res.send("Hacked by middleware 1"); =>Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client , for this to work we need to remove next()
    next();
})
// This is middleware 2
app.use((req,res,next)=>{
    console.log(req.headers);
    req.salman="I am Salman"
    
    console.log("This is a middleware 2");
    next();
})

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.get('/about-us',(req,res)=>{
    res.send("Hello World!"+req.salman)
})

app.listen(port,()=>{
    console.log(`Express is listening on port ${port}`)
})