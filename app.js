const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("oky")
})

app.get('/send', (req, res) => {
  res.send("oky")
})

app.listen('3000', (req, res) => {
  console.log(`app listen http://127.0.0.1:3000`)
})