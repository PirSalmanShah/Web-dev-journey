const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000


app.use('/blog', blog)
app.use(express.static("public"))
app.get('/', (req, res) => {
  console.log('This a get resquest');
  
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  console.log('This a post resquest');
  
  res.send('Hello WorldPost!')
})
app.put('/', (req, res) => {
  console.log('This a put resquest');
  
  res.send('Hello WorldPut!')
})
app.delete('/', (req, res) => {
  console.log('This a delete resquest');
  
  res.send('Hello WorldPostdelete!')
})



// we can chain all of them on same endpoint
// app.get('/', (req, res) => {
//   console.log('This a get resquest');
  
//   res.send('Hello World!')
// }).post('/', (req, res) => {
//   console.log('This a post resquest');
  
//   res.send('Hello WorldPost!')
// }).put('/', (req, res) => {
//   console.log('This a put resquest');
  
//   res.send('Hello WorldPut!')
// }).delete('/', (req, res) => {
//   console.log('This a delete resquest');
  
//   res.send('Hello WorldPostdelete!')
// })


app.get('/index', (req, res) => {
  console.log('This a get resquest');
  
  res.sendFile('templates/index.html',{root:__dirname})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
