const { Router } = require('express')
const { auth, access } = require('../../app/middlewares')
const { AuthController } = require('../../app/controllers')

const routes = Router()

routes.post('/authenticate', AuthController.authenticate)
routes.post('/register', auth, access, AuthController.register)

module.exports = routes
