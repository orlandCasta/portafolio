//------------------------------------------------------------------------------------------------
// [Database configuration]
//------------------------------------------------------------------------------------------------

//const { config } = require('../config/index');
const mongoose = require('mongoose')

const connect = async () => {
  mongoose.connect('mongodb://157.245.241.2/portafolio')

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    console.log('[ Database conecction success ]')
  })
}

module.exports = connect
