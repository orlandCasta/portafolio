/*

It is in charge of managing the database, here it is specified, where and when the information is saved

  - CODE INDEX

    1.1.1 [POST] ( CREATE ) POST


  - MODULE EXPORTS

*/

const postModel = require('../../../storage/models/post')

//------------------------------------------------------------------------------------------------
//1.1.1 ( CREATE ) LOCAL
//------------------------------------------------------------------------------------------------

const add = async post => {
  const myPost = new postModel(post)
  try {
    return await myPost.save()
  } catch (error) {
    throw new Error(error)
  }
}

//------------------------------------------------------------------------------------------------
//MODULE EXPORTS
//------------------------------------------------------------------------------------------------

module.exports = {
  add
}
