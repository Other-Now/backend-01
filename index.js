require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worldly!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello World! -> https://twitter.com/a_compiler')
  })

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})