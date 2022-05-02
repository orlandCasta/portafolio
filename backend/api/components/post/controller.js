/*

A controller is a function that you write to control data.

With a self-written controller, you can modify the data the way you want,
in this file is all the logic, everything that is modify, change or check, is done in that file.

  - CODE INDEX

    1.1 [POST] ( CREATE ) POST


  - MODULE EXPORTS

*/

const storage = require('../post/store')

//------------------------------------------------------------------------------------------------
//1.1 ( CREATE ) POST
//------------------------------------------------------------------------------------------------

const createPost = async (title, post) => {
  try {
    if (!title || !post) {
      throw new Error('Missing data')
    }
    const postObject = {
      title,
      post
    }
    const newPost = await storage.add(postObject)

    finalResponse = {
      newPost,
      'System message': 'Post successfully created'
    }

    return finalResponse
  } catch (error) {
    throw new Error(error)
  }
}

//------------------------------------------------------------------------------------------------
//MODULE EXPORTS
//------------------------------------------------------------------------------------------------

module.exports = {
  createPost
}
