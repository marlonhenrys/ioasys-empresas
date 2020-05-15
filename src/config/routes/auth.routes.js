const { Router } = require('express')
const { AuthController } = require('../../app/controllers')

const routes = Router()

routes.post('/login', AuthController.login)

module.exports = routes
