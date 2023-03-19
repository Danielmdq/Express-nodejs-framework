import express from "express";

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Bienvenidos</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})

app.listen(3000)

console.log("servidor en el puerto", 3000)

/* const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
 */
