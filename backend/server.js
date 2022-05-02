const express = require('express')
const router = express.Router()

var app = express()

app.use('/', function (req, res) {
  res.send('Hola')
})

app.listen(3000)
console.log('La aplicacion esta corriendo en el puerto http://localhost:3000/')
