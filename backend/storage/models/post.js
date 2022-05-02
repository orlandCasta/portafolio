/*
  Post model
*/

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  post: {
    type: String,
    require: true
  }
})

const postModel = mongoose.model('posts', postSchema)

module.exports = postModel
