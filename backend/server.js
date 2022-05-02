const express = require('express')
const cors = require('cors')
const post = require('../backend/api/components/post/network')
const db = require('../backend/storage')
const { config } = require('./config')

var app = express()

//middlewares

// [initializing database]
db('')

// [server configuration]
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// [routes]
app.use('/api/post', post)

// [static files]
app.use('/app', express.static('public'))

// [starting server]

app.listen(config.port, err => {
  if (err) console.error()
  else console.log(`[ Server running on port ${config.port} ]`)
})
