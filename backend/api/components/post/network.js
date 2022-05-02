/*

In this file is where we put all the routes, here we put the endpoints and information that has to do with the http protocol

  - GET - Collect information from the server.
  - POST - Add information to the server.
  - PUT - Replace information on the server.
  - PATCH - Update part of the information.
  - DELETE - Delete information from the server.
  - OPTIONS - Ask for information about methods (know if we can execute any of the previous methods).

  - CODE INDEX

    1 [POST] ( CREATE ) POST

  - MODULE EXPORTS

*/

const express = require('express')
const response = require('../../../network/response')
const controller = require('../post/controller')
const router = express.Router()

//------------------------------------------------------------------------------------------------
//1 ( CREATE ) LOCAL
//------------------------------------------------------------------------------------------------

router.post('/create', async (req, res) => {
  const { title, post } = req.body
  try {
    const local = await controller.createPost(title, post)
    response.success(req, res, local, 201)
  } catch (error) {
    response.error(req, res, error.message, 400, error)
  }
})

//------------------------------------------------------------------------------------------------
//MODULE EXPORTS
//------------------------------------------------------------------------------------------------

module.exports = router
