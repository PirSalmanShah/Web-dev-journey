const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


// app.get get.post app.put or app.delete (path.handler)
app.get('/blog', (req, res) => {
    res.send('<h1>Hello blog!</h1>')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch intro for js from db
    // for URL this http://127.0.0.1:3000/blog/salman?mode=dark&region=pk
    console.log("Slug:", req.params.slug);       // Path variable
    console.log("Query:", req.query);            // Query parameters
    console.log("Headers:", req.headers);        // Request headers
    console.log("URL:", req.url);                // Full URL
    // params come in url as variable
    res.send(`<h1>Hello ${req.params.slug}</h1>`)
})

// app.get('/blog/intro-to-python', (req, res) => {

//     res.send('<h1>Hello intro-to-python!</h1>')
// })

// app.get('/contact', (req, res) => {
//   res.send('<h1>Hello contact!</h1>')
// })

// app.get('/about-us', (req, res) => {
//   res.send('<h1>Hello about us!</h1>')
// })

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world!</h1>')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
