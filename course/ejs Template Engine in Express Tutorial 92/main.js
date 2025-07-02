const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let sitename = "Adidas";
  let sreachtext="Sreach now"
  res.render('index',{sitename:sitename,sreachtext:sreachtext})
})

app.get('/blog/:slug', (req, res) => {
  let blogtitle = "Adidas when and why?";
  let blogcontent="Limited edition BUY NOW!"
  res.render('blogpost',{blogtitle:blogtitle,blogcontent:blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})