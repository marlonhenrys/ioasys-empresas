const { Router } = require('express')
const UserController = require('./app/controllers/UserController')
const AuthController = require('./app/controllers/AuthController')

const routes = Router()

routes.post('/users', UserController.create)
routes.post('/auth', AuthController.authenticate)

module.exports = routes
